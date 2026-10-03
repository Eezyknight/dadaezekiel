import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";

const work: { title: string; outlet: string; kind: string; year: string; excerpt: string; to?: string; link?: string }[] = [
  {
    title: "Identity Verification Was Built for Humans. Agentic Commerce Changes the Equation",
    outlet: "Self-Published",
    kind: "Thought Leadership",
    year: "2026",
    excerpt:
      "AI shopping agents now transact on behalf of humans. Why traditional identity verification falls short, and how Know Your Agent (KYA) can close the gap.",
    to: "/articles/know-your-agent-agentic-commerce",
  },
  {
    title: "How Businesses Can Catch Deepfake Fraud Before It Becomes a Bigger Problem",
    outlet: "Self-Published",
    kind: "Product-Focused Blog",
    year: "2026",
    excerpt:
      "Why selfie and liveness checks alone no longer stop deepfakes, and how layered identity verification catches fraud before it grows.",
    to: "/articles/catch-deepfake-fraud-layered-identity-verification",
  },
  {
    title: "Pig Butchering Scams Explained: How Identity Verification Helps",
    outlet: "Self-Published",
    kind: "Educational Guide",
    year: "2026",
    excerpt:
      "How pig butchering scams work, why deepfakes and AI agents are making them harder to detect, and how layered identity verification helps platforms stop fraud early.",
    to: "/articles/pig-butchering-scams-identity-verification",
  },
  {
    title: "Is AI going to kill SaaS? The rise of AI software agents",
    outlet: "Self-Published",
    kind: "Thought Leadership",
    year: "2026",
    excerpt:
      "A thought-provoking examination of how AI software agents are challenging traditional SaaS models and redefining what businesses expect from software.",
    to: "/articles/is-ai-going-to-kill-saas",
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Ezekiel Dada — Identity Verification & Fraud Prevention Writer" },
      {
        name: "description",
        content:
          "A collection of identity verification and fraud prevention writing by Ezekiel Dada: blogs, long-form articles, website copy, and ghostwriting.",
      },
      { property: "og:title", content: "Selected Work — Ezekiel Dada" },
      {
        property: "og:description",
        content:
          "A collection of identity verification and fraud prevention writing: blogs, long-form articles, website copy, and ghostwriting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dadaezekiel.lovable.app/work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dadaezekiel.lovable.app/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-28">
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Selected Work</p>
          <h1 className="display-type mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Pieces worth your time.
          </h1>

          <ul className="mt-14 divide-y divide-border border-y border-border">
            {work.map((w) => {
              const cardClass =
                "group grid gap-4 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-2";
              const inner = (
                <>
                  <div className="sm:w-52">
                    <p className="eyebrow">
                      {w.kind} · {w.year}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{w.outlet}</p>
                  </div>
                  <div>
                    <h2 className="display-type text-2xl underline decoration-border underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent sm:text-3xl">
                      {w.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {w.excerpt}
                    </p>
                  </div>
                </>
              );
              if ("to" in w && w.to) {
                return (
                  <li key={w.title}>
                    <Link to={w.to} className={cardClass}>
                      {inner}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={w.title}>
                  {w.link ? (
                    <a href={w.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              ← Back home
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ezekiel Dada. All words my own.</p>
          <nav className="flex gap-6">
            <Link to="/work" className="transition-colors hover:text-foreground">
              Work
            </Link>
            <Link to="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
