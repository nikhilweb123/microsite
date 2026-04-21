"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const materials = [
  { name: "Gauze", description: "Symbolizing fragility and the physical interface of healing." },
  { name: "Blood test strips", description: "Mapping the biological record of illness and recovery." },
  { name: "Embroidery", description: "The repetitive act of stitching as a meditative ritual." },
];

export default function MaterialProcess() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="relative aspect-square overflow-hidden"
            >
                <Image 
                    src="/images/material.png" 
                    alt="Process Textures"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 -z-10 blur-3xl" />
          </div>

          <div>
            <p className="font-sans text-accent text-xs tracking-[0.4em] uppercase mb-4">The Making</p>
            <h2 className="font-sans text-5xl md:text-7xl font-bold uppercase leading-none mb-12">
              Material & <br /> <span className="text-foreground/40">Process</span>
            </h2>

            <div className="space-y-12">
                {materials.map((m, i) => (
                    <motion.div 
                        key={m.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="group"
                    >
                        <h4 className="font-sans text-foreground text-xl font-bold uppercase mb-2 group-hover:text-accent transition-colors">
                            {m.name}
                        </h4>
                        <p className="font-sans text-foreground-muted text-lg max-w-md leading-relaxed">
                            {m.description}
                        </p>
                        <div className="mt-4 w-0 h-px bg-accent group-hover:w-full transition-all duration-700" />
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
