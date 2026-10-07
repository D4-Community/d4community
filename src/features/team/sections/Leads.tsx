"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Star } from "lucide-react";

import { memberImageUrl } from "../lib/queries";
import type { TeamMember } from "../lib/types";

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

export const Leads = ({ leads }: { leads: TeamMember[] }) => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {leads.map((lead, index) => {
            const avatarSrc = memberImageUrl(lead.image, 224, 224)
              ?? `https://api.dicebear.com/7.x/lorelei/svg?seed=${encodeURIComponent(lead.name)}&backgroundColor=transparent`;

            return (
              <motion.div
                key={lead._id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/50 hover:bg-card p-6 transition-all duration-300 hover:border-border/80 hover:shadow-lg flex flex-col items-center text-center gap-5"
              >
                <div
                  className="relative w-28 h-28 rounded-3xl text-[#f6b26b] overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md"
                  style={{ backgroundColor: `#f6b26b15` }}
                >
                  <img
                    src={avatarSrc}
                    alt={lead.name}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-1 group-hover:text-[#f6b26b] transition-colors">
                    {lead.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {lead.designation}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 relative z-10">
                  {isUsableUrl(lead.linkedin) && (
                    <a
                      href={lead.linkedin}
                      className="text-muted-foreground hover:text-[#0077B5] transition-colors"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${lead.name}'s LinkedIn`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/50 border border-border group-hover:border-[#0077B5]/30 group-hover:bg-[#0077B5]/10 transition-all">
                        <Linkedin className="w-5 h-5" />
                      </div>
                    </a>
                  )}
                  {isUsableUrl(lead.medium) && (
                    <a
                      href={lead.medium}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${lead.name}'s Medium profile`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/50 border border-border group-hover:border-foreground/30 group-hover:bg-foreground/10 transition-all">
                        <MediumIcon className="w-4.5 h-4.5" />
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