import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import { ExternalLink, Github } from 'lucide-react';
import RevealText from './RevealText';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ project, index }: { project: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="relative group h-full w-full rounded-xl bg-white/5 border border-white/10 hover:border-royal-amethyst/50 transition-colors duration-300 backdrop-blur-sm"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-4 rounded-lg bg-deep-void/80 shadow-inner flex flex-col p-6 pointer-events-none"
            >
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t: string) => (
                        <span key={t} className="text-xs font-orbitron text-royal-amethyst bg-royal-amethyst/10 px-2 py-1 rounded border border-royal-amethyst/20">
                            {t}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-orbitron group-hover:text-amethyst-light transition-colors">{project.title}</h3>
                <p className="text-platinum/70 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto pointer-events-auto">
                    <a href="#" className="flex items-center text-sm text-white hover:text-champagne-gold transition-colors z-20">
                        <Github size={16} className="mr-2" /> Code
                    </a>
                    <a href="#" className="flex items-center text-sm text-white hover:text-champagne-gold transition-colors z-20">
                        <ExternalLink size={16} className="mr-2" /> Details
                    </a>
                </div>
            </div>

            {/* Spacer to maintain size since content is absolute */}
            <div className="invisible p-10 h-96"></div>
        </motion.div>
    );
};

export default function Projects() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[15vw] md:text-[20vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    WORK
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 flex justify-center">
                    <RevealText
                        text="Selected Works 03."
                        revealText="My Creations"
                        className="text-3xl md:text-5xl font-orbitron font-bold"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {portfolioData.projects.map((project, index) => (
                        <TiltCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
