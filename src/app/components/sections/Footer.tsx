"use client";

import { motion } from "framer-motion";
import { useInView } from "../../hooks/useInView";

const social = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
];

const navCols = [
  {
    heading: "Studio",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Journal", href: "#" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Architecture", href: "/services" },
      { label: "Interiors", href: "/services" },
      { label: "Masterplanning", href: "/services" },
      { label: "Consultancy", href: "/services" },
    ],
  },
];

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <footer id="contact" ref={ref} className="bg-white py-24 border-t border-black/10">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-sans text-accent text-xs tracking-[0.4em] uppercase mb-8"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-sans text-foreground text-5xl md:text-7xl font-bold uppercase leading-none mb-12"
            >
              Start a <br /> Conversation.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <a href="mailto:hello@sunainabhalla.com" className="block font-sans text-foreground text-xl md:text-3xl hover:text-accent transition-colors underline underline-offset-8">
                hello@sunainabhalla.com
              </a>
              <p className="font-sans text-foreground-muted text-sm tracking-widest uppercase mt-8">Singapore / Global</p>
            </motion.div>
          </div>

          {/* Minimal Form / Info */}
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-12 border-t border-black/10 pt-12">
              <div>
                <p className="font-sans text-foreground/40 text-[10px] tracking-widest uppercase mb-6">Social</p>
                <ul className="space-y-4">
                  {social.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="font-sans text-foreground/60 hover:text-foreground transition-colors text-sm uppercase tracking-widest">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-foreground/40 text-[10px] tracking-widest uppercase mb-6">Inquiries</p>
                <p className="font-sans text-foreground/60 text-sm leading-relaxed max-w-[200px]">
                  For exhibition inquiries, workshops, or collaborations, please reach out via email.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-40 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-foreground/20 text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Sunaina Bhalla. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <button className="font-sans text-foreground/20 text-[10px] tracking-[0.2em] uppercase hover:text-foreground transition-colors">Privacy Policy</button>
            <button className="font-sans text-foreground/20 text-[10px] tracking-[0.2em] uppercase hover:text-foreground transition-colors">Imprint</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
