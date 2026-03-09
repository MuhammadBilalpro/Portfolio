import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ tag, title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 sm:mb-16"
    >
      <span className="inline-block px-3 py-1 text-xs font-mono text-neon bg-neon/10 border border-neon/20 rounded-full mb-4">
        {tag}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-sm max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto mt-4" />
    </motion.div>
  );
}
