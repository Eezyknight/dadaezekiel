import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import heroPortrait from "@/assets/writer-hero.jpg";
import ezekielPortrait from "@/assets/ezekiel-portrait.png.asset.json";

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
  { value: "5+", label: "Years Writing" },
  { value: "98%", label: "Client Retention" },
];

const services = [
  {
    title: "Blogs & Long-Form Articles",
    copy: "Research-driven SaaS and Tech content that informs, ranks, and builds authority.",
  },
  {
    title: "Website & Brand Copy",
    copy: "Clear, persuasive copy that communicates your product, value, and positioning.",
  },
  {
    title: "Ghostwriting",
    copy: "Thoughtful content written in your voice, without taking the spotlight.",
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
  "ClarityVerify",
  "Anonsms",
  "NotifyPartners",
  "AiPPT",
  "Gleepackaging",
  "Clingold",
  "Kesheen",
  "Nendine",
  "Tulipiece",
  "Zearrow",
];

const testimonials = [
  {
    quote:
      "Exceptional writer who understands complex topics and turns them into clear, engaging, and search-focused content.",
    name: "ClarityVerify",
    role: "",
  },
  {
    quote:
      "Ezekiel hit the pinnacle with the set of copies he wrote for our website. He’s the best of the best.",
    name: "Anonsms",
    role: "",
  },
  {
    quote:
      "He could relay our SaaS product with any topic and make us stand out. I didn’t have to go back-and-forth with him.",
    name: "",
    role: "Lead Editor: AiPPT",
  },
];


function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-spot">
        <div className="relative flex min-h-[96svh] flex-col justify-end overflow-hidden">
          {/* Portrait */}
          <img
            src={heroPortrait}
            alt="Portrait of writer Mara Ellison holding a notebook"
            width={1200}
            height={1504}
            className="hero-portrait pointer-events-none absolute bottom-0 left-1/2 h-[78svh] w-auto max-w-none -translate-x-1/2 object-cover object-top sm:h-[88svh]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backgroundImage: "var(--gradient-fade)" }}
          />

          {/* Eyebrow */}
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
            <p className="rise display-type absolute bottom-[42svh] left-5 max-w-[8em] text-2xl leading-tight text-foreground/90 sm:left-8 sm:text-3xl">
              SaaS & Tech
              <br />
              Content Writer
            </p>
          </div>

          {/* Name */}
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 sm:pb-14">
            <h1 className="rise name-fade text-center text-[17vw] leading-[0.8] tracking-tight sm:text-[15vw]">
              <span className="display-type italic">Ezekiel</span>{" "}
              <span className="font-semibold tracking-[-0.03em]">Dada</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border">
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 px-5 py-10 text-center sm:px-8">
            {stats.map((s) => (
              <div key={s.label} className="px-4">
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
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">About Me</p>
            <h2 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">
              SaaS & Tech Writer.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              I'm a SaaS and Tech writer who turns complex ideas into clear, useful content that
              helps businesses get found, build trust, and convert readers into customers.
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              I started writing professionally over five years ago, working across several
              industries and learning what makes content more than just words on a page. Today, I
              focus exclusively on SaaS and technology companies, creating blog content and website
              copy built around a clear understanding of the audience.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={ezekielPortrait.url}
              alt="Portrait of Ezekiel Dada, SaaS and Tech writer"
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
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50"
              >
                <div>
                  <p className="eyebrow">0{i + 1}</p>
                  <h3 className="display-type mt-6 text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
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
            Pieces worth your time.
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
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-2xl border border-border bg-card p-8">
                <p className="display-type text-2xl leading-snug">“{t.quote}”</p>
                <footer className="mt-6 text-sm text-muted-foreground">
                  {t.name ? (
                    <>
                      &nbsp;—&nbsp;<span className="text-foreground">{t.name}</span>{t.role && ` — ${t.role}`}
                    </>
                  ) : (
                    <>&nbsp;—&nbsp;{t.role}</>
                  )}
                </footer>
              </blockquote>
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
          </nav>
        </div>
      </footer>
    </div>
  );
}
