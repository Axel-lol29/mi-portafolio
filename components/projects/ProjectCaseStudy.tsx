"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BeautyHairCaseStudy } from "./BeautyHairCaseStudy";
import { LigaMXCaseStudy } from "./LigaMXCaseStudy";
import { SweetBitesCaseStudy } from "./SweetBitesCaseStudy";

const sections = ["Overview", "Problem", "Solution", "Features", "Technology Stack", "Screenshots", "Technical Challenges", "What I Learned", "Links"];

export function ProjectCaseStudy({ project }: { project: Project }) {
  if (project.slug === "beauty-hair") {
    return <BeautyHairCaseStudy project={project} />;
  }
  if (project.slug === "liga-mx") {
    return <LigaMXCaseStudy project={project} />;
  }
  if (project.slug === "sweet-bites") {
    return <SweetBitesCaseStudy project={project} />;
  }

  return (
    <main className="case-study-page">
      <Navbar />
      <div className="case-study-shell">
        <Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to selected work</Link>

        <section className="case-study-hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">Project {project.number} / {project.category}</p>
            <h1>{project.title}</h1>
          </motion.div>
          <div className="case-study-hero__meta">
            <span>{project.year}</span>
            <span>{project.status}</span>
          </div>
        </section>

        <div className="case-study-intro-grid">
          <p className="case-study-lead">{project.description}</p>
          <div className="case-study-index">
            <span>CASE STUDY INDEX</span>
            {sections.map((section, index) => <span key={section}>{String(index + 1).padStart(2, "0")} / {section}</span>)}
          </div>
        </div>

        <div className="case-study-content">
          {sections.slice(0, -1).map((section, index) => (
            <section className="case-study-section" key={section}>
              <div className="case-study-section__label"><span>0{index + 1}</span><span>{section}</span></div>
              {section === "Technology Stack" ? (
                <div className="case-study-tech-grid">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              ) : section === "Screenshots" ? (
                <div className="case-study-placeholders">
                  <div>SCREENSHOT 01<br /><span>Placeholder — asset to be added</span></div>
                  <div>SCREENSHOT 02<br /><span>Placeholder — asset to be added</span></div>
                </div>
              ) : (
                <div className="case-study-placeholder-copy">
                  <span>Content placeholder</span>
                  <p>Details for this section will be added when the project documentation is ready.</p>
                </div>
              )}
            </section>
          ))}

          <section className="case-study-section" id="links">
            <div className="case-study-section__label"><span>09</span><span>Links</span></div>
            <div className="case-study-links">
              <Link href={`/projects/${project.slug}`} className="text-action">View Case Study <ArrowUpRight size={16} /></Link>
              <span className="muted-action">GitHub — Coming Soon</span>
              <span className="muted-action">Live Website — Coming Soon</span>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

