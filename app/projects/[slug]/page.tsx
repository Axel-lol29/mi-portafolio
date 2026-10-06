import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (project?.slug === "beauty-hair") {
    return {
      title: "Beauty Hair — Mobile Management Application | Axel Mireles",
      description: "Beauty Hair is a React Native mobile management application for appointments, clients, inventory, reports and local salon administration, built with Expo, TypeScript and SQLite.",
    };
  }

  if (project?.slug === "liga-mx") {
    return {
      title: "My Liga MX — Mobile Football Experience | Axel Mireles",
      description: "My Liga MX is a React Native mobile experience combining Liga MX fixtures, standings, news, personalization, local match reminders and AI-assisted football summaries.",
    };
  }

  if (project?.slug === "sweet-bites") {
    return {
      title: "Sweet Bites — Interactive Product Website | Axel Mireles",
      description: "Sweet Bites is a responsive product website for an artisanal food brand, featuring a visual catalog, clear pricing, contact paths and an n8n-powered conversational assistant.",
    };
  }

  return project ? { title: `${project.title} — Axel Mireles` } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}

