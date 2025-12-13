import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import RevealText from './RevealText';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden pt-16 perspective-1000">
            {/* dynamic 3D Background - Moved to Global Background */}

            {/* Floating Orbs - Moved to Global Background */}

            <motion.div style={{ y }} className="container mx-auto px-6 relative z-10 text-center transform-style-3d">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateX: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-block mb-6 px-6 py-2 border border-champagne-gold/30 rounded-full bg-champagne-gold/5 text-champagne-gold text-xs md:text-sm font-orbitron tracking-[0.3em] backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                >
                    ROBOTICS & AI ENGINEER
                </motion.div>

                <div className="py-10">
                    <RevealText
                        text="Robotics<br/>Engineer"
                        revealText="Intelligent<br/>Machines"
                        className="text-5xl md:text-8xl font-black font-orbitron text-center uppercase tracking-tighter"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl font-inter text-platinum max-w-3xl mx-auto leading-relaxed mt-4"
                >
                    Building the next generation of <span className="text-champagne-gold font-bold">Autonomous Systems</span>.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <a href="#about" className="text-royal-amethyst opacity-80 hover:opacity-100 hover:text-amethyst-light transition-colors">
                        <ArrowDown size={32} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
