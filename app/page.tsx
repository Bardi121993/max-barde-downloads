import ContentCard from "@/app/components/ContentCard";
import { articles, ebooks, summaries } from "@/lib/content";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pb-24 pt-24 text-center">
        {/* subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(251,191,36,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <span
            className="mb-6 inline-block rounded-full border px-4 py-1.5 text-xs font-medium tracking-widest uppercase"
            style={{ borderColor: "#2a2a2a", color: "#71717a" }}
          >
            Free Knowledge Hub
          </span>

          <h1 className="mb-5 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
            Max{" "}
            <span style={{ color: "#fbbf24" }}>Barde</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: "#71717a" }}>
            Articles, ebooks, and book summaries on performance, longevity,
            psychology, and philosophy — all free for you.
          </p>

          <a
            href="#content"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#fbbf24", color: "#0a0a0a" }}
          >
            Browse free resources
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── Divider ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6">
        <div style={{ height: "1px", backgroundColor: "#1a1a1a" }} />
      </div>

      {/* ─── Content sections ─────────────────────────────────────── */}
      <div id="content" className="mx-auto max-w-6xl space-y-20 px-6 py-20">

        {/* Articles */}
        <section>
          <SectionHeader
            label="Articles"
            title="Deep dives & insights"
            description="Evidence-based writing on the topics that matter most for your performance and wellbeing."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Ebooks */}
        <section>
          <SectionHeader
            label="Ebooks"
            title="Practical guides"
            description="Actionable, no-fluff guides you can read in an afternoon and apply the same day."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Book Summaries */}
        <section>
          <SectionHeader
            label="Book Summaries"
            title="Key ideas, fast"
            description="The best ideas from the best books — distilled so you get the value without the time cost."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {summaries.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>

      {/* ─── Footer ───────────────────────────────────────────────── */}
      <footer
        className="border-t px-6 py-10 text-center"
        style={{ borderColor: "#1a1a1a" }}
      >
        <p className="text-sm" style={{ color: "#3f3f46" }}>
          © {new Date().getFullYear()} Max Barde · All rights reserved
        </p>
      </footer>
    </main>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <span
        className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest"
        style={{ color: "#fbbf24" }}
      >
        {label}
      </span>
      <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
      <p className="max-w-lg text-sm leading-relaxed" style={{ color: "#52525b" }}>
        {description}
      </p>
    </div>
  );
}
