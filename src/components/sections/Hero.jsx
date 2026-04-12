import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { ArrowRight, Sparkles, Zap, Code2, Rocket, TrendingUp } from 'lucide-react';


const Hero = () => {
    const canvasRef = useRef(null);
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [typedText, setTypedText] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const fullText = t.hero.title;

    // Stats state
    const [stats, setStats] = useState({
        projects: 0,
        satisfaction: 0,
        support: 0
    });

    // Mouse tracking for parallax effect
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Typing effect with cursor
    useEffect(() => {
        let index = 0;
        let isMounted = true;
        setTypedText('');

        const timer = setInterval(() => {
            if (!isMounted) return;
            if (index < fullText.length) {
                setTypedText(fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => {
            isMounted = false;
            clearInterval(timer);
        };
    }, [fullText]);

    // Enhanced Canvas animation with Falling Web & Binary Background
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let particles = [];
        let binaryEntities = [];
        let animationId;
        let mousePos = { x: 0, y: 0 };

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // 1. Web Particles (Falling)
            particles = [];
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: Math.random() * 1.5 + 0.5, // Always positive (Downwards)
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.1,
                });
            }

            // 2. Binary Background Entities (Dark Mode Only usually, but we init them)
            binaryEntities = [];
            const binaryCount = Math.floor(canvas.width / 40); // One column every 40px approx
            for (let i = 0; i < binaryCount; i++) {
                binaryEntities.push({
                    x: i * 40 + (Math.random() * 20), // Grid-like columns
                    y: Math.random() * canvas.height,
                    val: Math.random() > 0.5 ? '1' : '0',
                    speed: Math.random() * 0.5 + 0.2,
                    size: Math.random() * 20 + 40, // Large text as in image
                    opacity: 0.1 // Subtle background
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDark = theme === 'dark';

            // --- Layer 1: Binary Background ---
            // --- Layer 1: Binary Background ---
            ctx.save();
            ctx.font = 'bold 60px "Courier New", monospace'; // Large, bold font
            ctx.textAlign = 'center';

            binaryEntities.forEach(bin => {
                // Interaction with mouse
                const dx = mousePos.x - bin.x;
                const dy = mousePos.y - bin.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let opacity = isDark ? 0.15 : 0.15; // Same base opacity for both

                if (dist < 150) {
                    opacity = isDark ? 0.7 : 0.7; // Same contact opacity

                    // Contact Line
                    ctx.beginPath();
                    ctx.moveTo(bin.x, bin.y - 20); // Adjust for text height center approx
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.strokeStyle = isDark ? `rgba(255, 255, 255, 0.4)` : `rgba(0, 0, 0, 0.4)`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }

                ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`;
                ctx.fillText(bin.val, bin.x, bin.y);

                // Move Down
                bin.y += bin.speed;
                if (bin.y > canvas.height + 50) {
                    bin.y = -50;
                    bin.val = Math.random() > 0.5 ? '1' : '0';
                }
            });
            ctx.restore();

            // --- Layer 2: particles (The "Web") ---
            particles.forEach((particle, i) => {
                // Mouse interaction
                const dx = mousePos.x - particle.x;
                const dy = mousePos.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Mouse interaction physics (Magnetic Field)
                const interactionRadius = 300; // Large field of influence
                if (dist < interactionRadius && dist > 0) {
                    const force = Math.pow((interactionRadius - dist) / interactionRadius, 2); // Quadratic for more elasticity

                    // Magnetic Repulsion: Push particles away from cursor strongly
                    const repulsionStrength = 4; // Very strong push
                    const pushX = (dx / dist) * force * repulsionStrength;
                    const pushY = (dy / dist) * force * repulsionStrength;

                    particle.vx -= pushX;
                    particle.vy -= pushY;

                    // Velocity Damping for smooth elastic return
                    particle.vx *= 0.92;
                    particle.vy *= 0.85; // More damping on Y to preserve falling direction

                    // Draw tensile connection line to mouse
                    if (isDark) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(mousePos.x, mousePos.y);
                        ctx.strokeStyle = `hsla(0, 0%, 100%, ${(1 - dist / interactionRadius) * 0.7})`;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    } else {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(mousePos.x, mousePos.y);
                        ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - dist / interactionRadius) * 0.7})`; // Same intensity as dark mode
                        ctx.stroke();
                    }
                }

                // Move Particle
                particle.x += particle.vx;
                particle.y += particle.vy; // Constantly falling

                // Reset when hitting bottom
                if (particle.y > canvas.height + 10) {
                    particle.y = -10;
                    particle.x = Math.random() * canvas.width;
                    particle.vx = (Math.random() - 0.5) * 0.5; // Reset wobble
                }

                // Wrap X axis
                if (particle.x < -10) particle.x = canvas.width + 10;
                if (particle.x > canvas.width + 10) particle.x = -10;

                // Draw particle
                const size = particle.radius * (isDark ? 1.2 : 1);
                const hue = isDark ? 0 : 240;
                const baseOpacity = isDark ? 0.9 : 0.4;
                const coreColor = isDark ? `hsla(0, 0%, 100%, ${particle.opacity})` : `hsla(${hue}, 80%, 60%, ${particle.opacity})`;

                // Glow (Gradient)
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, size * 4
                );

                if (isDark) {
                    gradient.addColorStop(0, `hsla(0, 0%, 100%, ${particle.opacity * 0.5})`);
                    gradient.addColorStop(1, `hsla(0, 0%, 100%, 0)`);
                } else {
                    gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, ${particle.opacity * baseOpacity})`);
                    gradient.addColorStop(1, `hsla(${hue}, 80%, 60%, 0)`);
                }

                ctx.fillStyle = gradient;
                ctx.fillRect(particle.x - size * 4, particle.y - size * 4, size * 8, size * 8);

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
                ctx.fillStyle = coreColor;
                ctx.fill();

                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const pdx = particle.x - other.x;
                    const pdy = particle.y - other.y;
                    const pDistance = Math.sqrt(pdx * pdx + pdy * pdy);

                    if (pDistance < 180) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);

                        const lineOpacity = isDark
                            ? (1 - pDistance / 180) * 0.7  // Much brighter
                            : (1 - pDistance / 180) * 0.7; // Match dark mode intensity

                        ctx.strokeStyle = isDark
                            ? `hsla(0, 0%, 100%, ${lineOpacity})`
                            : `rgba(0, 0, 0, ${lineOpacity})`; // Black lines in light mode

                        ctx.lineWidth = isDark ? 1.5 : 1.5;
                        ctx.stroke();
                    }
                }
            });

            animationId = requestAnimationFrame(drawParticles);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mousePos = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        initCanvas();
        drawParticles();

        const handleResize = () => initCanvas();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [theme]); // Re-run when theme changes

    // Stats animation
    useEffect(() => {
        const animateValue = (key, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setStats(prev => ({ ...prev, [key]: Math.floor(easeOutQuart * (end - start) + start) }));
                if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
        };

        animateValue('projects', 0, 50, 2000);
        animateValue('satisfaction', 0, 100, 2000);
        animateValue('support', 0, 24, 2000);
    }, []);

    const featureCards = [
        { icon: Zap, title: 'Performance' },
        { icon: Code2, title: 'Clean Code' },
        { icon: Rocket, title: 'Fast Deploy' },
        { icon: TrendingUp, title: 'Growth' }
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-500" id="hero">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 z-0">
                <canvas ref={canvasRef} className="absolute inset-0 opacity-80 dark:opacity-100" />

                {/* Animated gradient orbs - Light mode only */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/5 hidden rounded-full blur-[120px]"
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-500/5 hidden rounded-full blur-[120px]"
                    style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />

                {/* Vignette - Light mode only */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.5)_100%)] dark:bg-none" />
            </div>

            <div className="container relative z-10 px-4 py-12">
                <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/50">
                            <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                                {t.hero.badge}
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title with enhanced gradient */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6 relative"
                    >
                        <div className="absolute -inset-1 blur-3xl bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10 opacity-30 hidden"></div>
                        <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white pb-2 leading-tight tracking-tight">
                            {typedText}
                            <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-12 md:h-16 lg:h-20 bg-primary-600 dark:bg-primary-500 ml-1 sm:ml-2 animate-pulse align-middle rounded-full" />
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-6 font-light tracking-wide font-display"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-12 max-w-3xl leading-relaxed px-4"
                    >
                        {t.hero.description}
                    </motion.p>

                    {/* CTA Buttons with enhanced styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20 w-full max-w-lg sm:max-w-none px-4"
                    >
                        <a href="/contact" className="group relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-md blur opacity-40 group-hover:opacity-60 transition duration-300 hidden" />
                            <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 rounded-md text-white text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-primary-700 transition-all duration-300 w-full sm:w-auto">
                                <Sparkles size={20} className="stroke-2" />
                                <span>{t.hero.startProject}</span>
                            </button>
                        </a>
                        <a href="/#services" className="group relative">
                            <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 w-full sm:w-auto">
                                <span>{t.hero.discoverServices}</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 md:mb-20 w-full max-w-5xl px-4"
                    >
                        {featureCards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + i * 0.1 }}
                                variants={cardVariants}
                                className="relative flex flex-col items-center p-4 sm:p-5 lg:p-6 bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 group shadow-sm hover:shadow-md h-full w-full"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mb-3 sm:mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                    <card.icon size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{card.title}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Stats with glassmorphism cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl px-4">
                        {[
                            { label: t.hero.stats.projects, value: stats.projects, suffix: '+', gradient: 'from-primary-500 to-indigo-600' },
                            { label: t.hero.stats.satisfaction, value: stats.satisfaction, suffix: '%', gradient: 'from-primary-500 to-indigo-600' },
                            { label: t.hero.stats.support, value: `${stats.support}/7`, suffix: '', gradient: 'from-primary-500 to-indigo-600' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 1.5 + i * 0.15, type: "spring", stiffness: 100 }}
                                whileHover={{ y: -3 }}
                                className="relative group"
                            >
                                {/* Glow effect on hover - subtle */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-300 hidden`} />

                                <div className="relative p-6 sm:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg dark:shadow-none hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300">
                                    <div className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 font-display`}>
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                    <span className="text-xs uppercase tracking-widest font-semibold">{t.hero.scroll}</span>
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 bg-current rounded-full"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
