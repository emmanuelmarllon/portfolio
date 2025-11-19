import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { getProjects } from "../api/api";

// Interface pro TypeScript
interface Project {
  title: string;
  description_EN?: string;
  description_PT?: string;
  tech: string[]; // garante que sempre seja array
  github?: string;
  demo?: string;
  status?: "LIVE" | "BETA" | "DEV" | string;
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Detecta linguagem do usuário
  const isBrazilian = navigator.language.startsWith("pt");
  const lang = isBrazilian ? "PT" : "EN";

  useEffect(() => {
    getProjects()
      .then((data) => {
        const sanitized = data
          .map((p: any) => ({
            ...p,
            tech: Array.isArray(p.tech) ? p.tech : [],
          }))
          .filter((p: any) => p.status?.toUpperCase() !== "HIDDEN"); // remove HIDDEN
        setProjects(sanitized);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 text-center text-neon-blue">
        <p>Loading projects...</p>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-neon-green font-mono">03.</span>
            <h2 className="text-3xl md:text-4xl text-foreground">
              <span className="text-neon-blue">{"<"}</span>
              projects
              <span className="text-neon-blue">{" />"}</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full bg-secondary/30 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-300 hover:border-neon-blue overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/10 group-hover:to-neon-purple/10 transition-all duration-300"></div>

                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Folder className="w-8 h-8 text-neon-blue group-hover:text-neon-green transition-colors" />
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 text-xs font-mono rounded ${
                            project.status === "LIVE"
                              ? "bg-neon-green/20 text-neon-green border border-neon-green/50"
                              : project.status === "BETA"
                              ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/50"
                              : "bg-neon-purple/20 text-neon-purple border border-neon-purple/50"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github || "#"}
                        className="text-foreground/60 hover:text-neon-green transition-colors"
                        aria-label="View on GitHub"
                        target="_blank"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo || "#"}
                        className="text-foreground/60 hover:text-neon-blue transition-colors"
                        aria-label="View demo"
                        target="_blank"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-foreground group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>

                  {/* Description com idioma */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {lang === "EN"
                      ? project.description_EN || project.description_PT
                      : project.description_PT || project.description_EN}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-secondary/80 text-neon-green/80 rounded border border-neon-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-neon-blue/30 group-hover:border-neon-blue transition-colors"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-neon-blue/30 group-hover:border-neon-blue transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 font-mono text-xs text-muted-foreground/60 text-center"
        >
          <p>$ git push origin main</p>
          <p className="text-neon-blue/60">✓ Projects deployed successfully</p>
        </motion.div>
      </div>
    </section>
  );
}
