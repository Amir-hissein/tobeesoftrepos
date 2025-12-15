import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef(null);
    const { t } = useLanguage();
    const [typedText, setTypedText] = useState('');
    const fullText = t.hero.title;

    // Stats state
    const [stats, setStats] = useState({
        projects: 0,
        satisfaction: 0,
        support: 0
    });

    // Typing effect
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

    // Canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let particles = [];
        let animationId;

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.4 + 0.1
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const primaryColor = '0, 212, 255';

            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${primaryColor}, ${particle.opacity})`;
                ctx.fill();

                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = `rgba(${primaryColor}, ${(1 - dist / 100) * 0.1})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationId = requestAnimationFrame(drawParticles);
        };

        initCanvas();
        drawParticles();

        const handleResize = () => initCanvas();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
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

        // Trigger animation immediately for now, or use IntersectionObserver if preferred
        animateValue('projects', 0, 50, 2000);
        animateValue('satisfaction', 0, 100, 2000);
        animateValue('support', 0, 24, 2000);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
            {/* Background */}
            <div className="absolute inset-0 bg-theme-primary z-0">
                <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.1)_0%,transparent_70%)]" />
            </div>

            <div className="container relative z-10 px-4">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-500 pb-2">
                            {typedText}<span className="animate-pulse text-primary-400">|</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-gradient-to-r from-cyan-500 to-blue-500"
                            asChild
                        >
                            <a href="#contact">
                                <Sparkles size={20} className="stroke-2" />
                                {t.hero.startProject}
                            </a>
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            asChild
                        >
                            <a href="#services">
                                <span>{t.hero.discoverServices}</span>
                                <ArrowRight size={20} />
                            </a>
                        </Button>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-20 border-t border-white/5 pt-10 w-full">
                        {[
                            { label: t.hero.stats.projects, value: stats.projects, suffix: '+' },
                            { label: t.hero.stats.satisfaction, value: stats.satisfaction, suffix: '%' },
                            { label: t.hero.stats.support, value: `${stats.support}/7`, suffix: '' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 + i * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                                    {stat.value}{stat.suffix}
                                </span>
                                <span className="text-sm text-primary-400 uppercase tracking-widest font-semibold">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
