"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ALL_PARTNERS = [
  { 
    id: "v0", 
    name: "v0", 
    // FIXED: v0w is black (for light mode), v0 is white (for dark mode)
    logo: "/images/partners/v0.png",     
    darkLogo: "/images/partners/v0w.png", 
    description: "Partner" 
  },
  { 
    id: "n8n", 
    name: "n8n", 
    // n8nw is black (for light mode), n8n is white (for dark mode)
    logo: "/images/partners/n8nw.png",    
    darkLogo: "/images/partners/n8n.png",
    description: "Partner" 
  },
  { id: "appwrite", name: "Appwrite", logo: "/images/partners/appwrite.png", description: "Partner" },
  { id: "GoogleForDevelopers", name: "Google for Developers", logo: "/images/partners/GoogleForDevelopers.png", description: "Partner" },
  { id: "requestly", name: "Requestly", logo: "/images/partners/requestly.png", description: "Partner" },
  { id: "commudle", name: "commudle", logo: "/images/partners/commudle.png", description: "Partner" },
  { id: "osen", name: "OSEN", logo: "/images/partners/osen.png", description: "Partner" },
  { id: "VentureNest", name: "Venture Nest", logo: "/images/partners/VentureNest.png", description: "Partner" },
  { id: "slay", name: "Slay", logo: "/images/partners/Slay.png", description: "Partner" },
];

const logoGroups = [
  ALL_PARTNERS.slice(0, 5),
  ALL_PARTNERS.slice(5, 8),
];

interface PartnersProps {
  className?: string;
}

export function Partners({ className }: PartnersProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logoGroups.length);
    }, 500000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={cn("w-full py-16 md:py-20 bg-white dark:bg-black", className)}>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-4 md:mb-6">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl dark:text-white text-black tracking-tight">
            Our{" "}
            <span className="text-neutral-400">
              {"Partners.".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 max-w-5xl mx-auto py-4 md:py-6 leading-relaxed">
            Trusted by industry leaders and innovators
          </p>
        </div>

        <div className="relative flex justify-center items-center w-full min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20 absolute w-full px-4"
            >
              {logoGroups[index].map((partner, i) => (
                <motion.div
                  key={`${partner.id}-${index}`}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center justify-center group w-32 md:w-40"
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
                    {/* Light Mode Logo */}
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className={cn(
                        "object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105",
                        partner.darkLogo && "dark:hidden"
                      )}
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                    
                    {/* Dark Mode Logo */}
                    {partner.darkLogo && (
                      <Image
                        src={partner.darkLogo}
                        alt={`${partner.name} dark logo`}
                        fill
                        className="hidden dark:block object-contain grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 64px, 80px"
                      />
                    )}
                  </div>
                  
                  <div className="text-center w-full">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white truncate">
                      {partner.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}