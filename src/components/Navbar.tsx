import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    navData: {
        about: string;
        experience: string;
        projects: string;
        contact: string;
    };
    language: 'en' | 'fr';
    setLanguage: (lang: 'en' | 'fr') => void;
}

export default function Navbar({ navData, language, setLanguage }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const links = useMemo(() => [
        { name: 'Home', href: '#home', id: 'home' },
        { name: navData.about, href: '#about', id: 'about' },
        { name: navData.experience, href: '#experience', id: 'experience' },
        { name: navData.projects, href: '#projects', id: 'projects' },
        { name: navData.contact, href: '#contact', id: 'contact' },
    ], [navData]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = links.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            // Find the current section
            let current = 'home';

            // specific check for bottom of page to highlight last item (Contact)
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('contact');
                return;
            }

            for (const section of sections) {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        current = section.id;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [links]);

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-7xl"
        >
            <div className="bg-[#030014]/50 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-3 shadow-2xl shadow-purple-900/10 flex justify-between items-center relative overflow-hidden group/nav">

                {/* Continuous Shimmer on Border */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <motion.div
                        className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Glass Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

                <a href="#" className="flex items-center gap-3 group relative z-10 mr-12">
                    <div className="relative">
                        <motion.span
                            className="text-lg font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 tracking-wider"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            style={{ backgroundSize: "200% auto" }}
                        >
                            ACHARIFI
                        </motion.span>
                        <span className="text-lg font-orbitron font-light text-gray-400 group-hover:text-white transition-colors ml-2">Marouane</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {links.map(link => (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(link.id);
                            }}
                            className="relative px-5 py-2 text-[11px] font-bold font-inter uppercase tracking-[0.15em] transition-all duration-300 group rounded-xl whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeSection === link.id && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute inset-0 bg-purple-500/10 border border-purple-500/20 rounded-xl -z-10 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    <span className="absolute inset-0 rounded-xl bg-purple-400/5 animate-pulse" />
                                </motion.span>
                            )}
                            <span className={`${activeSection === link.id ? "text-white" : "text-gray-400 group-hover:text-purple-300"} transition-colors relative z-10`}>
                                {link.name}
                            </span>
                        </motion.a>
                    ))}

                    <div className="flex items-center gap-6 border-l border-white/10 pl-6 ml-4">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest bg-black/20 px-2 py-1 rounded-lg border border-white/5">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`transition-all duration-300 ${language === 'en' ? 'text-purple-400 font-bold' : 'text-gray-600 hover:text-gray-300'}`}
                            >
                                EN
                            </button>
                            <span className="text-gray-700">|</span>
                            <button
                                onClick={() => setLanguage('fr')}
                                className={`transition-all duration-300 ${language === 'fr' ? 'text-purple-400 font-bold' : 'text-gray-600 hover:text-gray-300'}`}
                            >
                                FR
                            </button>
                        </div>

                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/MaroIng01"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 360, color: "#a855f7" }}
                                transition={{ duration: 0.5 }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github size={16} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/marouane-acharifi"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -3, color: "#a855f7" }}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Linkedin size={16} />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button className="text-white hover:text-purple-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, scale: 0.95 }}
                        animate={{ opacity: 1, height: 'auto', scale: 1 }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-[#030014]/90 backdrop-blur-xl border border-white/10 rounded-2xl mt-2 overflow-hidden shadow-2xl shadow-purple-900/20"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {links.map(link => (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className={`text-lg font-inter flex items-center justify-between px-4 py-3 rounded-xl transition-all ${activeSection === link.id
                                            ? "bg-purple-500/10 text-royal-amethyst font-bold border border-purple-500/20"
                                            : "text-platinum hover:text-white border border-transparent"
                                        }`}
                                >
                                    {link.name}
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeMobile"
                                            className="w-2 h-2 rounded-full bg-royal-amethyst shadow-[0_0_10px_#8b5cf6]"
                                        />
                                    )}
                                </motion.a>
                            ))}


                            {/* Mobile Language Switcher */}
                            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-center gap-6">
                                <button
                                    onClick={() => {
                                        setLanguage('en');
                                        setIsOpen(false);
                                    }}
                                    className={`text-lg font-mono tracking-widest transition-colors ${language === 'en' ? 'text-purple-400 font-bold' : 'text-gray-500'}`}
                                >
                                    EN
                                </button>
                                <span className="text-gray-700">|</span>
                                <button
                                    onClick={() => {
                                        setLanguage('fr');
                                        setIsOpen(false);
                                    }}
                                    className={`text-lg font-mono tracking-widest transition-colors ${language === 'fr' ? 'text-purple-400 font-bold' : 'text-gray-500'}`}
                                >
                                    FR
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
