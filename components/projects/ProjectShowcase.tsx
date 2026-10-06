"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectShowcase({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  return (
    <motion.article
      className={`project-showcase ${reversed ? "project-showcase--reversed" : ""}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-info">
        <div className="project-info__topline">
          <span className="project-number">{project.number}</span>
          <span className={`status-dot ${project.status === "In Development" ? "status-dot--active" : ""}`}>
            {project.status}
          </span>
        </div>

        <div>
          <p className="eyebrow">{project.category} / {project.year}</p>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-info__bottom">
          <div className="tech-list" aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="project-actions">
            <Link href={`/projects/${project.slug}`} className="text-action">
              View Case Study <ArrowUpRight size={16} strokeWidth={1.4} />
            </Link>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-action project-external-action">
                GitHub <ArrowUpRight size={15} strokeWidth={1.4} />
              </a>
            ) : (
              <span className="muted-action">GitHub — Coming Soon</span>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-action project-external-action">
                Live Site <ArrowUpRight size={15} strokeWidth={1.4} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-visual-wrap">
        <ProjectPreview project={project} />
      </div>
    </motion.article>
  );
}

