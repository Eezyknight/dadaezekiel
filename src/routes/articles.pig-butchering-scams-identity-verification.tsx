import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import pigButcheringImg from "@/assets/pig-butchering.png";

const TITLE = "Pig Butchering Scams Explained: How Identity Verification Helps";
const DESCRIPTION =
  "How pig butchering scams work, why deepfakes and AI agents make them harder to detect, and how layered identity verification helps platforms stop fraud early.";

export const Route = createFileRoute("/articles/pig-butchering-scams-identity-verification")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Ezekiel Dada` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://dadaezekiel.lovable.app/articles/pig-butchering-scams-identity-verification",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dadaezekiel.lovable.app/articles/pig-butchering-scams-identity-verification",
      },
    ],
  }),
  component: ArticlePage,
});

function A({ href, children }: { href: string; children: React.ReactNode }) {
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

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Educational Guide · 2026</p>
          <h1 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">
            Pig Butchering Scams Explained: How Continuous Identity Verification Helps
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            By Ezekiel Dada — Identity Verification &amp; Fraud Prevention Writer
          </p>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              A pig butchering scam can start with a simple message on a dating app. But by the time
              money changes hands, it may have passed through multiple platforms.
            </p>

            <figure className="my-12">
              <img
                src={pigButcheringImg}
                alt="How a pig butchering scam unfolds from first contact to financial loss"
                loading="lazy"
                className="w-full rounded-xl border border-border object-cover"
              />
            </figure>

            <p>
              The scale of the crime is just too big to ignore. The{" "}
              <A href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf">
                FBI's 2025 Internet Crime Report
              </A>{" "}
              recorded over 1 million complaints involving $20.877 billion in total losses, with
              cryptocurrency and AI fraud (which are major components of pig butchering scams)
              amounting to more than $12 billion.
            </p>
            <p>
              For dating apps, crypto exchanges, fintech platforms, and other services where users
              create accounts whether for communication or transaction, it's become more important
              than ever to have strict identity checks.
            </p>
            <p>
              In this article, we will examine how pig butchering scams work, why deepfake and AI
              agents are making them harder to detect, and how layered identity verification can
              help platforms identify fraudulent accounts before it's too late.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">TL;DR</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                A pig butchering scam is a long-game fraud scheme that combines romance and
                investment scams.
              </li>
              <li>
                Scammers build trust over days, weeks, or months, introduce a fake investment
                opportunity, then disappear with the money.
              </li>
              <li>
                Cryptocurrency and AI fraud contributed to over $12 billion in losses in 2025, with
                pig butchering scams accounting for a significant amount.
              </li>
              <li>
                Deepfake technology and agentic AI are making pig butchering scams harder to detect.
              </li>
              <li>
                Platforms need layered identity verification and behavioral monitoring to catch
                these scams early.
              </li>
            </ul>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              What is a Pig Butchering Scam?
            </h2>
            <p>
              A pig butchering scam is a long-game fraud scheme where a scammer slowly builds a
              romantic or emotional relationship with a victim, gains their trust, and then
              manipulates them into sending money through fake investment opportunities.
            </p>
            <p>
              The name comes from a Chinese phrase (shā zhū pán), which loosely describes how
              scammers fatten victims emotionally and financially before carrying out the scam.
            </p>
            <p>
              Unlike many scams that happen quickly, pig butchering scams are slow and highly
              personal. The scammer may spend weeks or months texting, calling, and sharing personal
              stories to make the relationship feel real before asking for any money. It's often
              described as a mix between a romance scam and an investment scam.
            </p>
            <p>
              Even more worrying is that many of these operations are now run by organized groups
              using scripts, teams, and increasingly AI tools to manage conversations across
              multiple victims at once.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              Step-by-Step Process of a Pig Butchering Scam
            </h2>

            <h3 className="display-type pt-4 text-xl text-foreground">1. Initial Contact</h3>
            <p>
              The scam usually starts on a dating app, social media, or a messaging platform. It can
              be a simple "Hi," a seemingly wrong-number text, or a match on a dating profile. The
              scammer will look like a real person, most likely attractive, successful, and
              relatable.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">2. Trust Building</h3>
            <p>
              After making the initial contact, the scammer tries to build trust with their victim
              by sharing personal stories or moving to private messaging apps like WhatsApp or
              Telegram to make the relationship feel more exclusive and private.
            </p>
            <p>
              Some even go as far as having video calls with the victim. These scammers can now use
              deepfake technology to mimic real faces and voices in live calls, making it harder for
              a victim to tell they're talking to a fake person.
            </p>
            <p>
              The goal is to build trust through emotional consistency. They will keep this up for
              days, weeks, or even months before mentioning money.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              3. The Investment Opportunity
            </h3>
            <p>
              Now that trust is established, the scammer brings up investments. This might come in
              the form of "crypto trading" or a "private investment platform." They present it like
              a natural part of their lifestyle or something that has helped them achieve financial
              success.
            </p>
            <p>
              They frame it as exclusive or limited to encourage the victim to participate, often
              saying things like "I can show you how it works."
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">4. The First Investment</h3>
            <p>
              The scammer encourages the victim to start small, often a few hundred dollars. They
              direct the victim to a fake investment platform controlled by the scam group, where
              the victim sees fake profits accumulate, which they might even be able to withdraw
              initially to prove the platform is "real."
            </p>
            <p>
              This first step is intentionally designed to succeed because it's a psychological
              trick. The scammer has to earn your trust before asking for more.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">5. Higher Deposits</h3>
            <p>
              Now that the first investment seems to work, the scammer encourages larger deposits,
              showing even bigger fake returns. Many victims even end up borrowing money or
              withdrawing their savings to invest more.
            </p>
            <p>
              At this stage, the victim is deeply convinced that the platform is legitimate and the
              relationship is real, making them much easier to scam.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">6. The Butcher</h3>
            <p>
              This is where the actual scam occurs. The victim tries to withdraw their "profits,"
              but gets blocked. To withdraw their money, they're often asked to pay "taxes" or
              "withdrawal fees."
            </p>
            <p>
              Even if the victim pays the fees, they will still not get any money. Some scam groups
              will delay a bit longer to get even more fees from the victim. But eventually, they
              disappear completely, abandoning the fake platform along with the victim's money.
            </p>
            <p>
              The FBI runs{" "}
              <A href="https://www.fbi.gov/news/press-releases/fbi-announces-results-of-operation-level-up">
                Operation Level Up
              </A>
              , which helps identify victims of crypto investment scams. As of 2025, the agency had
              notified over 8,100 victims, with estimated savings of $511.5 million.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              Real-Life Cases of Pig Butchering Scams
            </h2>

            <h3 className="display-type pt-4 text-xl text-foreground">
              <A href="https://www.abc.net.au/news/2025-03-23/anthony-romance-scam-pig-butchering/105083082">
                Anthony's story: $240,850 lost
              </A>
            </h3>
            <p>
              Anthony lost $240,850 after being contacted on a dating app. He invested his
              retirement savings into what he believed was a legitimate crypto platform
              recommended by someone he thought cared about him.
            </p>
            <p className="italic">
              "I was selling some of my shares, I was taking money out of my super fund, borrowing
              from people. I have to live with the shame and the humiliation of what I've done, and
              it's very difficult to live with." — Anthony
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              <A href="https://open.spotify.com/episode/3bKgQnbBTFo6mPRSm6OLNi">
                Carina's story: $122,000 lost
              </A>
            </h3>
            <p>
              Carina thought she was building a life with the man she was talking to. He gradually
              introduced her to trading, and she ended up losing $122,000.
            </p>
            <p className="italic">
              "How was I supposed to know? This is my boyfriend. This is the man that I was supposed
              to be spending the rest of my life with." — Carina
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              <A href="https://www.businessinsider.com/pig-butchering-scam-survivor-lost-nearly-1-million-2024-7">
                Jackie's story: nearly $1 million lost
              </A>
            </h3>
            <p>
              Jackie, a 52-year-old widow and mother of two, lost nearly $1 million to a scammer who
              built trust with her over more than a year. After meeting her scammer on a dating app
              and investing in a fake crypto platform, she is now in debt and lost the money she
              and her late husband had saved for their children's college tuition.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              Why Pig Butchering Scams Are Harder to Detect in 2026
            </h2>

            <h3 className="display-type pt-4 text-xl text-foreground">Deepfake Technology</h3>
            <p>
              Scammers now use AI-generated profile photos, deepfake video calls, and AI-generated
              voices to look and sound like real people.
            </p>
            <p>
              <A href="https://www.interpol.int/en/News-and-Events/News/2026/INTERPOL-report-warns-of-explosive-growth-in-AI-enabled-cybercrime">
                INTERPOL's 2026 report
              </A>{" "}
              warns that AI-enabled fraud is scaling faster than ever, making visual and voice
              checks less reliable than before.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">Agentic AI</h3>
            <p>
              Scam operations are now using agentic AI tools to manage conversations across hundreds
              of victims at once, keeping messages consistent, personal, and emotionally convincing
              without human effort.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              Red Flags Platforms Should Monitor at Scale
            </h2>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Reused or Mismatched Profile Photos
            </h3>
            <p>
              Scammers often steal photos from real people or generate entirely new ones with AI.
              Platforms should watch for profile photos that appear across multiple accounts or
              don't match other signals about the user.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Device &amp; Location Inconsistencies
            </h3>
            <p>
              A scammer claiming to be in one country while consistently logging in from another is
              a strong signal. Sudden device changes or multiple accounts from one device also raise
              flags.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Low-quality or Manipulated Identity Documents
            </h3>
            <p>
              Blurry, cropped, or digitally altered ID documents are common in fraudulent accounts.
              Document verification with tamper detection can catch these early.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Unsolicited Investment Advice
            </h3>
            <p>
              Accounts that quickly steer conversations toward crypto or investment opportunities —
              especially on dating platforms — should be flagged for review.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              How Platforms Can Curb Pig Butchering Scam
            </h2>

            <h3 className="display-type pt-4 text-xl text-foreground">
              1. Layered Verification at Onboarding
            </h3>
            <p>
              Combine document verification, biometric matching, and liveness detection during
              signup. Tools that{" "}
              <A href="https://blog.clarityverify.com/detect-ai-generated-images/">
                detect AI-generated images
              </A>{" "}
              can also flag synthetic profile photos before an account goes live.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              2. Monitor Users Behaviors After Onboarding
            </h3>
            <p>
              Verification shouldn't stop at signup. Continuous behavioral monitoring — login
              patterns, device changes, messaging behavior — helps catch accounts that passed
              initial checks but behave like scammers later.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              3. Create Clear Reporting and Escalation Paths
            </h3>
            <p>
              Make it easy for users to report suspicious behavior, and ensure reports trigger fast
              review. The sooner a fraudulent account is flagged, the fewer victims it can reach.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              4. Add a Reverse Search Function to Your Platform
            </h3>
            <p>
              A{" "}
              <A href="https://clarityverify.com/">reverse search tool like ClarityVerify</A>{" "}
              lets users verify who they're actually talking to by searching photos, phone numbers,
              or usernames — helping them spot stolen or AI-generated identities before trust is
              built.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">Conclusion</h2>
            <p>
              Pig butchering scams are not going away. They are becoming more sophisticated, more
              organized, and harder to detect — especially with deepfakes and AI agents in the mix.
              For platforms where people connect and transact, continuous identity verification and
              behavioral monitoring are no longer optional. They are the difference between catching
              fraud early and explaining losses later.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">FAQ</h2>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Is money lost to a pig butchering scam recoverable?
            </h3>
            <p>
              It can be difficult to recover money lost to these scams, especially since payments
              often pass through crypto platforms and multiple accounts. Reporting quickly to your
              bank, platform, and authorities (such as the FBI's IC3) improves the chances, but
              full recovery is rare — which is why prevention matters so much.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Why don't video calls prove someone is real anymore?
            </h3>
            <p>
              AI-generated deepfake technology has advanced enough to convincingly fake a live video
              call, meaning video verification alone is not a reliable way to confirm someone's
              identity.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              How can platforms prevent pig butchering scams?
            </h3>
            <p>
              Platforms can reduce risk by ensuring document verification, biometric matching, and
              liveness detection at account signup, combined with continuous behavioral monitoring
              and integration of a reverse search service.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              ← Back to work
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
          </div>
        </article>
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
