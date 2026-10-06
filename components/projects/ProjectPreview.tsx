"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import type { Project } from "@/data/projects";
import { BeautyHairPreview } from "./previews/BeautyHairPreview";
import { LigaMXPreview } from "./previews/LigaMXPreview";
import { SweetBitesPreview } from "./previews/SweetBitesPreview";

export function ProjectPreview({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 70, damping: 22, mass: 0.35 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 70, damping: 22, mass: 0.35 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className={`project-preview project-preview--${project.slug}`} style={{ "--project-accent": project.accent } as CSSProperties} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="project-preview__grid" />
      <div className="project-preview__meta">
        <span>PROJECT PREVIEW</span>
        <span>{project.number} / 03</span>
      </div>
      <motion.div className="project-preview__interactive" style={{ x: pointerX, y: pointerY }}>
        {project.slug === "liga-mx" && <LigaMXPreview />}
        {project.slug === "beauty-hair" && <BeautyHairPreview />}
        {project.slug === "sweet-bites" && <SweetBitesPreview />}
      </motion.div>
      <div className="project-preview__footer">
        <span>AX / {project.year}</span>
        <span className="project-preview__corner" aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
