"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const technologies = [
  { name: "React Native", category: "Mobile development" },
  { name: "Expo", category: "Mobile tooling" },
  { name: "JavaScript", category: "Web foundation" },
  { name: "TypeScript", category: "Typed systems" },
  { name: "Python", category: "Application logic" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "SQLite", category: "Database" },
  { name: "Docker", category: "Infrastructure" },
  { name: "Git", category: "Version control" },
  { name: "GitHub", category: "Collaboration" },
];

export function TechStack() {
  return (
    <section className="section-shell tech-section" aria-labelledby="tech-title">
      <SectionLabel index="03">Technology stack</SectionLabel>
      <div className="tech-header">
        <h2 id="tech-title">Tools for the<br /><span>next iteration.</span></h2>
        <p>A working toolkit for building products across devices, layers and ideas.</p>
      </div>
      <motion.div className="tech-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.04 } } }}>
        {technologies.map((technology, index) => <motion.span key={technology.name} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}><small>0{(index % 9) + 1}</small><strong>{technology.name}</strong><em>{technology.category}</em></motion.span>)}
      </motion.div>
    </section>
  );
}
