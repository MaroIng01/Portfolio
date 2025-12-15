import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import RevealText from './RevealText';
import type { LocaleData } from '../data/locales';

interface ExperienceProps {
    data: LocaleData['experience'];
    experienceList: LocaleData['experienceData'];
}

export default function Experience({ data, experienceList }: ExperienceProps) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} id="experience" className="py-24 relative overflow-hidden">
            {/* BIG TYPOGRAPHY BACKGROUND */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
                <motion.h1
                    style={{ y, opacity }}
                    className="text-[12vw] md:text-[15vw] font-bold text-white/[0.03] font-inter leading-none tracking-tighter"
                >
                    {data.backgroundTitle}
                </motion.h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 flex justify-end">
                    <RevealText
                        text={data.title}
                        revealText={data.revealTitle}
                        className="text-3xl md:text-5xl font-orbitron font-bold"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Glowing Central Beam */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent md:-translate-x-1/2">
                        <div className="absolute inset-0 bg-purple-400/20 blur-[2px]" />
                    </div>

                    <div className="space-y-16">
                        {experienceList.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 pl-10 md:pl-0">
                                    <div className={`p-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className={`relative group inline-block w-full cursor-pointer`}
                                        >
                                            {/* Hover Effect Background - Power Glow */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-lg" />

                                            {/* Card Container */}
                                            <div className={`relative bg-deep-void/80 backdrop-blur-md border md:border-l-0 md:border-r-0 ${index % 2 === 0 ? 'md:border-r-2 md:pr-6 border-l-2' : 'md:border-l-2 md:pl-6 border-l-2'} border-purple-500/30 p-6 rounded-lg overflow-hidden`}>

                                                {/* Shine Sweep Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12" />

                                                <h3 className="text-2xl font-bold text-white font-orbitron mb-2 group-hover:text-purple-300 transition-colors relative z-10">
                                                    {job.role}
                                                </h3>

                                                <div className={`flex flex-col gap-1 mb-4 relative z-10 ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                                    <span className="text-lg font-bold text-purple-400/90 font-mono tracking-wide">
                                                        {job.company}
                                                    </span>
                                                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono uppercase tracking-wider">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar size={12} className="text-purple-500" /> {job.period}
                                                        </span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={12} className="text-purple-500" /> {job.location}
                                                        </span>
                                                    </div>
                                                </div>

                                                <ul className={`space-y-3 text-slate-300 text-sm leading-relaxed font-inter opacity-90 relative z-10 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                                    {job.description.map((desc, i) => (
                                                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse flex-row'}`}>
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-shadow" />
                                                            <span>{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 flex items-center justify-center z-20 pointer-events-none">
                                    <div className="relative flex items-center justify-center w-4 h-4">
                                        <div className="absolute w-full h-full bg-purple-500 rounded-full animate-ping opacity-20" />
                                        <div className="relative w-4 h-4 bg-purple-950 border-2 border-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] md:group-hover:scale-150 md:group-hover:bg-purple-500 md:group-hover:border-white transition-all duration-300 ease-out" />
                                    </div>
                                </div>

                                {/* Spacer for Timeline Alignment */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
