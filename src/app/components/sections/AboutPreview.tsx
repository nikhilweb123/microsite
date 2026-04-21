"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "../../hooks/useInView";

const philosophy = [
  {
    num: "01",
    title: "Approach",
    body: "Every project is guided by a deep understanding of client aspirations, ensuring designs that are both functional and meaningful.",
  },
  {
    num: "02",
    title: "Design",
    body: "We focus on creating residential, commercial, and public spaces that balance modern aesthetics with practical efficiency.",
  },
  {
    num: "03",
    title: "Execution",
    body: "From concept to completion, we deliver cohesive architectural solutions that enhance user experience and create lasting value.",
  },
];

export default function AboutPreview() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-full bg-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left: Slow-moving Image */}
        <div className="relative overflow-hidden h-[50vh] md:h-auto">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={inView ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/about.png"
              alt="Artistic Texture"
              fill
              className="object-cover opacity-60"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
        </div>

        {/* Right: Text */}
        <div
          ref={ref}
          className="flex flex-col justify-center px-8 md:px-20 py-20 md:py-0"
        >
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="font-sans text-foreground-muted text-[10px] tracking-[0.3em] uppercase mb-12"
          >
            The Artist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="font-sans text-foreground text-3xl md:text-5xl font-bold uppercase mb-12 leading-tight">
              About <br /> <span className="text-accent">Sunaina Bhalla</span>
            </h2>

            <div className="space-y-6 font-sans text-foreground-secondary text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Sunaina is a contemporary artist of Indian origin based in Singapore. Trained as a textile designer in India, she later studied the traditional Japanese art of Nihonga under Suiko Ohta-sensei in Tokyo, before completing her MFA at Goldsmiths, University of London and LASALLE College of the Arts.
              </p>
              <p>
                Her practice explores ritual, repetition, and the body's relationship to pain and healing—often using industrial materials, textiles, and embroidery to reflect fragility and transformation over time. Currently, she is researching traditional healing practices in Southeast Asia and their use in chronic conditions like diabetes and breast cancer.
              </p>
              <p className="text-foreground-muted text-sm">
                She has exhibited internationally in Japan, India, Singapore, Europe, and the Middle East. Her works are held in the permanent collections of the ESSL Museum in Vienna, Mumbai Airports Authority, and private collectors worldwide.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16"
            >
              <a href="#practice" className="nav-link font-sans text-foreground text-xs tracking-widest uppercase py-2">
                Explore the Practice
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
