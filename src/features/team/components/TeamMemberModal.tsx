"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Globe,
  Copy,
  Check,
  ExternalLink,
  Users,
  Star,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import { useTeamModal } from "./TeamModalContext";
import { memberImageUrl } from "../lib/queries";
import type { TeamMember } from "../lib/types";

const isUsableUrl = (url?: string): url is string =>
  Boolean(url && url !== "#" && url !== "/" && url.trim().length > 0);

const MediumIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 640 512"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
  </svg>
);

const getGroupTheme = (member: TeamMember) => {
  const group = (member.group || "").toLowerCase();
  const designation = (member.designation || "").toLowerCase();

  if (
    group === "co-organizer" ||
    group === "coorganizer" ||
    designation.includes("co-organizer") ||
    designation.includes("co organizer")
  ) {
    return {
      name: "Co-Organizer",
      badgeColor: "text-[#6d9eeb] bg-[#6d9eeb]/10 border-[#6d9eeb]/30",
      icon: Users,
    };
  }

  if (group === "organizer") {
    return {
      name: "Organizer",
      badgeColor: "text-foreground bg-secondary/80 border-border",
      icon: Users,
    };
  }

  if (group === "leads" || group === "lead") {
    return {
      name: "Lead",
      badgeColor: "text-[#f6b26b] bg-[#f6b26b]/10 border-[#f6b26b]/30",
      icon: Star,
    };
  }

  if (group === "volunteer" || group === "volunteers") {
    return {
      name: "Volunteer",
      badgeColor: "text-[#5ccb5f] bg-[#5ccb5f]/10 border-[#5ccb5f]/30",
      icon: HeartHandshake,
    };
  }

  // Default to Core Team
  return {
    name: "Core Team",
    badgeColor: "text-[#6d9eeb] bg-[#6d9eeb]/10 border-[#6d9eeb]/30",
    icon: ShieldCheck,
  };
};

export const TeamMemberModal = () => {
  const { selectedMember, closeModal } = useTeamModal();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  // Focus management
  useEffect(() => {
    if (!selectedMember) {
      setCopiedEmail(false);
      return;
    }

    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 30);

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleTabKey);
    };
  }, [selectedMember]);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const theme = useMemo(() => {
    if (!selectedMember) return null;
    return getGroupTheme(selectedMember);
  }, [selectedMember]);

  const avatarSrc = useMemo(() => {
    if (!selectedMember) return "";
    return (
      memberImageUrl(selectedMember.image, 600, 600) ??
      `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(
        selectedMember.name
      )}&backgroundColor=transparent`
    );
  }, [selectedMember]);

  const isDicebear = avatarSrc.includes("dicebear.com") || avatarSrc.endsWith(".svg");

  const socialProfiles = useMemo(() => {
    if (!selectedMember) return [];
    return [
      {
        key: "linkedin",
        label: "LinkedIn",
        url: selectedMember.linkedin,
        icon: Linkedin,
      },
      {
        key: "github",
        label: "GitHub",
        url: selectedMember.github,
        icon: Github,
      },
      {
        key: "instagram",
        label: "Instagram",
        url: selectedMember.instagram,
        icon: Instagram,
      },
      {
        key: "twitter",
        label: "Twitter / X",
        url: selectedMember.twitter,
        icon: Twitter,
      },
      {
        key: "medium",
        label: "Medium",
        url: selectedMember.medium,
        icon: MediumIcon,
      },
      {
        key: "portfolio",
        label: "Portfolio / Web",
        url: selectedMember.portfolio || selectedMember.website,
        icon: Globe,
      },
    ].filter((item) => isUsableUrl(item.url));
  }, [selectedMember]);

  const hasEmail = Boolean(
    selectedMember?.email && selectedMember.email.includes("@")
  );

  return (
    <AnimatePresence>
      {selectedMember && theme && (
        <motion.div
          key="team-modal-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/85"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={selectedMember.description ? descId : undefined}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          style={{ willChange: "opacity" }}
        >
          {/* Modal Container: website exact black background with zero blue hue */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg md:max-w-xl my-auto overflow-hidden rounded-3xl border border-border/80 bg-background text-foreground shadow-2xl z-10 focus:outline-none"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Decorative Header Strip with Grid Pattern */}
            <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-secondary/30 border-b border-border/70">
              {/* Static subtle dot pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* D4 Community Badge */}
              <div className="absolute top-4 left-5 flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/80 text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground z-10 shadow-xs">
                <Image
                  src="/d4logo.webp"
                  alt="D4"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 object-contain"
                />
                <span>D4 Community</span>
              </div>

              {/* Close Button */}
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeModal}
                className="absolute top-3.5 right-4 z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary/80 hover:bg-secondary border border-border text-muted-foreground hover:text-foreground transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Close profile modal"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative px-6 sm:px-8 pb-7 pt-0">
              {/* Profile Avatar & Primary Info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 -mt-14 sm:-mt-16 mb-6">
                {/* Avatar Photo */}
                <div
                  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-border shadow-2xl shrink-0 bg-secondary/40"
                >
                  <Image
                    src={avatarSrc}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top"
                    priority
                    unoptimized={isDicebear}
                  />
                </div>

                {/* Name & Role */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-grow min-w-0">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2 font-mono ${theme.badgeColor}`}
                  >
                    <theme.icon className="w-3 h-3" />
                    <span>{theme.name}</span>
                  </div>

                  <h2
                    id={titleId}
                    className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-tight"
                  >
                    {selectedMember.name}
                  </h2>

                  <p className="text-sm sm:text-base font-medium text-muted-foreground mt-1">
                    {selectedMember.designation}
                  </p>
                </div>
              </div>

              {/* Short Bio (Hidden if empty) */}
              {selectedMember.description && (
                <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-secondary/30 border border-border/70">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    About
                  </div>
                  <p
                    id={descId}
                    className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line"
                  >
                    {selectedMember.description}
                  </p>
                </div>
              )}

              {/* Email Contact (Hidden if empty) */}
              {hasEmail && (
                <div className="mb-5 p-3.5 sm:p-4 rounded-2xl bg-secondary/30 border border-border/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-border bg-secondary/50 text-foreground"
                    >
                      <Mail className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="text-sm font-semibold text-foreground hover:underline truncate"
                        title={selectedMember.email}
                      >
                        {selectedMember.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyEmail(selectedMember.email as string)
                      }
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-xs font-medium text-foreground transition-colors cursor-pointer"
                      aria-label="Copy email address"
                      title="Copy email"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500" />
                          <span className="text-green-500 font-semibold">
                            Copied
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Mail</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Social Links (Hidden if none) */}
              {socialProfiles.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Connect & Socials
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {socialProfiles.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.key}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/social flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-secondary/30 border border-border/80 hover:border-border hover:bg-secondary/70 transition-colors duration-150 text-foreground"
                          aria-label={`${selectedMember.name}'s ${social.label}`}
                        >
                          <IconComponent className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover/social:scale-110" />
                          <span className="text-xs font-medium truncate">
                            {social.label}
                          </span>
                          <ExternalLink className="w-3 h-3 ml-auto opacity-40 group-hover/social:opacity-100 transition-opacity" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
