const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Rates", href: "#rates" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <div aria-hidden="true" />


        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1 rounded-full bg-secondary/60 p-1 backdrop-blur sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Commission a piece
          </a>
        </div>
      </nav>
    </header>
  );
}
