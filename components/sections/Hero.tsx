"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import type { PointerEvent as ReactPointerEvent } from "react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useSpring(useMotionValue(0), { stiffness: 75, damping: 22, mass: 0.35 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 75, damping: 22, mass: 0.35 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 16);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="hero__technical hero__technical--top">25°40&apos; / 100°18&apos;</div>
      <div className="hero__technical hero__technical--side">PORTFOLIO / 2026</div>
      <motion.div className="hero__orb" aria-hidden="true" style={{ x: pointerX, y: pointerY }} />
      <motion.div className="hero__system" aria-label="Portfolio system status" style={{ x: pointerX, y: pointerY }}>
        <div className="hero__system-heading"><span>AX / SYSTEM 01</span><span>ONLINE</span></div>
        <div className="hero__system-line" />
        <div className="hero__system-grid">
          <span><b>01</b><small>WEB</small></span>
          <span><b>02</b><small>MOBILE</small></span>
          <span><b>03</b><small>PRODUCT</small></span>
        </div>
        <div className="hero__system-coordinates"><span>VECTOR FIELD</span><span>+25.40 / -100.18</span></div>
      </motion.div>
      <motion.div className="hero__content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.p className="eyebrow hero__eyebrow" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}>Software Developer / Monterrey, MX</motion.p>
        <h1 id="hero-title" className="hero__title">
          <motion.span variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>AXEL</motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>MIRELES<span className="accent-dot">.</span></motion.span>
        </h1>
        <motion.div className="hero__lower" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
          <p>I build modern digital experiences<br className="hidden sm:block" /> for web and mobile.</p>
          <span className="hero__year">2026</span>
        </motion.div>
      </motion.div>
      <a className="scroll-cue" href="#work">
        <span>Scroll to explore</span>
        <ArrowDownRight size={15} strokeWidth={1.4} />
      </a>
    </section>
  );
}
