import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaWordpress, FaHtml5, FaCss3Alt,
  FaJava, FaDatabase, FaSearchengin, FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVuedotjs,
  SiExpress, SiPhp, SiGit, SiSelenium,
} from "react-icons/si";
import { FiCpu, FiBarChart2 } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    color: "neon",
    skills: [
      { name: "React", icon: FaReact, level: 50 },
      { name: "Next.js", icon: SiNextdotjs, level: 45 },
      { name: "Vue.js", icon: SiVuedotjs, level: 40 },
      { name: "TypeScript", icon: SiTypescript, level: 45 },
      { name: "JavaScript", icon: SiJavascript, level: 55 },
      { name: "HTML5", icon: FaHtml5, level: 60 },
      { name: "CSS3", icon: FaCss3Alt, level: 55 },
      { name: "Tailwind", icon: SiTailwindcss, level: 50 },
      { name: "Bootstrap", icon: FaBootstrap, level: 50 },
    ],
  },
  {
    title: "Backend",
    color: "cyber-blue",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 45 },
      { name: "Express.js", icon: SiExpress, level: 45 },
      { name: "Python", icon: FaPython, level: 50 },
      { name: "PHP", icon: SiPhp, level: 40 },
      { name: "Java", icon: FaJava, level: 35 },
      { name: "REST APIs", icon: FaDatabase, level: 50 },
      { name: "Git", icon: SiGit, level: 50 },
      { name: "Selenium", icon: SiSelenium, level: 50 },
    ],
  },
  {
    title: "Specialized",
    color: "cyber-purple",
    skills: [
      { name: "WordPress", icon: FaWordpress, level: 55 },
      { name: "AI/ML", icon: FiCpu, level: 35 },
      { name: "Data Science", icon: FiBarChart2, level: 35 },
      { name: "SEO (Basic)", icon: FaSearchengin, level: 40 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ ls -la /skills"
          title="TECH STACK"
          subtitle="Loading modules... always upgrading"
        />

        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
            >
              <div className="terminal-window overflow-hidden">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="text-xs text-gray-500 ml-2 font-mono">
                    /{category.title.toLowerCase()}/modules
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-neon text-xs">root@bilal:~#</span>
                    <span className="text-gray-300 text-xs">
                      scan --type={category.title.toLowerCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, i) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="group"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className={`text-${category.color} text-lg group-hover:scale-110 transition-transform`} />
                            <span className="text-gray-300 text-xs font-mono flex-1">
                              {skill.name}
                            </span>
                            <span className="text-gray-600 text-xs font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.2 + i * 0.05,
                                ease: "easeOut",
                              }}
                              className={`h-full rounded-full bg-gradient-to-r ${
                                category.color === "neon"
                                  ? "from-neon/60 to-neon"
                                  : category.color === "cyber-blue"
                                  ? "from-cyber-blue/60 to-cyber-blue"
                                  : "from-cyber-purple/60 to-cyber-purple"
                              }`}
                              style={{
                                boxShadow: `0 0 8px ${
                                  category.color === "neon"
                                    ? "#00ff4160"
                                    : category.color === "cyber-blue"
                                    ? "#00d4ff60"
                                    : "#b400ff60"
                                }`,
                              }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
