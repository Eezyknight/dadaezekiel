import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import robotImg from "@/assets/ai-agent-robot.jpg";
import aiFirstImg from "@/assets/ai-first-software.jpg";
import teamImg from "@/assets/agentic-ai-team.jpg";

const DESCRIPTION =
  "AI software agents are changing how businesses use software. Discover what this means for SaaS companies and the future of the industry.";

export const Route = createFileRoute("/articles/is-ai-going-to-kill-saas")({
  head: () => ({
    meta: [
      { title: "Is AI Going to Kill SaaS? The Rise of AI Software Agents" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "Is AI Going to Kill SaaS? The Rise of AI Software Agents",
      },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://dadaezekiel.lovable.app/articles/is-ai-going-to-kill-saas",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://dadaezekiel.lovable.app/articles/is-ai-going-to-kill-saas",
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

function Figure({
  src,
  alt,
  sourceLabel,
  sourceHref,
}: {
  src: string;
  alt: string;
  sourceLabel: string;
  sourceHref: string;
}) {
  return (
    <figure className="my-12">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-xl border border-border object-cover"
      />
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        Photo credit: <A href={sourceHref}>{sourceLabel}</A>
      </figcaption>
    </figure>
  );
}

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-28">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="eyebrow">Thought Leadership · 2026</p>
          <h1 className="display-type mt-4 text-4xl leading-tight sm:text-5xl">
            Is AI going to kill SaaS? The rise of AI software agents
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">By Ezekiel Dada</p>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
            <Figure
              src={robotImg}
              alt="AI software agent avatar operating a computer"
              sourceLabel="Mohamed Nohassi on Unsplash"
              sourceHref="https://unsplash.com/@coopery"
            />

            <p>Over the last few years, there has been a lot of talk about AI killing everything.</p>
            <p>
              AI is killing writing. It is killing customer service. It is killing programming. At
              this point, I think the only thing AI hasn’t been accused of killing is coffee breaks.
            </p>
            <p>
              There’s one industry where the conversation gets particularly interesting though: SaaS
              (Software as a Service).
            </p>
            <p>
              Ordinarily, you have to guide software through each step to get the desired result. AI
              software agents are now changing that by handling more of the steps.
            </p>
            <p>
              And that raises a question many people shy away from: If AI agents can use software on
              our behalf, isn’t AI killing SaaS?
            </p>
            <p>This article answers the question and shares insights on what to do next.</p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              What are AI software agents, and how are they different from traditional software?
            </h2>
            <p>
              Before we start predicting the death of SaaS, let’s get one thing straight: an AI
              software agent isn’t simply an AI assistant that helps you write an email or summarize
              a document. It goes a step further.
            </p>
            <p>
              An AI software agent is a program that’s capable of performing tasks on behalf of a
              user without following a fixed set of instructions.
            </p>
            <p>
              Unlike traditional software that follows a predefined script, an AI software agent can
              decide what to do and which tools to use without continuous human interaction.
            </p>
            <p>Let me break it down better. Take a salesperson trying to find new customers as an example.</p>
            <p>
              If the person is using traditional software, he/she opens a CRM, searches for prospects,
              looks up information about the prospects’ companies, decides which ones are worth
              contacting, writes customized emails for each prospect, sends them, and then updates the
              CRM.
            </p>
            <p>
              The process described above is different from how AI software agents work. Basically,
              the person just has to give an instruction, such as:
            </p>
            <blockquote className="border-l-2 border-accent pl-5 italic text-foreground">
              “Find promising companies in this market, research the right contacts, prioritize the
              strongest opportunities, prepare personalized emails, send them, and document their
              updated info.”
            </blockquote>

            <Figure
              src={aiFirstImg}
              alt="AI agentic robot in a dynamic tech environment"
              sourceLabel="Kindle Media on Pexels"
              sourceHref="https://www.pexels.com/photo/high-angle-shot-of-toy-robot-8566464/"
            />

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              How AI software agents are reshaping the SaaS business model
            </h2>
            <p>
              Software AI agents are changing how people interact with SaaS, how companies charge for
              it, and even how users decide which software product to buy.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Software interfaces will become less important
            </h3>
            <p>Over the years, software interfaces have influenced how users choose which tool is better.</p>
            <p>
              Of course, no one wants to buy a tool that would give them a hard time navigating. This
              has prompted many brands to cite how intuitive and seamless their software is.
            </p>
            <p>
              But that’s not necessarily the case anymore. With AI agents, users don’t have to
              interact with software directly. A simple prompt can achieve all their tasks.
            </p>
            <p>
              Bret Taylor, the former co-CEO of Salesforce and the current co-founder &amp; CEO of
              Sierra, in an <A href="https://techcrunch.com/2026/04/09/sierras-bret-taylor-says-the-era-of-clicking-buttons-is-over">interview with TechCrunch</A>{" "}
              confirmed this. To paraphrase, he said software is moving away from the traditional
              model of clicking through applications, and we are gradually entering a time where
              people will be using language-driven prompts to complete tasks without clicking buttons
              on the software interface.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Top SaaS companies are rethinking per-seat pricing
            </h3>
            <p>
              <A href="https://www.procure.fyi/blogs/an-in-depth-explanation-of-seat-based-saas-pricing-model">
                SaaS per-seat pricing model
              </A>{" "}
              is built around counting the number of people using the software. If a company has 10
              employees who need access, they buy 10 seats. If the company grows to 50 employees,
              they buy 40 more seats.
            </p>
            <p>
              But AI agents in SaaS don’t operate like that. An agent isn’t an employee. It doesn’t
              need an email address or a login the same way a person does.
            </p>
            <p>
              So imagine a company with 50 salespeople. They have an AI agent handling the prospect
              research, updating records, preparing outreach emails, and repetitive follow-ups.
            </p>
            <p>Why should the company continue paying for 50 seats?</p>
            <p>
              Top SaaS companies are already experimenting with this. For example, Salesforce’s
              Agentforce pricing includes a{" "}
              <A href="https://zylo.com/blog/consumption-based-pricing-saas">consumption-based option</A>{" "}
              in which customers pay according to the actions their agents perform.
            </p>
            <p>
              HubSpot is also experimenting with a similar approach. Alongside its subscription
              plans, some AI agents consume credits to perform their functions.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Change in how businesses discover and buy SaaS
            </h3>
            <p>
              Buying SaaS usually involves searching Google, opening several websites to read reviews,
              comparing features, checking pricing, and then using a free trial.
            </p>
            <p>Now imagine giving the entire research job to an AI agent. You could tell it to:</p>
            <blockquote className="border-l-2 border-accent pl-5 italic text-foreground">
              “Find a project management tool for our 30-person remote team. It needs to integrate
              with Slack, support automated workflows, and cost less than $500 a month.”
            </blockquote>
            <p>
              Instead of giving you a list of links and asking you to do the research yourself, AI
              agents for business will compare several project management tools against those
              requirements and narrow down the options.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              HubSpot and Salesforce show what AI software agents are already doing
            </h2>
            <p>
              You don’t have to rely only on my personal conviction to understand where this is going.
              Some of the biggest names in SaaS are already building AI agents into their products.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              HubSpot is turning AI into more than an assistant
            </h3>
            <p>
              HubSpot has several{" "}
              <A href="https://www.hubspot.com/products/artificial-intelligence">AI agents</A>,
              including the Prospecting Agent, which can research accounts, identify contacts, find
              buying signals, and create personalized outreach. Its Customer Agent, which can handle
              customer questions, and its Data Agent works with business information to provide
              answers.
            </p>
            <p>Their use cases resulted in:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <A href="https://www.hubspot.com/products/sales/ai-prospecting-agent?hubs_content=www.hubspot.com%2Fproducts%2Fartificial-intelligence&hubs_content-cta=prospectingagent">
                  Prospecting Agent
                </A>
                : 76% more qualified leads on average per month, and a 26% higher deal win rate.
              </li>
              <li>
                <A href="https://www.hubspot.com/products/artificial-intelligence/ai-customer-service-agent?hubs_content=www.hubspot.com%2Fproducts%2Fartificial-intelligence&hubs_content-cta=customeragent">
                  Customer Agent
                </A>
                : 74% more customer tickets closed on average, and 84% faster ticket resolution
                compared to teams not using the agent.
              </li>
              <li>
                <A href="https://www.hubspot.com/products/artificial-intelligence/ai-data-agent?hubs_content=www.hubspot.com%2Fproducts%2Fartificial-intelligence&hubs_content-cta=dataagent">
                  Data Agent
                </A>
                : 10x faster to research a prospect or prep for a call, with 5 million research and
                insight tasks automated.
              </li>
            </ul>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Salesforce wants agents to become part of the workforce
            </h3>
            <p>
              Salesforce has a platform called{" "}
              <A href="https://www.salesforce.com/agentforce/">Agentforce</A>. It’s for building and
              deploying AI agents that can work with business data and use tools to complete tasks.
              Those agents can support areas like sales, customer service, marketing, and commerce.
            </p>
            <p>Here are some results from companies that have used Salesforce Agentforce:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <A href="https://www.salesforce.com/customer-stories/uber/">Uber</A> got a 60%
                increase in email conversion rate and 83% faster ad sales processing, resulting in
                faster revenue.
              </li>
              <li>
                <A href="https://www.salesforce.com/customer-stories/equinox/">Equinox</A> got a 48%
                close rate on agent-created meetings and a 60% email open rate (3x the industry
                average)
              </li>
              <li>
                <A href="https://www.salesforce.com/customer-stories/trustpilot/">Trustpilot</A> was
                able to resolve support cases faster, with a 45% decrease in average handle time and
                28% of support cases deflected.
              </li>
            </ul>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              So, is AI actually going to kill SaaS?
            </h2>
            <p>No. At least not in the way people usually mean when they say AI is going to kill SaaS.</p>
            <p>
              AI software agents still need applications, data, infrastructure, security controls,
              and record systems to perform reasonable work. So they can’t kill or replace SaaS.
              Rather, they’re making software more useful by giving it the ability to do more without
              waiting for a person to direct every step.
            </p>
            <p>
              But that doesn’t mean SaaS applications can carry on exactly as they have for the last
              decade. Some parts of the traditional model are clearly under pressure.
            </p>
            <p>
              SaaS products that exist mainly to help people complete repetitive tasks will become
              less valuable when an AI agent can handle those tasks.
            </p>
            <p>
              Interfaces built around endless clicking and form-filling will matter less when users
              can simply tell an AI software agent what they want.
            </p>
            <p>
              Per-seat pricing will become harder to justify when an AI agent, instead of a human
              employee, is doing much of the work.
            </p>
            <p>And software discovery will change if businesses increasingly use AI to research &amp; compare products.</p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              What SaaS companies need to do before the AI agent shift accelerates
            </h2>
            <Figure
              src={teamImg}
              alt="Employees discussing agentic AI systems"
              sourceLabel="Unsplash"
              sourceHref="https://unsplash.com/photos/group-of-people-sitting-on-chair-in-front-of-brown-wooden-table-JVdNmAFDiI4"
            />
            <p>
              If you’re thinking of the future of SaaS, you need to think beyond simply adding a
              chatbot to a product and calling it an AI agent. Do these things instead:
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Build products that AI software agents can work with
            </h3>
            <p>
              An AI agent needs a way to communicate with software. That’s where APIs become
              important. They provide a way for applications to exchange information and trigger
              actions without a person manually moving data between them.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Focus on outcomes, not just features
            </h3>
            <p>
              AI agents in SaaS don’t care whether your product has 100 features. What they are
              concerned about is whether your product can help achieve a particular task. The clearer
              the answer is, the easier it is for your product to be recommended.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">Rethink Pricing Model</h3>
            <p>
              Per-seat pricing made sense when people were the primary users. But if software AI
              agents begin to perform more of the work, you should evaluate whether per-seat pricing
              still matches the value users receive.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Make your product easy for AI to understand
            </h3>
            <p>
              SaaS companies have spent years making websites attractive to humans and search
              engines. Now, you must{" "}
              <A href="https://freecoalition.org/blog/how-to-improve-llm-visibility/">
                optimize your software to be cited by LLMs
              </A>
              . That means you should provide detailed product information, accurate pricing, useful
              reviews, and strong third-party mentions.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">Keep humans in control</h3>
            <p>
              Many people mistake AI-powered software agents for autonomous software. The more
              responsibility you give the agent, the more carefully you need to control what it can
              do. You need to tell it what it’s permissible to do on its own and when a human command
              is needed.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">FAQs</h2>
            <h3 className="display-type pt-4 text-xl text-foreground">
              How do software AI agents work?
            </h3>
            <p>
              A software AI agent receives an objective, considers the information and tools
              available to it, decides what actions are needed, and carries out those actions to
              reach the goal.
            </p>
            <h3 className="display-type pt-4 text-xl text-foreground">
              What is the difference between AI agents and chatbots?
            </h3>
            <p>
              A chatbot primarily responds to conversations. An AI agent can go further by taking
              actions such as updating the CRM and preparing outreach based on the conversation had.
            </p>
            <h3 className="display-type pt-4 text-xl text-foreground">
              What can AI software agents do for businesses?
            </h3>
            <p>
              It depends on the software and permissions granted. AI agents for business can perform
              tasks such as researching prospects, analyzing data, updating records, and transferring
              data between applications.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">Conclusion</h2>
            <p>You can for sure say SaaS is like “coffee breaks.” AI is not killing either.</p>
            <p>
              AI software agents are proposing a different deal than what we’re accustomed to:{" "}
              <strong className="font-medium text-foreground">
                Tell the software what you want, and it will figure out how to accomplish it.
              </strong>
            </p>
            <p>
              The biggest SaaS companies, such as HubSpot and Salesforce, are already moving in this
              direction.
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