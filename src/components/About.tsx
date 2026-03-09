import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TerminalBlock from "./TerminalBlock";

const stats = [
  { label: "Projects", value: "9+", icon: "📂" },
  { label: "Technologies", value: "15+", icon: "⚡" },
  { label: "Experience", value: "1+ yr", icon: "🕐" },
  { label: "Always", value: "Learning", icon: "🚀" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ whoami"
          title="ABOUT ME"
          subtitle="System information loaded successfully"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TerminalBlock title="about.md" command="cat ~/about.md">
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  <span className="text-neon">{">"}</span> An eager and passionate{" "}
                  <span className="text-cyber-blue">Web Developer</span> based in Karachi, Pakistan.
                  Completed my BS in Computer Science from{" "}
                  <span className="text-neon">Iqra University</span> and constantly learning new
                  technologies.
                </p>
                <p>
                  <span className="text-neon">{">"}</span> I build web applications using
                  frameworks like{" "}
                  <span className="text-cyber-blue">React, Next.js, Vue.js</span>, and work with
                  backend technologies like{" "}
                  <span className="text-cyber-blue">Node.js, Express.js, and Python</span>.
                  Growing my skills every day.
                </p>
                <p>
                  <span className="text-neon">{">"}</span> Currently working at{" "}
                  <span className="text-cyber-pink">Digital Cyber Nation</span>, building web
                  solutions and automation tools including{" "}
                  <span className="text-cyber-blue">Python Selenium-based data scrapers</span>{" "}
                  for automated reporting.
                </p>
                <p>
                  <span className="text-neon">{">"}</span> I also work with{" "}
                  <span className="text-cyber-blue">WordPress development</span>, have basic
                  knowledge of{" "}
                  <span className="text-cyber-blue">SEO</span>, and am exploring{" "}
                  <span className="text-cyber-blue">Data Science & AI</span>. Always hungry to
                  learn more.
                </p>
              </div>
            </TerminalBlock>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="terminal-window p-4 text-center group hover:border-neon/40 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-neon text-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="terminal-window p-4">
              <p className="text-xs text-gray-500 mb-2 font-mono">
                <span className="text-neon">$</span> cat /proc/languages
              </p>
              <div className="flex flex-wrap gap-2">
                {["English (Fluent)", "Urdu (Native)", "Arabic (Basic)"].map(
                  (lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-xs bg-neon/5 border border-neon/20 rounded text-gray-400"
                    >
                      {lang}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
