import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import RevealText from './RevealText';
import type { LocaleData } from '../data/locales';
import { ScrollReveal, StaggerReveal, RevealItem } from './ScrollReveal';

interface ContactProps {
    data: LocaleData['contact'];
    personalInfo: LocaleData['personalInfo'];
}

export default function Contact({ data, personalInfo }: ContactProps) {
    const { email, phone, location, linkedin, github } = personalInfo;
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="contact" className="py-12 md:py-20 relative overflow-hidden bg-deep-void">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[18vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    {data.backgroundTitle}
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-8 flex justify-center">
                        <RevealText
                            text={data.title}
                            revealText={data.revealTitle}
                            className="text-3xl md:text-5xl font-orbitron font-bold"
                        />
                    </div>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.2}>
                    <p className="text-platinum max-w-2xl mx-auto mb-12 text-lg font-inter whitespace-pre-line">
                        {data.subtitle}
                    </p>
                </ScrollReveal>

                <StaggerReveal className="grid md:grid-cols-3 gap-8 mb-20" staggerDelay={0.2}>
                    <RevealItem>
                        <motion.a
                            href={`mailto:${email}`}
                            whileHover={{ y: -10 }}
                            className="group bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-royal-amethyst/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-amethyst/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-4 bg-royal-amethyst/10 rounded-full text-royal-amethyst group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] relative z-10">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-white font-orbitron font-bold text-lg relative z-10">Email Me</h3>
                            <p className="text-platinum/80 font-inter text-sm group-hover:text-white transition-colors relative z-10">{email}</p>
                        </motion.a>
                    </RevealItem>

                    <RevealItem>
                        <motion.a
                            href={`tel:${phone}`}
                            whileHover={{ y: -10 }}
                            className="group bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-royal-amethyst/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-amethyst/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-4 bg-royal-amethyst/10 rounded-full text-royal-amethyst group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] relative z-10">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-white font-orbitron font-bold text-lg relative z-10">Call Me</h3>
                            <p className="text-platinum/80 font-inter text-sm group-hover:text-white transition-colors relative z-10">{phone}</p>
                        </motion.a>
                    </RevealItem>

                    <RevealItem>
                        <div
                            className="group bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-royal-amethyst/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 cursor-default relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-amethyst/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-4 bg-royal-amethyst/10 rounded-full text-royal-amethyst group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] relative z-10">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-white font-orbitron font-bold text-lg relative z-10">Location</h3>
                            <p className="text-platinum/80 font-inter text-sm group-hover:text-white transition-colors relative z-10">{location}</p>
                        </div>
                    </RevealItem>
                </StaggerReveal>

                <ScrollReveal width="100%" delay={0.4}>
                    <div className="flex flex-col items-center gap-8 mb-16">
                        <h3 className="text-xl text-white font-orbitron tracking-widest">{data.connect}</h3>
                        <div className="flex gap-8">
                            <motion.a
                                href={linkedin}
                                target="_blank"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:border-royal-amethyst hover:text-royal-amethyst hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 backdrop-blur-sm"
                            >
                                <Linkedin size={28} />
                            </motion.a>
                            <motion.a
                                href={github}
                                target="_blank"
                                whileHover={{ scale: 1.2, rotate: -10 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:border-royal-amethyst hover:text-royal-amethyst hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 backdrop-blur-sm"
                            >
                                <Github size={28} />
                            </motion.a>
                        </div>
                    </div>
                </ScrollReveal>

                <footer className="text-platinum/40 text-sm font-inter">
                    © {new Date().getFullYear()} Marouane ACHARIFI. Built with React, Vite & Tailwind.
                    <br />
                    <span className="text-xs mt-2 block">Parallax & 3D interactions powered by Framer Motion</span>
                </footer>
            </div>
        </section>
    )
}
