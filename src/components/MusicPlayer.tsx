import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3); // Default low volume (soft jazz)
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Initialize audio
        if (audioRef.current) {
            audioRef.current.volume = volume;

            // Attempt autoplay
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(() => {
                    // Auto-play was prevented.
                    // Add a one-time click listener to start music on first user interaction
                    const startAudio = () => {
                        if (audioRef.current) {
                            audioRef.current.play();
                            setIsPlaying(true);
                        }
                        document.removeEventListener('click', startAudio);
                    };
                    document.addEventListener('click', startAudio);
                });
            }
        }
    }, [volume]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <audio ref={audioRef} loop src="/music/soft-jazz.mp3" />

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-2 mb-2 shadow-xl"
                    >
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => {
                                setVolume(parseFloat(e.target.value));
                                if (audioRef.current) audioRef.current.volume = parseFloat(e.target.value);
                            }}
                            className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
                            style={{ accentColor: '#D4AF37' }} // Gold accent
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 ${isPlaying
                    ? 'bg-luxury-gold/20 border-luxury-gold text-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-black/50 border-white/10 text-slate-400 hover:text-white'
                    }`}
            >
                {isPlaying ? (
                    <div className="relative">
                        <Volume2 size={24} />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-luxury-gold"></span>
                        </span>
                    </div>
                ) : (
                    <VolumeX size={24} />
                )}
            </motion.button>

            {/* Minimal Label */}
            <span className={`text-xs font-mono tracking-wider transition-opacity duration-300 ${isPlaying ? 'text-luxury-gold opacity-100' : 'text-slate-500 opacity-0'}`}>
                {isPlaying ? 'PLAYING JAZZ' : 'PAUSED'}
            </span>
        </div>
    );
}
