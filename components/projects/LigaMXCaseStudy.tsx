"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

const media = {
  home: { src: "/projects/my-liga-mx/my-liga-mx-home.png", width: 438, height: 1051, alt: "My Liga MX personalized home with favorite team, next fixture, AI briefs and quick standings", caption: "Personalized Home" },
  standings: { src: "/projects/my-liga-mx/my-liga-mx-standings.png", width: 635, height: 1280, alt: "My Liga MX standings table showing the 18 clubs and favorite-team highlight", caption: "Standings" },
  matches: { src: "/projects/my-liga-mx/my-liga-mx-matches-upcoming.png", width: 800, height: 1280, alt: "My Liga MX upcoming matches with status and jornada filters", caption: "Upcoming matches" },
  final: { src: "/projects/my-liga-mx/my-liga-mx-match-detail-final.png", width: 438, height: 1164, alt: "Finished match detail with final score, AI recap, events, statistics and available lineups", caption: "Final match detail" },
  upcoming: { src: "/projects/my-liga-mx/my-liga-mx-match-detail-upcoming.png", width: 800, height: 1280, alt: "Upcoming match detail with fixture information and AI match preview", caption: "Upcoming match detail" },
  news: { src: "/projects/my-liga-mx/my-liga-mx-news-league.png", width: 800, height: 1280, alt: "Liga MX news feed with article cards and AI summary actions", caption: "League news" },
  profile: { src: "/projects/my-liga-mx/my-liga-mx-profile.png", width: 800, height: 1280, alt: "My Liga MX profile with favorite team, saved content, theme and notification settings", caption: "Profile and preferences" },
} as const;

type ScreenKey = keyof typeof media;

const features = [
  { number: "01", title: "Matches & jornadas", copy: "Status and dynamic round filters, local kickoff times, scores, saved matches and separate reminder controls." },
  { number: "02", title: "Standings & clubs", copy: "An 18-team table with qualification context and favorite-team emphasis, plus individual team views." },
  { number: "03", title: "Match intelligence", copy: "Upcoming and final match detail with available events, stats, lineups and manually requested AI context." },
  { number: "04", title: "News & saved content", copy: "League and favorite-team feeds, article bookmarks and AI summaries based on available article content." },
  { number: "05", title: "Personalized Home", copy: "A favorite club, next fixture, latest result, quick table and two concise AI briefs in one place." },
  { number: "06", title: "Reminders & preferences", copy: "Local match notifications, configurable lead times, saved content, and persistent light, dark or system theme." },
];

const technology = [
  { category: "MOBILE", items: "React Native · Expo SDK 57 · TypeScript · Expo Router" },
  { category: "DATA", items: "TheSportsDB · GNews · React Query" },
  { category: "BACKEND", items: "Supabase Auth · Postgres · Edge Functions · RLS" },
  { category: "AI", items: "Google Gemini · server-side AI · deterministic cache" },
  { category: "DEVICE", items: "AsyncStorage · expo-notifications" },
  { category: "DELIVERY", items: "EAS Build · tested Android APK" },
];

const challenges = [
  {
    number: "01", title: "A reliable football data layer",
    problem: "An early provider could not meet current-season Liga MX needs.",
    approach: "Migrated to TheSportsDB, normalized identities through an 18-club catalog and centralized requests in football-proxy.",
    result: "Fixtures, standings and match detail share one active, cached data flow.",
  },
  {
    number: "02", title: "One match time everywhere",
    problem: "UTC timestamps could show the wrong local kickoff or the next calendar day in an AI brief.",
    approach: "Used a shared date-time helper, canonical event timestamps and localized dates for AI prompts.",
    result: "UI, reminders and generated summaries use consistent local times.",
  },
  {
    number: "03", title: "AI grounded in facts",
    problem: "Generated football narratives could overstate missing data, while repeat requests consumed quota.",
    approach: "Sent bounded factual payloads to server-side Gemini functions with strict prompts, deterministic caching, concurrency control and transient retry.",
    result: "AI explains available data without becoming the source of football facts.",
  },
  {
    number: "04", title: "A standalone Android build",
    problem: "Session restoration, local notifications and EAS build configuration all had to work on-device.",
    approach: "Stabilized auth initialization, reconciled reminders, separated star and bell actions, and configured the EAS preview environment.",
    result: "An installable Android APK was built and tested with authentication and the app's connected services.",
  },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="liga-section-label"><span>{number}</span><span>{children}</span></div>;
}

function Screen({ image, className = "", priority = false }: { image: ScreenKey; className?: string; priority?: boolean }) {
  const shot = media[image];
  return <ImageLightbox {...shot} className={`liga-screen ${className}`} priority={priority} sizes="(max-width: 700px) 90vw, (max-width: 1050px) 48vw, 36vw" />;
}

export function LigaMXCaseStudy({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65 } };

  return (
    <main className="case-study-page liga-case-study">
      <Navbar />
      <div className="case-study-shell liga-case-study__shell">
        <Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to selected work</Link>

        <section className="liga-hero">
          <motion.div className="liga-hero__copy" {...reveal}>
            <p className="eyebrow">Project {project.number} / {project.category}</p>
            <h1>My Liga MX<span className="liga-dot">.</span></h1>
            <p className="liga-hero__subtitle">Mobile Football Experience</p>
            <div className="liga-hero__meta"><span>COMPLETED</span><span>2026</span><span>ANDROID</span></div>
            <p className="liga-hero__stack">React Native / Expo SDK 57 / TypeScript / Supabase / Gemini</p>
            {project.github && <a className="text-action liga-hero__link" href={project.github} target="_blank" rel="noopener noreferrer">Open GitHub repository <ArrowUpRight size={16} /></a>}
          </motion.div>
          <div className="liga-hero__visual">
            <div className="liga-hero__pitch" aria-hidden="true"><span /></div>
            <Screen image="home" className="liga-hero__primary" priority />
            <Screen image="standings" className="liga-hero__secondary" />
            <span className="liga-hero__visual-label">PERSONALIZED / DATA-LED / MOBILE</span>
          </div>
        </section>

        <section className="liga-section liga-intro">
          <SectionLabel number="01">Overview</SectionLabel>
          <div><p className="liga-lead">The league, organized around the club you follow.</p><p>My Liga MX brings fixtures, results, standings, team detail, news, saved content, local reminders and AI-assisted context into a personalized mobile experience for Liga MX fans.</p></div>
        </section>

        <section className="liga-section liga-problem-solution">
          <div><SectionLabel number="02">The problem</SectionLabel><h2>Following one league meant jumping between sources.</h2><p>Schedules, scores, tables, club pages and news often live in separate experiences. The app needed one coherent flow centered on a fan&apos;s favorite team.</p></div>
          <div><SectionLabel number="03">The solution</SectionLabel><h2>A personal matchday hub.</h2><p>Home connects the preferred club with upcoming and finished matches, standings and news. Detail screens, saved items, local reminders and factual AI summaries extend that flow when needed.</p></div>
        </section>

        <section className="liga-section liga-features">
          <SectionLabel number="04">Core features</SectionLabel>
          <div className="liga-feature-list">{features.map(({ number, title, copy }) => <div className="liga-feature" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </section>

        <section className="liga-section liga-experience">
          <SectionLabel number="05">App experience</SectionLabel>
          <div className="liga-scene liga-scene--reverse"><div className="liga-scene__copy"><span className="liga-kicker">SCENE 01 / MATCHES + TABLE</span><h2>The season in motion.</h2><p>Match status and jornada filters adapt to available fixtures. The 18-team table keeps position, form and favorite-club context readable.</p></div><div className="liga-scene__pair"><Screen image="matches" /><Screen image="standings" /></div></div>
          <div className="liga-scene liga-scene--match-intelligence"><div className="liga-scene__copy"><span className="liga-kicker">SCENE 02 / MATCH INTELLIGENCE</span><h2>From preview to final whistle.</h2><p>Upcoming fixtures can show a factual AI preview. Finished matches surface the score, available events, stats and lineups alongside a concise recap.</p></div><div className="liga-scene__pair"><Screen image="upcoming" /><Screen image="final" /></div></div>
          <div className="liga-scene liga-scene--reverse"><div className="liga-scene__copy"><span className="liga-kicker">SCENE 03 / NEWS + USER SPACE</span><h2>Context beyond the score.</h2><p>League and team stories can be bookmarked or summarized on demand. Profile brings together the favorite club, saved content, theme choice and reminder settings.</p></div><div className="liga-scene__pair"><Screen image="news" /><Screen image="profile" /></div></div>
        </section>

        <section className="liga-section liga-data">
          <SectionLabel number="06">Data / API integration</SectionLabel>
          <div className="liga-section__main"><h2>One path from external feeds to the interface.</h2><p>Hooks and React Query keep the client responsive. Services call Supabase Edge Functions, which normalize and cache provider responses before the screens use them.</p><div className="liga-data-flow"><span>SPORTS <strong>TheSportsDB</strong><small>Fixtures · standings · team and event detail</small></span><span>NEWS <strong>GNews</strong><small>League and favorite-team articles</small></span><span>GATEWAY <strong>Supabase Edge Functions</strong><small>football-proxy · news-proxy</small></span><span>CLIENT <strong>React Query</strong><small>Query-based caching across screens</small></span></div><p className="liga-fine-print">The active football source uses Liga MX league ID 4350 and the configured 2026–2027 season. Data availability varies by event.</p></div>
        </section>

        <section className="liga-section liga-auth">
          <SectionLabel number="07">Authentication & preferences</SectionLabel>
          <div className="liga-section__main"><h2>An account that remembers the fan.</h2><p>Supabase Auth provides email and password registration, login and a persistent session. User-owned profiles, preferences, saved matches and saved news live in Supabase with row-level access rules.</p><p>Changing a favorite club updates Home, team news and reminders immediately. Theme and reminder timing persist; selected reminder intent and scheduling metadata stay on-device through AsyncStorage.</p><div className="liga-inline-note"><span>REMOTE / SUPABASE</span><span>Profile · preferences · saved content</span><span>DEVICE / ASYNCSTORAGE</span><span>Manual reminder intent and local scheduling state</span></div></div>
        </section>

        <section className="liga-section liga-ai">
          <SectionLabel number="08">AI features</SectionLabel>
          <div className="liga-section__main"><span className="liga-kicker">A CONTROLLED INTERPRETATION LAYER</span><h2>Football facts come first.</h2><p>AI explains information the app already has from matches, standings and news. Generation is manual, summaries are concise, and prompts avoid predictions and unsupported claims.</p><div className="liga-ai-groups"><div><span className="liga-kicker">MATCH INTELLIGENCE</span><h3>Preview · Recap · Round Summary</h3><p>Upcoming fixtures, finished matches and partial or complete jornadas use only available scores, events and table context.</p></div><div><span className="liga-kicker">NEWS & CONTEXT</span><h3>News Summary · Team Brief · League Brief</h3><p>Article content, favorite-team context and the league snapshot become short summaries with up to three highlights.</p></div></div><div className="liga-ai-flow">React Native <span>→</span> Supabase Edge Function <span>→</span> deterministic cache <span>→</span> Gemini</div><p className="liga-fine-print">AI requests stay server-side, cached and bounded to the football data already available to the application.</p></div>
        </section>

        <section className="liga-section liga-reminders">
          <SectionLabel number="09">Local reminders</SectionLabel>
          <div className="liga-section__main"><h2>Save and remind are separate choices.</h2><div className="liga-reminder-choices"><div><span>SAVE / STAR</span><p>Adds a match to “Mis partidos.”</p></div><div><span>REMIND / BELL</span><p>Schedules a local notification for an eligible future match, whether saved or not.</p></div></div><div className="liga-reminder-times" aria-label="Reminder timing options"><span>15 MIN</span><span>30 MIN</span><span>1 HOUR</span></div><p>Automatic favorite-team and manual reminders are reconciled by event ID to avoid duplicates and reschedule when the lead time changes.</p></div>
        </section>

        <section className="liga-section liga-stack">
          <SectionLabel number="10">Technology stack</SectionLabel>
          <div className="liga-stack__grid">{technology.map(({ category, items }) => <div className="liga-stack__row" key={category}><span>{category}</span><p>{items}</p></div>)}</div>
        </section>

        <section className="liga-section liga-architecture">
          <SectionLabel number="11">Architecture / how it works</SectionLabel>
          <div className="liga-section__main"><h2>Clear boundaries from screen to source.</h2><div className="liga-architecture__path"><span>React Native / Expo UI</span><i>↓</i><span>Expo Router · hooks · React Query · services</span><i>↓</i><span>Supabase Edge Functions</span></div><div className="liga-architecture__branches"><div><small>FOOTBALL</small><strong>football-proxy</strong><span>TheSportsDB</span></div><div><small>NEWS</small><strong>news-proxy</strong><span>GNews</span></div><div><small>AI</small><strong>AI Edge Functions</strong><span>Gemini · persistent cache</span></div></div><div className="liga-architecture__base"><span>Supabase / Auth · profiles · preferences · saved content · RLS</span><span>On device / AsyncStorage · local notification scheduler</span></div></div>
        </section>

        <section className="liga-section liga-challenges">
          <SectionLabel number="12">Technical challenges</SectionLabel>
          <div className="liga-challenge-list">{challenges.map(({ number, title, problem, approach, result }) => <article className="liga-challenge" key={number}><span>{number}</span><h3>{title}</h3><div><small>PROBLEM</small><p>{problem}</p><small>APPROACH</small><p>{approach}</p><small>RESULT</small><p>{result}</p></div></article>)}</div>
        </section>

        <section className="liga-section liga-learnings">
          <div className="liga-learnings__aside"><SectionLabel number="13">What I learned</SectionLabel><div className="liga-learning-markers"><span><b>01</b> EXTERNAL DATA SYSTEMS</span><span><b>02</b> CLIENT / SERVER BOUNDARIES</span><span><b>03</b> AI WITH FACTUAL GUARDRAILS</span></div></div>
          <div className="liga-section__main"><p className="liga-lead">A stronger product emerges when every layer respects its source of truth.</p><p>Building My Liga MX sharpened how I normalize external data, keep time consistent, coordinate remote and device state, and protect server-side AI boundaries. The tested Android build brought those decisions together in a real mobile release workflow.</p></div>
        </section>

        <section className="liga-section liga-links"><SectionLabel number="14">Project links</SectionLabel><div className="liga-section__main"><h2>Source available.<br /><span>Android build tested.</span></h2><p>The APK is not publicly available yet.</p>{project.github && <a className="text-action" href={project.github} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowUpRight size={16} /></a>}</div></section>
      </div>
      <Footer />
    </main>
  );
}
