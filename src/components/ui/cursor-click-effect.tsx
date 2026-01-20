"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: string;
  x: number;
  y: number;
  angle: number;
}

export function CursorClickEffect() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const baseId = Date.now();

      const burst: Spark[] = Array.from({ length: 8 }).map((_, i) => ({
        id: `${baseId}-${i}`,
        x: e.clientX,
        y: e.clientY,
        angle: i * 45,
      }));

      setSparks((prev) => [...prev, ...burst]);

      setTimeout(() => {
        setSparks((prev) =>
          prev.filter((s) => !s.id.startsWith(baseId.toString()))
        );
      }, 450);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ width: 0, opacity: 1 }}
            animate={{
              width: [0, 22, 0],
              opacity: [1, 1, 0],
              x: Math.cos((spark.angle * Math.PI) / 180) * 40,
              y: Math.sin((spark.angle * Math.PI) / 180) * 40,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute h-[3px] rounded-full  bg-[#fc9663]  origin-left"
            style={{
              left: spark.x,
              top: spark.y,
              rotate: `${spark.angle}deg`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
