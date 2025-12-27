import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import { X } from 'lucide-react';
import type { LocaleData } from '../data/locales';
import { ScrollReveal, StaggerReveal, RevealItem } from './ScrollReveal';

interface AboutProps {
    data: LocaleData['about'];
    personalInfo: LocaleData['personalInfo'];
    skills: Record<string, string[]>;
    skillDescriptions: Record<string, string>;
}

export default function About({ data, personalInfo, skills, skillDescriptions }: AboutProps) {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="about" className="py-12 md:py-20 relative overflow-hidden">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[12vw] md:text-[20vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    {data.backgroundTitle}
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-10 text-3xl md:text-4xl font-orbitron font-bold text-white flex items-center">
                        <RevealText
                            text={data.title}
                            revealText={data.revealTitle}
                            className="inline-block"
                        />
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-12 gap-12 items-center">
                    {/* Profile Picture Column */}
                    <div className="md:col-span-5 relative group">
                        <ScrollReveal>
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                <div className="relative group">
                                    {/* Glass Backplate 1 - Rotated */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-royal-amethyst/30 to-champagne-gold/30 rounded-2xl rotate-6 scale-95 blur-sm transition-all duration-500 group-hover:rotate-12 group-hover:scale-105"></div>

                                    {/* Glass Backplate 2 - Opposite Rotation */}
                                    <div className="absolute inset-0 bg-white/5 rounded-2xl -rotate-3 scale-95 backdrop-blur-md border border-white/10 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105"></div>

                                    {/* Main Image Container */}
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-royal-amethyst/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                                        <img
                                            src="/profile.jpg"
                                            alt="Profil"
                                            className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                        />

                                        {/* Minimal Corner Accents */}
                                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-champagne-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-champagne-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-royal-amethyst/30 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-champagne-gold/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                            </motion.div>
                        </ScrollReveal>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 flex flex-col gap-8">
                        <ScrollReveal delay={0.2}>
                            <div className="text-platinum text-lg leading-relaxed font-inter bg-deep-void/60 backdrop-blur-sm p-6 rounded-xl border border-white/5 relative group hover:border-royal-amethyst/30 transition-colors">
                                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-champagne-gold/50"></div>
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-champagne-gold/50"></div>
                                <p className="mb-6">
                                    {personalInfo.summary}
                                </p>
                                <p>
                                    Based in <span className="text-royal-amethyst">{personalInfo.location}</span>,
                                    I am passionate about bridging the gap between <span className="text-white font-bold">Hardware</span> and <span className="text-white font-bold">Software</span>.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:border-royal-amethyst/30 transition-colors">
                                <h3 className="text-xl font-orbitron text-white mb-6 flex items-center">
                                    Technical Arsenal <span className="ml-2 w-2 h-2 rounded-full bg-champagne-gold animate-pulse"></span>
                                </h3>
                                <StaggerReveal key={Object.values(skills).flat().join(',')} className="flex flex-wrap gap-3">
                                    {Object.values(skills).flat().map((skill: string) => (
                                        <RevealItem key={skill}>
                                            <motion.span
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                                                    textShadow: "0 0 8px rgba(139,92,246,0.6)",
                                                    boxShadow: "0 0 15px rgba(139,92,246,0.4)",
                                                    borderColor: "rgba(139, 92, 246, 0.6)",
                                                    cursor: "pointer",
                                                    y: -2
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setSelectedSkill(skill)}
                                                className="inline-block px-4 py-2 bg-royal-amethyst/10 text-amethyst-light rounded-lg text-sm font-inter border border-royal-amethyst/20 transition-colors relative"
                                            >
                                                {skill}
                                            </motion.span>
                                        </RevealItem>
                                    ))}
                                </StaggerReveal>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedSkill && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedSkill(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-deep-void border border-royal-amethyst/50 p-8 rounded-2xl max-w-md w-full relative shadow-[0_0_50px_rgba(139,92,246,0.3)]"
                        >
                            <button
                                onClick={() => setSelectedSkill(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-royal-amethyst to-champagne-gold mb-4">
                                {selectedSkill}
                            </h3>

                            <p className="text-platinum text-lg leading-relaxed font-inter">
                                {selectedSkill && (skillDescriptions[selectedSkill] || data.skillTooltip)}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    )
}
