"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-title">
      <SectionLabel index="02">About</SectionLabel>
      <div className="about-grid">
        <motion.h2 id="about-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Built with intent.<br /><span>Made to work.</span></motion.h2>
        <div className="about-copy">
          <p>I’m a Software Developer focused on building modern web and mobile experiences. I enjoy turning ideas into functional products using technologies such as React Native, TypeScript, Python and modern web tools.</p>
          <div className="about-signature">AX / 2026</div>
        </div>
      </div>
    </section>
  );
}

