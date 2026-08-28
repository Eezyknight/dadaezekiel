import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";

const work = [
  {
    title: "Best OnlyFans Search Engines in 2026",
    outlet: "Self-Published",
    kind: "Blog",
    year: "2026",
    excerpt:
      "A compared list of the top OnlyFans search engines for finding specific creators — with natural promotion of my client’s brand as the best option.",
    link: "https://blog.clarityverify.com/onlyfans-search-engines-finders/",
  },
  {
    title: "Anonsms: How to Send Anonymous SMS Online",
    outlet: "Company",
    kind: "Web Copy",
    year: "2026",
    excerpt:
      "Wrote a step-by-step guide on sending anonymous SMS through Anonsms, highlighting its speed, safety, privacy, and delivery success rate.",
    link: "https://www.anonsms.com/how-to-send-anonymous-sms",
  },
  {
    title: "How to Block Your Number: 5 Easy Ways",
    outlet: "Confidential",
    kind: "Ghostwriting",
    year: "2026",
    excerpt:
      "Detailed 1-1 meeting, research, and writing for a founder who’s very busy — but now gets quoted for it.",
    link: "https://www.anonsms.com/blog/how-to-block-your-number/",
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Ezekiel Dada - SaaS & Tech Content Writer" },
      {
        name: "description",
        content:
          "A collection of SaaS and technology writing by Ezekiel Dada: blogs, long-form articles, website copy, and ghostwriting.",
      },
      { property: "og:title", content: "Selected Work — Ezekiel Dada" },
      {
        property: "og:description",
        content:
          "A collection of SaaS and technology writing: blogs, long-form articles, website copy, and ghostwriting.",
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
            {work.map((w) => (
              <li key={w.title}>
                {w.link ? (
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-4 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-2"
                  >
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
                  </a>
                ) : (
                  <div className="group grid gap-4 py-8 transition-colors hover:bg-secondary/40 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-2">
                    <div className="sm:w-52">
                      <p className="eyebrow">
                        {w.kind} · {w.year}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{w.outlet}</p>
                    </div>
                    <div>
                      <h2 className="display-type text-2xl transition-colors group-hover:text-accent sm:text-3xl">
                        {w.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {w.excerpt}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              ← Back home
            </Link>
            <a
              href="mailto:dadaezekiel12@gmail.com"
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
          <p>© {new Date().getFullYear()} Ezekiel Dada. All words his own.</p>
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
