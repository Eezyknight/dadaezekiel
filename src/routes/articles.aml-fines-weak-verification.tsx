import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import heroImg from "@/assets/aml-1.jpg";

const TITLE = "Billions in AML Fines: What 2025-2026 Enforcement Actions Reveal About Weak Verification";
const DESCRIPTION =
  "Four AML enforcement cases from UBS, Canaccord Genuity, UBS Financial Services, and OKX — what each failed to detect and what could have been done differently.";
const URL = "https://dadaezekiel.lovable.app/articles/aml-fines-weak-verification";

export const Route = createFileRoute("/articles/aml-fines-weak-verification")({
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

const linkCls =
  "underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";
function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
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
const UL = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1 pl-6">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Case Study · 2026</p>
          <h1 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">{TITLE}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            By Ezekiel Dada — Identity Verification &amp; Fraud Prevention Writer
          </p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              In 2025, there was a total fine of $3.8 billion for Anti-Money Laundering (AML), Know Your Customer
              (KYC), Customer Due Diligence (CDD), and sanctions. While that might seem like a lot, it was an 18%
              decline from $4.6 billion in 2024 and the second consecutive annual decline from the $6.6 billion
              recorded in 2023.
            </p>
            <p>
              2026 has also seen some tough enforcement actions, including an $80 million penalty against Canaccord
              Genuity and a $125 million penalty against UBS Financial Services.
            </p>
            <figure className="my-6">
              <img src={heroImg} alt="AML enforcement fines" className="mx-auto w-full rounded-lg border border-border" />
            </figure>
            <p>This article is not to ruminate on how much regulators fine companies. Rather, it’s to unpack:</p>
            <UL items={["what the companies fail to detect or correct sooner, and", "what could have been done differently."]} />

            <H2>
              Case Study 1:{" "}
              <A href="https://finance.yahoo.com/news/ubs-resolves-legacy-french-tax-172000196.html?guccounter=1">
                UBS Group AG — A Long-Running Investigation Ends in a ₤835 Million Resolution
              </A>
            </H2>
            <p>
              UBS was accused of unlawfully soliciting wealthy French clients and helping facilitate money laundering
              between 2004 and 2012.
            </p>
            <p>
              The investigation started in 2013. And in February 2019, a French court found the bank guilty. The case
              then moved through several appeals. But in 2023, France’s Supreme Court upheld the judgment.
            </p>
            <p>
              On September 23, 2025, UBS fulfilled all the financial penalties and agreed to pay €730 million in fines
              and €105 million in civil damages, making a total of €835 million to the French state.
            </p>
            <H3>What UBS Failed to Detect or Correct Sooner</H3>
            <p>They failed to adequately identify and manage the risks surrounding certain customer relationships.</p>
            <p>
              For a wealth-management business operating across jurisdictions, KYC is only the starting point. The
              institution needs to understand the customer’s residency &amp; tax position, source of wealth, source of
              funds, purpose of the relationship, and expected activity.
            </p>
            <H3>What Could Have Been Done Differently</H3>
            <p>UBS could have strengthened its risk-based controls for cross-border and high-net-worth customers. That can include:</p>
            <UL
              items={[
                "Risk-based customer due diligence for cross-border clients.",
                "Source of wealth and source of funds verification for high-value relationships.",
                "Tax residency and jurisdictional risk assessment.",
                "Ongoing monitoring of customers whose circumstances or activities created new risk.",
                "Escalation procedures when customer activity conflicts with the information held by the bank.",
                "Senior compliance oversight of high-risk cross-border business.",
              ]}
            />

            <H2>
              Case Study 2:{" "}
              <A href="https://www.fincen.gov/news/news-releases/fincen-assesses-historic-80-million-penalty-against-canaccord-genuity-llc">
                Canaccord Genuity — An Undersized Compliance System That Resulted in a $80 Million Fine
              </A>
            </H2>
            <p>
              In March 2026, the U.S. Treasury Department’s Financial Crimes Enforcement Network (FinCEN) imposed an
              $80 million civil money penalty on Canaccord Genuity LLC for willful violations of the Bank Secrecy Act
              (BSA).
            </p>
            <p>
              FinCEN discovered that regulators had repeatedly warned the firm about its weak transaction monitoring.
              Canaccord committed in writing to address those weaknesses, but the problem persisted.
            </p>
            <H3>What Canaccord Failed to Detect or Correct Sooner</H3>
            <p>
              Canaccord's AML program was significantly under-resourced. Its transaction-monitoring process relied on
              inexperienced and inadequately trained employees.
            </p>
            <p>
              Those employees were overwhelmed by the volume of transactions generated by poorly designed surveillance
              reports. They didn’t file at least 160 suspicious activity reports involving dozens of over-the-counter
              securities.
            </p>
            <H3>What Could Have Been Done Differently</H3>
            <p>Canaccord needed an AML program that matches the risk and volume of its business. That could mean:</p>
            <UL
              items={[
                "Conducting stronger risk-based CDD before and throughout customer relationships.",
                "Enforcing monitoring rules around over-the-counter securities and microwap activities.",
                "Employing sufficient staff who are adequately trained.",
                "Establishing clear procedures to investigate and track remediation to completion.",
                "Independent testing of solutions from time to time.",
              ]}
            />

            <H2>
              Case Study 3:{" "}
              <A href="https://www.fincen.gov/news/news-releases/fincen-assesses-historic-125-million-penalty-against-ubs-financial-services-inc">
                UBS Financial Services — A Recurrent BSA Violation That Resulted in a $125 Million Penalty
              </A>
            </H2>
            <p>
              In August 2026, FinCEN imposed a $125 million civil money penalty on UBS Financial Services Inc. for
              willful violations of the Bank Secrecy Act (BSA). This action followed a similar enforcement action
              against the firm in 2018
            </p>
            <p>
              FinCEN found that UBSFS had failed to appropriately monitor more than 50,000 foreign currency wires worth
              over $10 billion.
            </p>
            <p>
              The agency also found deficiencies in UBSFS’s customer due diligence, particularly concerning high-risk
              customers with ties to Russia and Latin America.
            </p>
            <H3>What UBSFS Failed to Detect or Correct Sooner</H3>
            <p>
              The earlier enforcement action had already highlighted problems with its AML controls. Yet the company
              didn’t fully rectify the lapses in its transaction monitoring and customer due diligence.
            </p>
            <p>
              The company collected customers' information but didn’t follow their activities. Thus, they were unable
              to make effective risk decisions.
            </p>
            <H3>What Could Have Been Done Differently</H3>
            <p>UBSFS could have treated its earlier enforcement findings with more urgency. They could have:</p>
            <UL
              items={[
                "Established stronger governance over remediation commitments.",
                "Validated whether required customer and transaction information gets to the monitoring team.",
                "Conducted targeted testing of high-risk customer controls.",
                "Reviewed historical transactions affected by known weaknesses.",
                "Independently tested whether corrective measures work in practice.",
              ]}
            />

            <H2>
              Case Study 4:{" "}
              <A href="https://www.reuters.com/legal/operator-okx-crypto-exchange-enters-guilty-plea-pay-more-than-504-million-us-2025-02-24/">
                OKX — Unlicensed Money Transmission in the U.S. That Resulted in a $504 Million Penalty
              </A>
            </H2>
            <p>
              In February 2025, OKX (a popular cryptocurrency exchange platform) pleaded guilty in the United States to
              operating an unlicensed money-transmitting business. The company agreed to pay more than $504 million in
              penalties and forfeiture.
            </p>
            <p>
              According to the U.S. Department of Justice (DOJ), OKX had an official policy that prohibits U.S.
              citizens from using its platform, but the company didn’t enforce that restriction. From approximately
              2018 to early 2024, U.S. customers conducted more than $1 trillion in transactions through the platform.
            </p>
            <p>
              The DOJ also found that customers could create accounts, receive &amp; transfer funds, and trade without
              completing KYC. It was discovered that some employees, in fact, assisted customers in bypassing these
              controls. OKX was finally accused of knowingly violating AML laws and processing more than $5 billion in
              suspicious transactions &amp; illicit proceeds.
            </p>
            <H3>What OKX Failed to Detect or Correct Sooner</H3>
            <p>
              The fundamental problem was a disconnect between policy and enforcement. Asking customers to provide
              identity information is not meaningful KYC if the information is not independently verified.
            </p>
            <p>
              OKX also failed to adequately monitor transactions and identify sanctions exposure, which allowed
              suspicious activity to occur at enormous scale before sufficient controls were implemented.
            </p>
            <H3>What Could Have Been Done Differently</H3>
            <p>Basically, OKX could have built a stronger verification system, such as:</p>
            <UL
              items={[
                "A more reliable country and residency verification rather than relying heavily on IP addresses.",
                "Device and behavioral intelligence to identify VPN and circumvention patterns.",
                "Continuous jurisdictional monitoring rather than a one-time location check.",
                "Mandatory KYC before customers can trade or move assets.",
                "Strict rules that prevent employees from overriding or bypassing compliance controls.",
              ]}
            />

            <H2>What These 4 Cases Have in Common</H2>
            <p>The cases look different on the surface, right?</p>
            <p>
              Yet they have one common characteristic:{" "}
              <strong>the failure occurred somewhere between collecting information and acting on that information</strong>.
            </p>
            <p>With these five systems in place, the companies would have avoided being fined:</p>
            <H3>Identity Verification</H3>
            <p>
              A financial institution needs an established onboarding system to verify that a customer is who they
              claim to be. Also, there should be systems that{" "}
              <Link to="/articles/catch-deepfake-fraud-layered-identity-verification" className={linkCls}>
                catch deepfake fraud before it becomes a bigger problem
              </Link>
              .
            </p>
            <p>These controls matter because fraudsters can manipulate individual elements of an identity.</p>
            <H3>Customer Due Diligence</H3>
            <p>
              Customer due diligence takes the information collected during onboarding and turns it into a risk
              profile. This is where the UBS and Canaccord cases fell short.
            </p>
            <p>
              <A href="https://www.fincen.gov/resources/statutes-and-regulations/cdd-final-rule">FinCEN’s CDD Final Rule</A>{" "}
              requires covered financial institutions to understand the nature and purpose of customer relationships in
              order to develop customer risk profiles and conduct ongoing monitoring on a risk basis.
            </p>
            <H3>Screening</H3>
            <p>
              Risk doesn’t remain static. A customer who presented a low or moderate risk during onboarding can become
              higher risk later. This is why screening should not be treated solely as an onboarding protocol.
            </p>
            <p>
              The objective here is not a wild hunt for fraudsters, but to check if customers have changed their
              onboarding information and to check for possible risks.
            </p>
            <H3>Behavioral and Transaction Monitoring</H3>
            <p>
              A customer can pass every onboarding check and begin to make transactions that are inconsistent with
              their profile.
            </p>
            <p>
              The Canaccord case is a clear example. FinCEN found that the firm’s transaction-monitoring program was
              inadequate and that its processes did not effectively identify or investigate suspicious activity. The
              firm also failed to file at least 160 suspicious activity reports connected to over-the-counter
              securities activity.
            </p>
            <H3>Remediation</H3>
            <p>
              Despite the controls put in place, the company may still be susceptible to fraud. The question is
              whether the organization identifies the problems and fixes them immediately.
            </p>
            <p>
              The UBSFS case highlights why this matters. There was already a warning in 2018, but the bank didn’t
              completely address the lapses. That gave rise to the 2026 enforcement action that cost them $125
              million.
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
