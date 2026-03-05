"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Star } from "lucide-react";

const leads = [
  { name: "Devansh Srivastava", role: "Operations Lead", linkedin: "#" },
  { name: "Bhumika Varshney", role: "Campus Lead - CGCU", linkedin: "#" },
  { name: "Dhairya Ahuja", role: "Co-Campus Lead - CGCU", linkedin: "#" },
  { name: "Pawan Kumar", role: "Campus Lead - CU", linkedin: "#" },
  { name: "Vishesh Aggarwal", role: "Co-Campus Lead - CU", linkedin: "#" },
  { name: "Gagandeep Singh", role: "Campus Lead - LPU", linkedin: "#" },
  { name: "Subham kumar", role: "Co-Campus Lead - LPU", linkedin: "#" },
  { name: "Alok Skj", role: "Technical Lead", linkedin: "#" },
];

export const Leads = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          {leads.map((lead, index) => (
            <motion.div
              key={lead.name}
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
                  src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${lead.name}&backgroundColor=transparent`}
                  alt={lead.name}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-1 group-hover:text-[#f6b26b] transition-colors">
                  {lead.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {lead.role}
                </p>
              </div>
              <a
                href={lead.linkedin}
                className="mt-2 text-muted-foreground hover:text-[#0077B5] transition-colors relative z-10"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/50 border border-border group-hover:border-[#0077B5]/30 group-hover:bg-[#0077B5]/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
