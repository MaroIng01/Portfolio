import { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas!.width = width;
            canvas!.height = height;
        }

        window.addEventListener('resize', resize);
        resize();

        // Particles
        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const particleCount = 100; // Adjust for density
        const connectionDistance = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            });
        }

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        function handleMouseMove(e: MouseEvent) {
            const rect = canvas!.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        }

        if (containerRef.current) {
            containerRef.current.addEventListener('mousemove', handleMouseMove);
        }

        function animate() {
            ctx!.clearRect(0, 0, width, height);

            // Draw gradient background
            const gradient = ctx!.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            gradient.addColorStop(0, '#0f0c29'); // Deep Blue/Purple
            gradient.addColorStop(0.5, '#302b63'); // Rich Purple
            gradient.addColorStop(1, '#24243e'); // Dark Blue
            ctx!.fillStyle = gradient;
            ctx!.fillRect(0, 0, width, height);

            ctx!.fillStyle = 'rgba(139, 92, 246, 0.5)'; // Royal Amethyst
            ctx!.strokeStyle = 'rgba(139, 92, 246, 0.15)';

            particles.forEach((p, i) => {
                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction - slightly attract to mouse
                const dx = mouseX - p.x;
                const dy = mouseY - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    p.x += dx * 0.005;
                    p.y += dy * 0.005;
                }

                // Draw particle
                ctx!.beginPath();
                ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx!.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx!.beginPath();
                        ctx!.moveTo(p.x, p.y);
                        ctx!.lineTo(p2.x, p2.y);
                        ctx!.stroke();
                    }
                }
            });

            // Mouse Spotlight (Draw a glow around mouse)
            const mouseGradient = ctx!.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
            mouseGradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
            mouseGradient.addColorStop(1, 'transparent');
            ctx!.fillStyle = mouseGradient;
            ctx!.fillRect(0, 0, width, height);

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (containerRef.current) {
                containerRef.current.removeEventListener('mousemove', handleMouseMove); // Cleanup
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 bg-deep-void">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
