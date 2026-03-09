import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:sheikhbilal8930@gmail.com?subject=${subject}&body=${body}`
    );
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="$ ssh bilal@contact"
          title="GET IN TOUCH"
          subtitle="Establishing secure connection..."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-2 font-mono">
                  contact_info.conf
                </span>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-neon text-xs">root@bilal:~#</span>
                  <span className="text-gray-300 text-xs">cat /etc/contact.conf</span>
                </div>

                {[
                  {
                    icon: FiMail,
                    label: "EMAIL",
                    value: "sheikhbilal8930@gmail.com",
                    href: "mailto:sheikhbilal8930@gmail.com",
                  },
                  {
                    icon: FiPhone,
                    label: "PHONE",
                    value: "+92-319-1217857",
                    href: "tel:+923191217857",
                  },
                  {
                    icon: FiMapPin,
                    label: "LOCATION",
                    value: "Nazimabad, Karachi",
                    href: null,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-3 bg-neon/5 border border-neon/10 rounded-lg hover:border-neon/30 transition-all group"
                    >
                      <div className="p-2 bg-neon/10 rounded text-neon group-hover:bg-neon/20 transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-mono">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-gray-300 hover:text-neon transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-300">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="terminal-window p-4">
              <p className="text-xs text-neon/70 font-mono">
                <span className="text-neon">$</span> echo "Let's build something
                amazing together!"
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="text-xs text-gray-500 ml-2 font-mono">
                  send_message.sh
                </span>
              </div>
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-neon text-xs">root@bilal:~#</span>
                  <span className="text-gray-300 text-xs">./send_message.sh</span>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-1.5">
                    <span className="text-neon">$</span> NAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-terminal border border-neon/20 rounded px-3 py-2.5 text-sm text-gray-300 font-mono focus:border-neon/50 focus:outline-none focus:shadow-[0_0_10px_#00ff4120] transition-all placeholder:text-gray-700"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-1.5">
                    <span className="text-neon">$</span> EMAIL:
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-terminal border border-neon/20 rounded px-3 py-2.5 text-sm text-gray-300 font-mono focus:border-neon/50 focus:outline-none focus:shadow-[0_0_10px_#00ff4120] transition-all placeholder:text-gray-700"
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-1.5">
                    <span className="text-neon">$</span> MESSAGE:
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-terminal border border-neon/20 rounded px-3 py-2.5 text-sm text-gray-300 font-mono focus:border-neon/50 focus:outline-none focus:shadow-[0_0_10px_#00ff4120] transition-all resize-none placeholder:text-gray-700"
                    placeholder="Type your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-neon/10 border border-neon/40 text-neon text-sm font-mono rounded hover:bg-neon/20 hover:border-neon transition-all duration-300 group"
                >
                  {sent ? (
                    <span>✓ Message sent successfully!</span>
                  ) : (
                    <>
                      <FiSend className="group-hover:translate-x-1 transition-transform" />
                      <span>./send --execute</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
