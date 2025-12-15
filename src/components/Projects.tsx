import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import RevealText from './RevealText';
import type { LocaleData } from '../data/locales';

const HoloCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col h-full"
        >
            {/* Holographic Panel */}
            <div
                className="relative flex-1 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)",
                    borderRadius: "4px"
                }}
            >
                {/* Accent Line (Left) */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Scanline Effect (Hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="p-8 flex flex-col h-full">
                    {/* Header: Title + Icons */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex-1 pr-4">
                            <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors tracking-wide">
                                {project.title}
                            </h3>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                >
                                    <Github size={18} />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed font-inter mb-8 flex-1 border-l border-white/10 pl-4">
                        {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs text-purple-400 font-mono mb-2 w-full opacity-60">
                            <Terminal size={12} />
                            <span>STACK_TRACE:</span>
                        </div>
                        {project.tech?.map((t: string, i: number) => (
                            <span
                                key={i}
                                className="px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-cyan-200 bg-cyan-950/30 border border-cyan-500/20 rounded-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Corner Element (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
                <div className="absolute bottom-[2px] right-[2px] w-full h-[1px] bg-cyan-500/30 rotate-[-45deg] origin-bottom-right" />
            </div>

        </motion.div>
    );
};

interface ProjectsProps {
    data: LocaleData['projects'];
    projectsList: LocaleData['projectsData'];
}

export default function Projects({ data, projectsList }: ProjectsProps) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Note: Removed bg-[#020205] to let the global background show through as requested
    return (
        <section ref={sectionRef} id="projects" className="py-12 md:py-24 relative overflow-hidden">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[15vw] md:text-[20vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    {data.backgroundTitle}
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 flex justify-center">
                    <RevealText
                        text={data.title}
                        revealText={data.revealTitle}
                        className="text-3xl md:text-5xl font-orbitron font-bold"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project, index) => (
                        <HoloCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
