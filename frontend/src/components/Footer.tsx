import { motion } from "motion/react";
import * as icons from "lucide-react";

const socialLinks = [
  {
    icon: icons.Github,
    href: "https://github.com/emmanuelmarllon",
    label: "GitHub",
  },
  {
    icon: icons.Linkedin,
    href: "https://www.linkedin.com/in/marlllonemanuel/",
    label: "LinkedIn",
  },
  {
    icon: icons.Instagram,
    href: "https://www.instagram.com/mrlemanuel/",
    label: "Instagram",
  },
  {
    icon: icons.Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=marlllonemanuel@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-foreground/60 hover:text-neon-green transition-colors"
                  target="_blank"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center space-y-2"
          >
            <p className="text-muted-foreground text-sm font-mono">
              Built with React & Tailwind CSS
            </p>
            <p className="text-muted-foreground/60 text-xs font-mono">
              © 2025 • Designed & Developed with {"Marlon Emanuel"} •{" "}
              <span className="text-neon-green">{"<code/>"}</span>
            </p>
          </motion.div>

          {/* Terminal style */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-mono text-xs text-muted-foreground/40"
          >
            <p>$ exit 0</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
