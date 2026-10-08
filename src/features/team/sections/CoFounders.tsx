"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Github, Users, Globe } from "lucide-react";

import { memberImageUrl } from "../lib/queries";
import type { TeamMember } from "../lib/types";

// A link field is treated as "missing" when it's undefined/empty or just a "#"
// placeholder (matches the convention from the previous data files).
const isUsableUrl = (url?: string): url is string =>
  Boolean(url && url !== "#" && url !== "/");

const MediumIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 640 512"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
  </svg>
);

/**
 * Returns the portfolio / personal website URL for a founder or organizer.
 * Fetched dynamically from Sanity CMS (portfolio / website field),
 * with fallback for Ayush's personal site.
 */
const getPortfolioUrl = (founder: TeamMember): string | undefined => {
  if (founder.portfolio && isUsableUrl(founder.portfolio)) return founder.portfolio;
  if (founder.website && isUsableUrl(founder.website)) return founder.website;
  if (founder.name?.toLowerCase().includes("ayush")) {
    return "https://itsayu.d4community.com/";
  }
  return undefined;
};

export const CoFounders = ({
  organizers,
  coOrganizers = [],
}: {
  organizers: TeamMember[];
  coOrganizers?: TeamMember[];
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Separate Organizers and Co-Organizers:
  const isCoOrganizer = (m: TeamMember) => {
    if (m.group === "co-organizer") return true;
    const d = (m.designation || "").toLowerCase();
    const n = (m.name || "").toLowerCase();
    return d.includes("co-organizer") || d.includes("co organizer") || n.includes("qazi zaid");
  };

  const primaryOrganizers = organizers.filter((m) => !isCoOrganizer(m));
  const detectedCoOrganizers = organizers.filter((m) => isCoOrganizer(m));

  // Merge coOrganizers prop with any detected co-organizers from organizers array, deduplicated
  const allCoOrganizers = Array.from(
    new Map(
      [...coOrganizers, ...detectedCoOrganizers].map((m) => [m._id, m])
    ).values()
  );

  // Unified list: Organizers first, followed by Co-Organizers
  const allLeadership = Array.from(
    new Map(
      [...primaryOrganizers, ...allCoOrganizers].map((m) => [m._id, m])
    ).values()
  );

  if (allLeadership.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
            <Users className="w-3 h-3" />
            <span>Organizers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Meet the <span className="text-primary">Organizers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The visionaries and organizers behind D4, dedicated to building a vibrant,
            collaborative community.
          </p>
        </motion.div>

        {/* Unified Responsive Grid for Organizers & Co-Organizers - Perfectly Leveled */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full items-stretch">
          {allLeadership.map((member, index) => {
            const isCo = isCoOrganizer(member);
            const accentBorder = isCo
              ? "group-hover:from-[#6d9eeb] group-hover:to-[#6d9eeb]/30"
              : "group-hover:from-primary group-hover:to-primary/30";
            const badgeBg = isCo
              ? "bg-[#6d9eeb]/10 border-[#6d9eeb]/30 text-[#6d9eeb]"
              : "bg-primary/10 border-primary/30 text-primary";
            const nameHover = isCo
              ? "group-hover:text-[#6d9eeb] decoration-[#6d9eeb]"
              : "group-hover:text-primary decoration-primary";
            const socialHover = isCo
              ? "hover:bg-[#6d9eeb] hover:text-black"
              : "hover:bg-primary hover:text-black";

            return (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group flex flex-col w-full h-full"
              >
                {/* Outer sharp accent border */}
                <div
                  className={`absolute inset-0 bg-linear-to-br from-white/10 via-border/50 to-white/10 ${accentBorder} transition-colors duration-500`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
                  }}
                />

                {/* Inner main card */}
                <div
                  className="relative m-[1px] h-full bg-background/95 backdrop-blur-2xl flex flex-col gap-0"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 39px) 0, 100% 39px, 100% 100%, 39px 100%, 0 calc(100% - 39px))",
                  }}
                >
                  {/* Image Box */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/20 group-hover:opacity-90 transition-opacity duration-300">
                    {(() => {
                      const src = memberImageUrl(member.image, 800);
                      return src ? (
                        <Image
                          src={src}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
                          priority={index < 3}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary to-primary/10" />
                      );
                    })()}
                    {/* Gradient fade to background */}
                    <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/20 to-transparent z-10" />
                  </div>

                  {/* Content taking full remaining height */}
                  <div className="relative z-10 flex flex-col flex-grow px-6 md:px-8 pb-6 pt-2 -mt-10">
                    <div className="flex flex-col gap-2.5">
                      <div
                        className={`inline-flex items-center gap-1.5 px-4 py-1.5 border text-xs font-bold self-start uppercase tracking-[0.2em] backdrop-blur-md ${badgeBg}`}
                        style={{
                          clipPath:
                            "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                        }}
                      >
                        {member.designation}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-black text-foreground transition-colors duration-300 tracking-tight">
                        {isUsableUrl(member.linkedin) ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hover:underline decoration-2 ${nameHover}`}
                          >
                            {member.name}
                          </a>
                        ) : (
                          member.name
                        )}
                      </h3>
                    </div>

                    {member.description && (
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-[14.5px] mt-3 mb-5">
                        {member.description}
                      </p>
                    )}

                    {/* Socials anchored to bottom so all cards have identical baseline */}
                    <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2.5">
                      {isUsableUrl(member.linkedin) && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative p-2.5 bg-secondary/50 ${socialHover} text-foreground transition-all duration-300`}
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                          }}
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5 relative z-10" />
                        </a>
                      )}
                      {isUsableUrl(member.twitter) && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative p-2.5 bg-secondary/50 ${socialHover} text-foreground transition-all duration-300`}
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                          }}
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="w-5 h-5 relative z-10" />
                        </a>
                      )}
                      {isUsableUrl(member.github) && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative p-2.5 bg-secondary/50 ${socialHover} text-foreground transition-all duration-300`}
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                          }}
                          aria-label={`${member.name}'s GitHub`}
                        >
                          <Github className="w-5 h-5 relative z-10" />
                        </a>
                      )}
                      {isUsableUrl(member.medium) && (
                        <a
                          href={member.medium}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative p-2.5 bg-secondary/50 ${socialHover} text-foreground transition-all duration-300`}
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                          }}
                          aria-label={`${member.name}'s Medium profile`}
                          title="Medium"
                        >
                          <MediumIcon className="w-5 h-5 relative z-10" />
                        </a>
                      )}
                      {getPortfolioUrl(member) && (
                        <a
                          href={getPortfolioUrl(member)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative p-2.5 bg-secondary/50 ${socialHover} text-foreground transition-all duration-300`}
                          style={{
                            clipPath:
                              "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
                          }}
                          aria-label={`${member.name}'s Portfolio`}
                          title="Portfolio"
                        >
                          <Globe className="w-5 h-5 relative z-10" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};