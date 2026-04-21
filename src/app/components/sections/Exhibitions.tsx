"use client";

import { motion } from "framer-motion";

const exhibitions = [
  {
    year: "2024",
    title: "India Art Fair",
    location: "New Delhi, India",
    description: "Showcasing 'Body Terrains', an exploration of the physical landscape through the lens of trauma.",
  },
  {
    year: "2023",
    title: "Body Terrains",
    location: "Singapore",
    description: "A solo exhibition focusing on the visceral memory of skin and bone.",
  },
  {
    year: "2022",
    title: "Sharps and Such",
    location: "Sydney, Australia",
    description: "An installation exploring the delicate balance between fragility and resilience.",
  },
];

export default function Exhibitions() {
  return (
    <section id="exhibitions" className="py-24 bg-background-secondary text-foreground">
      <div className="container-wide">
        <div className="mb-20">
          <p className="font-sans text-accent text-xs tracking-[0.4em] uppercase mb-4">Milestones</p>
          <h2 className="font-sans text-5xl md:text-7xl font-bold uppercase leading-none">
            Exhibitions
          </h2>
        </div>

        <div className="relative border-l border-black/10 ml-4 md:ml-0">
          {exhibitions.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="mb-20 last:mb-0 pl-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] bg-accent rounded-full border-4 border-background-secondary" />
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <span className="font-sans text-4xl font-bold text-foreground/20">{ex.year}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-sans text-2xl md:text-3xl font-bold uppercase mb-2 group-hover:text-accent transition-colors">
                    {ex.title}
                  </h3>
                  <p className="font-sans text-accent text-[10px] tracking-widest uppercase mb-4">{ex.location}</p>
                  <p className="font-sans text-foreground-muted text-lg max-w-2xl leading-relaxed">
                    {ex.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
