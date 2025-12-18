import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles, Zap, Code2, Rocket, TrendingUp } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef(null);
    const { t } = useLanguage();
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

    // Enhanced Canvas animation with 3D-like particles
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let particles = [];
        let animationId;
        let mousePos = { x: 0, y: 0 };

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * 2 + 0.5,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.6 + 0.2,
                    hue: Math.random() * 60 + 180 // Blue to cyan range
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, i) => {
                // Mouse interaction
                const dx = mousePos.x - particle.x;
                const dy = mousePos.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    particle.vx -= (dx / dist) * force * 0.2;
                    particle.vy -= (dy / dist) * force * 0.2;
                }

                particle.x += particle.vx * particle.z;
                particle.y += particle.vy * particle.z;

                // Damping
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Boundaries with wrapping
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle with glow
                const size = particle.radius * particle.z;

                // Glow effect
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, size * 3
                );
                gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity * 0.8})`);
                gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 60%, ${particle.opacity * 0.3})`);
                gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(
                    particle.x - size * 3,
                    particle.y - size * 3,
                    size * 6,
                    size * 6
                );

                // Core particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity})`;
                ctx.fill();

                // Enhanced connections with gradient
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        const lineGradient = ctx.createLinearGradient(
                            particle.x, particle.y,
                            other.x, other.y
                        );
                        const alpha = (1 - distance / 120) * 0.3;
                        lineGradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${alpha})`);
                        lineGradient.addColorStop(1, `hsla(${other.hue}, 100%, 70%, ${alpha})`);
                        ctx.strokeStyle = lineGradient;
                        ctx.lineWidth = 1.5;
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
    }, []);

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
        { icon: Zap, title: 'Performance', color: 'from-yellow-400 to-orange-500' },
        { icon: Code2, title: 'Clean Code', color: 'from-blue-400 to-cyan-500' },
        { icon: Rocket, title: 'Fast Deploy', color: 'from-purple-400 to-pink-500' },
        { icon: TrendingUp, title: 'Growth', color: 'from-green-400 to-emerald-500' }
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
            {/* Enhanced Background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] z-0">
                <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-75"
                    style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.15)_0%,transparent_50%)]" />
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
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Solutions Digitales Premium
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title with enhanced gradient */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 pb-2 leading-tight">
                            {typedText}
                            <span className="inline-block w-1 h-16 md:h-24 bg-gradient-to-b from-cyan-400 to-blue-500 ml-2 animate-pulse" />
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>

                    {/* CTA Buttons with enhanced styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <a href="#contact" className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200" />
                            <button className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                                <Sparkles size={20} className="stroke-2" />
                                <span>{t.hero.startProject}</span>
                            </button>
                        </a>
                        <a href="#services" className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-pink-500/50 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-200" />
                            <button className="relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white font-semibold flex items-center gap-3 hover:bg-white/10 hover:scale-105 transition-all duration-200">
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
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 w-full max-w-4xl"
                    >
                        {featureCards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur transition duration-300"
                                    style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} mb-3`}>
                                        <card.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Stats with glassmorphism cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {[
                            { label: t.hero.stats.projects, value: stats.projects, suffix: '+', gradient: 'from-cyan-400 to-blue-500' },
                            { label: t.hero.stats.satisfaction, value: stats.satisfaction, suffix: '%', gradient: 'from-purple-400 to-pink-500' },
                            { label: t.hero.stats.support, value: `${stats.support}/7`, suffix: '', gradient: 'from-green-400 to-emerald-500' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 1.5 + i * 0.15, type: "spring", stiffness: 100 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition duration-300`} />

                                <div className="relative p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/[0.07] transition-all duration-300">
                                    <div className={`text-6xl md:text-7xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 font-display`}>
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-semibold">
                                        {stat.label}
                                    </div>

                                    {/* Decorative line */}
                                    <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${stat.gradient} mx-auto opacity-50`} />
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
                <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer">
                    <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
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
