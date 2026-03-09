import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Full Stack / WordPress Developer",
    company: "Digital Cyber Nation",
    period: "Present",
    location: "On-Site, Karachi",
    type: "active",
    tasks: [
      "Engineered dynamic web applications using React, Next.js, and TypeScript with SEO optimization",
      "Built robust RESTful APIs using Node.js and Express.js for server-side logic",
      "Demonstrated expertise in Vue.js for component-based UI development",
      "Specialized in PHP, HTML, CSS, JavaScript with Tailwind CSS/Bootstrap",
      "Developed custom Python-based data grabber tool for automated Excel reporting",
      "Designed and optimized custom WordPress themes and plugins",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "BrandLira",
    period: "Ongoing",
    location: "Remote",
    type: "active",
    tasks: [
      "Built and maintained the BrandLira SEO & digital marketing agency website",
      "Implemented responsive design with modern UI/UX practices",
      "Integrated newsletter, case studies, and AI-powered marketing sections",
    ],
  },
  {
    role: "Sales Officer",
    company: "S&J Call Centre",
    period: "2021 - 2022",
    location: "Karachi",
    type: "completed",
    tasks: [
      "Managed outbound and inbound sales calls to promote products",
      "Achieved sales targets through persuasive communication",
      "Handled customer queries and resolved issues for client satisfaction",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ cat /var/log/career.log"
          title="EXPERIENCE"
          subtitle="Process execution history"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon via-cyber-blue to-cyber-purple opacity-30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 rounded-full border-2 ${
                    exp.type === "active"
                      ? "bg-neon border-neon shadow-[0_0_10px_#00ff41]"
                      : "bg-gray-700 border-gray-600"
                  }`}
                />

                <div className="terminal-window group hover:border-neon/30 transition-all duration-300">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500" />
                    <div className="terminal-dot bg-yellow-500" />
                    <div className="terminal-dot bg-green-500" />
                    <span className="text-xs text-gray-500 ml-2 font-mono">
                      process_{i + 1}.log
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span className="flex items-center gap-1 text-cyber-blue">
                            <FiBriefcase size={12} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiMapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-mono text-neon/70 bg-neon/5 px-3 py-1 rounded-full border border-neon/10 w-fit">
                        <FiCalendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.tasks.map((task, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-400"
                        >
                          <span className="text-neon mt-0.5 shrink-0">▸</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
