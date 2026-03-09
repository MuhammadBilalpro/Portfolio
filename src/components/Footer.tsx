import { FiTerminal, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-neon/10 bg-terminal-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FiTerminal className="text-neon" />
            <span className="font-mono text-xs text-gray-500">
              <span className="text-neon">bilal@portfolio</span>:~$ echo
              "© {new Date().getFullYear()} Bilal Madni. All rights reserved."
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:sheikhbilal8930@gmail.com"
              className="text-gray-600 hover:text-neon transition-colors"
            >
              <FiMail size={16} />
            </a>
            <a
              href="https://github.com/MuhammadBilalpro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-neon transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/bilal-madni-138543260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-neon transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-700 font-mono">
            {"<"} Designed & Built with 💚 by Bilal Madni {"/>"}
          </p>
        </div>
      </div>
    </footer>
  );
}
