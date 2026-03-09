import { motion } from "framer-motion";
import { FiExternalLink, FiGlobe } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Digital Cyber Nation",
    url: "https://digitalcybernation.com/",
    description:
      "Full-service digital agency website with design, development, branding, and marketing services. Built with modern web technologies.",
    tags: ["Web Dev", "WordPress", "UI/UX"],
    color: "neon",
  },
  {
    name: "BrandLira",
    url: "https://brandlira.com/",
    description:
      "SEO & digital marketing agency website for US businesses. Features AI-powered approach sections, case studies, and newsletter integration.",
    tags: ["SEO", "Marketing", "WordPress"],
    color: "cyber-blue",
  },
  {
    name: "RankYours",
    url: "https://rankyours.com/",
    description:
      "SEO and digital marketing optimization platform with service listings, pricing plans, and consultation booking features.",
    tags: ["SEO", "WordPress", "Marketing"],
    color: "cyber-purple",
  },
  {
    name: "Vitas Inc",
    url: "https://vitasinc.com/",
    description:
      "Interior renovation company website with service showcase, project gallery, customer reviews, and free estimate form.",
    tags: ["WordPress", "Business", "UI/UX"],
    color: "neon",
  },
  {
    name: "Motor Trade Insurance SRA",
    url: "https://motortradeinsurancesra.co.uk/",
    description:
      "UK motor trade insurance specialist site with quote forms, FAQ sections, testimonials, and specialist broker services.",
    tags: ["WordPress", "Forms", "UK Business"],
    color: "cyber-blue",
  },
  {
    name: "InShot Pro",
    url: "http://inshottproo.com/",
    description:
      "Feature-rich app landing page with download sections, feature showcases, FAQ accordion, and cross-platform support info.",
    tags: ["WordPress", "Landing Page", "App"],
    color: "cyber-purple",
  },
  {
    name: "One Group Portal",
    url: "https://mediumpurple-gnat-882610.hostingersite.com/",
    description:
      "Internal employee portal for One Group with Arabic RTL support, news section, training modules, and resource management.",
    tags: ["WordPress", "Portal", "RTL/Arabic"],
    color: "neon",
  },
  {
    name: "Cruzin Car Wash",
    url: "https://www.cruzincarwash.com/",
    description:
      "Car wash business website with service details, location info, and a clean modern design for customer engagement.",
    tags: ["WordPress", "Business", "Design"],
    color: "cyber-blue",
  },
  {
    name: "WestEnd Goods",
    url: "https://westendgoods.com/",
    description:
      "E-commerce store for electronics and auto parts with product categories, deals, cart system, and multi-language support.",
    tags: ["E-Commerce", "WordPress", "WooCommerce"],
    color: "cyber-purple",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ ls -la ~/projects"
          title="PROJECTS"
          subtitle="Deployed applications in production"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
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
                  <span className="text-xs text-gray-500 ml-2 font-mono truncate">
                    {project.url.replace(/https?:\/\//, "").replace(/\/$/, "")}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex flex-col h-[calc(100%-36px)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FiGlobe
                        className={`text-${project.color} shrink-0`}
                        size={16}
                      />
                      <h3 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-neon transition-colors truncate">
                        {project.name}
                      </h3>
                    </div>
                    <FiExternalLink
                      className="text-gray-600 group-hover:text-neon transition-colors shrink-0"
                      size={14}
                    />
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] rounded border font-mono ${
                          project.color === "neon"
                            ? "bg-neon/5 border-neon/20 text-neon/70"
                            : project.color === "cyber-blue"
                            ? "bg-cyber-blue/5 border-cyber-blue/20 text-cyber-blue/70"
                            : "bg-cyber-purple/5 border-cyber-purple/20 text-cyber-purple/70"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
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
              <span className="text-neon">$</span> echo "Also experienced
              in building{" "}
              <span className="text-cyber-blue">
                Python Selenium automation tools
              </span>{" "}
              for data scraping & Excel reporting"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
