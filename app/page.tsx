interface LinkItem {
  label: string;
  description: string;
  href: string;
  domain?: string;
  handle?: string;
  affiliate?: boolean;
}

const work: LinkItem[] = [
  {
    label: "SmartPO",
    description: "Procurement platform for healthcare supply teams",
    href: "https://smartpo.com",
    domain: "smartpo.com",
  },
  {
    label: "Hey Poppi",
    description: "AI voice agents that answer the phone",
    href: "https://heypoppi.ai",
    domain: "heypoppi.ai",
  },
  {
    label: "Irie",
    description: "Plan a trip in minutes, not tabs",
    href: "https://irietravel.app",
    domain: "irietravel.app",
  },
];

const elsewhere: LinkItem[] = [
  {
    label: "Portfolio",
    description: "Work, projects and experience",
    href: "https://kattyeye.com",
    domain: "kattyeye.com",
  },
  {
    label: "Instagram",
    description: "Garden, food and life in Greenville",
    href: "https://instagram.com/kattyeye",
    handle: "@kattyeye",
  },
  {
    label: "Pinterest",
    description: "Tools, recipes and home inspo",
    href: "https://pinterest.com/kattyeye",
    handle: "@kattyeye",
  },
];

/* Honest picks — hidden until the Amazon storefront lists exist
const picks: LinkItem[] = [
  {
    label: "Garden and raised beds",
    description: "Beds, drip irrigation, the tools I actually use",
    href: "https://www.amazon.com/shop/kattyeye",
    affiliate: true,
  },
  {
    label: "Kitchen and fermentation",
    description: "Crocks, knives, baking gear I reach for daily",
    href: "https://www.amazon.com/shop/kattyeye",
    affiliate: true,
  },
  {
    label: "Dev setup",
    description: "Keyboard, monitor, the rest of the desk",
    href: "https://www.amazon.com/shop/kattyeye",
    affiliate: true,
  },
];
*/

function LinkRow({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 backdrop-blur-sm transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400/60"
    >
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold leading-tight tracking-tight text-white">
          {item.label}
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-400">
          {item.description}
        </p>
        {(item.domain || item.handle) && (
          <p className="mt-2 text-[12px] leading-none text-neutral-500 transition-colors duration-200 group-hover:text-sky-300/80">
            {item.domain ?? item.handle}
          </p>
        )}
        {item.affiliate && (
          <p className="mt-2 text-[12px] leading-none text-neutral-500">#ad</p>
        )}
      </div>
      <span
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-sm text-neutral-500 transition-colors duration-200 group-hover:text-sky-300"
      >
        ↗
      </span>
    </a>
  );
}

function Section({
  heading,
  items,
}: {
  heading: string;
  items: LinkItem[];
}) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-[13px] font-medium text-neutral-500">
        {heading}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <LinkRow key={item.label + item.description} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060607]">
      {/* Ambient glow, echoing the portfolio hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(37, 99, 235, 0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[440px] px-6 pb-24 pt-20">
        <header className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-1.5 backdrop-blur-sm text-[13px]">
            <span className="font-semibold text-white">Kat Ingram</span>
            <span aria-hidden="true" className="h-3.5 w-px bg-sky-400/30" />
            <span className="text-sky-300">Greenville, SC</span>
          </div>

          <h1 className="mt-8 text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-white">
            Everything I&rsquo;m building, in one place.
          </h1>

          <p className="mx-auto mt-5 max-w-[340px] text-[15px] leading-relaxed text-neutral-400">
            Full-stack developer working on procurement software, AI voice
            agents, and travel tools — plus a garden that keeps me honest.
          </p>
        </header>

        <Section heading="Work" items={work} />
        <Section heading="Elsewhere" items={elsewhere} />
        {/* <Section heading="Honest picks" items={picks} /> */}

        <footer className="mt-16 border-t border-white/[0.07] pt-6 text-center">
          <p className="text-[12px] text-neutral-500">
            Greenville, SC · {new Date().getFullYear()}
          </p>
          {/* <p className="mx-auto mt-2 max-w-[320px] text-[12px] leading-relaxed text-neutral-500">
            Links marked #ad are affiliate links. I only share what I actually
            use.
          </p> */}
        </footer>
      </div>
    </main>
  );
}
