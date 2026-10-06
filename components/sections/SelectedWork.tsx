"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export function SelectedWork() {
  return (
    <section className="section-shell work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <SectionLabel index="01">Selected work</SectionLabel>
        <motion.h2 id="work-title" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projects with room to grow.</motion.h2>
        <span className="section-count">01 — 03</span>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => <ProjectShowcase key={project.id} project={project} reversed={index % 2 === 1} />)}
      </div>
    </section>
  );
}

