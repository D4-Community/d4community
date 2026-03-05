"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { volunteersData } from "../data/volunteers";

export const Volunteers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const half = Math.ceil(volunteersData.length / 2);
  const row1 = volunteersData.slice(0, half);
  const row2 = volunteersData.slice(half);

  return (
    <section className="relative w-full py-24 overflow-hidden border-t border-border/50 bg-secondary/5" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-[10px] font-mono tracking-widest text-[#5ccb5f] uppercase">
             <HeartHandshake className="w-3 h-3" />
             <span>Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#5ccb5f]">Volunteers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Our incredible volunteers who passionately contribute their time and energy to our cause and events.
          </p>
        </motion.div>
      </div>

      <div className="w-full">
        <InfiniteSlider gap={32} speed={50} showFade={true} fadeWidth="w-32 md:w-64">
          {row1.map((member, index) => (
            <div key={member.name + index} className="flex flex-col items-center gap-3 p-4 group transition-all duration-300 w-32">
              <div className="w-20 h-20 rounded-full bg-secondary overflow-hidden shadow-sm shadow-black/20 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <img 
                  src={`https://api.dicebear.com/7.x/identicon/svg?seed=${member.name}`} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center whitespace-nowrap overflow-hidden text-ellipsis w-full" title={member.name}>{member.name}</p>
            </div>
          ))}
        </InfiniteSlider>

        <InfiniteSlider gap={32} speed={40} direction="right" showFade={true} fadeWidth="w-32 md:w-64" className="mt-4">
          {row2.map((member, index) => (
            <div key={member.name + index + "rev"} className="flex flex-col items-center gap-3 p-4 group transition-all duration-300 w-32">
              <div className="w-20 h-20 rounded-full bg-secondary/80 overflow-hidden shadow-sm shadow-black/20 group-hover:shadow-md transition-all group-hover:-translate-y-1 border border-transparent group-hover:border-[#5ccb5f]/50">
                <img 
                  src={`https://api.dicebear.com/7.x/identicon/svg?seed=${member.name}alt`} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold text-muted-foreground group-hover:text-[#5ccb5f] transition-colors text-center whitespace-nowrap overflow-hidden text-ellipsis w-full" title={member.name}>{member.name}</p>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};
