import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiGlobe, FiLock } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

type Color = "neon" | "cyber-blue" | "cyber-purple";

type Project = {
  name: string;
  url?: string;
  repo?: string;
  description: string;
  tags: string[];
  color: Color;
  badge?: string;
  restricted?: boolean;
};

/* ---------- Products & SaaS: things I built end-to-end ---------- */
const products: Project[] = [
  {
    name: "Abeel — أبيل",
    url: "https://abeel.sa/",
    description:
      "Corporate site for Abeel, a Saudi language & culture consultancy (One Group). Arabic-first RTL build with an EN switch, hero video, project showcase, community-event registration, careers form with CV upload, and a contact pipeline — deployed and administered on AWS EC2 / Ubuntu.",
    tags: ["RTL / Arabic", "AWS EC2", "PHP", "Forms & Uploads", "Bootstrap"],
    color: "neon",
    badge: "Live · Saudi client",
  },
  {
    name: "One Group Portal — مجموعة ون",
    url: "https://all.one1.sa/admin",
    description:
      "Internal employee portal and admin CMS for One Group (600+ staff). Google SSO restricted to approved company domains, role-based access, content management for news, training modules and resources — all in Arabic RTL. Server operations, security hardening and monitoring on AWS.",
    tags: ["Admin Panel", "Google SSO", "RBAC", "RTL / Arabic", "AWS"],
    color: "cyber-blue",
    badge: "Live · restricted access",
    restricted: true,
  },
  {
    name: "Musaed — HR AI Assistant",
    repo: "https://github.com/MuhammadBilalpro/HRLanggraph",
    description:
      "Bilingual (AR/EN) HR agent built on LangGraph.js + Claude. Routes each message to policy RAG, HRIS tools (leave balance, leave requests, payroll) or general HR knowledge, and pauses for human approval on sensitive cases using interrupt(). Glass UI with an HR officer review panel.",
    tags: ["LangGraph.js", "Claude API", "TypeScript", "Human-in-the-loop", "Express"],
    color: "cyber-purple",
    badge: "AI Agent · open source",
  },
  {
    name: "Triage — AI Support Desk",
    repo: "https://github.com/MuhammadBilalpro/triage",
    description:
      "AI-assisted support inbox: Claude classifies every ticket (category, priority, sentiment), summarises it and drafts a reply — nothing is sent until an agent approves. Public intake form, priority-sorted inbox, dashboard, heuristic fallback when offline.",
    tags: ["React", "Express", "Claude API", "SQLite", "Human-in-the-loop"],
    color: "neon",
    badge: "SaaS · open source",
  },
  {
    name: "Booker — Appointments (AR/EN)",
    repo: "https://github.com/MuhammadBilalpro/booker",
    description:
      "Booking SaaS for clinics and salons: 4-step public flow in Arabic (RTL) or English, real availability engine with overlap detection, WhatsApp confirmations, admin week calendar with no-show tracking and revenue KPIs, bilingual service & staff management.",
    tags: ["React", "Express", "RTL / Arabic", "Scheduling", "WhatsApp"],
    color: "cyber-blue",
    badge: "SaaS · open source",
  },
  {
    name: "NexaCare — AI Customer Support",
    repo: "https://github.com/MuhammadBilalpro",
    description:
      "Full-stack customer-support platform with knowledge-grounded responses, persistent conversations, voice input, human handoff and analytics. REST API with validation, security headers, atomic persistence, health monitoring, safe AI fallback and automated tests.",
    tags: ["Node.js", "OpenAI API", "REST API", "Voice Input", "Testing"],
    color: "neon",
    badge: "SaaS · open source",
  },
  {
    name: "Clarity — Accessibility Auditor",
    repo: "https://github.com/MuhammadBilalpro",
    description:
      "Browser-based WCAG 2.2 AA auditing workspace: risk scoring, severity analysis, remediation guidance, isolated HTML scanning, score comparison, persistent local history and JSON report export.",
    tags: ["JavaScript", "Vite", "axe-core", "WCAG 2.2", "Dev Tool"],
    color: "cyber-blue",
    badge: "Product · open source",
  },
];

/* ---------- Client websites: delivered for agencies & businesses ---------- */
const clientSites: Project[] = [
  {
    name: "Digital Cyber Nation",
    url: "https://digitalcybernation.com/",
    description: "Full-service digital agency site — design, development, branding and marketing services.",
    tags: ["WordPress", "UI/UX"],
    color: "neon",
  },
  {
    name: "BrandLira",
    url: "https://brandlira.com/",
    description: "SEO & digital marketing agency for US businesses with case studies and newsletter integration.",
    tags: ["SEO", "WordPress"],
    color: "cyber-blue",
  },
  {
    name: "RankYours",
    url: "https://rankyours.com/",
    description: "SEO optimization platform with service listings, pricing plans and consultation booking.",
    tags: ["SEO", "WordPress"],
    color: "cyber-purple",
  },
  {
    name: "Vitas Inc",
    url: "https://vitasinc.com/",
    description: "Interior renovation company site with project gallery, reviews and free-estimate form.",
    tags: ["WordPress", "Business"],
    color: "neon",
  },
  {
    name: "Motor Trade Insurance SRA",
    url: "https://motortradeinsurancesra.co.uk/",
    description: "UK motor trade insurance specialist with quote forms, FAQs and broker services.",
    tags: ["WordPress", "Forms"],
    color: "cyber-blue",
  },
  {
    name: "Cruzin Car Wash",
    url: "https://www.cruzincarwash.com/",
    description: "Car wash business site with service details and location info.",
    tags: ["WordPress", "Business"],
    color: "cyber-purple",
  },
  {
    name: "WestEnd Goods",
    url: "https://westendgoods.com/",
    description: "E-commerce store for electronics and auto parts with categories, deals and cart.",
    tags: ["WooCommerce", "E-Commerce"],
    color: "neon",
  },
];

const tagClass: Record<Color, string> = {
  neon: "bg-neon/5 border-neon/20 text-neon/70",
  "cyber-blue": "bg-cyber-blue/5 border-cyber-blue/20 text-cyber-blue/70",
  "cyber-purple": "bg-cyber-purple/5 border-cyber-purple/20 text-cyber-purple/70",
};

function Card({ project, i, featured }: { project: Project; i: number; featured?: boolean }) {
  const href = project.url ?? project.repo ?? "#";
  const host = href.replace(/https?:\/\//, "").replace(/\/$/, "");
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="group block"
    >
      <div className="terminal-window h-full hover:border-neon/40 transition-all duration-300 hover:-translate-y-1">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500" />
          <div className="terminal-dot bg-yellow-500" />
          <div className="terminal-dot bg-green-500" />
          <span className="text-xs text-gray-500 ml-2 font-mono truncate">{host}</span>
          {project.badge && (
            <span className={`ml-auto px-2 py-0.5 text-[10px] rounded border font-mono whitespace-nowrap ${tagClass[project.color]}`}>
              {project.badge}
            </span>
          )}
        </div>
        <div className={`${featured ? "p-5 sm:p-6" : "p-4 sm:p-5"} flex flex-col h-[calc(100%-36px)]`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 min-w-0">
              {project.url ? (
                <FiGlobe className={`text-${project.color} shrink-0`} size={16} />
              ) : (
                <FiGithub className={`text-${project.color} shrink-0`} size={16} />
              )}
              <h3 className={`font-display ${featured ? "text-base sm:text-lg" : "text-sm sm:text-base"} font-bold text-white group-hover:text-neon transition-colors truncate`}>
                {project.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {project.restricted && <FiLock className="text-gray-600" size={13} title="Login required" />}
              {project.repo && project.url && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-600 hover:text-neon transition-colors"
                  aria-label={`${project.name} on GitHub`}
                >
                  <FiGithub size={14} />
                </a>
              )}
              <FiExternalLink className="text-gray-600 group-hover:text-neon transition-colors" size={14} />
            </div>
          </div>
          <p className={`${featured ? "text-sm" : "text-xs"} text-gray-500 leading-relaxed mb-4 flex-1`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className={`px-2 py-0.5 text-[10px] rounded border font-mono ${tagClass[project.color]}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ ls -la ~/products"
          title="PRODUCTS & SAAS"
          subtitle="Platforms, portals and AI products I engineered end-to-end"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((p, i) => (
            <Card key={p.name} project={p} i={i} featured />
          ))}
        </div>

        <SectionHeading
          tag="$ ls -la ~/clients"
          title="CLIENT WEBSITES"
          subtitle="Business sites delivered for agencies and companies"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {clientSites.map((p, i) => (
            <Card key={p.name} project={p} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="terminal-window inline-block px-6 py-3">
            <p className="text-xs font-mono text-gray-500">
              <span className="text-neon">$</span> echo "Also build{" "}
              <span className="text-cyber-blue">Python automation & reporting scripts</span>{" "}
              and manage <span className="text-cyber-blue">AWS EC2 / Ubuntu</span> servers"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
