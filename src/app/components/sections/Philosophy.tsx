"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-40 bg-white flex items-center justify-center">
      <div className="container-wide text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
        >
          <p className="font-sans text-accent text-[10px] tracking-[0.5em] uppercase mb-16">The Philosophy</p>
          <blockquote className="font-sans text-foreground text-3xl md:text-6xl font-bold uppercase leading-[1.1] tracking-tight">
            "The body is a site of <span className="text-accent">resilience</span>. Through fragile materials and repetitive gestures, I explore trauma, healing, and transformation."
          </blockquote>
          
          <div className="mt-20 flex justify-center gap-4">
            <div className="w-1 h-1 bg-foreground/20 rounded-full" />
            <div className="w-1 h-1 bg-foreground/40 rounded-full" />
            <div className="w-1 h-1 bg-foreground/20 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
