"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  const contactLinks = [
    { label: "Email", value: "Write email", href: "mailto:axalberto31@gmail.com", ariaLabel: "Email Axel Mireles" },
    { label: "LinkedIn", value: "Open profile", href: "https://www.linkedin.com/in/axel-alberto-mireles-martinez-17836635a/", ariaLabel: "Open Axel Mireles LinkedIn profile in a new tab", external: true },
    { label: "GitHub", value: "Open profile", href: "https://github.com/Axel-lol29", ariaLabel: "Open Axel Mireles GitHub profile in a new tab", external: true },
  ];

  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <SectionLabel index="04">Contact</SectionLabel>
      <div className="contact-inner">
        <motion.h2 id="contact-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>LET&apos;S BUILD<br /><span>SOMETHING<span className="accent-dot">.</span></span></motion.h2>
        <div className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link-row"
              aria-label={link.ariaLabel}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <small>{link.value}</small>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
