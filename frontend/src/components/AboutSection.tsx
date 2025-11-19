import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { User, Code, Coffee, Zap } from "lucide-react";
import { getAbout } from "../api/api";

// Interface do backend
interface AboutData {
  about_PT: string;
  about_EN: string;
  highlight1_pt: string;
  highlight2_pt: string;
  highlight3_pt: string;
  highlight1_en: string;
  highlight2_en: string;
  highlight3_en: string;
}

export function AboutSection() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAbout()
      .then((data) => {
        if (data.length > 0) setAbout(data[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || !about) {
    return (
      <section className="py-20 px-4 text-center text-neon-green">
        <p>Loading about...</p>
      </section>
    );
  }

  // Detecta linguagem do usuário
  const isBrazilian = navigator.language.startsWith("pt");
  const lang = isBrazilian ? "PT" : "EN";

  // Highlights dinâmicos
  const highlights = [
    {
      icon: Code,
      text: lang === "EN" ? about.highlight1_en : about.highlight1_pt,
      color: "text-neon-green",
    },
    {
      icon: Coffee,
      text: lang === "EN" ? about.highlight2_en : about.highlight2_pt,
      color: "text-neon-purple",
    },
    {
      icon: Zap,
      text: lang === "EN" ? about.highlight3_en : about.highlight3_pt,
      color: "text-neon-blue",
    },
  ];

  // Função para converter '\n' ou '<br />' em quebras reais
  const formatText = (text: string) =>
    text.replace(/\\n/g, "").replace(/<br\s*\/?>/gi, "<br />");

  return (
    <section className="relative py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-green font-mono">01.</span>
            <h2 className="text-3xl md:text-4xl text-foreground">
              <span className="text-neon-green">{"<"}</span>
              about
              <span className="text-neon-green">{" />"}</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-green/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-secondary/30 backdrop-blur-sm border border-border rounded-lg p-8 md:p-10">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 159, 0.1) 2px, rgba(0, 255, 159, 0.1) 4px)",
                }}
              ></div>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Icon */}
              <div className="flex items-center gap-3 text-neon-green">
                <User className="w-6 h-6" />
                <span className="font-mono text-sm">USER_PROFILE.md</span>
              </div>

              {/* Bio */}
              <div
                className="space-y-4 text-foreground/80 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatText(
                    lang === "EN" ? about.about_EN : about.about_PT
                  ),
                }}
              />

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <Icon className={`w-6 h-6 ${item.color}`} />
                      <span className="text-xs text-muted-foreground">
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Cantos */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-neon-green/50"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-neon-green/50"></div>
          </div>
        </motion.div>

        {/* Terminal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 font-mono text-xs text-muted-foreground/60"
        >
          <p>$ cat about.txt</p>
          <p className="text-neon-green/60">✓ Profile loaded successfully</p>
        </motion.div>
      </div>
    </section>
  );
}
