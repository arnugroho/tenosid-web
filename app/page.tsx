import Link from "next/link";
import {
  ArrowRight,
  Check,
  Database,
  GraduationCap,
  Building2,
  Users,
  Briefcase,
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
            Defining the Future of Data Talent
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 max-w-4xl mx-auto leading-tight">
            Building Data & AI Talent for <span className="text-zinc-500">Organizations</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tenos builds Data & AI talent through Digdeep Academy and deploys them as ready-to-work manpower for companies and institutions.
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
              Need Data Talent?
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
              <h3 className="text-xl font-bold mb-3">We Train</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Through <span className="font-semibold text-zinc-900">Digdeep Academy</span>, we provide intensive, industry-aligned education.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                <Check className="w-10 h-10 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Validate</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Talent is proven through <span className="font-semibold text-zinc-900">Real Projects & Mentoring</span> before graduation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
                <Briefcase className="w-10 h-10 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">We Deploy</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs">
                Ready-to-work <span className="font-semibold text-zinc-900">Data & AI Manpower</span> integrated into your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) TWO PILLARS OF TENOS */}
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
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Digdeep Academy</h3>
                <p className="text-zinc-400 text-lg mb-8 max-w-sm">The talent factory where potential is transformed into professional capability.</p>
                <ul className="space-y-3 mb-8 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Intensive Bootcamps
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Real-world Case Studies
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    Expert Mentorship
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
                  <Users className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-zinc-900">Data & AI Manpower</h3>
                <p className="text-zinc-500 text-lg mb-8 max-w-sm">Seamless deployment of trained professionals into your workforce.</p>
                <ul className="space-y-3 mb-8 text-zinc-600">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                    Pre-vetted Skills
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                    Immediate Productivity
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900"></div>
                    Flexible Engagement Models
                  </li>
                </ul>
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-transparent group-hover:border-zinc-900 transition-colors">
                  Hire Talent <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            &quot;We don&apos;t search for talent. <br className="hidden md:block" />
            <span className="text-zinc-400">We build them.</span>&quot;
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-16 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Internal Academy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We control the quality of talent from day one through our rigorous training programs at Digdeep Academy.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Real Projects</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every candidate has delivered actual value on real-world data projects before they reach you.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-3 text-white">Ready-to-Work</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No lengthy onboarding needed. Our talent comes equipped with the right tools, mindset, and skills.
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
              <Building2 className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">Government Institutions</h3>
              <p className="text-zinc-500 text-sm">Building sovereign data capabilities and modernizing public infrastructure.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <BarChart3 className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">Companies w/o Data Teams</h3>
              <p className="text-zinc-500 text-sm">Jumpstarting data initiatives without the overhead of hiring a full department.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <Users className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">HR & Management</h3>
              <p className="text-zinc-500 text-sm">Providing deep workforce insights and analytics for better decision making.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
              <Brain className="w-8 h-8 text-zinc-900 mb-6" />
              <h3 className="font-bold text-lg mb-2">BI/AI Initiatives</h3>
              <p className="text-zinc-500 text-sm">Organizations ready to scale their intelligence capabilities with trained experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6) ABOUT TENOS */}
      <section id="about" className="py-24 px-6 bg-zinc-50 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-zinc-600">
            Tenos exists to solve the critical shortage of ready-to-work Data & AI talent. We believe the best way to find talent is not to search for it, but to build it ourselves. Through <span className="font-semibold text-zinc-900">Digdeep Academy</span>, we forge the next generation of data experts, ensuring they are not just certified, but capable.
          </p>
        </div>
      </section>

      {/* 7) FINAL CTA SECTION */}
      <section id="contact" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-transparent opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Start with the Right Talent</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Whether you want to enroll in Digdeep Academy or hire a trained Data & AI team, we&apos;re ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DIGDEEP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all inline-flex items-center justify-center gap-2"
              >
                Visit Digdeep
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
            <span>— Academy & Talent Factory powered by Tenos</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
