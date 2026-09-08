import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "kattyeye | links",
  description:
    "Kat's links — SmartPO, Hey Poppi, Irie, plus garden and kitchen picks",
};

interface LinkItem {
  label: string;
  description: string;
  href: string;
  tag?: string;
  domain?: string;
  affiliate?: boolean;
  emoji: string;
}

const projects: LinkItem[] = [
  {
    emoji: "▤",
    label: "SmartPO",
    description: "Procurement for healthcare supply teams",
    href: "https://smartpo.com",
    domain: "smartpo.com",
  },
  {
    emoji: "◐",
    label: "Hey Poppi",
    description: "AI voice agents that answer the phone",
    href: "https://heypoppi.ai",
    domain: "heypoppi.ai",
  },
  {
    emoji: "◇",
    label: "Irie",
    description: "Plan a trip in minutes, not tabs",
    href: "https://irietravel.app",
    domain: "irietravel.app",
  },
];

const socials: LinkItem[] = [
  {
    emoji: "↗",
    label: "Portfolio",
    description: "Work, projects & experience",
    href: "https://kattyeye.com",
    tag: "kattyeye.com",
  },
  {
    emoji: "◎",
    label: "Instagram",
    description: "Garden, food & life in Greenville",
    href: "https://instagram.com/kattyeye",
    tag: "@kattyeye",
  },
  {
    emoji: "✦",
    label: "Pinterest",
    description: "Tools, recipes & home inspo",
    href: "https://pinterest.com/kattyeye",
    tag: "kattyeye",
  },
];

const picks: LinkItem[] = [
  {
    emoji: "🌱",
    label: "Garden & Raised Beds",
    description: "My backyard build — beds, drip irrigation, tools",
    href: "https://www.amazon.com/shop/kattyeye",
    tag: "amazon picks",
    affiliate: true,
  },
  {
    emoji: "🫙",
    label: "Kitchen & Fermentation",
    description: "Crocks, knives, baking gear I use daily",
    href: "https://www.amazon.com/shop/kattyeye",
    tag: "amazon picks",
    affiliate: true,
  },
  {
    emoji: "⌨",
    label: "My Dev Setup",
    description: "Keyboard, monitor, accessories I code with",
    href: "https://www.amazon.com/shop/kattyeye",
    tag: "amazon picks",
    affiliate: true,
  },
];

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-white border border-stone-200 rounded-2xl px-5 py-4 hover:border-stone-400 hover:shadow-sm transition-all duration-150"
    >
      <span className="text-xl w-8 text-center shrink-0 leading-none">{item.emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-stone-900 text-sm leading-snug">{item.label}</p>
        <p className="text-stone-400 text-xs mt-0.5 leading-snug">{item.description}</p>
        {item.domain && (
          <p className="text-[11px] text-stone-400/80 mt-1 leading-none">{item.domain}</p>
        )}
      </div>
      {item.tag && (
        <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
          <span className="text-[10px] font-medium tracking-widest uppercase text-stone-400 whitespace-nowrap">
            {item.tag}
          </span>
          {item.affiliate && (
            <span className="text-[9px] text-stone-300">#ad</span>
          )}
        </div>
      )}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-sm mx-auto px-5 pt-16 pb-20">

        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-amber-100 border border-stone-200 flex items-center justify-center mb-6">
          <span className="text-2xl leading-none">🌿</span>
        </div>

        {/* Identity */}
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 leading-none">
          kattyeye
        </h1>
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 mt-2 mb-3">
          Dev &middot; Garden &middot; Kitchen
        </p>
        <p className="text-sm text-stone-500 leading-relaxed max-w-[260px]">
          Full-stack dev in Greenville, SC. Building things online and in the backyard.
        </p>

        {/* Divider */}
        <div className="border-t border-stone-200 my-8" />

        {/* Section label */}
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-400 mb-3">
          Things I Build
        </p>

        {/* Projects */}
        <div className="space-y-2.5">
          {projects.map((item) => (
            <LinkCard key={item.label} item={item} />
          ))}
        </div>

        {/* Section label */}
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-400 mt-9 mb-3">
          Elsewhere
        </p>

        {/* Social links */}
        <div className="space-y-2.5">
          {socials.map((item) => (
            <LinkCard key={item.label} item={item} />
          ))}
        </div>

        {/* Section label */}
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-400 mt-9 mb-3">
          Honest Picks
        </p>

        {/* Affiliate links */}
        <div className="space-y-2.5">
          {picks.map((item) => (
            <LinkCard key={item.label} item={item} />
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 mt-12 pt-6 text-center space-y-1">
          <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-stone-300">
            Greenville, SC &middot; 2026
          </p>
          <p className="text-[10px] text-stone-300 leading-relaxed">
            Affiliate links marked #ad — I only share what I actually use.
          </p>
        </div>

      </div>
    </main>
  );
}
