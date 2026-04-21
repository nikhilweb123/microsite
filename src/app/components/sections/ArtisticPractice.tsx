"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: "01",
    title: "Trauma & Healing",
    description: "The body as a vessel for historical and personal memory.",
    color: "bg-white",
  },
  {
    id: "02",
    title: "Repetition & Ritual",
    description: "Finding form through repetitive gestures and meditative processes.",
    color: "bg-background-secondary",
  },
  {
    id: "03",
    title: "Passage of Time",
    description: "Observing the fragile relationship between duration and decay.",
    color: "bg-background-tertiary",
  },
  {
    id: "04",
    title: "Material as Memory",
    description: "Mixed media that breathes life into the silence of trauma.",
    color: "bg-white",
  },
];

export default function ArtisticPractice() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: any;
    let ScrollTrigger: any;

    const init = async () => {
      const g = await import("gsap");
      const st = await import("gsap/ScrollTrigger");
      gsap = g.gsap;
      ScrollTrigger = st.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const section = containerRef.current;
      const horizontal = horizontalRef.current;

      if (!section || !horizontal) return;

      const totalWidth = horizontal.scrollWidth - window.innerWidth;

      gsap.to(horizontal, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${horizontal.scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    };

    init();
  }, []);

  return (
    <section ref={containerRef} id="practice" className="relative overflow-hidden">
      <div ref={horizontalRef} className="flex flex-nowrap h-screen">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-screen h-screen ${slide.color} flex flex-col justify-center px-12 md:px-24`}
          >
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
                className="font-sans text-[15vw] font-bold text-foreground absolute top-10 right-10 pointer-events-none"
              >
                {slide.id}
              </motion.span>

              <div className="relative z-10">
                <p className="font-sans text-accent text-xs tracking-[0.4em] uppercase mb-8">
                  Artistic Practice
                </p>
                <h3 className="font-sans text-foreground text-5xl md:text-[8vw] font-bold uppercase leading-none mb-12">
                  {slide.title}
                </h3>
                <p className="font-sans text-foreground-muted text-lg md:text-2xl max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* Optional: Add a subtle texture or line animation */}
              <div className="mt-20 w-32 h-px bg-foreground/20 origin-left scale-x-0 group-in-view:scale-x-100 transition-transform duration-1000" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
