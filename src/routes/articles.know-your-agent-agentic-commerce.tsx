import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import heroImg from "@/assets/agentic-1.png";

const TITLE = "Identity Verification Was Built for Humans. Agentic Commerce Changes the Equation";
const DESCRIPTION =
  "AI shopping agents now transact on behalf of humans. Why traditional identity verification falls short, and how Know Your Agent (KYA) can close the gap.";
const URL = "https://dadaezekiel.lovable.app/articles/know-your-agent-agentic-commerce";

export const Route = createFileRoute("/articles/know-your-agent-agentic-commerce")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Ezekiel Dada` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ArticlePage,
});

function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
    </a>
  );
}
const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="display-type pt-8 text-2xl sm:text-3xl">{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="display-type pt-4 text-xl">{children}</h3>
);

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Thought Leadership · 2026</p>
          <h1 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">{TITLE}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            By Ezekiel Dada — Identity Verification &amp; Fraud Prevention Writer
          </p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              For years, digital identity verification has revolved around a simple question:{" "}
              <strong>Who is the person on the other side of this transaction?</strong>
            </p>
            <p>
              That question has produced an entire industry of liveness detection, document authentication,
              behavioral analysis, and step-up verification.
            </p>
            <figure className="my-6">
              <img src={heroImg} alt="AI agent making a purchase on behalf of a human" className="mx-auto w-full rounded-lg border border-border" />
            </figure>
            <p>
              Now, AI has been on what seems to be an unstoppable rise. AI shopping agents now browse merchant
              catalogs, compare prices, hold payment credentials, and submit checkout requests entirely on behalf of
              humans who may not be present.
            </p>
            <p>What happens when a sophisticated AI agent is the one making the transaction?</p>
            <p>
              From the merchant’s POV, the customer is a human. Whereas the entity interacting with the merchant is
              software.
            </p>
            <p>
              That creates a problem traditional identity verification was never built to answer:{" "}
              <strong>How does a business know if an agent is doing the transaction and who authorized it?</strong>
            </p>
            <p>The industry has recognized the gap.</p>
            <p>Has it closed it? Not yet.</p>

            <H2>Why This Isn’t Hypothetical Anymore</H2>
            <p>
              It would have been easy to treat this as a future problem. You know… something to plan for once agentic
              commerce matures. But it isn’t.
            </p>
            <p>
              Security researchers at Palo Alto Networks’ Unit 42 have already identified{" "}
              <A href="https://unit42.paloaltonetworks.com/">
                fraud tooling built specifically to exploit agentic shopping flows
              </A>
              , including the possibility of scammers liquidating a retailer’s cash reserves before a human even walks
              into the office.
            </p>
            <p>
              The friction is showing on the legitimate side too. Visa says that{" "}
              <A href="https://corporate.visa.com/en/solutions/intelligent-commerce/vcs-agentic-ai.html#What_are_the_primary_fraud_risks_in_agentic_commerce_-1357618380">
                agent-initiated transactions are evaluated using existing fraud signals
              </A>{" "}
              alongside additional context, like behavioral patterns, device-level risk identifiers, and deviation from
              expected activity. This creates two problems. First, a legitimate agent can be flagged as a bot and
              blocked. Second, a malicious actor can try to make automated activity look legitimate.
            </p>

            <H2>The Industry’s Early Answers and Their Limits</H2>
            <p>
              Several frontliners of the industry have been working behind the scenes, and efforts are underway to
              close the gap.
            </p>
            <H3>
              <A href="https://investor.visa.com/news/news-details/2025/Visa-Introduces-Trusted-Agent-Protocol-An-Ecosystem-Led-Framework-for-AI-Commerce/default.aspx">
                Visa Trusted Agent Protocol
              </A>
            </H3>
            <p>
              This protocol is designed to help merchants recognize AI agents through cryptographically signed
              messages. It can provide information about the agent, the consumer it is acting for, and payment
              credentials.
            </p>
            <H3>
              <A href="https://www.mastercard.com/mea/en/business/artificial-intelligence/mastercard-agent-pay.html">
                Mastercard Agent Pay
              </A>
            </H3>
            <p>
              This is a commerce tokenization program built around trusted agent participation in payments. It layers
              AI agents on top of existing EMV tokenization, giving networks a way to recognize an authorized agent
              rather than treating every agent transaction as irregular.
            </p>
            <H3>
              <A href="https://developers.google.com/merchant/ucp">Google’s Universal Commerce Protocol</A>
            </H3>
            <p>
              This protocol was unveiled at NRF’s Big Show in January 2026. It takes a broader commerce-infrastructure
              approach, connecting consumer surfaces, businesses, and payment providers for agentic commerce.
            </p>
            <p className="italic">
              These three developments show that the industry is building mechanisms to address AI agent identity
              issues, but that doesn’t mean the problem is fully solved—especially with the unpredictable advancements
              of AI.
            </p>
            <p>
              A{" "}
              <A href="https://fortune.com/2026/06/12/ai-shopping-agents-are-coming-no-one-is-ready-for-them/">
                June 2026 Fortune report on a Brainstorm Tech
              </A>{" "}
              panel captured the most pressing uncertainty:{" "}
              <strong>the liability for actions taken by AI shopping agents</strong>.
            </p>

            <H2>Is “Know Your Agent” (KYA) the Answer?</H2>
            <p>
              KYA is emerging as a parallel concept to KYC. It’s a way to fix the trust relationship around AI agents,
              evaluate an agent’s identity, its reputation score, and behavior over time.
            </p>
            <p>It has to answer the following questions:</p>
            <H3>Identity: Who is the agent?</H3>
            <p>
              This is where cryptographic signatures, credentials, attestations, and other machine-verifiable identity
              mechanisms become important.
            </p>
            <p>
              Visa’s protocol, for example, uses signed requests that merchants can verify against trusted public
              keys. The signature is intended to provide cryptographic assurance that the request came from a trusted
              agent and has not been altered or replayed
            </p>
            <H3>Authorization: What is the agent allowed to do?</H3>
            <p>Agentic systems need mechanisms for defining and enforcing boundaries such as:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Spending limits</li>
              <li>Approved merchants</li>
              <li>Product categories</li>
              <li>Transaction frequency</li>
              <li>Geographic restrictions</li>
              <li>Expiration of authorization</li>
              <li>Specific purchase instructions</li>
            </ul>
            <p>
              Mastercard’s Agent Pay, for example, explicitly describes permissioning and spending limits as part of
              its approach to machine-driven transactions.
            </p>
            <H3>Accountability: Who is responsible when something goes wrong?</H3>
            <p>This may be the hardest question.</p>
            <p>
              Imagine an agent has valid credentials but is manipulated through an attack. Who will be held
              responsible?
            </p>
            <p>The developer?</p>
            <p>The company operating it?</p>
            <p>The merchant?</p>
            <p>Or the payment provider?</p>

            <H2>What Businesses Should Do Now</H2>
            <p>
              You don’t need to wait for agentic commerce to become completely standardized before thinking about the
              problem.
            </p>
            <p>Start doing this instead:</p>
            <H3>Stop Treating All Automated Traffic as the Same</H3>
            <p>
              A legitimate agent, a search crawler, and a malicious scraper may all generate automated requests. They
              should not necessarily receive the same treatment.
            </p>
            <p>
              Security infrastructure needs to distinguish between different types of automated actors rather than
              assuming automation itself is suspicious.
            </p>
            <H3>Start Looking for Verifiable Agent Identity</H3>
            <p>If an agent is going to interact with your systems, ask what evidence it can provide about who it is.</p>
            <p>
              Cryptographic signatures and other verifiable credentials can provide stronger assurance than relying
              solely on IP addresses, user-agent strings, or other signals that can be manipulated. Visa’s Trusted
              Agent Protocol is a good example.
            </p>
            <H3>Establish the Human-Agent Relationship</H3>
            <p>
              Knowing that an agent is legitimate isn’t enough. Businesses need to understand who the agent is acting
              for, particularly when an agent is initiating a high-value or high-risk transaction.
            </p>
            <p>The identity chain should connect the agent to an authenticated principal.</p>
            <H3>Make Authorization Explicit</H3>
            <p>Don’t assume that a user’s decision to use an agent means the agent has unlimited authority.</p>
            <p>
              Define what the agent can do. Set spending limits. Restrict certain transactions where necessary. Make
              permissions revocable and time-bound where the use case requires it.
            </p>
            <H3>Preserve an Audit Trail</H3>
            <p>
              There needs to be better evidence of what happened when dealing with agentic transactions. Businesses
              should be able to trace the transaction.
            </p>
            <p>
              <strong>Principal → Agent → Authorization → Action → Payment</strong>
            </p>
            <p>
              The evidence can become critical for{" "}
              <a
                href="https://ezekieldada.com/articles/pig-butchering-scams-identity-verification"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                pig butchering scam
              </a>{" "}
              investigations, disputes, compliance reviews, and other fraud activities.
            </p>

            <H2>Closing Statements</H2>
            <p>
              Businesses that wait for a single, unified standard to emerge before addressing AI agent operations are
              making a very risky bet. Scammers are developing new ways to exploit AI agents in fraud, and you need to
              be a step ahead of them to keep your business and customers safe.
            </p>

            <H2>FAQ</H2>
            <H3>What is Know Your Agent (KYA)</H3>
            <p>
              Know Your Agent is an emerging framework for verifying that an AI agent transacting on a platform is
              legitimately authorized by a real human. It’s similar to how Know Your Customer (KYC) verifies human
              identity.
            </p>
            <H3>Can businesses tell the difference between a real AI shopping agent and a fraudulent bot?</H3>
            <p>
              Not reliably yet. Although there are protocols like Visa's Trusted Agent Protocol and Mastercard’s Agent
              Pay that are trying to do this through cryptographic attestation and scoped authorization tokens.
            </p>
            <H3>Who’s liable if an AI shopping agent is spoofed or makes an unauthorized purchase?</H3>
            <p>
              This remains unresolved. Some industry leaders in 2026 have explicitly named “liability for AI agent
              actions” as one of the biggest unanswered questions slowing agentic commerce adoption.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              ← Back to work
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Start a project <span aria-hidden>→</span>
            </a>
          </div>
        </article>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Ezekiel Dada. All words my own.</p>
          <nav className="flex gap-6">
            <Link to="/work" className="transition-colors hover:text-foreground">Work</Link>
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
