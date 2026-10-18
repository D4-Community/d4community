"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star, Linkedin } from "lucide-react";

import { memberImageUrl } from "../lib/queries";
import type { TeamMember } from "../lib/types";
import { useTeamModal } from "../components/TeamModalContext";

const isUsableUrl = (url?: string): url is string =>
  Boolean(url && url !== "#" && url !== "/");

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const Leads = ({ leads }: { leads: TeamMember[] }) => {
  const { openModal } = useTeamModal();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (leads.length === 0) return null;

  return (
    <section
      className="relative w-full py-24 bg-secondary/5 overflow-hidden border-y border-border/50"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-[10px] font-mono tracking-widest text-[#f6b26b] uppercase">
            <Star className="w-3 h-3" />
            <span>Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-[#f6b26b]">Leads</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Driving initiatives and bridging the gap across various campus
            chapters to make D4 an inclusive reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5">
          {leads.map((lead, index) => {
            const avatarSrc =
              memberImageUrl(lead.image, 240, 240) ??
              `https://api.dicebear.com/7.x/lorelei/svg?seed=${encodeURIComponent(
                lead.name
              )}&backgroundColor=transparent`;
            const leadSlug = slugify(lead.name);

            return (
              <motion.div
                key={lead._id}
                id={leadSlug}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[1/1.12] overflow-hidden rounded-2xl border border-white/10 bg-card/40 hover:bg-card/90 p-4 sm:p-5 transition-all duration-300 hover:border-[#f6b26b]/40 hover:shadow-lg flex flex-col items-center justify-center text-center cursor-pointer scroll-mt-24 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#f6b26b]"
                role="button"
                tabIndex={0}
                onClick={() => openModal(lead)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(lead);
                  }
                }}
                aria-label={`View ${lead.name}'s profile`}
              >
                <div
                  className="relative w-[54%] max-w-[120px] aspect-square rounded-2xl text-[#f6b26b] overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm mb-3 border border-[#f6b26b]/20"
                  style={{ backgroundColor: `#f6b26b15` }}
                >
                  <Image
                    src={avatarSrc}
                    alt={lead.name}
                    width={120}
                    height={120}
                    unoptimized={avatarSrc.includes("dicebear.com") || avatarSrc.endsWith(".svg")}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full px-1 relative z-10">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight text-foreground line-clamp-1 group-hover:text-[#f6b26b] transition-colors">
                    {lead.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-medium text-muted-foreground line-clamp-1 mt-0.5">
                    {lead.designation}
                  </p>
                </div>
                {isUsableUrl(lead.linkedin) && (
                  <div className="mt-2.5 relative z-20">
                    <a
                      href={lead.linkedin}
                      className="text-muted-foreground hover:text-[#0077B5] transition-colors inline-block"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${lead.name}'s LinkedIn`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/50 border border-border group-hover:border-[#0077B5]/30 group-hover:bg-[#0077B5]/10 transition-all">
                        <Linkedin className="w-4 h-4" />
                      </div>
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};