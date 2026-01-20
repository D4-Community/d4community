"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    // Added responsive padding (px-4) to prevent text touching screen edges on mobile
    <section className="py-8 md:py-16 lg:py-24 w-full px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Responsive text sizing: text-2xl for mobile, text-5xl for large screens */}
        <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl dark:text-white text-black tracking-tight">
          Our Collaborations{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} // Use whileInView for better scroll experience
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h2>
        
        {/* Adjusted max-width and leading for better readability on small screens */}
        <p className="text-base md:text-lg text-neutral-500 max-w-5xl mx-auto py-4 md:py-6 leading-relaxed">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>

      {/* Map Container: 
          1. 'mt-8' adds space between text and map.
          2. 'aspect-[2/1]' or 'min-h' ensures the map doesn't collapse on mobile.
          3. 'max-w-4xl' keeps it centered and readable on desktop.
      */}
      <div className="max-w-7xl mx-auto mt-1 md:mt-2 w-full h-auto min-h-[300px] md:min-h-[500px]">
        <WorldMap
          locations={[
            { lat: 40.7128, lng: -74.006, label: "New York" },
            { lat: 51.5074, lng: -0.1278, label: "London" },
            { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
            { lat: 30.901, lng: 75.8573, label: "Punjab" }, // Fixed Punjab coordinates
            { lat: 12.9716, lng: 77.5946, label: "Bangalore" }, // Fixed Bangalore coordinates
          ]}
        />
      </div>
    </section>
  );
}