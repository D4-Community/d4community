"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Linkedin } from "lucide-react";

import { memberImageUrl } from "../lib/queries";
import type { TeamMember } from "../lib/types";

const isUsableUrl = (url?: string): url is string =>
  Boolean(url && url !== "#" && url !== "/");

const MediumIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 640 512"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" />
  </svg>
);

export const CoreTeam = ({ core }: { core: TeamMember[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (core.length === 0) return null;

  return (
    <section className="relative w-full py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-[10px] font-mono tracking-widest text-[#6d9eeb] uppercase">
             <ShieldCheck className="w-3 h-3" />
             <span>Execution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our <span className="text-[#6d9eeb]">Core Team</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The backbone of our community, working tirelessly behind the scenes to deliver exceptional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {core.map((member, index) => {
            const avatarSrc = memberImageUrl(member.image, 192, 192)
              ?? `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(member.name)}`;

            return (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col items-center gap-4 p-5 rounded-2xl border border-white/10 bg-card/50 hover:bg-card transition-all duration-300 hover:border-border/80 hover:shadow-lg cursor-pointer overflow-hidden"
              >
                {/* Top Border Accent */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#6d9eeb]"
                />

                <div className="relative w-24 h-24 rounded-2xl text-[#6d9eeb] overflow-hidden shadow-sm flex items-center justify-center p-1 transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: `#6d9eeb15` }}>
                  <img
                    src={avatarSrc}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-center relative z-10 w-full">
                  <p className="text-base font-bold tracking-tight text-foreground group-hover:text-[#6d9eeb] transition-colors line-clamp-1" title={member.name}>{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2" title={member.designation}>{member.designation}</p>
                </div>
                <div className="mt-auto pt-2 flex items-center justify-center gap-2 relative z-10">
                  {isUsableUrl(member.linkedin) && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-[#0077B5] transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-secondary/50 border border-border group-hover:border-[#0077B5]/30 group-hover:bg-[#0077B5]/10 transition-all">
                        <Linkedin className="w-4.5 h-4.5" />
                      </div>
                    </a>
                  )}
                  {isUsableUrl(member.medium) && (
                    <a
                      href={member.medium}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${member.name}'s Medium profile`}
                    >
                      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-secondary/50 border border-border group-hover:border-foreground/30 group-hover:bg-foreground/10 transition-all">
                        <MediumIcon className="w-4 h-4" />
                      </div>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};