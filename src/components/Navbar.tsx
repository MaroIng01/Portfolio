import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Linkedin, ArrowRight } from 'lucide-react';
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
    const [scrolled, setScrolled] = useState(false);

    const links = useMemo(() => [
        { name: 'Home', href: '#home', id: 'home' },
        { name: navData.about, href: '#about', id: 'about' },
        { name: navData.experience, href: '#experience', id: 'experience' },
        { name: navData.projects, href: '#projects', id: 'projects' },
        { name: navData.contact, href: '#contact', id: 'contact' },
    ], [navData]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = links.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            let current = 'home';
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection('contact');
                return;
            }

            for (const section of sections) {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [links]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}
        >
            <div
                className={`
                    relative flex items-center justify-between px-2 py-2 rounded-full transition-all duration-500
                    ${scrolled
                        ? 'bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-[90%] md:w-auto'
                        : 'bg-transparent border-transparent w-[95%] md:w-auto'
                    }
                `}
            >
                {/* Logo Area */}
                <div className={`px-4 flex items-center gap-3 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-royal-amethyst to-transparent border border-white/20 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <span className="font-orbitron font-bold text-white text-xs">MA</span>
                    </div>
                    <div className="flex flex-col leading-none hidden sm:flex">
                        <span className="font-orbitron font-bold text-white text-sm tracking-widest">ACHARIFI</span>
                        <span className="font-inter text-[10px] text-gray-400 tracking-[0.2em] uppercase">Marouane</span>
                    </div>
                </div>

                {/* Desktop Dock */}
                <div className="hidden md:flex items-center bg-black/30 backdrop-blur-xl border border-white/5 rounded-full px-1 py-1 mx-4">
                    {links.map(link => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(link.id);
                            }}
                            className="relative px-5 py-2 rounded-full text-sm font-inter transition-colors duration-300 hover:text-white"
                        >
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="dockHighlight"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className={`relative z-10 ${activeSection === link.id ? 'text-white' : 'text-gray-400'}`}>
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className={`hidden md:flex items-center gap-3 px-2 ${scrolled ? 'opacity-100' : 'opacity-80'}`}>
                    <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

                    {/* Language Toggle - Minimal */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                        className="text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors"
                    >
                        {language.toUpperCase()}
                    </button>

                    <a href="https://linkedin.com/in/marouane-acharifi" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden px-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white bg-white/5 rounded-full border border-white/10 active:scale-95 transition-transform"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl z-40 md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`p-4 rounded-2xl flex items-center justify-between ${activeSection === link.id ? 'bg-white/10 text-white' : 'text-gray-400'}`}
                                >
                                    <span className="font-orbitron tracking-wider">{link.name}</span>
                                    {activeSection === link.id && <ArrowRight size={16} />}
                                </motion.a>
                            ))}
                            <div className="h-[1px] bg-white/10 my-2"></div>
                            <div className="flex justify-between items-center p-4">
                                <span className="text-gray-400 text-sm">Language</span>
                                <button
                                    onClick={() => { setLanguage(language === 'en' ? 'fr' : 'en'); setIsOpen(false); }}
                                    className="px-4 py-2 bg-white/5 rounded-xl text-white font-mono text-xs"
                                >
                                    {language === 'en' ? 'English' : 'Français'}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
