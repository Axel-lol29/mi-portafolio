"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const media = {
  home: { src: "/projects/sweet-bites/sweet-bites-home.png", width: 1907, height: 912, alt: "Sweet Bites responsive product website home screen with brand introduction and navigation", caption: "Brand introduction" },
  productsTop: { src: "/projects/sweet-bites/sweet-bites-products-top.png", width: 1896, height: 916, alt: "Sweet Bites product catalog with pricing and sweet empanada product cards", caption: "Catalog and pricing" },
  productsGrid: { src: "/projects/sweet-bites/sweet-bites-products-grid.png", width: 1900, height: 907, alt: "Sweet Bites product grid showing additional empanada flavors and descriptions", caption: "Product grid" },
  about: { src: "/projects/sweet-bites/sweet-bites-about.png", width: 1906, height: 902, alt: "Sweet Bites About section showing brand story, mission, vision and values", caption: "About Sweet Bites" },
  chatGeneral: { src: "/projects/sweet-bites/sweet-bites-chat-general.png", width: 422, height: 641, alt: "Sweet Bites assistant answering a general service availability question", caption: "Ask / service information" },
  chatRecommendation: { src: "/projects/sweet-bites/sweet-bites-chat-recommendation.png", width: 425, height: 635, alt: "Sweet Bites assistant describing flavors and recommending sweet empanadas", caption: "Discover / product recommendations" },
  chatOrder: { src: "/projects/sweet-bites/sweet-bites-chat-order.png", width: 407, height: 620, alt: "Sweet Bites assistant recognizing order intent and guiding the user toward WhatsApp", caption: "Order intent / WhatsApp" },
  workflow: { src: "/projects/sweet-bites/sweet-bites-n8n-workflow.png", width: 1868, height: 871, alt: "n8n workflow connecting a webhook, LLM chain, Ollama chat model and webhook response", caption: "n8n assistant workflow" },
} as const;

type MediaKey = keyof typeof media;

const chatSteps: { image: MediaKey; label: string; title: string; copy: string }[] = [
  { image: "chatGeneral", label: "01 / ASK", title: "Get a quick answer.", copy: "Visitors can ask about products, service and availability." },
  { image: "chatRecommendation", label: "02 / DISCOVER", title: "Find a flavor.", copy: "The assistant describes the offer and helps narrow a choice." },
  { image: "chatOrder", label: "03 / ORDER INTENT", title: "Continue on WhatsApp.", copy: "Basic order intent can lead into a direct conversation with the business." },
];

const technologies = [
  { name: "HTML", copy: "Semantic page structure and content." },
  { name: "CSS", copy: "Responsive layouts and visual presentation." },
  { name: "JavaScript", copy: "Navigation behavior and chat interface logic." },
  { name: "n8n", copy: "Webhook and language-model workflow orchestration." },
  { name: "Ollama", copy: "Chat-model layer shown in the assistant workflow." },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="sweet-section-label"><span>{number}</span><span>{children}</span></div>;
}

function Shot({ image, className = "", priority = false, sizes, caption }: { image: MediaKey; className?: string; priority?: boolean; sizes?: string; caption?: string }) {
  const shot = media[image];
  return <ImageLightbox {...shot} caption={caption ?? shot.caption} className={`sweet-shot ${className}`} priority={priority} sizes={sizes ?? "(max-width: 700px) 88vw, (max-width: 1100px) 44vw, 34vw"} />;
}

export function SweetBitesCaseStudy({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65 } };

  return (
    <main className="case-study-page sweet-case-study">
      <Navbar />
      <div className="case-study-shell sweet-case-study__shell">
        <Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to selected work</Link>

        <section className="sweet-hero">
          <motion.div className="sweet-hero__copy" {...reveal}>
            <p className="eyebrow">Project {project.number} / {project.category}</p>
            <h1>Sweet Bites<span>.</span></h1>
            <p className="sweet-hero__subtitle">Interactive Product Website</p>
            <div className="sweet-hero__meta"><span>COMPLETED</span><span>2026</span><span>WEB</span></div>
            <p className="sweet-hero__stack">HTML / CSS / JavaScript / n8n / Ollama</p>
            <div className="sweet-hero__links">
              {project.github && <a className="text-action" href={project.github} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowUpRight size={16} /></a>}
              {project.demo && <a className="text-action" href={project.demo} target="_blank" rel="noopener noreferrer">Live Site <ArrowUpRight size={16} /></a>}
            </div>
          </motion.div>
          <motion.div className="sweet-hero__visual" {...(reduceMotion ? {} : { initial: { opacity: 0, x: 26 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.7, delay: 0.1 } })}>
            <Shot image="home" className="sweet-shot--hero" priority sizes="(max-width: 800px) 92vw, 52vw" />
            <span className="sweet-hero__visual-label">BRAND / PRODUCT / CONVERSATION</span>
          </motion.div>
        </section>

        <section className="sweet-section sweet-overview">
          <SectionLabel number="01">Overview</SectionLabel>
          <div className="sweet-section__main">
            <p className="sweet-lead">A clear way to explore an artisanal sweet empanada brand.</p>
            <p>Sweet Bites brings its product catalog, pricing, business story and contact paths into one responsive website. A conversational assistant helps visitors learn about the offer and move toward WhatsApp when they have order intent.</p>
          </div>
        </section>

        <section className="sweet-section sweet-products">
          <SectionLabel number="02">Product experience</SectionLabel>
          <div className="sweet-section__main">
            <div className="sweet-section__intro"><h2>From first look to product choice.</h2><p>Navigation leads from the brand introduction into a visual catalog with flavor names, short descriptions and pricing in a simple hierarchy.</p></div>
            <div className="sweet-image-pair">
              <Shot image="productsTop" caption="Catalog and pricing" sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 38vw" />
              <Shot image="productsGrid" caption="Product grid" sizes="(max-width: 700px) 88vw, (max-width: 1100px) 42vw, 38vw" />
            </div>
            <div className="sweet-pricing" aria-label="Sweet Bites product pricing">
              <div><span>INDIVIDUAL</span><strong>$12 <small>MXN</small></strong></div>
              <div><span>PACKAGE / 6</span><strong>$70 <small>MXN</small></strong></div>
              <div><span>PACKAGE / 12</span><strong>$130 <small>MXN</small></strong></div>
            </div>
          </div>
        </section>

        <section className="sweet-section sweet-brand-contact">
          <SectionLabel number="03">Brand + contact</SectionLabel>
          <div className="sweet-section__main">
            <p className="sweet-body-copy">The About section gives space to the brand story, mission, vision and values. The site also makes contact options available, with WhatsApp as a direct next step—without adding a cart or checkout flow.</p>
            <Shot image="about" className="sweet-shot--brand" caption="About / story, mission, vision and values" />
          </div>
        </section>

        <section className="sweet-section sweet-assistant">
          <SectionLabel number="04">Conversational assistant</SectionLabel>
          <div className="sweet-section__main">
            <div className="sweet-section__intro"><h2>Questions become a guided next step.</h2><p>The floating assistant answers general and service questions, describes flavors, recommends products and recognizes basic order intent. It can direct the visitor to WhatsApp; it does not complete checkout or process payment.</p></div>
            <div className="sweet-chat-sequence">{chatSteps.map(({ image, label, title, copy }) => <article className="sweet-chat-step" key={image}><div className="sweet-chat-step__copy"><span>{label}</span><h3>{title}</h3><p>{copy}</p></div><Shot image={image} className="sweet-shot--chat" sizes="(max-width: 700px) 78vw, (max-width: 1100px) 31vw, 24vw" /></article>)}</div>
          </div>
        </section>

        <section className="sweet-section sweet-workflow">
          <SectionLabel number="05">Automation / how it works</SectionLabel>
          <div className="sweet-section__main sweet-workflow__layout">
            <div className="sweet-workflow__copy"><h2>A small request and response loop.</h2><p>The website sends the visitor&apos;s message to a webhook. In the shown n8n workflow, a Basic LLM Chain uses an Ollama Chat Model and returns a response through the webhook.</p><div className="sweet-flow" aria-label="Website Chat, Webhook, n8n, Basic LLM Chain, Ollama Chat Model, Webhook Response"><span>Website Chat</span><i>→</i><span>Webhook</span><i>→</i><span>n8n</span><i>→</i><span>Basic LLM Chain</span><i>→</i><span>Ollama Chat Model</span><i>→</i><span>Webhook Response</span></div></div>
            <Shot image="workflow" className="sweet-shot--workflow" caption="n8n workflow / Webhook → Basic LLM Chain → Ollama Chat Model → Respond to Webhook" sizes="(max-width: 800px) 92vw, (max-width: 1000px) 74vw, 56vw" />
          </div>
        </section>

        <section className="sweet-section sweet-responsive">
          <SectionLabel number="06">Responsive design</SectionLabel>
          <div className="sweet-section__main"><h2>Catalog layouts adapt with the screen.</h2><p>The navigation switches to a menu toggle on smaller screens. Product cards move from one column to two at tablet width and three on wider desktop screens; About and Contact layouts also reflow for smaller viewports.</p><div className="sweet-breakpoints"><span><b>01</b> SINGLE COLUMN</span><span><b>02</b> TWO COLUMN</span><span><b>03</b> THREE COLUMN</span></div></div>
        </section>

        <section className="sweet-section sweet-technology">
          <SectionLabel number="07">Technology stack</SectionLabel>
          <div className="sweet-section__main"><div className="sweet-tech-list">{technologies.map(({ name, copy }, index) => <div className="sweet-tech-row" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></div>)}</div></div>
        </section>

        <section className="sweet-section sweet-deployment">
          <SectionLabel number="08">Deployment</SectionLabel>
          <div className="sweet-section__main sweet-deployment__content"><div><h2>Public site, separate assistant workflow.</h2><p>The product website is deployed on Vercel. Assistant requests travel to the separately hosted webhook/model workflow and return to the browser; chat availability depends on that workflow being reachable.</p></div><a className="text-action" href="https://sweet-bites-site.vercel.app/" target="_blank" rel="noopener noreferrer">Open live site <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="sweet-section sweet-learning">
          <SectionLabel number="09">What I learned</SectionLabel>
          <div className="sweet-section__main"><p className="sweet-lead">A product website can make the next step feel simple.</p><p>Sweet Bites brought together real business information, responsive product discovery and a conversational interface, while keeping the handoff from questions to ordering clear.</p></div>
        </section>

        <section className="sweet-section sweet-links">
          <SectionLabel number="10">Project links</SectionLabel>
          <div className="sweet-section__main sweet-links__content"><h2>Explore the project.</h2><div>{project.github && <a className="text-action" href={project.github} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowUpRight size={16} /></a>}{project.demo && <a className="text-action" href={project.demo} target="_blank" rel="noopener noreferrer">Live Site <ArrowUpRight size={16} /></a>}</div></div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
