import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const links: { name: string; href: string; id: string }[] = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: "-30% 0px -40% 0px" });

        links.forEach(link => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-deep-void/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-royal-amethyst to-amethyst-light tracking-wider relative group">
                    <motion.span whileHover={{ scale: 1.1 }} className="inline-block">MA.</motion.span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(link.id);
                            }}
                            className="relative px-4 py-2 text-sm font-inter uppercase tracking-widest transition-colors"
                        >
                            {activeSection === link.id && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-gradient-to-r from-royal-amethyst/20 to-amethyst-light/10 border border-royal-amethyst/40 rounded-full -z-10 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className={activeSection === link.id ? "text-white font-bold drop-shadow-md" : "text-platinum hover:text-royal-amethyst"}>
                                {link.name}
                            </span>
                        </a>
                    ))}
                    <div className="flex space-x-4 border-l border-white/10 pl-6">
                        <motion.a
                            href="https://github.com/MaroIng01"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5, color: "#8b5cf6" }}
                            className="text-platinum transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/marouane-acharifi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5, color: "#8b5cf6" }}
                            className="text-platinum transition-colors"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-deep-void border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {links.map(link => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    whileHover={{ x: 10, color: "#8b5cf6" }}
                                    className={`text-lg font-inter block py-2 ${activeSection === link.id ? "text-royal-amethyst font-bold" : "text-platinum"}`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
