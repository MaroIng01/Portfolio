import { useRef, useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface RevealTextProps {
    text: string;
    revealText: string;
    className?: string;
}

export default function RevealText({ text, revealText, className = "" }: RevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the radius
    const radius = useSpring(isHovered ? 150 : 0, { stiffness: 150, damping: 20 });

    useEffect(() => {
        radius.set(isHovered ? 150 : 0);
    }, [isHovered, radius]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Exact cursor position relative to container
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    // clip-path: circle(radius at x y)
    const clipPath = useMotionTemplate`circle(${radius}px at ${mouseX}px ${mouseY}px)`;

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative inline-block cursor-none ${className}`}
        >
            {/* Base Layer - Default Text */}
            <div className="select-none text-[#2a2a2a] group-hover:text-[#333] transition-colors duration-500">
                {text.split('<br/>').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                ))}
            </div>

            {/* Reveal Layer - Colored Text */}
            <motion.div
                className="absolute inset-0 select-none text-royal-amethyst z-10 bg-deep-void"
                style={{
                    clipPath: clipPath,
                }}
            >
                <div className="w-full h-full flex flex-col items-center justify-center">
                    {revealText.split('<br/>').map((line, i) => (
                        <span key={i} className="block drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">{line}</span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
