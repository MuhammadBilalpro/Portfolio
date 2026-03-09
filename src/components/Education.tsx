import { motion } from "framer-motion";
import { FiBook, FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "BS Computer Science",
    institution: "Iqra University",
    location: "Karachi, Pakistan",
    period: "Completed",
    description:
      "Completed BS (16 Years education) in Computer Science — Developing, Designing, Implementing & Testing Computer Based Systems.",
    status: "completed",
  },
  {
    degree: "Intermediate",
    institution: "Cadet College",
    location: "Attock, Pakistan",
    period: "2019 – 2021",
    description: "Completed intermediate education with strong academic performance.",
    status: "completed",
  },
];

const courses = [
  {
    name: "Web Development by React Native",
    institution: "NED University",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ cat /etc/education.d/*"
          title="EDUCATION"
          subtitle="Knowledge base loaded"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="terminal-window hover:border-neon/30 transition-all duration-300"
              >
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="text-xs text-gray-500 ml-2 font-mono">
                    education_{i}.conf
                  </span>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded ${
                        edu.status === "active"
                          ? "bg-neon/10 text-neon"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      <FiBook size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-cyber-blue text-sm">{edu.institution}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        {edu.location} • {edu.period}
                      </p>
                      {edu.status === "active" ? (
                        <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-neon/10 border border-neon/20 text-neon rounded">
                          ● Currently Enrolled
                        </span>
                      ) : edu.period === "Completed" ? (
                        <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue rounded">
                          ✓ Degree Completed
                        </span>
                      ) : null}
                      <p className="text-gray-400 text-xs sm:text-sm mt-3">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-2 font-mono">
                  certifications.log
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-neon text-xs">root@bilal:~#</span>
                  <span className="text-gray-300 text-xs">ls /certifications</span>
                </div>
                {courses.map((course, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-neon/5 border border-neon/10 rounded-lg"
                  >
                    <FiAward className="text-neon mt-0.5" size={18} />
                    <div>
                      <p className="text-white text-sm font-semibold">{course.name}</p>
                      <p className="text-gray-500 text-xs">{course.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-2 font-mono">
                  soft_skills.sh
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-neon text-xs">root@bilal:~#</span>
                  <span className="text-gray-300 text-xs">cat /proc/soft_skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Management",
                    "Communication",
                    "Negotiation",
                    "Critical Thinking",
                    "Problem Solving",
                    "Team Leadership",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs bg-cyber-purple/10 border border-cyber-purple/20 text-gray-400 rounded-lg hover:border-cyber-purple/40 hover:text-cyber-purple transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
