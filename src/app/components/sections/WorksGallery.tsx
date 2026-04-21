"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const works = [
  {
    id: 1,
    title: "Gallery Piece I",
    category: "Contemporary",
    src: "/images/gallery-1.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Gallery Piece II",
    category: "Modern",
    src: "/images/gallery-2.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Gallery Piece III",
    category: "Abstract",
    src: "/images/gallery-3.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Gallery Piece IV",
    category: "Mixed Media",
    src: "/images/gallery-4.jpg",
    size: "medium",
  },
  {
    id: 6,
    title: "Gallery Piece VI",
    category: "Textile",
    src: "/images/gallery-6.jpg",
    size: "small",
  },
];

export default function WorksGallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 md:px-8" style={{ backgroundColor: '#DD918F' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="font-sans text-accent text-xs tracking-[0.4em] uppercase mb-4">Selected Works</p>
            <h2 className="font-sans text-foreground text-5xl md:text-7xl font-bold uppercase leading-none">
              Gallery
            </h2>
          </div>
          <div className="flex gap-8 font-sans text-[10px] tracking-widest uppercase text-foreground-muted">
            {["Mixed Media", "Textile", "Installation"].map((cat) => (
              <button key={cat} className="hover:text-foreground transition-colors">{cat}</button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {works.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden break-inside-avoid"
              onMouseEnter={() => setHovered(work.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-accent text-[10px] tracking-widest uppercase mb-2">{work.category}</p>
                  <h3 className="text-foreground text-2xl font-bold uppercase">{work.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="nav-link font-sans text-foreground text-xs tracking-widest uppercase py-4">
            View All Archives
          </button>
        </div>
      </div>
    </section>
  );
}
