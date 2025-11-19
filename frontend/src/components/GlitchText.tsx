import { motion } from "motion/react";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative inline-block hover-glitch ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      <style>{`
        .hover-glitch span {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }
      `}</style>
    </motion.div>
  );
}
