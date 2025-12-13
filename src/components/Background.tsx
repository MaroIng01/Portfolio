import { motion } from 'framer-motion';

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* dynamic 3D Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-royal-amethyst/20 via-deep-void to-deep-void" />

            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-amethyst/10 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amethyst-light/10 rounded-full blur-[120px] pointer-events-none"
            />
        </div>
    );
}
