import Image from "next/image";
import ContentCard from "@/app/components/ContentCard";
import { articles, ebooks, summaries } from "@/lib/content";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

      {/* ─── Navigation ───────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <span className="text-lg font-black tracking-tight text-white">
          MAX <span style={{ color: "#e5e5e5", fontWeight: 300 }}>BARDE</span>
        </span>
        <a href="#content" className="nav-link rounded-full border px-5 py-2 text-sm font-medium">
          Free Resources
        </a>
      </nav>

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-8 py-16 md:flex-row md:items-stretch md:gap-0 md:px-16">

          {/* Left — Text */}
          <div className="flex flex-1 flex-col justify-center md:pr-16">
            <div className="mb-6 flex items-center gap-3">
              <div style={{ width: 32, height: 2, backgroundColor: "#ffffff" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#71717a" }}>
                Coach · Author · Researcher
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[1.0] tracking-tight text-white md:text-6xl lg:text-7xl">
              Train your body.<br />
              <span style={{ color: "#a1a1aa", fontWeight: 300 }}>Master your mind.</span>
            </h1>

            <p className="mb-10 max-w-md text-base leading-relaxed" style={{ color: "#71717a" }}>
              Science-based articles, practical ebooks, and book summaries on
              performance, longevity, and psychology — all free.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#content"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#ffffff", color: "#080808" }}
              >
                Browse free resources
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-10">
              {[
                { num: "9+", label: "Free Resources" },
                { num: "3", label: "Categories" },
                { num: "100%", label: "Free" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white">{s.num}</p>
                  <p className="text-xs" style={{ color: "#52525b" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div className="relative flex w-full items-end justify-center md:w-[45%]">
            {/* Gradient fade on left edge */}
            <div
              className="absolute inset-y-0 left-0 z-10 w-32 hidden md:block"
              style={{ background: "linear-gradient(to right, #080808, transparent)" }}
            />
            {/* Gradient fade on bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 z-10 h-24"
              style={{ background: "linear-gradient(to top, #080808, transparent)" }}
            />
            <div className="relative h-[70vh] w-full max-w-sm md:max-w-none md:h-[85vh]">
              <Image
                src="/max-photo.jpg"
                alt="Max Barde"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Divider ──────────────────────────────────────────────── */}
      <div style={{ height: "1px", backgroundColor: "#161616" }} />

      {/* ─── Topics strip ─────────────────────────────────────────── */}
      <div className="overflow-x-auto py-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="flex min-w-max items-center gap-8 px-8 md:px-16 md:min-w-0 md:flex-wrap md:justify-center">
          {["Performance", "Longevity", "Psychology", "Nutrition", "Philosophy", "Physiology", "Book Summaries"].map((t) => (
            <span key={t} className="text-xs font-medium uppercase tracking-widest" style={{ color: "#3f3f46" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ height: "1px", backgroundColor: "#161616" }} />

      {/* ─── Content sections ─────────────────────────────────────── */}
      <div id="content" className="mx-auto max-w-6xl space-y-24 px-8 py-24 md:px-16">

        {/* Articles */}
        <section>
          <SectionHeader label="Articles" title="Deep dives & insights" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((item) => <ContentCard key={item.id} item={item} />)}
          </div>
        </section>

        {/* Ebooks */}
        <section>
          <SectionHeader label="Ebooks" title="Practical guides" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((item) => <ContentCard key={item.id} item={item} />)}
          </div>
        </section>

        {/* Book Summaries */}
        <section>
          <SectionHeader label="Book Summaries" title="Key ideas, fast" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {summaries.map((item) => <ContentCard key={item.id} item={item} />)}
          </div>
        </section>
      </div>

      {/* ─── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t px-8 py-10 md:px-16" style={{ borderColor: "#161616" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-sm font-black tracking-tight text-white">
            MAX <span style={{ color: "#3f3f46", fontWeight: 300 }}>BARDE</span>
          </span>
          <p className="text-xs" style={{ color: "#3f3f46" }}>
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b pb-5" style={{ borderColor: "#161616" }}>
      <div>
        <span className="mb-1 block text-xs font-semibold uppercase tracking-widest" style={{ color: "#52525b" }}>
          {label}
        </span>
        <h2 className="text-2xl font-black text-white">{title}</h2>
      </div>
    </div>
  );
}
