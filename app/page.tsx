import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  GraduationCap,
  Building2,
  Users,
  Workflow,
  BarChart3,
  Brain,
  Mail,
} from "lucide-react";

const DIGDEEP_URL = "https://digdeep.id";
const CONTACT_EMAIL = "hello@tenos.id";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100/80 bg-white/80 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="inline-block w-6 h-6 rounded-md bg-zinc-900" aria-hidden />
            Tenos
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
            <Link href="#how" className="hover:text-zinc-900 transition-colors">How It Works</Link>
            <Link href="#digdeep" className="hover:text-zinc-900 transition-colors">Digdeep Academy</Link>
            <Link href="#use-cases" className="hover:text-zinc-900 transition-colors">Use Cases</Link>
            <Link href="#about" className="hover:text-zinc-900 transition-colors">About</Link>
          </div>
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Contact
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </header>

      {/* 1) HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-600 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI for Everyone. Systems for the Future.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 max-w-4xl mx-auto leading-tight">
            Empowering People & Organizations with <span className="text-zinc-500">AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            From AI literacy to intelligent systems - Tenos helps you work smarter, faster, and further.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#digdeep"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Digdeep Academy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      {/* 2) HOW TENOS WORKS */}
      <section id="how" className="py-24 px-6 bg-zinc-50/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-16 text-center">How Tenos Works</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-zinc-200 -z-10"></div>

            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                <GraduationCap className="w-10 h-10 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Educate</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Through <span className="font-semibold text-zinc-900">Digdeep Academy</span>, we build AI literacy and upskill individuals and teams to use AI confidently in their daily work.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                <Check className="w-10 h-10 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Apply</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                We help translate AI knowledge into real workflows - automating tasks, improving decisions, and making work genuinely easier.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                <Workflow className="w-10 h-10 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Build</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                For organizations ready to go further, we develop custom AI-powered systems tailored to their specific needs and processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) TENOS ENABLEMENT SPECTRUM */}
      <section id="digdeep" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Card */}
            <a
              href={DIGDEEP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-zinc-900 rounded-3xl p-10 text-white flex flex-col min-h-[500px] justify-between transition-all hover:shadow-2xl hover:shadow-zinc-900/20"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Digdeep Academy</h3>
                <p className="text-zinc-400 text-lg mb-8 max-w-sm">Build practical AI literacy for individuals and teams through structured, hands-on learning.</p>
                <ul className="space-y-3 mb-8 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    AI Literacy Foundations
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Applied Workflow Exercises
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Guided Team Upskilling
                  </li>
                </ul>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-sm font-medium border-b border-transparent group-hover:border-white transition-colors">
                  Visit Digdeep.id <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              {/* Abstract decorative element */}
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-zinc-800/50 rounded-full blur-3xl -mr-16 -mb-16"></div>
            </a>

            {/* Right Card */}
            <a
              href="#contact"
              className="group relative overflow-hidden bg-zinc-50 border border-zinc-200 rounded-3xl p-10 flex flex-col min-h-[500px] justify-between transition-all hover:border-zinc-300"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-zinc-900">AI-Powered Systems</h3>
                <p className="text-zinc-500 text-lg mb-8 max-w-sm">From workflow automation to custom intelligent systems, we help organizations build what moves outcomes.</p>
                <ul className="space-y-3 mb-8 text-zinc-600">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                    AI-Driven Workflow Design
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                    Decision Support & Insights
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                    Custom System Development
                  </li>
                </ul>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-transparent group-hover:border-zinc-900 transition-colors">
                  Let&apos;s Build Together <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 4) WHY TENOS IS DIFFERENT */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            &quot;AI enablement that starts with people <br className="hidden md:block" />
            <span className="text-zinc-400">and scales to systems.</span>&quot;
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-16 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Literacy First</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We help people understand AI clearly, then apply it meaningfully through programs at Digdeep Academy.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Applied Workflows</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We turn AI knowledge into everyday execution by simplifying work, reducing friction, and accelerating results.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Systems That Scale</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                When needed, we design and build AI-powered systems tailored to organizational processes and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5) USE CASES */}
      <section id="use-cases" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl font-bold tracking-tight max-w-xl">
              Who We Empower
            </h2>
            <p className="text-zinc-500 max-w-sm">
              From public sector initiatives to private enterprise growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <Users className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">Professionals & Teams</h3>
              <p className="text-zinc-500 text-sm">Individuals who want to use AI to simplify and accelerate their everyday work.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <Building2 className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">Government & Public Sector</h3>
              <p className="text-zinc-500 text-sm">Building digital and AI capability from within public institutions.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <BarChart3 className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">Business Leaders</h3>
              <p className="text-zinc-500 text-sm">Using AI for smarter decisions, better insights, and operational efficiency.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <Brain className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">Organizations Ready to Build</h3>
              <p className="text-zinc-500 text-sm">Companies looking to develop custom AI systems that solve real business problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6) ABOUT TENOS */}
      <section id="about" className="py-24 px-6 bg-zinc-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-zinc-600">
            Tenos exists to close the gap between AI&apos;s potential and how people actually use it. We start with literacy - helping people understand and apply AI in their work - and go all the way to building intelligent systems that transform how organizations operate.
          </p>
        </div>
      </section>

      {/* 7) FINAL CTA SECTION */}
      <section id="contact" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-transparent opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Build Your AI Journey with Tenos</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re just starting your AI journey or ready to build an intelligent system, we&apos;re here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DIGDEEP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Visit Digdeep Academy
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Talent%20Inquiry%20—%20Tenos`}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8) FOOTER */}
      <footer className="py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Tenos Data Teknologi. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <a
              href={DIGDEEP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-900 hover:underline"
            >
              Digdeep.id
            </a>
            <span>- Academy powered by Tenos</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
