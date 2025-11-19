import { motion } from "motion/react";
import { Mail, Send, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t, i18n } = useTranslation(); // função para pegar texto do i18n

  return (
    <section
      className="relative py-20 px-4 min-h-[60vh] flex items-center"
      id="contact"
    >
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Terminal prompt */}
          <div className="flex items-center justify-center gap-2 text-neon-green/60 font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span>$ init contact_sequence</span>
          </div>

          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-neon-purple font-mono text-lg">
                04. What's Next?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl text-foreground"
            >
              {t("contact.title")}{" "}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            {t("contact.description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-6"
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-purple to-neon-blue rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=marlllonemanuel@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="relative bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 px-8 py-6 group">
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="font-mono">{t("contact.button")}</span>
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Terminal output */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="font-mono text-xs text-muted-foreground/60 space-y-1 pt-8"
          >
            <p>{">"} connection established</p>
            <p>{">"} awaiting transmission...</p>
            <p className="text-neon-green/60">{">"} READY_</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
