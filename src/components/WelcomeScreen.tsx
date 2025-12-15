import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cat } from 'lucide-react';

interface WelcomeScreenProps {
    onStart: () => void;
    language: 'en' | 'fr';
    setLanguage: (lang: 'en' | 'fr') => void;
}

const NetworkBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Configuration
        const particleCount = 60;
        const connectionDistance = 150;
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            ctx.fillStyle = '#00f3ff';
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 243, 255, ${1 - dist / connectionDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40" />;
}

export default function WelcomeScreen({ onStart, language, setLanguage }: WelcomeScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-[#020210] flex flex-col items-center justify-center overflow-hidden font-orbitron text-neon-blue selection:bg-cyan-500/30">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020210] via-[#0b0b2a] to-[#020210]" />
            <NetworkBackground />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center gap-12">

                {/* Holographic Card */}
                <motion.div
                    className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-[#0b0b3b] to-[#1a0b3b] border border-white/10 shadow-[0_0_50px_rgba(120,0,255,0.3)] flex items-center justify-center backdrop-blur-sm"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Inner Glow Border */}
                    <div className="absolute inset-[1px] rounded-[23px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />

                    {/* Cat Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Cat size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" strokeWidth={1.5} />
                    </motion.div>

                    {/* Corner Accents */}
                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_purple]" />
                </motion.div>

                {/* System Loader */}
                <div className="w-64 space-y-2">
                    {/* Bar */}
                    <div className="h-1 w-full bg-[#1a1a3a] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_cyan]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex justify-between items-end text-xs font-mono text-cyan-300/80 tracking-widest">
                        <span>INITIALIZING SYSTEM...</span>
                        <span className="font-bold text-cyan-300">{progress}%</span>
                    </div>
                </div>

                {/* Language Switcher */}
                <div className="flex gap-6 text-sm font-bold tracking-widest">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`relative pb-1 transition-all ${language === 'en' ? 'text-cyan-400' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                        ENGLISH
                        {language === 'en' && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_cyan]" />
                        )}
                    </button>
                    <button
                        onClick={() => setLanguage('fr')}
                        className={`relative pb-1 transition-all ${language === 'fr' ? 'text-cyan-400' : 'text-gray-600 hover:text-gray-400'}`}
                    >
                        FRANÇAIS
                        {language === 'fr' && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_cyan]" />
                        )}
                    </button>
                </div>

                {/* Enter Button */}
                <AnimatePresence>
                    {progress === 100 && (
                        <motion.button
                            onClick={onStart}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, letterSpacing: "0.5em" }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 text-4xl font-bold tracking-[0.3em] bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all"
                        >
                            ENTER
                        </motion.button>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}
