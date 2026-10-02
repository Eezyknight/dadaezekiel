import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import pigButcheringImg from "@/assets/pig-butchering.png";

const TITLE = "Pig Butchering Scams Explained: How Continuous Identity Verification Helps";
const DESCRIPTION =
  "How pig butchering scams work, why deepfakes and agentic AI make them harder to detect, and how continuous identity verification helps platforms prevent fraud.";

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

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="display-type pt-4 text-xl text-foreground">{children}</h3>
);

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Educational Guide · 2026</p>
          <h1 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">{TITLE}</h1>
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
                FBI’s 2025 Internet Crime Report
              </A>{" "}
              recorded over 1 million complaints involving $20.877 billion in total losses, with
              cryptocurrency and AI fraud (which are major components of pig butchering scams)
              amounting to more than $12 billion.
            </p>
            <p>
              For dating apps, crypto exchanges, fintech platforms, and other services where users
              create accounts whether for communication or transaction, it’s become more important
              than ever to have strict identity checks.
            </p>
            <p>
              In this article, we will examine how pig butchering scams work, why deepfake and AI
              agents are making them harder to detect, and how layered identity verification can
              help platforms identify fraudulent accounts before it’s too late.
            </p>

            <H2>TL;DR</H2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Pig butchering is the fastest-growing and the single costliest fraud scheme reported
                in the U.S.
              </li>
              <li>
                Scammers build trust with victims for weeks or months, usually through dating apps
                or social media, before introducing a fake investment platform.
              </li>
              <li>
                AI-generated deepfake video calls and agentic AI grooming have made the scam harder
                to detect.
              </li>
              <li>
                Red flags include reused profile photos, device &amp; location inconsistencies,
                manipulated identity documents, and unsolicited investment advice.
              </li>
              <li>
                Identity verification is an early intervention point. Document authentication,
                liveness detection, and biometric matching can help establish whether a person’s
                identity corresponds.
              </li>
              <li>
                Verification should not stop at signups. Behavioral monitoring and risk-based
                re-verification can help identify accounts that become suspicious after onboarding.
              </li>
            </ul>

            <H2>What is a Pig Butchering Scam?</H2>
            <p>
              A pig butchering scam is a confidence-based fraud scheme in which the scammer builds a
              relationship with the target before gradually persuading them to put money into a
              fraudulent investment opportunity, often involving cryptocurrency.
            </p>
            <p>
              The name was derived from the Chinese term “Sha Zhu Pan”, which means Killing Pig
              Plate. The scammer sees the target as a “pig” that’s metaphorically fattened with a
              fake relationship and then “butchered” for their money.
            </p>
            <p>
              This scam is different from traditional fraud where the scammer immediately asks for
              money. In a pig butchering scam, the scammer spends time creating a relationship and
              building trust. The target isn’t asked for any help. If at all, the scammer offers some
              help to gain credibility.
            </p>
            <p>
              Mind you, the scammer may pose as anyone. A lover, pornstar, businessperson, successful
              investor, government official, or even someone who has connections with influential
              people.
            </p>

            <H2>Step-by-Step Process of How the Pig Butchering Scam Works</H2>
            <p>
              To understand why this scam is so prevalent, you need to know the common playbook
              scammers use:
            </p>

            <H3>1. Initial Contact</H3>
            <p>
              The scammer creates a fake account and initiates contact through a dating app, social
              media platform, or a “wrong text message”. They often do this after lurking around to
              monitor their targets’ activities.
            </p>
            <p>
              It can be unsuspicious because they might be in the same digital group as the targets,
              commenting under their posts. They do this so that their name and profile become
              familiar before a direct conversation.
            </p>

            <H3>2. Trust Building</H3>
            <p>
              The scammer doesn’t rush into the investment pitch. Instead, they spend weeks or months
              establishing and nurturing a relationship. They communicate regularly and share deep,
              personal information, so that the target becomes vulnerable with them.
            </p>
            <p>
              This makes the eventual investment recommendation feel like advice from someone the
              victim knows rather than a cold investment pitch.
            </p>

            <H3>3. The Investment Opportunity</H3>
            <p>
              Once trust &amp; vulnerability are established, the scammer introduces an investment
              opportunity—usually cryptocurrency or another high-return scheme.
            </p>
            <p>
              It comes so naturally that they don’t pitch it. They share it as personal news, more
              like: “Hey, this is what I’ve been doing to stay afloat and buy assets.” They may even
              show screenshots of significant gains on their portfolio.
            </p>

            <H3>4. The First Investment</H3>
            <p>
              The scammer shares a professional-looking crypto platform with the target. The platform
              looks authentic, with real-time price charts, customer support, and even a demo account.
            </p>
            <p>
              After the target makes the first deposit, they get to withdraw their profit. This
              convinces them that the investment is real and removes any uncertainty they might have.
            </p>

            <H3>5. Higher Deposits</H3>
            <p>
              After the first withdrawal, the scammer advises a larger investment. Encouraged by the
              first transaction, the victim deposits a lot more money. Some people even liquidate
              their account.
            </p>
            <p>
              In December 2025, some{" "}
              <A href="https://www.fbi.gov/how-we-can-help-you/victim-services/national-crimes-and-victim-resources/operation-level-up">
                victims who were rescued by the FBI
              </A>{" "}
              said they were in the process of liquidating their 401K, selling their home, or
              obtaining a sizable loan. In fact, an elderly man who was surviving on disability pay
              wanted to cut his food money to invest more.
            </p>

            <H3>6. The Butcher</H3>
            <p>
              This is when the money disappears. The victim tries to withdraw the funds (or profit),
              but encounters a problem. They may be told to pay taxes, processing fees, or other
              charges before the withdrawal can be completed.
            </p>
            <p>
              However, the demand continues until the victim runs out of money or realizes the
              investment was fabricated. The scammer then disappears, blocks the victim, or abandons
              the account.
            </p>

            <H2>Real-Life Cases Where Weak Identity Checks Became a Fraud Enabler</H2>
            <p>These are real-life cases of people who fell to the pig butchering scam.</p>

            <H3>
              1. <A href="https://www.abc.net.au/news/2022-11-07/pig-butchering-crypto-romance-investment-scams/101606644">Anthony — Lost $240,850 After a Two-month Relationship</A>
            </H3>
            <p>
              The conversation started when Michelle messaged Anthony (a 48-year-old single father)
              on Instagram, complimenting his landscape photos. Then, they exchanged WhatsApp numbers
              and communicated every day. She sent gym selfies. He sent beach pictures.
            </p>
            <p className="italic">
              Anthony: It’s very attractive to meet someone who is not just attractive but also kind
              and smart.
            </p>
            <p className="italic">Michelle: Haha, I’m actually not as good as you said.</p>
            <p>
              The conversation went on before she introduced him to a cryptocurrency investment. She
              first sent a small amount of Ethereum to his Coinbase wallet, which made the investment
              appear legitimate.
            </p>
            <p>
              Anthony then made an initial deposit of $7,000 and got a profit of $30 that same day.
              In the next six weeks, he increased his investment to $240,850.
            </p>
            <p>
              Over time, he was unable to withdraw his funds, was locked out of his account, and was
              unable to reach Michelle.
            </p>

            <H3>
              2. <A href="https://open.spotify.com/episode/2zLjm1cIowRXzaI7Of2A7V?si=DWo0iOANS3eAD_hcD_JYNw">Carina — Lost 122,000 and Investigated the Blockchain Herself</A>
            </H3>
            <p>
              She met a man on Bumble, called Heaven. He asked that they move the conversation to
              WhatsApp. Down the line, she was manipulated into investing all the money she had into
              a cryptocurrency investment scheme.
            </p>
            <p>
              She started by investing $1,000. After trading, she withdrew a couple of hundred
              dollars into her bank account, which made her feel assured that the investment was real.
            </p>
            <p>
              After telling her to put in more money, she said she didn’t have it, so he asked her to
              take a loan from her retirement account, and she could use the accumulated profit to pay
              back the loan. She added $35,000.
            </p>
            <p>
              She watched her money grow to about $60K, but she wasn’t able to withdraw. Eventually,
              she was told that she had to deposit a total of $150,000 to withdraw. She invested
              another $4K, plus $38K from a high-interest loan, borrowed $26K from her mom, and Heaven
              “helped” with $46K.
            </p>
            <p>
              However, when she tried to pull out the $150,000, she was told that she needed to
              perform a security verification of $27K to unfreeze her account and also provide a
              picture of her ID. Again, she did. She invested $18K, and Heaven gave her $9K.
            </p>
            <p>
              All of these didn’t get her her money back. After receiving little assistance from the
              authorities, she began investigating the transactions herself. She eventually traced
              the funds to a scam group in Thailand.
            </p>

            <H3>
              3. <A href="https://www.businessinsider.com/romance-scam-cost-retirement-savings-2026-6?r=US&IR=T">Jackie — Lost Approximately $900,000</A>
            </H3>
            <p>
              Jackie, 61, was preparing for retirement when she joined a dating site. She met a man,
              Brad Miller, who claimed to be a widowed contractor.
            </p>
            <p>
              Over several months, Brad developed a romantic relationship with her and began talking
              about their financial future. He eventually introduced her to a supposed cryptocurrency
              broker named Maximilian.
            </p>
            <p>
              Jackie started by investing $40,000 from her 401(K). The supposed crypto account showed
              increasing returns, and Brad sent her screenshots of what appeared to be his own account
              containing millions of dollars. This helped convince her that the investment was
              legitimate.
            </p>
            <p>
              She eventually transferred substantial portions of her retirement savings and took out
              a home-equity loan. In total, she lost approximately $900,000.
            </p>

            <H2>Why Pig Butchering Scams Are Harder to Detect in 2026</H2>
            <p>
              There are 2 major technological developments making pig butchering scams harder to
              detect in 2026.
            </p>

            <H3>1. Deepfake Technology</H3>
            <p>
              While the tactic is the same as always, the technology available to scammers has
              improved. Deepfake technology can produce synthetic faces, voices, and video content
              that makes a scammer appear like a real person.
            </p>
            <p>
              <A href="https://www.interpol.int/en/News-and-Events/News/2026/INTERPOL-report-warns-of-increasingly-sophisticated-global-financial-fraud-threat">
                INTERPOL’s 2026 Global Financial Fraud Threat Assessment
              </A>{" "}
              warns that criminal marketplaces now offer “synthetic identity kits” containing
              AI-generated video avatars, voice clones, and biometric data. It also reports that
              AI-enabled fraud is estimated to be 4.5 times more profitable than non-AI-enhanced fraud.
            </p>
            <p>
              Many victims say: “I’ve seen the person on video call. They are real.” Whereas the
              person they saw wasn’t real.
            </p>

            <H3>2. Agentic AI</H3>
            <p>
              Scammers are also using agentic AI to reach a lot of victims. Humans have a natural
              limit to how many conversations they can maintain per time, so they now use automated
              systems to handle more interactions. This helps to personalize messages and maintain
              conversations across a much larger pool of targets.
            </p>
            <p>
              A scammer who once had to choose between dozens of conversations can now manage far
              more, while tailoring each message to individual targets. This increases the volume of
              accounts and interactions that safety teams have to assess, making account review
              increasingly difficult.
            </p>

            <H2>Red Flags Platforms Should Monitor at Scale</H2>
            <p>
              No single signal proves that an account is fraudulent. You have to combine identity,
              device, behavioral, and transactional signals to identify patterns that individuals
              would easily not spot.
            </p>

            <H3>1. Reused or Mismatched Profile Photos</H3>
            <p>
              A profile photo that appears on multiple unrelated accounts or websites can indicate
              impersonation or a fabricated identity.
            </p>

            <H3>2. Device and Location Inconsistencies</H3>
            <p>
              An account claiming to belong to someone in one location but repeatedly logging in
              from unrelated countries or showing unusual device patterns.
            </p>

            <H3>3. Low-quality or Manipulated Identity Documents</H3>
            <p>
              Blurry documents, inconsistent information, altered fields, suspicious image
              artifacts, or repeated verification attempts can indicate identity manipulation.
            </p>

            <H3>4. Unsolicited Investment Advice</H3>
            <p>
              A sudden shift from ordinary conversation to cryptocurrency, investment opportunities,
              or requests to move communication off the platform.
            </p>

            <H2>How Platforms Can Curb Pig Butchering Scam</H2>
            <p>
              Follow these recommendations, and you’d be steps ahead in putting a stop to pig
              butchering scams on your platform:
            </p>

            <H3>1. Layered Verification at Onboarding</H3>
            <p>
              Have different stages of document authentication, biometric matching, and liveness
              detection to scan out risk profiles and{" "}
              <A href="https://blog.clarityverify.com/how-to-detect-ai-generated-images/">
                detect AI-generated images
              </A>
              . The objective is not to tire out every user, but to confirm the identity behind every
              account.
            </p>

            <H3>2. Monitor Users Behaviors After Onboarding</H3>
            <p>
              Integrate identity signals with device intelligence, behavioral analytics, account
              activity, and other fraud indicators. Escalate accounts when several signals point
              toward increased risk.
            </p>

            <H3>3. Create Clear Reporting and Escalation Paths</H3>
            <p>
              Users should have an obvious way to report suspected scam accounts, suspicious
              investment requests, impersonation, and other harmful behavior. The reports should go
              straight to your Trust &amp; Safety team rather than disappearing into a standalone
              support queue.
            </p>

            <H3>4. Add a Reverse Search Function to Your Platform</H3>
            <p>
              Integrate a reverse search function like{" "}
              <A href="https://www.clarityverify.com/">ClarityVerify</A> that lets users search people
              by their name, phone number, photo, or email address. It can give them a detailed report
              of every publicly available information about the person.
            </p>

            <H2>Conclusion</H2>
            <p>
              Pig butchering scams work because the scammers strategically crawl their way into the
              hearts of their victims. And as new technology enables these fraudulent acts, it’s
              become essential that platforms don’t rely solely on onboarding verification or trust
              between users. There’s the need for continuous monitoring and integration of a reverse
              search service like ClarityVerify to curb these activities.
            </p>

            <H2>FAQ</H2>
            <H3>1. Is money lost in a pig butchering scam recoverable?</H3>
            <p>
              Recovery is difficult and rare. You should in fact be cautious of recovery services
              that charge upfront fees to recover lost money. Financial scams should always be
              reported to the authorities.
            </p>

            <H3>2. Why don’t video calls prove someone is real anymore?</H3>
            <p>
              AI-generated deepfake technology has advanced enough to convincingly fake a live video
              call, meaning video verification alone is not a reliable way to confirm someone’s
              identity.
            </p>

            <H3>3. How can platforms prevent pig butchering scams?</H3>
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
