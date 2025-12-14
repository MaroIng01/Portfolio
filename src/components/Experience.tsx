import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import portfolioData from '../data/portfolio.json';
import RevealText from './RevealText';

export default function Experience() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="experience" className="py-20 relative overflow-hidden">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[12vw] md:text-[15vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    EXPERIENCE
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 flex justify-end">
                    <RevealText
                        text="Experience 02."
                        revealText="My Journey"
                        className="text-3xl md:text-4xl font-orbitron font-bold"
                    />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Line */}
                    <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-transparent via-royal-amethyst/50 to-transparent -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {portfolioData.experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                className={`flex flex-col md:flex-row gap-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1">
                                    <motion.div
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            boxShadow: "0 15px 30px -10px rgba(139,92,246,0.4)",
                                            borderColor: "rgba(251, 191, 36, 0.5)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`p-6 bg-deep-void/80 backdrop-blur-md rounded-xl border border-white/10 relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}
                                    >
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                                        <h3 className="text-xl font-bold text-white mb-1 font-orbitron group-hover:text-champagne-gold transition-colors duration-300">{job.role}</h3>
                                        <div className="text-amethyst-light mb-4 font-inter">{job.company}</div>
                                        <p className="text-sm text-platinum/60 mb-4">{job.period} | {job.location}</p>
                                        <ul className={`text-platinum text-sm space-y-2 inline-block text-left relative z-10`}>
                                            {job.description.map((desc, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-champagne-gold mr-2">▹</span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex flex-col items-center justify-start relative">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        whileHover={{ scale: 1.5, borderColor: "rgba(251, 191, 36, 1)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="w-8 h-8 rounded-full bg-deep-void border-2 border-royal-amethyst flex items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-shadow duration-300"
                                    >
                                        <div className="w-2 h-2 bg-champagne-gold rounded-full group-hover:bg-royal-amethyst transition-colors duration-300"></div>
                                    </motion.div>
                                </div>

                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
