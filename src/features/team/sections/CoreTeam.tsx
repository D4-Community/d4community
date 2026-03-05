"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users2, ShieldCheck, Linkedin, Github } from "lucide-react";

import { coreTeamData } from "../data/coreTeam";

export const CoreTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          {coreTeamData.map((member, index) => (
            <motion.div
              key={member.name + index}
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
                  src={member.image !== "#" ? member.image : `https://api.dicebear.com/7.x/micah/svg?seed=${member.name}`} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="text-center relative z-10 w-full">
                <p className="text-base font-bold tracking-tight text-foreground group-hover:text-[#6d9eeb] transition-colors line-clamp-1" title={member.name}>{member.name}</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2" title={member.role}>{member.role}</p>
              </div>
              {member.linkedin && (
                <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translation-y-2 group-hover:translate-y-0">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0A66C2]">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
