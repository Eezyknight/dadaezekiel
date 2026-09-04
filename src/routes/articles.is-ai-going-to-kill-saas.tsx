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
        Source: <A href={sourceHref}>{sourceLabel}</A>
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
          <p className="mt-5 text-sm text-muted-foreground">
            By Ezekiel Dada — SaaS Content Writer
          </p>

          <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>Over the last few years, there has been a lot of talk about AI killing everything.</p>
            <p>
              AI is killing writing. It is killing customer service. It is killing programming. At
              this point, I think the only thing AI hasn't been accused of killing is coffee breaks.
            </p>
            <p>
              There's one industry where the conversation gets particularly interesting though:{" "}
              <strong className="font-medium text-foreground">SaaS (Software as a Service)</strong>.
            </p>
            <p>
              Ordinarily, you have to guide software through each step to get the desired result. AI
              software agents are now changing that by handling more of the steps.
            </p>

            <Figure
              src={robotImg}
              alt="AI software agent"
              sourceLabel="Unsplash"
              sourceHref="https://unsplash.com/photos/a-white-robot-with-blue-eyes-and-a-laptop--0xMiYQmk8g"
            />

            <p>
              And that raises a question many people shy from:{" "}
              <strong className="font-medium text-foreground">
                If AI agents can use software on our behalf, isn't AI killing SaaS?
              </strong>
            </p>
            <p>
              This article answers the question and shares deep personal thoughts about the future
              of SaaS.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              What are AI software agents and how are they different from traditional software?
            </h2>
            <p>
              Before we start predicting the death of SaaS, let's get one thing straight: an AI
              software agent isn't simply an AI assistant that helps you write an email or summarize
              a document. It goes a step further.
            </p>
            <p>
              An AI agent software is a program that's capable of performing tasks on behalf of a
              user without following a fixed set of instructions.{" "}
              <A href="https://www.salesforce.com/agentforce/ai-agents/">Salesforce</A> describes
              this as the difference between traditional software that follows a predefined script
              and an AI agent that can decide what to do and which tools to use.
            </p>
            <p>Think about a salesperson trying to find new customers.</p>
            <p>
              With traditional software, the person opens a CRM, searches for prospects, looks up
              information about their companies, decides which ones are worth contacting, writes a
              customized email for each prospect, sends them, and then updates the CRM.
            </p>
            <p>
              It's different with AI agent software. All the person has to do is give the AI agent
              an instruction, such as:
            </p>
            <blockquote className="border-l-2 border-accent pl-5 italic text-foreground">
              "Find promising companies in this market, research the right contacts, prioritize the
              strongest opportunities, prepare personalized emails, send them, and document their
              updated info."
            </blockquote>

            <Figure
              src={aiFirstImg}
              alt="AI-first software"
              sourceLabel="Pexels"
              sourceHref="https://www.pexels.com/photo/high-angle-shot-of-toy-robot-8566464/"
            />

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              How AI software agents are reshaping the SaaS business model
            </h2>
            <p>
              Software AI agents are reshaping how people interact with SaaS, how companies charge
              for it, and even how businesses decide which software product to buy.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Software interface will become less important
            </h3>
            <p>
              Since when SaaS became a thing, the interface has been a significant part of how
              people interact with the software. You even see some brands using the seamlessness of
              their software interface as their unique selling point.
            </p>
            <p>
              Rightly so, but that is changing as AI-powered software agents are growing rapidly.
              There are already notable people in the industry making this argument.
            </p>
            <p>
              Bret Taylor, the former co-CEO of Salesforce and the current co-founder &amp; CEO of
              Sierra, in an{" "}
              <A href="https://techcrunch.com/2026/04/09/sierras-bret-taylor-says-the-era-of-clicking-buttons-is-over">
                interview with TechCrunch
              </A>
              , said that software is moving away from the traditional model of clicking through
              applications. He argued that people will soon use language-driven prompts to complete
              tasks without clicking buttons on the software interface.
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
              But AI agents in SaaS don't operate like that. An agent isn't an employee. It doesn't
              need an email address or a login the same way a person does.
            </p>
            <p>
              So imagine a company with 50 salespeople. They have an AI agent handling the prospect
              research, updating records, preparing outreach emails, and repetitive follow-ups.
            </p>
            <p>Why should the company continue paying for 50 seats?</p>
            <p>
              Top SaaS companies are already experimenting with this. For example, Salesforce's
              Agentforce pricing includes a consumption-based option in which customers pay
              according to the actions their agents perform.
            </p>
            <p>
              HubSpot is also experimenting with a similar approach. Alongside its subscription
              plans, some AI agents consume credits to perform their functions.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Change in how businesses discover and buy SaaS
            </h3>
            <p>
              Today, buying SaaS usually involves searching Google, opening several websites to read
              reviews, comparing features, checking pricing, and then using a free trial.
            </p>
            <p>Now imagine giving the entire research job to an AI agent. You could tell it to:</p>
            <blockquote className="border-l-2 border-accent pl-5 italic text-foreground">
              "Find a project management tool for our 30-person remote team. It needs to integrate
              with Slack, support automated workflows, and cost less than $500 a month."
            </blockquote>
            <p>
              Instead of giving you a list of links and asking you to do the research yourself, AI
              agents for business will compare several project management tools against those
              requirements and narrow down the options.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              HubSpot, Salesforce, and Intercom show what AI software agents are already doing
            </h2>
            <p>
              You don't have to rely on my personal conviction to understand where this is going.
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

            <h3 className="display-type pt-4 text-xl text-foreground">
              Salesforce wants agents to become part of the workforce
            </h3>
            <p>
              Salesforce has a platform called{" "}
              <A href="https://www.salesforce.com/agentforce/">Agentforce</A>. It's for building and
              deploying AI agents that can work with business data and use tools to complete tasks.
              Those agents can support areas like sales, customer service, marketing, and commerce.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Intercom shows how far this can go in customer service
            </h3>
            <p>
              <A href="https://fin.ai/">Intercom's Fin AI agent</A> is designed to resolve customer
              questions rather than simply give a support representative a suggested answer. It can
              use a company's knowledge and information to handle conversations with customers.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              So, is AI actually going to kill SaaS?
            </h2>
            <p>
              No. At least not in the way people usually mean when they say AI is going to kill
              SaaS.
            </p>
            <p>
              AI software agents aren't making software unnecessary. In fact, they're making
              software more useful by giving it the ability to do more without waiting for a person
              to direct every step.
            </p>
            <p>
              But that doesn't mean SaaS applications can carry on exactly as they have for the last
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
              Per-seat pricing will become harder to justify when an AI agent, rather than a human
              employee, is doing much of the work.
            </p>
            <p>
              And software discovery will change if businesses increasingly use AI to research and
              compare products.
            </p>

            <Figure
              src={teamImg}
              alt="Employees discussing agentic AI systems"
              sourceLabel="Unsplash"
              sourceHref="https://unsplash.com/photos/group-of-people-sitting-on-chair-in-front-of-brown-wooden-table-JVdNmAFDiI4"
            />

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">
              What SaaS companies need to do before the AI agent shift accelerates
            </h2>
            <p>
              If you're thinking of the future of SaaS, you need to think beyond simply adding a
              chatbot to a product and calling it an AI agent. Do these things instead:
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Build products that AI software agents can work with
            </h3>
            <p>
              An AI agent needs a way to communicate with software. That's where APIs become
              important. They provide a way for applications to exchange information and trigger
              actions without a person manually moving data between them.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              Focus on outcomes, not just features
            </h3>
            <p>
              AI agents in SaaS don't care whether your product has 100 features. What they are
              concerned about is whether your product can help achieve a particular task. The
              clearer the answer is, the easier it is for your product to be recommended.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">Rethink pricing model</h3>
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
              <A href="https://www.writewiser.co.uk/post/8-ways-to-optimize-your-content-to-get-cited-by-llms-and-aio">
                optimize your software to be cited by LLMs
              </A>
              . That means you should provide detailed product information, accurate pricing, useful
              reviews, and strong third-party mentions.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">Keep humans in control</h3>
            <p>
              Many people mistake AI-powered software agents for autonomous software. The more
              responsibility you give the agent, the more carefully you need to control what it can
              do. You need to tell it what it's permissible to do on its own and when a human
              command is needed.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">FAQs</h2>

            <h3 className="display-type pt-4 text-xl text-foreground">
              What are AI software agents?
            </h3>
            <p>
              AI software agents are AI-powered systems that can understand a goal, determine the
              steps needed to achieve it, use available tools, and take actions with less human
              intervention.
            </p>

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
              Will AI software agents replace SaaS?
            </h3>
            <p>
              Not entirely. AI software agents still need applications, data, infrastructure,
              security controls, and record systems to perform reasonable work.
            </p>

            <h3 className="display-type pt-4 text-xl text-foreground">
              What can AI software agents do for businesses?
            </h3>
            <p>
              It depends on the software and permissions granted. AI agents for business can perform
              tasks such as researching prospects, analyzing data, updating records, and
              transferring data between applications.
            </p>

            <h2 className="display-type pt-8 text-2xl text-foreground sm:text-3xl">Conclusion</h2>
            <p>
              AI software agents are proposing a different deal than what we're accustomed to:{" "}
              <strong className="font-medium text-foreground">
                Tell the software what you want, and it will figure out how to accomplish it
              </strong>
              .
            </p>
            <p>
              Does that mean AI is going to kill SaaS? No, but it will change how we traditionally
              expect software to work. The biggest SaaS companies, such as HubSpot, Salesforce, and
              Intercom, are already moving in this direction.
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
              href="mailto:dadaezekiel12@gmail.com"
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
