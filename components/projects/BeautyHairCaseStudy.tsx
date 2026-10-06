"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowUpRight, Bell, Database, Layers3, Smartphone } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const media = {
  home: {
    src: "/projects/beauty-hair/beauty-hair-home.png",
    width: 617,
    height: 1280,
    alt: "Beauty Hair mobile app dashboard showing appointments, clients, inventory and administrative metrics",
  },
  inventory: {
    src: "/projects/beauty-hair/beauty-hair-inventory.png",
    width: 736,
    height: 1280,
    alt: "Beauty Hair inventory management screen with product counts, stock levels and product controls",
  },
  appointments: {
    src: "/projects/beauty-hair/beauty-hair-appointments.png",
    width: 766,
    height: 1280,
    alt: "Beauty Hair appointment management screen with upcoming appointments, calendar and appointment form",
  },
  clients: {
    src: "/projects/beauty-hair/beauty-hair-clients.png",
    width: 553,
    height: 1280,
    alt: "Beauty Hair client management screen with search, client registration and client records",
  },
  reports: {
    src: "/projects/beauty-hair/beauty-hair-reports.png",
    width: 688,
    height: 1280,
    alt: "Beauty Hair administrative reports screen showing appointment, client and inventory statistics",
  },
  settings: {
    src: "/projects/beauty-hair/beauty-hair-settings.png",
    width: 800,
    height: 1280,
    alt: "Beauty Hair settings screen with appearance, backup, restore and maintenance options",
  },
};

const featureGroups = [
  { number: "01", title: "Appointments", copy: "Scheduling, list and monthly calendar views, history, business statuses and local reminders." },
  { number: "02", title: "Clients", copy: "Searchable records with create, edit and delete flows plus client-specific appointment history." },
  { number: "03", title: "Inventory", copy: "Products, categories, minimum stock thresholds and local low-stock alerts without repeated notification spam." },
  { number: "04", title: "Reports", copy: "Operational summaries for appointment states, requested services, products by category and PDF export." },
  { number: "05", title: "Backup & Restore", copy: "Versioned local backups for clients, products and appointments, with compatibility for older data." },
  { number: "06", title: "Appearance", copy: "System, Light and Dark themes with a consistent salon-oriented visual system." },
];

const technologyBlocks = [
  ["React Native", "Mobile UI and application architecture."],
  ["Expo SDK 57", "Development environment, native integration and build workflow."],
  ["TypeScript", "Typed models, services and application logic."],
  ["Expo Router", "File-based application navigation."],
  ["SQLite / expo-sqlite", "Persistent local operational data."],
  ["Context API", "Shared state across application modules."],
  ["expo-notifications", "Local appointment and inventory notifications."],
  ["EAS Build", "Development builds and Android APK generation."],
];

const challenges = [
  ["01", "Reliable local persistence", "Operational data had to remain useful without a separate backend.", "Separated screens, shared state and service operations around a local SQLite data layer.", "The application keeps salon administration available on-device and maintains the records that matter to the workflow."],
  ["02", "Native notification lifecycle", "Appointment and low-stock reminders needed to follow real changes instead of becoming stale alerts.", "Used local device notifications, persisted identifiers and synchronized create, edit, delete and status transitions.", "Reminders can be cancelled, replaced or rearmed according to the current appointment or inventory state."],
  ["03", "Preserving client history", "Name-based history was fragile when a client changed their name or when two clients shared one.", "Introduced clienteId with safe compatibility logic that avoids assigning ambiguous historical records blindly.", "Appointment history stays connected to the right client as profile information changes."],
  ["04", "Expo SDK / EAS migration", "Moving from an earlier Expo setup required the native and JavaScript packages to stay aligned.", "Synchronized Expo SDK 57, React Native, Expo Router, SQLite and the EAS build workflow incrementally.", "The final project supports the native capabilities required by the installable Android build."],
];

function DeviceFrame({ image, className = "", priority = false, caption }: { image: typeof media.home; className?: string; priority?: boolean; caption: string }) {
  return (
    <ImageLightbox
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      caption={caption}
      priority={priority}
      className={`beauty-device ${className}`}
    />
  );
}

export function BeautyHairCaseStudy({ project }: { project: Project }) {
  return (
    <main className="case-study-page beauty-case-study">
      <Navbar />
      <div className="case-study-shell beauty-case-study__shell">
        <Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to selected work</Link>

        <section className="beauty-case-hero">
          <motion.div className="beauty-case-hero__copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">Project {project.number} / {project.category}</p>
            <h1>Beauty Hair<span className="accent-dot">.</span></h1>
            <p className="beauty-case-hero__subtitle">Mobile Management Application</p>
            <div className="beauty-case-hero__meta"><span>COMPLETED</span><span>2026</span><span>ANDROID / APK</span></div>
            <div className="beauty-case-hero__stack">React Native&nbsp;&nbsp; / &nbsp;&nbsp;Expo SDK 57&nbsp;&nbsp; / &nbsp;&nbsp;TypeScript&nbsp;&nbsp; / &nbsp;&nbsp;SQLite</div>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-action beauty-github-link">Open GitHub repository <ArrowUpRight size={16} /></a>}
          </motion.div>
          <motion.div className="beauty-case-hero__media" initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>
            <DeviceFrame image={media.home} className="beauty-device--hero" priority caption="Home / Dashboard" />
            <DeviceFrame image={media.appointments} className="beauty-device--hero-secondary" caption="Appointments" />
            <span className="beauty-case-hero__media-label">LOCAL-FIRST / SALON OPERATIONS</span>
          </motion.div>
        </section>

        <section className="beauty-overview beauty-copy-grid">
          <div className="beauty-section-label"><span>01</span><span>Overview</span></div>
          <div>
            <p className="beauty-lead">Beauty Hair is a local-first mobile management application for a beauty salon.</p>
            <p className="beauty-body-copy">It centralizes appointments, client records, inventory and operational reporting in one Android experience, reducing dependence on fragmented manual records. The app persists its primary data locally with SQLite and is distributed as an installable Android APK.</p>
          </div>
        </section>

        <section className="beauty-problem-solution">
          <div className="beauty-copy-block"><div className="beauty-section-label"><span>02</span><span>The problem</span></div><h2>Administration was scattered across agendas, calls and separate records.</h2><p>Appointments, client information and product levels were difficult to see together. The workflow needed a calmer place for daily decisions, appointment history and inventory awareness.</p></div>
          <div className="beauty-copy-block"><div className="beauty-section-label"><span>03</span><span>The solution</span></div><h2>One local-first workflow for the work that happens every day.</h2><p>Beauty Hair brings scheduling, clients, inventory, history, reports, local notifications, backups and preferences into a responsive phone and tablet interface without requiring a separate backend.</p></div>
        </section>

        <section className="beauty-features">
          <div className="beauty-section-label"><span>04</span><span>Core features</span></div>
          <div className="beauty-feature-list">{featureGroups.map(({ number, title, copy }) => <div className="beauty-feature-row" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </section>

        <section className="beauty-experience">
          <div className="beauty-section-label"><span>05</span><span>App experience</span></div>
          <div className="beauty-scene beauty-scene--dashboard"><div className="beauty-scene__copy"><span className="beauty-scene__index">SCENE 01 / OPERATIONS AT A GLANCE</span><h2>A clear start to the day.</h2><p>An operational dashboard surfaces appointments, client activity, inventory health and key administrative information from one place.</p></div><DeviceFrame image={media.home} className="beauty-device--scene-home" caption="Home / Dashboard" /></div>
          <div className="beauty-scene beauty-scene--records"><div className="beauty-scene__copy"><span className="beauty-scene__index">SCENE 02 / CLIENTS + INVENTORY</span><h2>Records that stay close to the work.</h2><p>Dedicated CRUD workflows manage salon records while keeping client and inventory information accessible as daily tasks change.</p></div><div className="beauty-device-pair"><DeviceFrame image={media.clients} caption="Clients" /><DeviceFrame image={media.inventory} caption="Inventory" /></div></div>
          <div className="beauty-scene beauty-scene--appointments"><DeviceFrame image={media.appointments} className="beauty-device--scene-appointments" caption="Appointments" /><div className="beauty-scene__copy"><span className="beauty-scene__index">SCENE 03 / APPOINTMENT WORKFLOW</span><h2>Upcoming and historical appointments share the same model.</h2><p>List and calendar views, status filtering and reminders keep the temporal schedule separate from business states such as pending, completed, cancelled and no-show.</p></div></div>
          <div className="beauty-scene beauty-scene--reports"><div className="beauty-scene__copy"><span className="beauty-scene__index">SCENE 04 / REPORTING</span><h2>Operational information becomes visible.</h2><p>Reports bring together appointment states, requested services, client activity and products by category, with PDF export for administrative use.</p></div><DeviceFrame image={media.reports} className="beauty-device--scene-reports" caption="Reports" /></div>
          <div className="beauty-scene beauty-scene--settings"><DeviceFrame image={media.settings} className="beauty-device--scene-settings" caption="Settings" /><div className="beauty-scene__copy"><span className="beauty-scene__index">SCENE 05 / PREFERENCES &amp; DATA</span><h2>Control over appearance and local data.</h2><p>System, Light and Dark themes sit alongside local backup, restore and maintenance options. This is device-managed data, not cloud backup.</p></div></div>
        </section>

        <section className="beauty-tech-section">
          <div className="beauty-section-label"><span>06</span><span>Technology stack</span></div>
          <div className="beauty-tech-grid">{technologyBlocks.map(([name, copy], index) => <div className="beauty-tech-row" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></div>)}</div>
        </section>

        <section className="beauty-architecture">
          <div className="beauty-section-label"><span>07</span><span>Architecture / how it works</span></div>
          <div className="beauty-architecture__layout"><div className="beauty-architecture__copy"><h2>UI and persistence stay separate, but connected.</h2><p>Screens focus on interface and interaction. Context coordinates shared data, service modules encapsulate operations, and SQLite persists information on the device.</p></div><div className="beauty-architecture__diagram"><div><Smartphone size={17} /> UI / Screens</div><i>↓</i><div><Layers3 size={17} /> Expo Router</div><i>↓</i><div><Database size={17} /> Context API → Services → SQLite</div><i>↓</i><div className="beauty-architecture__branch"><span><Bell size={16} /> Native device notifications</span><span>Business logic follows appointment and inventory changes.</span></div></div></div>
        </section>

        <section className="beauty-challenges">
          <div className="beauty-section-label"><span>08</span><span>Technical challenges</span></div>
          <div className="beauty-challenge-list">{challenges.map(([number, title, problem, approach, result]) => <article className="beauty-challenge" key={number}><span>{number}</span><h3>{title}</h3><div><small>Problem</small><p>{problem}</p><small>Approach</small><p>{approach}</p><small>Result</small><p>{result}</p></div></article>)}</div>
        </section>

        <section className="beauty-learnings beauty-copy-grid"><div className="beauty-learnings__aside"><div className="beauty-section-label"><span>09</span><span>What I learned</span></div><div className="beauty-learning-markers" aria-label="Key learning themes"><span><b>01</b><small>LOCAL-FIRST ARCHITECTURE</small></span><span><b>02</b><small>SCHEMA EVOLUTION</small></span><span><b>03</b><small>NATIVE WORKFLOWS</small></span></div></div><div><p className="beauty-lead">The work moved from prototype thinking toward maintainable product architecture.</p><p className="beauty-body-copy">The strongest lessons were separating UI, state and persistence; evolving SQLite safely; handling date and time business logic; synchronizing notifications with CRUD actions; and designing a responsive release workflow for phones, tablets and an Android APK.</p></div></section>

        <section className="beauty-links"><div className="beauty-section-label"><span>10</span><span>Project links</span></div><div className="beauty-links__content"><h2>Source available.<br /><span>Android build available.</span></h2><div className="beauty-links__actions">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-action">GitHub repository <ArrowUpRight size={16} /></a>}{project.apk ? <a href={project.apk} download className="text-action">Download APK <ArrowDown size={16} /></a> : project.release && <a href={project.release} target="_blank" rel="noopener noreferrer" className="text-action">Download APK <ArrowDown size={16} /></a>}</div></div></section>
      </div>
      <Footer />
    </main>
  );
}
