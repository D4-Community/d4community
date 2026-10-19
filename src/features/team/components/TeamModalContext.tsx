"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { TeamMember } from "../lib/types";

interface TeamModalContextType {
  selectedMember: TeamMember | null;
  openModal: (member: TeamMember) => void;
  closeModal: () => void;
}

const TeamModalContext = createContext<TeamModalContextType | undefined>(
  undefined
);

export const TeamModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const openModal = useCallback((member: TeamMember) => {
    lastActiveElementRef.current = document.activeElement as HTMLElement | null;
    setSelectedMember(member);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedMember(null);
    if (lastActiveElementRef.current) {
      lastActiveElementRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (!selectedMember) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // Compensate for scrollbar width to avoid layout reflows on Windows
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember, closeModal]);

  return (
    <TeamModalContext.Provider
      value={{ selectedMember, openModal, closeModal }}
    >
      {children}
    </TeamModalContext.Provider>
  );
};

export const useTeamModal = () => {
  const context = useContext(TeamModalContext);
  if (!context) {
    throw new Error("useTeamModal must be used within a TeamModalProvider");
  }
  return context;
};
