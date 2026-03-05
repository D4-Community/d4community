"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users2 } from "lucide-react";
import AnimatedContainer from "@/components/ui/animated-container";

export const TeamHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center text-center px-4 z-10">
         {/* Background Grid */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-0"
        style={{ 
           backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
           backgroundSize: '32px 32px' 
        }} 
      />
      <AnimatedContainer 
        className="flex flex-col items-center max-w-4xl mx-auto space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono tracking-widest text-primary uppercase shadow-sm">
           <Users2 className="w-3.5 h-3.5" />
           <span>D4 Force</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
          The Minds Behind <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500">
            Our Community
          </span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
          Meet the passionate developers, designers, and visionaries driving D4. 
          We're a collective of builders working relentlessly to push boundaries and foster growth.
        </p>
      </AnimatedContainer>
    </section>
  );
};