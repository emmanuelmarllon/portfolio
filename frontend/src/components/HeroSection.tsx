import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  name: string;
  title: string;
  imageUrl: string;
}

export function HeroSection({ name, title, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Neon border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-purple to-neon-blue rounded-lg blur-lg opacity-75 animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative w-full h-full border-2 border-neon-green rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-b from-transparent via-neon-green/5 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-neon-purple"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-neon-blue"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-neon-blue"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-neon-purple"></div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            {/* Terminal prompt */}
            <div className="flex items-center gap-2 text-neon-green opacity-60 justify-center md:justify-start">
              <Terminal className="w-4 h-4" />
              <span className="text-sm">root@portfolio:~$</span>
            </div>

            {/* Name */}
            <div>
              <GlitchText className="text-5xl md:text-7xl text-neon-green mb-2 block">
                {name}
              </GlitchText>
              <div className="h-1 w-32 bg-gradient-to-r from-neon-green via-neon-purple to-neon-blue mx-auto md:mx-0"></div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-foreground/80">
                <span className="text-neon-purple">{'>'}</span> {title}
              </p>
              <p className="text-muted-foreground text-sm md:text-base font-mono">
                [ONLINE] • [AVAILABLE] • [SECURE]
              </p>
            </div>

            {/* Decorative code lines */}
            <div className="font-mono text-xs text-muted-foreground/40 space-y-1 hidden md:block">
              <p>{'{'} initializing portfolio...</p>
              <p>  loading modules: [react, next, node] ✓</p>
              <p>  status: READY</p>
              <p>{'}'}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
