import { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

        // SLAM / Lidar Configuration
        const pointCount = 400;
        const points: { x: number; y: number; z: number; originalY: number }[] = [];
        const fov = 300; // Field of view

        let mouseX = 0;
        let mouseY = 0;

        // Initialize points in a 3D tunnel/floor shape
        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: (Math.random() - 0.5) * width * 2, // Spread wide
                y: (Math.random() - 0.5) * height * 2, // Spread tall
                z: Math.random() * 2000,
                originalY: 0 // Will set later
            });
            points[i].originalY = points[i].y;
        }

        function handleMouseMove(e: MouseEvent) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId: number;
        let time = 0;

        function animate() {
            // Dark "Void" Background
            ctx!.fillStyle = '#050505';
            ctx!.fillRect(0, 0, width, height);

            // Tech Grid floor (Perspective)
            // Not drawing lines to keep it clean, just points

            time += 2; // Speed of travel

            points.forEach(p => {
                // Move point towards camera
                p.z -= 2;
                if (p.z <= 1) p.z = 2000; // Reset to back

                // 3D Projection
                const scale = fov / (fov + p.z);
                const x2d = (p.x * scale) + width / 2;
                const y2d = (p.y * scale) + height / 2;

                // Mouse Repulsion (in 2D space for feel)
                const dx = x2d - mouseX;
                const dy = y2d - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Active "Scanning" highlight
                // Highlight points that are at a specific Z depth (Scan wave)
                const scanWave = (p.z + time * 10) % 1000;
                const isScanning = scanWave < 100;

                // Color & Size
                let alpha = (1 - p.z / 2000) * 0.8; // Fade in back
                let size = scale * 3;

                // Interaction
                if (dist < 200) {
                    ctx!.fillStyle = '#ffffff'; // White hot on hover
                    size *= 1.5;
                } else if (isScanning) {
                    ctx!.fillStyle = '#06b6d4'; // Cyan scan line
                    alpha = 1;
                } else {
                    ctx!.fillStyle = `rgba(139, 92, 246, ${alpha})`; // Purple dust
                }

                // Draw
                ctx!.beginPath();
                ctx!.globalAlpha = alpha;
                ctx!.arc(x2d, y2d, size, 0, Math.PI * 2);
                ctx!.fill();
                ctx!.globalAlpha = 1.0;

                // Connectivity (Neural lines) for nearby points in 2D
                // Only draw lines if points are close in screen space AND Z-space (to avoid weird jumps)
                // Doing this for all points is expensive (O(N^2)). Let's skip for performance or do simple "constellation"
            });

            // Draw "Targeting Reticle" around mouse
            ctx!.strokeStyle = 'rgba(6, 182, 212, 0.5)';
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
            ctx!.stroke();
            ctx!.beginPath();
            ctx!.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
            ctx!.fill();

            // connecting lines to nearest points from mouse
            // "Lidar Lock"
            points.forEach(p => {
                const scale = fov / (fov + p.z);
                const x2d = (p.x * scale) + width / 2;
                const y2d = (p.y * scale) + height / 2;
                const dx = x2d - mouseX;
                const dy = y2d - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    ctx!.beginPath();
                    ctx!.strokeStyle = `rgba(6, 182, 212, ${1 - dist / 100})`;
                    ctx!.moveTo(mouseX, mouseY);
                    ctx!.lineTo(x2d, y2d);
                    ctx!.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-[#050505]">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
