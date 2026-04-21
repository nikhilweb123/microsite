"use client";

import { motion } from "framer-motion";

const locations = ["Singapore", "USA", "Indonesia", "Australia"];

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 bg-white border-t border-black/5">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <p className="font-sans text-accent text-xs tracking-[0.4em] uppercase mb-4">Educational Reach</p>
                <h2 className="font-sans text-5xl md:text-7xl font-bold uppercase leading-none">
                Workshops
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
                {locations.map((loc, i) => (
                    <motion.div 
                        key={loc}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="p-8 border border-black/10 hover:border-accent transition-colors group cursor-default"
                    >
                        <span className="font-sans text-foreground/20 text-xs uppercase mb-4 block group-hover:text-accent transition-colors">Global Venue</span>
                        <h4 className="font-sans text-foreground text-2xl font-bold uppercase">{loc}</h4>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
