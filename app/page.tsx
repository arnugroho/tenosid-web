import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  GraduationCap,
  Workflow,
  MessageCircle,
  Zap,
  Star,
} from "lucide-react";

const DIGDEEP_URL = "https://digdeep.id";
const CONTACT_WHATSAPP = "628111010331";

const navLinks = [
  { href: "#how", label: "How It Works" },
  { href: "#offerings", label: "What We Do" },
  { href: "#why", label: "Why Tenos" },
  { href: "#about", label: "About" },
];

const marqueeWords = [
  "AI Literacy",
  "Applied Workflows",
  "Intelligent Systems",
  "Data-First Thinking",
  "Built for Teams",
  "Human + AI",
  "Digdeep Academy",
  "Tenos Data Teknologi",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-ink selection:text-brand-yellow">
      {/* TOP TICKER — subtle cyan accent bar */}
      <div
        aria-hidden
        className="hidden md:block w-full bg-brand-cyan/95 text-ink text-[11px] font-mono tracking-[0.25em] uppercase"
      >
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink" />
            Empowering people & organizations with AI
          </span>
          <span className="opacity-70">PT · Tenos Data Teknologi · 2026</span>
        </div>
      </div>

      {/* NAVBAR — floating pill, glass, modern */}
      <header className="sticky top-3 z-50 px-4">
        <nav
          aria-label="Primary"
          className="max-w-7xl mx-auto rounded-2xl border border-ink/10 bg-paper/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(11,11,15,0.04)]"
        >
          <div className="px-5 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" aria-label="Tenos Home">
              <Image
                src="/tenos-logo.png"
                alt="Tenos"
                width={180}
                height={44}
                className="h-7 w-auto"
                priority
              />
            </Link>
            <ul className="hidden md:flex items-center gap-1 text-sm text-ink/70">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="px-3 py-1.5 rounded-full hover:text-ink hover:bg-ink/5 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="group hidden sm:inline-flex items-center gap-1.5 pl-4 pr-1.5 py-1.5 bg-ink text-paper rounded-full text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Contact
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-cyan text-ink group-hover:rotate-[-20deg] transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 px-6 overflow-hidden">
        {/* decorative layers */}
        <div aria-hidden className="absolute inset-0 bg-grid pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-brand-cyan/30 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute top-40 -right-24 w-[380px] h-[380px] rounded-full bg-brand-yellow/30 blur-3xl pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Eyebrow chip */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-paper border border-ink/10 text-xs font-mono uppercase tracking-widest text-ink/70 shadow-sm">
              <span className="relative inline-flex items-center justify-center w-5 h-5">
                <span className="animate-soft-pulse absolute inline-flex w-full h-full rounded-full bg-brand-cyan" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-cyan" />
              </span>
              Now onboarding · AI for humans + systems
            </div>
          </div>

          {/* Editorial headline */}
          <h1 className="mt-8 font-display text-center text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[96px] font-bold tracking-[-0.03em] text-ink max-w-5xl mx-auto">
            Empowering people
            <br className="hidden sm:block" />{" "}
            <span className="inline-flex items-baseline gap-2">
              & organizations with
            </span>
            <span className="relative inline-flex items-center justify-center ml-2">
              {/* The yellow ring echoes the 'O' in Tenos logo */}
              <span
                aria-hidden
                className="absolute inset-0 -m-2 rounded-full border-[10px] md:border-[14px] border-brand-yellow"
              />
              <span className="relative px-4 md:px-6 text-ink">AI</span>
            </span>
            .
          </h1>

          <p className="mt-8 text-center text-lg md:text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed">
            Start your AI journey with{" "}
            <span className="font-semibold text-ink marker-underline">
              Digdeep Academy
            </span>
            , then scale into intelligent systems with{" "}
            <span className="font-semibold text-ink">Tenos Data Teknologi</span>
            —so you work smarter, faster, and further.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#offerings"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 pl-6 pr-2 py-2 bg-ink text-paper rounded-full font-medium hover:bg-ink/90 transition-all"
            >
              Explore what we do
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-cyan text-ink group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 bg-paper text-ink border border-ink/15 rounded-full font-medium hover:border-ink/40 hover:bg-ink/5 transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Quick badges */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/60">
            <li className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-ink/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              Academy
            </li>
            <li className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-ink/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Workflow Automation
            </li>
            <li className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper border border-ink/10">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              Custom AI Systems
            </li>
          </ul>
        </div>
      </section>

      {/* MARQUEE — keywords, cyan bar */}
      <section aria-hidden className="border-y border-ink/10 bg-brand-cyan overflow-hidden">
        <div className="relative flex whitespace-nowrap py-4">
          <div className="flex animate-marquee gap-10 pr-10 font-display text-ink text-2xl md:text-3xl font-semibold">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className="inline-flex items-center gap-10">
                <span>{w}</span>
                <Star className="w-4 h-4 fill-ink text-ink" />
              </span>
            ))}
          </div>
          <div
            aria-hidden
            className="flex animate-marquee gap-10 pr-10 font-display text-ink text-2xl md:text-3xl font-semibold"
          >
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={`b-${i}`} className="inline-flex items-center gap-10">
                <span>{w}</span>
                <Star className="w-4 h-4 fill-ink text-ink" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TENOS WORKS */}
      <section id="how" className="relative py-24 lg:py-32 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ink/50">
                <span className="h-px w-8 bg-ink/30" />
                How Tenos Works
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
                Three steps, from{" "}
                <span className="marker-underline">curiosity</span> to capability.
              </h2>
            </div>
            <p className="text-ink/60 max-w-sm">
              We don&apos;t just drop AI tools on you. We walk the journey—educate,
              apply, then build—so AI actually lands in your work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* STEP 1 */}
            <article className="group relative rounded-3xl border border-ink/10 bg-paper p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(11,11,15,0.15)] transition-all">
              <div className="flex items-start justify-between mb-10">
                <span className="font-display text-5xl font-bold text-ink/10 leading-none">
                  01
                </span>
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan-soft text-ink flex items-center justify-center">
                  <GraduationCap className="w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">We Educate</h3>
              <p className="text-ink/60 leading-relaxed">
                Through{" "}
                <span className="font-semibold text-ink">Digdeep Academy</span>,
                we build AI and data literacy—upskilling individuals and teams
                to use AI confidently in daily work.
              </p>
              <div className="mt-6 h-1 w-10 bg-brand-cyan rounded-full group-hover:w-20 transition-all" />
            </article>

            {/* STEP 2 */}
            <article className="group relative rounded-3xl border border-ink/10 bg-paper p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(11,11,15,0.15)] transition-all">
              <div className="flex items-start justify-between mb-10">
                <span className="font-display text-5xl font-bold text-ink/10 leading-none">
                  02
                </span>
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow-soft text-ink flex items-center justify-center">
                  <Zap className="w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">We Apply</h3>
              <p className="text-ink/60 leading-relaxed">
                We translate AI knowledge into real workflows—automating tasks,
                improving decisions, and making work genuinely easier.
              </p>
              <div className="mt-6 h-1 w-10 bg-brand-yellow rounded-full group-hover:w-20 transition-all" />
            </article>

            {/* STEP 3 */}
            <article className="group relative rounded-3xl border border-ink/10 bg-ink text-paper p-8 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(11,11,15,0.4)] transition-all overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-brand-cyan/20 blur-3xl"
              />
              <div className="relative flex items-start justify-between mb-10">
                <span className="font-display text-5xl font-bold text-paper/15 leading-none">
                  03
                </span>
                <div className="w-14 h-14 rounded-2xl bg-paper/10 text-paper flex items-center justify-center backdrop-blur-sm">
                  <Workflow className="w-7 h-7" strokeWidth={2} />
                </div>
              </div>
              <h3 className="relative font-display text-2xl font-bold mb-2">
                We Build
              </h3>
              <p className="relative text-paper/70 leading-relaxed">
                For organizations ready to go further, we develop custom
                AI-powered systems tailored to your processes and goals.
              </p>
              <div className="relative mt-6 h-1 w-10 bg-brand-yellow rounded-full group-hover:w-20 transition-all" />
            </article>
          </div>
        </div>
      </section>

      {/* OFFERINGS — Digdeep + AI Systems */}
      <section
        id="offerings"
        className="relative py-20 lg:py-24 px-6 bg-ink text-paper scroll-mt-24 overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-noise" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-paper/50">
                <span className="h-px w-8 bg-paper/30" />
                What We Do
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
                Two surfaces,{" "}
                <span className="text-brand-yellow">one enablement engine.</span>
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {/* DIGDEEP ACADEMY */}
            <a
              href={DIGDEEP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-paper text-ink p-8 md:p-10 flex flex-col min-h-[520px] justify-between transition-all hover:shadow-[0_30px_80px_-20px_rgba(22,200,216,0.35)]"
            >
              {/* Decorative yellow ring echo */}
              <div
                aria-hidden
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-[18px] border-brand-yellow opacity-80 group-hover:scale-110 transition-transform duration-700"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-ink text-brand-yellow rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
                    Academy · Digdeep.id
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Digdeep Academy
                </h3>
                <p className="text-ink/60 text-lg mb-8 max-w-md leading-relaxed">
                  Build practical AI and data literacy for individuals and teams
                  through structured, hands-on learning.
                </p>
                <ul className="space-y-3 text-ink/80 max-w-md">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand-cyan" strokeWidth={3} />
                    AI &amp; Data Literacy Foundations
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand-cyan" strokeWidth={3} />
                    Applied Workflow Exercises
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-brand-cyan" strokeWidth={3} />
                    Guided Team Upskilling
                  </li>
                </ul>
              </div>

              <div className="relative mt-10 inline-flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink text-brand-yellow group-hover:rotate-[-20deg] transition-transform">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <span className="font-medium text-ink">
                  Visit Digdeep.id
                </span>
              </div>
            </a>

            {/* AI-POWERED SYSTEMS */}
            <a
              id="ai-powered-system"
              href="#contact"
              className="group relative overflow-hidden rounded-3xl bg-brand-cyan text-ink p-8 md:p-10 flex flex-col min-h-[520px] justify-between transition-all hover:shadow-[0_30px_80px_-20px_rgba(255,208,0,0.35)]"
            >
              <div
                aria-hidden
                className="absolute -left-20 -bottom-24 w-80 h-80 rounded-full bg-brand-yellow/60 blur-3xl group-hover:scale-110 transition-transform duration-700"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-ink text-brand-cyan rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/70">
                    Systems · Tenos Data Teknologi
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  AI-Powered Systems
                </h3>
                <p className="text-ink/80 text-lg mb-8 max-w-md leading-relaxed">
                  From workflow automation to custom intelligent systems, we
                  help organizations build what actually moves outcomes.
                </p>
                <ul className="space-y-3 text-ink max-w-md">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-ink" strokeWidth={3} />
                    AI-Driven Workflow Design
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-ink" strokeWidth={3} />
                    Decision Support &amp; Insights
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-ink" strokeWidth={3} />
                    Custom System Development
                  </li>
                </ul>
              </div>

              <div className="relative mt-10 inline-flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-ink text-brand-cyan group-hover:rotate-[-20deg] transition-transform">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </span>
                <span className="font-medium text-ink">Let&apos;s build together</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* WHY TENOS IS DIFFERENT — pull quote + cards */}
      <section id="why" className="relative py-24 lg:py-32 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ink/50">
              <span className="h-px w-8 bg-ink/30" />
              Why Tenos
              <span className="h-px w-8 bg-ink/30" />
            </span>
            <blockquote className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] max-w-5xl mx-auto">
              <span className="text-ink/30">&ldquo;</span>
              AI enablement that starts with{" "}
              <span className="marker-underline">people</span>
              <br className="hidden md:block" /> and scales to{" "}
              <span className="text-ink/50">systems.</span>
              <span className="text-ink/30">&rdquo;</span>
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mt-16">
            <div className="group relative p-6 rounded-3xl bg-paper border border-ink/10 hover:-translate-y-1 hover:border-ink/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan-soft text-ink flex items-center justify-center mb-5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">
                Literacy First
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                We help people understand AI and data clearly, then apply them
                meaningfully through programs at Digdeep Academy.
              </p>
            </div>
            <div className="group relative p-6 rounded-3xl bg-paper border border-ink/10 hover:-translate-y-1 hover:border-ink/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow-soft text-ink flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">
                Applied Workflows
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                We turn AI knowledge into everyday execution—simplifying work,
                reducing friction, and accelerating results.
              </p>
            </div>
            <div className="group relative p-6 rounded-3xl bg-ink text-paper border border-ink hover:-translate-y-1 transition-all overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border-[8px] border-brand-yellow/70"
              />
              <div className="relative w-10 h-10 rounded-xl bg-paper/10 text-paper flex items-center justify-center mb-5 backdrop-blur-sm">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="relative font-display text-lg font-bold mb-2">
                Systems That Scale
              </h3>
              <p className="relative text-paper/70 text-sm leading-relaxed">
                When needed, we design and build AI-powered systems tailored to
                organizational processes and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / MISSION */}
      <section
        id="about"
        className="relative py-24 lg:py-28 px-6 scroll-mt-24 border-t border-ink/10 bg-paper"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ink/50">
              <span className="h-px w-8 bg-ink/30" />
              Our Mission
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Close the gap between AI&apos;s{" "}
              <span className="marker-underline">potential</span> and how people
              actually use it.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-8 lg:border-l border-ink/10">
            <p className="text-lg md:text-xl leading-relaxed text-ink/70">
              Tenos starts with literacy—helping people understand and apply AI
              in their work—and goes all the way to building intelligent systems
              that transform how organizations operate. Practical, human, and
              built to last.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-brand-cyan-soft">
                <dt className="text-[11px] font-mono uppercase tracking-widest text-ink/60">
                  Focus
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold">
                  People-first
                </dd>
              </div>
              <div className="p-5 rounded-2xl bg-brand-yellow-soft">
                <dt className="text-[11px] font-mono uppercase tracking-widest text-ink/60">
                  Method
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold">
                  Hands-on
                </dd>
              </div>
              <div className="p-5 rounded-2xl bg-ink text-paper">
                <dt className="text-[11px] font-mono uppercase tracking-widest text-paper/60">
                  Outcome
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold">
                  Systems
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative px-6 py-24 lg:py-32 scroll-mt-24">
        <div className="relative max-w-6xl mx-auto rounded-[2.5rem] bg-ink text-paper overflow-hidden">
          {/* Decorative layers */}
          <div
            aria-hidden
            className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-cyan/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -right-16 w-[380px] h-[380px] rounded-full border-[22px] border-brand-yellow/80 animate-float"
          />

          <div className="relative p-10 md:p-20 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper/10 border border-paper/20 text-[11px] font-mono uppercase tracking-[0.25em] text-paper/80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              Start Today
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Build your AI journey
              <br />
              with <span className="text-brand-yellow">Tenos</span>.
            </h2>
            <p className="mt-6 text-paper/70 text-lg max-w-xl mx-auto">
              Whether you&apos;re just starting your AI journey or ready to build
              an intelligent system, we&apos;re here to guide you every step of
              the way.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={DIGDEEP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 pl-6 pr-2 py-2 bg-paper text-ink rounded-full font-semibold hover:bg-paper/90 transition-all"
              >
                Visit Digdeep Academy
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-cyan text-ink group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-paper/30 text-paper rounded-full font-semibold hover:bg-paper/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-paper">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-ink/60">
          <div className="flex items-center gap-3">
            <Image
              src="/tenos-logomark.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <div>
              <p className="font-semibold text-ink">Tenos Data Teknologi</p>
              <p className="text-xs">
                © {new Date().getFullYear()} — All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={DIGDEEP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink hover:text-ink/70 transition-colors"
            >
              Digdeep.id
            </a>
            <span className="text-ink/30">·</span>
            <span>Academy powered by Tenos</span>
            <span className="text-ink/30">·</span>
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
