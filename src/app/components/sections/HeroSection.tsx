"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85",
    title: "A Sleek Vision of\nModern Commerce",
    subtitle: "Golden Square, Manesar",
    location: "Haryana",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=85",
    title: "Merging Modernity with\nCultural Heritage",
    subtitle: "Mall Extension, Amritsar",
    location: "Punjab",
  },
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1920&q=85",
    title: "Industrial Design \nwith Precision",
    subtitle: "Lal Sweets, Greater Noida",
    location: "Uttar Pradesh",
  },
  {
    src: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1920&q=85",
    title: "Strategic Planning for\nSustainable Living",
    subtitle: "Village Wave Group, Bengaluru",
    location: "Karnataka",
  },
];


export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000); // Sync with PageLoader
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: loaded ? 0.6 : 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt="Sunaina Bhalla Portfolio Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: loaded ? "0%" : "100%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sans text-foreground text-5xl md:text-[12vw] font-bold uppercase tracking-tight leading-none"
          >
            Sunaina
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: loaded ? "0%" : "100%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="font-sans text-foreground text-5xl md:text-[12vw] font-bold uppercase tracking-tight leading-none"
          >
            Bhalla
          </motion.h1>
        </div>

       
      </div>

      {/* Scroll Indicator */}
    </section>
  );
}
