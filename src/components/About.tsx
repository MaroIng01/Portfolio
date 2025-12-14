import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import RevealText from './RevealText';
import { X } from 'lucide-react';

export default function About() {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[20vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    ABOUT
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-3xl md:text-4xl font-orbitron font-bold text-white flex items-center"
                >
                    <RevealText
                        text="01. About Me"
                        revealText="My Story"
                        className="inline-block"
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-platinum text-lg leading-relaxed font-inter bg-deep-void/60 backdrop-blur-sm p-6 rounded-xl border border-white/5"
                    >
                        <p className="mb-6">
                            {portfolioData.personalInfo.summary}
                        </p>
                        <p>
                            Based in <span className="text-royal-amethyst">{portfolioData.personalInfo.location}</span>,
                            I am passionate about bridging the gap between <span className="text-white font-bold">Hardware</span> and <span className="text-white font-bold">Software</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:border-royal-amethyst/30 transition-colors"
                    >
                        <h3 className="text-xl font-orbitron text-white mb-6 flex items-center">
                            Technical Arsenal <span className="ml-2 w-2 h-2 rounded-full bg-champagne-gold animate-pulse"></span>
                        </h3>
                        <motion.div
                            className="flex flex-wrap gap-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                        >
                            {Object.values(portfolioData.skills).flat().slice(0, 15).map((skill: string) => (
                                <motion.span
                                    key={skill}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, y: 10 },
                                        visible: { opacity: 1, scale: 1, y: 0 }
                                    }}
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
                                    className="px-4 py-2 bg-royal-amethyst/10 text-amethyst-light rounded-lg text-sm font-inter border border-royal-amethyst/20 transition-colors relative"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
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
                                {(portfolioData as any).skillDefinitions?.[selectedSkill] || "A key technical skill in my arsenal."}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
