import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import heroPortrait from "@/assets/writer-hero.jpg";
import deskImage from "@/assets/desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara Ellison — Writer, Essayist & Brand Storyteller" },
      {
        name: "description",
        content:
          "Portfolio of Mara Ellison: long-form essays, narrative brand copy, and ghostwritten features for magazines and founders. Selected work, services and rates.",
      },
      { property: "og:title", content: "Mara Ellison — Writer & Brand Storyteller" },
      {
        property: "og:description",
        content:
          "Essays, editorial features and narrative brand copy. Selected work, services and rates from a writer with 120+ published pieces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "120+", label: "Published Pieces" },
  { value: "9", label: "Years Writing" },
  { value: "4.1M", label: "Words Read" },
  { value: "96%", label: "Client Retention" },
];

const services = [
  {
    title: "Long-Form Essays",
    copy: "Reported, structured essays that hold a reader from the first line to the last paragraph.",
    tags: ["Research", "Structure", "Interviews", "Line editing"],
  },
  {
    title: "Brand & Editorial Copy",
    copy: "Voice work for founders and studios — landing pages, manifestos, launch narratives.",
    tags: ["Tone of voice", "Web copy", "Launch narrative", "Naming"],
  },
  {
    title: "Ghostwriting",
    copy: "Bylines, newsletters and op-eds written in your voice, on your schedule, invisibly.",
    tags: ["Op-eds", "Newsletters", "Keynotes", "Books"],
  },
];

const work = [
  {
    title: "The Quiet Hours",
    outlet: "The Atlantic Ideas",
    kind: "Essay",
    year: "2026",
    excerpt:
      "A 6,000-word essay on the vanishing habit of unproductive attention — and what it costs a culture that stopped being bored.",
  },
  {
    title: "Everything We Built Twice",
    outlet: "Fathom Studio",
    kind: "Brand Narrative",
    year: "2025",
    excerpt:
      "Rewrote the voice of a design studio from the manifesto down, cutting the site copy by half and doubling inbound.",
  },
  {
    title: "Letters From the Interior",
    outlet: "Self-published",
    kind: "Newsletter",
    year: "2024—",
    excerpt:
      "A twice-monthly letter on craft and attention, read by 24,000 writers, editors and stubborn people.",
  },
  {
    title: "The Founder Who Wouldn't Speak",
    outlet: "Confidential",
    kind: "Ghostwriting",
    year: "2025",
    excerpt:
      "Eighteen months of op-eds and keynotes for a founder who hates writing — and now gets quoted for it.",
  },
];

const marquee = [
  "The Atlantic",
  "Aeon",
  "Fathom Studio",
  "Longreads",
  "The Paris Review Daily",
  "Monocle",
  "Stripe Press",
];

const testimonials = [
  {
    quote:
      "Mara turned nine months of half-formed thinking into an essay that our board now hands out to new hires.",
    name: "Iris Kwon",
    role: "Founder, Fathom Studio",
  },
  {
    quote:
      "She edits like a surgeon and drafts like a novelist. I have never sent back a piece of hers with notes.",
    name: "Daniel Reyes",
    role: "Features Editor, Longreads",
  },
];

const rates = [
  {
    name: "The Piece",
    price: "$2,400",
    unit: "per essay",
    items: ["Up to 3,000 words", "Research & interviews", "Two revision rounds", "3-week delivery"],
  },
  {
    name: "The Voice",
    price: "$6,800",
    unit: "per project",
    items: [
      "Full site or brand copy",
      "Tone-of-voice guide",
      "Unlimited revisions in scope",
      "6-week delivery",
    ],
    featured: true,
  },
  {
    name: "The Retainer",
    price: "$4,200",
    unit: "per month",
    items: ["Four pieces monthly", "Ghostwritten bylines", "Editorial calendar", "Priority access"],
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-spot">
        <div className="relative mx-auto grid min-h-[92svh] max-w-7xl grid-cols-1 items-center px-5 pt-28 sm:px-8 lg:grid-cols-2">
          <div className="rise pb-10 lg:pb-16">
            <p className="eyebrow">Writer · Essayist · Ghostwriter</p>
            <h1 className="display-type mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Words that keep
              <br />
              <span className="text-accent italic">people reading.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              I'm Mara Ellison — I write essays, editorial features and brand narrative for people
              who would rather be understood than be loud.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Read selected work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Start a project
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={heroPortrait}
                alt="Portrait of writer Mara Ellison holding a notebook"
                width={1200}
                height={1504}
                className="h-[46svh] w-full object-cover object-top lg:h-[70svh]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: "var(--gradient-fade)" }}
              />
              <figcaption className="absolute bottom-5 left-6 text-sm text-muted-foreground">
                Mara Ellison, studio, 2026
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="px-5 py-8 sm:px-8">
                <p className="display-type text-3xl sm:text-4xl">{s.value}</p>
                <p className="eyebrow mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee of bylines */}
      <section aria-label="Published in" className="overflow-hidden border-y border-border py-6">
        <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="display-type text-xl text-muted-foreground">
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* Featured / the writer's cut */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Collected Works 2026</p>
            <h2 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">
              The writer's cut.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              A short reader of the pieces I'd hand someone first — three essays, one brand
              manifesto, and the letter that started the newsletter.
            </p>
            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Open the reader
              <span aria-hidden>→</span>
            </a>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={deskImage}
              alt="An open book and fountain pen lit by a single beam of light"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow">Services</p>
          <h2 className="display-type mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
            What I write.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            Writing and editorial work for magazines, founders and studios who need language that
            carries weight.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50"
              >
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="display-type mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow">Selected Work</p>
          <h2 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">
            Pieces worth your evening.
          </h2>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {work.map((w) => (
              <li key={w.title}>
                <a
                  href="#contact"
                  className="group grid gap-4 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-2"
                >
                  <div className="sm:w-52">
                    <p className="eyebrow">
                      {w.kind} · {w.year}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{w.outlet}</p>
                  </div>
                  <div>
                    <h3 className="display-type text-2xl transition-colors group-hover:text-accent sm:text-3xl">
                      {w.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {w.excerpt}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow">Kind Words</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-border bg-card p-8">
                <p className="display-type text-2xl leading-snug">“{t.quote}”</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  <span className="text-foreground">{t.name}</span> — {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <p className="eyebrow">Rates</p>
          <h2 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">
            Simple, per-piece pricing.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {rates.map((r) => (
              <article
                key={r.name}
                className={
                  r.featured
                    ? "rounded-2xl border border-accent/60 bg-card p-8 shadow-lift"
                    : "rounded-2xl border border-border bg-card p-8"
                }
              >
                <p className="eyebrow">{r.name}</p>
                <p className="display-type mt-5 text-4xl">{r.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.unit}</p>
                <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                  {r.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent" aria-hidden>
                        —
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={
                    r.featured
                      ? "mt-8 block rounded-full bg-accent px-5 py-3 text-center text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
                      : "mt-8 block rounded-full border border-border px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-secondary"
                  }
                >
                  Enquire
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-spot">
        <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
          <p className="eyebrow">Next Draft</p>
          <h2 className="display-type mt-5 text-4xl leading-tight sm:text-6xl">
            Tell me what you're
            <br />
            <span className="text-accent italic">trying to say.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
            Send a paragraph about the piece, the deadline and the reader. I reply to every note
            within two working days.
          </p>
          <a
            href="mailto:hello@maraellison.com"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            hello@maraellison.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Mara Ellison. All words her own.</p>
          <nav className="flex gap-6">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#rates" className="transition-colors hover:text-foreground">
              Rates
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
