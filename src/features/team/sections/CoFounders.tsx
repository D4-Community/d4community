"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Github, Users } from "lucide-react";

import { memberImageUrl } from "../lib/queries";
import type { TeamMember } from "../lib/types";

// A link field is treated as "missing" when it's undefined/empty or just a "#"
// placeholder (matches the convention from the previous data files).
const isUsableUrl = (url?: string): url is string =>
  Boolean(url && url !== "#" && url !== "/");

export const CoFounders = ({ organizers }: { organizers: TeamMember[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // First 2 → "Top Row" 2-col grid. The rest → stacked full-width cards.
  const topRow = organizers.slice(0, 2);
  const bottomRow = organizers.slice(2);

  if (organizers.length === 0) {
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

        <div className="flex flex-col gap-8 lg:gap-12 w-full">
          {/* Top Row: up to 2 founders in a 2-col grid */}
          {topRow.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
              {topRow.map((founder, index) => (
                <motion.div
                  key={founder._id}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group flex flex-col w-full h-full"
                >
                  {/* Outer sharp accent border */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-white/10 via-border/50 to-white/10 group-hover:from-primary group-hover:to-primary/30 transition-colors duration-500"
                    style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))" }}
                  />

                  {/* Inner main card */}
                  <div
                    className="relative m-[1px] h-full bg-background/95 backdrop-blur-2xl flex flex-col gap-0"
                    style={{ clipPath: "polygon(0 0, calc(100% - 39px) 0, 100% 39px, 100% 100%, 39px 100%, 0 calc(100% - 39px))" }}
                  >
                    {/* Image Box - Filling the top area completely */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/20 group-hover:opacity-90 transition-opacity duration-300">
                      {(() => {
                        const src = memberImageUrl(founder.image, 800);
                        return src ? (
                          <Image
                            src={src}
                            alt={founder.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
                            priority={index === 0}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary to-primary/10" />
                        );
                      })()}
                      {/* Gradient fade to background */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/20 to-transparent z-10" />
                    </div>

                    {/* Content taking the bottom space, overflowing slightly */}
                    <div className="relative z-10 flex flex-col flex-grow px-6 md:px-10 pb-8 pt-2 -mt-12">
                      <div className="flex flex-col gap-3">
                        <div
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold self-start uppercase tracking-[0.2em] backdrop-blur-md"
                          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                        >
                          {founder.designation}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                          {isUsableUrl(founder.linkedin) ? (
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-primary decoration-2">
                              {founder.name}
                            </a>
                          ) : (
                            founder.name
                          )}
                        </h3>
                      </div>
                      {founder.description && (
                        <p className="text-muted-foreground leading-relaxed text-base mt-4 mb-8">
                          {founder.description}
                        </p>
                      )}

                      {/* Socials anchored to bottom */}
                      <div className="mt-auto flex gap-3 pt-6 border-t border-white/10">
                        {isUsableUrl(founder.linkedin) && (
                          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="relative p-2.5 bg-secondary/50 hover:bg-primary text-foreground transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}>
                            <Linkedin className="w-5 h-5 relative z-10" />
                          </a>
                        )}
                        {isUsableUrl(founder.twitter) && (
                          <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="relative p-2.5 bg-secondary/50 hover:bg-primary text-foreground transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}>
                            <Twitter className="w-5 h-5 relative z-10" />
                          </a>
                        )}
                        {isUsableUrl(founder.github) && (
                          <a href={founder.github} target="_blank" rel="noopener noreferrer" className="relative p-2.5 bg-secondary/50 hover:bg-primary text-foreground transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}>
                            <Github className="w-5 h-5 relative z-10" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom Row: remaining organizers in full-width horizontal cards */}
          {bottomRow.map((organizer) => (
            <motion.div
              key={organizer._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group flex flex-col w-full mt-4"
            >
              {/* Glow shadow to emphasize the wide panel */}
              <div className="absolute inset-0 bg-[#6d9eeb]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Outer sharp accent border */}
              <div
                className="absolute inset-0 bg-linear-to-br from-white/10 via-border/50 to-white/10 group-hover:from-[#6d9eeb]/80 group-hover:to-[#6d9eeb]/20 transition-colors duration-500"
                style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))" }}
              />

              {/* Inner main card */}
              <div
                className="relative m-[1px] bg-background/95 backdrop-blur-2xl flex flex-col md:flex-row gap-0"
                style={{ clipPath: "polygon(0 0, calc(100% - 39px) 0, 100% 39px, 100% 100%, 39px 100%, 0 calc(100% - 39px))" }}
              >
                {/* Horizontal Image Section */}
                <div className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto md:min-h-[350px] overflow-hidden bg-secondary/10 border-r border-white/5">
                  {(() => {
                    const src = memberImageUrl(organizer.image, 640);
                    return src ? (
                      <Image
                        src={src}
                        alt={organizer.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-center transition-all duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-br from-[#6d9eeb]/20 via-secondary to-[#6d9eeb]/10" />
                    );
                  })()}
                  <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-background/95 via-background/40 md:via-background/20 to-transparent z-10" />
                </div>

                {/* Horizontal Content Section */}
                <div className="relative z-10 w-full md:w-[60%] px-6 md:px-12 py-8 md:py-10 flex flex-col justify-center gap-5 -mt-16 md:mt-0">
                  <div className="flex flex-col gap-3">
                    <div
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#6d9eeb]/10 border border-[#6d9eeb]/30 text-[#6d9eeb] text-xs font-bold self-start uppercase tracking-[0.2em] backdrop-blur-md"
                      style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                    >
                      {organizer.designation}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-foreground group-hover:text-[#6d9eeb] transition-colors duration-300 tracking-tight">
                      {isUsableUrl(organizer.linkedin) ? (
                        <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-[#6d9eeb] decoration-2">
                          {organizer.name}
                        </a>
                      ) : (
                        organizer.name
                      )}
                    </h3>
                  </div>
                  {organizer.description && (
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
                      {organizer.description}
                    </p>
                  )}

                  {/* Socials horizontal card */}
                  <div className="flex gap-3 pt-6 md:pt-4 md:mt-auto border-t border-white/10">
                    {isUsableUrl(organizer.linkedin) && (
                      <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" className="relative p-2.5 bg-secondary/50 hover:bg-[#6d9eeb] hover:text-black text-foreground transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}>
                        <Linkedin className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                    {isUsableUrl(organizer.twitter) && (
                      <a href={organizer.twitter} target="_blank" rel="noopener noreferrer" className="relative p-2.5 bg-secondary/50 hover:bg-[#6d9eeb] hover:text-black text-foreground transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}>
                        <Twitter className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                    {isUsableUrl(organizer.github) && (
                      <a href={organizer.github} target="_blank" rel="noopener noreferrer" className="relative p-2.5 bg-secondary/50 hover:bg-[#6d9eeb] hover:text-black text-foreground transition-all duration-300" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)" }}>
                        <Github className="w-5 h-5 relative z-10" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};