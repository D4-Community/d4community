"use client";

import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
  ThemeToggle,
} from "../ui/navbar";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Team", link: "#team" },
    { name: "About", link: "#about" },
    { name: "Events", link: "#events" },
  ];

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavbarButton variant="secondary">Contact</NavbarButton>
          <NavbarButton variant="primary">Join Now</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-neutral-100 pt-6 dark:border-neutral-800">
            <NavbarButton className="w-full text-center" variant="primary">
              Join Now
            </NavbarButton>
            <NavbarButton className="w-full text-center" variant="secondary">
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;