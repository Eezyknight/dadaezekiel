import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import heroImg from "@/assets/deepfake-hero.jpg";
import livenessImg from "@/assets/deepfake-liveness.jpg";
import documentImg from "@/assets/deepfake-document.png";
import behaviorImg from "@/assets/deepfake-behavior.png";
import stepupImg from "@/assets/deepfake-stepup.jpg";
import reverseImg from "@/assets/deepfake-reverse.jpg";

const TITLE = "How Businesses Can Catch Deepfake Fraud Before It Becomes a Bigger Problem";
const DESCRIPTION =
  "Deepfakes now account for 1 in 5 biometric fraud attempts. Learn how layered identity verification helps businesses catch deepfake fraud early.";
const URL = "https://dadaezekiel.lovable.app/articles/catch-deepfake-fraud-layered-identity-verification";

export const Route = createFileRoute("/articles/catch-deepfake-fraud-layered-identity-verification")({
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
const Img = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="my-6">
    <img src={src} alt={alt} loading="lazy" className="mx-auto w-full rounded-lg border border-border" />
  </figure>
);
const Purpose = ({ children }: { children: ReactNode }) => (
  <p>
    <strong>Purpose:</strong> {children}
  </p>
);

const table = [
  ["Liveness Detection", "Determines whether the biometric interaction represents a live person.", "Face spoofing, replay attacks, and some forms of manipulated media."],
  ["Document Verification", "Determines whether an identity document appears genuine and consistent with the verification process.", "Forged or altered identity documents."],
  ["Behavioral & Device Signals", "Identifies suspicious activity that the face and document checks may not reveal.", "Unusual session patterns, device anomalies, emulators, and other suspicious signals."],
  ["Reverse Face Search", "Checks whether a person’s face or photo appears elsewhere online.", "Stolen or reused photos, duplicate profiles, and the same image appearing under different names or contexts."],
];

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Educational Guide · 2026</p>
          <h1 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">{TITLE}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            By Ezekiel Dada — Identity Verification &amp; Fraud Prevention Writer
          </p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              Identity verification used to be simple: ask someone to take a selfie, compare it to their ID photo,
              done. The model is no longer reliable.
            </p>
            <p>
              A more technical approach would be to ask the user to face the camera, turn their head to the right or
              left, and maybe open their mouth. That, too, doesn’t offer 100% security.
            </p>
            <Img src={heroImg} alt="Deepfake face being scanned during identity verification" />
            <p>
              According to{" "}
              <A href="https://www.entrust.com/resources/reports/identity-fraud-report">
                Entrust’s 2026 Identity Fraud Report
              </A>
              , which was drawn from over 1 billion identity verification events across 195 countries and more than 30
              industries, deepfakes now account for 1 in 5 biometric fraud attempts.
            </p>
            <p>
              This is not to say liveness detection has become totally useless. What it rather means is that liveness
              detection is only one part of a larger identity verification model. Businesses need to establish{" "}
              <strong>layered identity verification</strong> to catch deepfake fraud before it becomes a bigger
              problem.
            </p>

            <H2>Quick Answer: What is Layered Identity Verification</H2>
            <p>
              Layered identity verification means combining multiple, independent checks so that even if a fraud
              attempt slips past one layer, it is caught by the others. This includes layers like liveness detection,
              document authentication, behavioral/device signals, step-up verification, and reverse face search.
            </p>

            <H2>Why Layered Identity Verification Beats a Single Check</H2>
            <p>A layered approach combines controls that examine different parts of the verification process.</p>

            <H3>Liveness Detection</H3>
            <Purpose>Examines the biometric interaction to determine whether it represents a live person.</Purpose>
            <Img src={livenessImg} alt="Liveness detection" />
            <p>
              Scammers now initiate{" "}
              <A href="https://www.crowdstrike.com/en-us/cybersecurity-101/cyberattacks/injection-attack/">
                injection attacks
              </A>{" "}
              that feed manipulated images or video directly into the verification pipeline, thereby bypassing the
              camera. A top liveness detection system can use <strong>challenge-response actions</strong>,{" "}
              <strong>facial movement analysis</strong>, <strong>texture &amp; depth analysis</strong>,{" "}
              <strong>3D face sensing</strong>, and <strong>motion-based checks</strong> to differentiate a live
              person from a spoof.
            </p>

            <H3>Document Authentication</H3>
            <Purpose>
              Determine whether the identity document is genuine and whether its information is consistent with the
              verification process.
            </Purpose>
            <Img src={documentImg} alt="Document authentication" />
            <p>
              Identity fraud does not begin and end with the face. Attackers are fond of fabricating documents. A
              document authentication layer can examine information, such as <strong>document structure</strong>,{" "}
              <strong>security features</strong>, <strong>text</strong>, <strong>images</strong>, and{" "}
              <strong>signs of digital manipulation</strong>.
            </p>

            <H3>Behavioral and Device Signals</H3>
            <Purpose>Flags anomalies that the first two layers can’t see on their own.</Purpose>
            <Img src={behaviorImg} alt="Behavioral and device signals" />
            <p>
              A continuous monitoring layer that checks users’ behaviors and device signals, such as{" "}
              <strong>unusual session patterns</strong>, <strong>inconsistent device fingerprints</strong>,{" "}
              <strong>emulator or virtual-camera indicators</strong>, and <strong>other suspicious signs</strong>.
            </p>

            <H3>Step-up Verification</H3>
            <Purpose>
              Additional proof of identity when a verification or transaction presents a higher level of risk.
            </Purpose>
            <Img src={stepupImg} alt="Step-up verification" />
            <p>
              Another line of defense when the initial checks raise concerns. It can request a new set of evidence,
              such as <strong>a fresh biometric check</strong>, an <strong>additional identity document check</strong>
              , or <strong>another authentication factor</strong>.
            </p>

            <H3>Reverse Face Search</H3>
            <Purpose>
              Checks whether a person’s face appears somewhere else online, potentially under a different name or in a
              different context.
            </Purpose>
            <Img src={reverseImg} alt="Reverse face search" />
            <p>
              Scammers can use stolen profile photos, edited images, AI-generated pictures, or photos belonging to
              someone else to create convincing online identities. With a top reverse face search service like{" "}
              <A href="https://www.clarityverify.com/reverse-face-search">ClarityVerify</A>, you can{" "}
              <A href="https://blog.clarityverify.com/how-to-detect-ai-generated-images/">detect AI-generated images</A>
              ,{" "}
              <A href="https://blog.clarityverify.com/how-to-find-social-media-accounts-by-photo/">
                find someone on social media via their photo
              </A>
              , and generally uncover information about the person.
            </p>

            <p>The table below summarizes their purpose and what they can help detect:</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 pr-4 font-semibold">Layer</th>
                    <th className="py-3 pr-4 font-semibold">Purpose</th>
                    <th className="py-3 font-semibold">What It Can Help Detect</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((r) => (
                    <tr key={r[0]} className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">{r[0]}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{r[1]}</td>
                      <td className="py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="rounded-lg border border-border bg-secondary/40 p-4">
              <strong>
                NOTE: No single layer is airtight. They work perfectly together to close the gaps that one mode of
                verification may not notice.
              </strong>
            </p>

            <H2>Takeaway</H2>
            <p>
              Whether you’re an organization processing thousands of signups a day or you’re just one person deciding
              whether to trust a new online contact, there are helpful identity verification checks for you.
            </p>
            <p>
              For an organization, combine liveness detection with document authentication, behavioral &amp; device
              signals, and step-up verification. You can also integrate reverse face search or make it available for
              people who use your product.
            </p>
            <p>
              As an individual, use ClarityVerify’s reverse face search to confirm if what the person told you about
              themselves is true. With a photo, you can get the person’s names, social profiles, dating accounts,
              public news mentions, etc.
            </p>

            <H2>FAQs</H2>
            <H3>How common is deepfake fraud in 2026?</H3>
            <p>
              According to Entrust’s 2026 Identity Fraud Report, deepfakes now account for roughly 1 in 5 biometric
              fraud attempts globally, while injection attacks increase 40% year-over-year.
            </p>
            <H3>Is liveness detection enough to stop deepfake fraud?</H3>
            <p>
              No. While liveness detection is an important layer, attackers increasingly use “injection attacks” that
              feed synthetic videos directly into verification systems, and they bypass standalone liveness checks.
            </p>
            <H3>What does “layered verification” mean?</H3>
            <p>
              Layered verification is the combination of multiple, independent identity checks to prevent fraud from
              being successful. The idea is: even if the scammer is able to bypass one layer, the other layers would
              stop them.
            </p>
            <H3>What is reverse face search used for?</H3>
            <p>
              Reverse face search lets you check whether a photo appears somewhere else online. This helps identify
              stolen, reused, or misrepresented pictures. It’s commonly used to verify online dating matches or
              marketplace contacts before engaging further.
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
          <p>© {new Date().getFullYear()} Ezekiel Dada. All words his own.</p>
          <nav className="flex gap-6">
            <Link to="/work" className="transition-colors hover:text-foreground">Work</Link>
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
