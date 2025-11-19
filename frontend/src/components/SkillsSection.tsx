import { useEffect, useState } from "react";
import { motion } from "motion/react";
import * as DevIcons from "developer-icons";
import { getSkills } from "../api/api";

// Interface do backend
interface Skill {
  name: string;
  icon: string; // nome do ícone vindo do back
}

export function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSkills()
      .then((data) => setSkills(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 text-center text-neon-green">
        <p>Loading skills...</p>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-green font-mono">02.</span>
            <h2 className="text-3xl md:text-4xl text-foreground">
              <span className="text-neon-purple">{"<"}</span>
              skills
              <span className="text-neon-purple">{" />"}</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-purple/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => {
            // Pega o componente do ícone pelo nome
            const IconComponent = DevIcons[skill.icon as keyof typeof DevIcons];
            if (!IconComponent) return null;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-300 hover:border-neon-green overflow-hidden">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/0 via-neon-purple/0 to-neon-blue/0 group-hover:from-neon-green/5 group-hover:via-neon-purple/5 group-hover:to-neon-blue/5 transition-all duration-300"></div>

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <IconComponent className="w-10 h-10" />
                    <p className="text-foreground/90 text-center">
                      {skill.name}
                    </p>
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-neon-green/50 group-hover:border-neon-green transition-colors"></div>
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-neon-green/50 group-hover:border-neon-green transition-colors"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 font-mono text-xs text-muted-foreground/60 text-center"
        >
          <p>$ npm list --depth=0</p>
          <p className="text-neon-green/60">└── skills@latest ✓</p>
        </motion.div>
      </div>
    </section>
  );
}
