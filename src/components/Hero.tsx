import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMapPin,
  FiShoppingBag,
} from "react-icons/fi";

const services = [
  { icon: FiCode, label: "Web applications & SaaS", detail: "Next.js, Node.js, REST APIs, AWS" },
  { icon: FiCpu, label: "AI agents & assistants", detail: "LangGraph, Claude & OpenAI APIs" },
  { icon: FiLayers, label: "Portals & admin panels", detail: "SSO, RBAC, Arabic RTL" },
  { icon: FiShoppingBag, label: "Business sites & e-commerce", detail: "WordPress & WooCommerce" },
];

const metrics = [
  { value: "14+", label: "Shipped projects" },
  { value: "2", label: "Saudi products live" },
  { value: "AWS", label: "Server ops" },
];

export default function Hero() {
  return (
    <section id="home" className="hero-shell relative min-h-screen flex items-center pt-24 pb-16">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.08fr_.92fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 shadow-clay-sm backdrop-blur-xl mb-7">
              <span className="w-2 h-2 rounded-full bg-neon shadow-[0_0_12px_#7cf7c4]" />
              <span className="text-xs sm:text-sm text-gray-200">Available for selected projects</span>
            </div>

            <p className="text-cyber-blue text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Full Stack Developer · Next.js · Node.js · AWS
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Digital experiences
              <span className="block hero-gradient-text">built to perform.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
              I’m Bilal Madni. I build web applications, SaaS products, internal
              portals and AI assistants — from the React front end to the Node.js API
              to the AWS server it runs on. Currently shipping products for clients in
              Saudi Arabia and Pakistan.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="hero-primary-button">
                Explore my work <FiArrowUpRight size={18} />
              </a>
              <a href={`${import.meta.env.BASE_URL}Bilal-Madni-Resume.pdf`} download="Bilal-Madni-Resume.pdf" className="hero-secondary-button">
                <FiDownload size={18} /> Download résumé
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2"><FiMapPin /> Karachi, Pakistan</span>
              <a href="https://github.com/MuhammadBilalpro" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Bilal Madni on GitHub"><FiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/bilal-madni-138543260/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Bilal Madni on LinkedIn"><FiLinkedin /> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="clay-profile-card">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs text-cyber-blue uppercase tracking-[0.18em] mb-2">What I build</p>
                  <h2 className="font-display text-2xl sm:text-3xl text-white font-bold">Modern web solutions</h2>
                </div>
                <div className="clay-monogram" aria-hidden="true">BD</div>
              </div>

              <div className="space-y-3">
                {services.map(({ icon: Icon, label, detail }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.1 }}
                    className="clay-service-row"
                  >
                    <span className="clay-service-icon"><Icon size={20} /></span>
                    <span className="flex-1">
                      <strong className="block text-sm text-white font-semibold">{label}</strong>
                      <span className="text-xs text-gray-400">{detail}</span>
                    </span>
                    <FiCheckCircle className="text-neon" />
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mt-7">
                {metrics.map((metric) => (
                  <div key={metric.label} className="clay-metric">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="clay-floating-pill">Full-stack • AI-ready • Deployed on AWS</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
