import { useState, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function HeroMask() {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Use MotionValues for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    // Calculate mask position dynamically
    const maskPosition = useMotionTemplate`${mouseX}px ${mouseY}px`;

    // Dynamic mask size
    const maskSize = isHovered ? "400px" : "40px";

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-[300px] w-full flex items-center justify-center overflow-hidden cursor-default"
        >
            {/* Base Layer - "I'm a Robotics Engineer" */}
            <div className="absolute flex flex-col items-center justify-center w-full h-full pointer-events-none">
                <p className="text-5xl md:text-8xl font-black font-orbitron text-[#333] text-center uppercase tracking-tighter">
                    Robotics <br /> Engineer
                </p>
            </div>

            {/* Mask Layer - "I Build Intelligent Machines" */}
            <motion.div
                className="absolute flex flex-col items-center justify-center w-full h-full bg-deep-void"
                style={{
                    WebkitMaskPosition: maskPosition as any,
                    maskPosition: maskPosition as any,
                    WebkitMaskSize: `${maskSize} ${maskSize}`,
                    maskSize: `${maskSize} ${maskSize}`,
                    maskImage: "url(\"data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='150' cy='150' r='150' fill='black'/%3E%3C/svg%3E\")",
                    WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='150' cy='150' r='150' fill='black'/%3E%3C/svg%3E\")",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    color: "#00f3ff"
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            >
                <p className="text-5xl md:text-8xl font-black font-orbitron text-royal-amethyst text-center uppercase tracking-tighter shadow-royal-amethyst/50 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    Intelligent <br /> Machines
                </p>
            </motion.div>

        </div>
    )
}
