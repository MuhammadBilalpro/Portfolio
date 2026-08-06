import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from "react-icons/fi";
import RobotModel from "./RobotModel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-2 font-mono">
                  bilal@kali:~$
                </span>
              </div>
              <div className="p-4 sm:p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-neon text-xs sm:text-sm">root@bilal:~#</span>
                  <span className="text-gray-300 text-xs sm:text-sm">cat /etc/profile</span>
                </div>
                <div className="border-l-2 border-neon/30 pl-4 space-y-2">
                  <p className="text-gray-500 text-xs">// identity.conf</p>
                  <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-neon text-glow leading-tight">
                    BILAL MADNI
                  </h1>
                  <div className="text-cyber-blue text-sm sm:text-base font-mono h-6">
                    <TypeAnimation
                      sequence={[
                        "> Full-Stack Developer",
                        2000,
                        "> WordPress Developer",
                        2000,
                        "> React & Next.js Developer",
                        2000,
                        "> Automation Builder",
                        2000,
                        "> Always Learning...",
                        2000,
                      ]}
                      repeat={Infinity}
                      speed={50}
                    />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                  I build fast, responsive websites, WordPress solutions, e-commerce
                  stores, and web applications for businesses in Pakistan and worldwide.
                </p>

                <div className="pt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-neon text-xs">root@bilal:~#</span>
                    <span className="text-gray-300 text-xs">cat /proc/status</span>
                  </div>
                  <div className="text-xs text-gray-500 space-y-0.5 pl-4">
                    <p>
                      <span className="text-neon/70">LOCATION:</span>{" "}
                      <span className="text-gray-400">Nazimabad, Karachi</span>
                    </p>
                    <p>
                      <span className="text-neon/70">STATUS:</span>{" "}
                      <span className="text-green-400">● Available for work</span>
                    </p>
                    <p>
                      <span className="text-neon/70">STACK:</span>{" "}
                      <span className="text-gray-400">
                        React · Next.js · Node.js · Python · WordPress · Selenium
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <span className="text-neon text-xs">root@bilal:~#</span>
                  <span className="text-gray-400 text-xs animate-blink">█</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-6"
            >
              <a
                href="mailto:sheikhbilal8930@gmail.com"
                className="px-5 py-2.5 bg-neon/10 border border-neon/40 text-neon text-sm font-mono rounded hover:bg-neon/20 hover:border-neon transition-all duration-300 animate-pulse-glow"
              >
                Hire Me <span aria-hidden="true">./contact.sh</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:sheikhbilal8930@gmail.com"
                  className="text-gray-500 hover:text-neon transition-colors"
                  aria-label="Email Bilal Madni"
                >
                  <FiMail size={18} />
                </a>
                <a
                  href="https://github.com/MuhammadBilalpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neon transition-colors"
                  aria-label="Bilal Madni on GitHub"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bilal-madni-138543260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-neon transition-colors"
                  aria-label="Bilal Madni on LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Robot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <RobotModel />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon/50 hover:text-neon transition-colors"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
