import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const canvasRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const fullText = "Transformez votre vision digitale en réalité";

    // Stats state
    const [stats, setStats] = useState({
        projects: 0,
        satisfaction: 0,
        support: 0
    });

    // Typing effect
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    // Canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const theme = document.documentElement.getAttribute('data-theme') || 'dark';
            const primaryColor = theme === 'dark' ? '0, 212, 255' : '0, 102, 255';

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

                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(${primaryColor}, ${(1 - distance / 150) * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
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

                setStats(prev => ({
                    ...prev,
                    [key]: Math.floor(easeOutQuart * (end - start) + start)
                }));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateValue('projects', 0, 50, 2500);
                animateValue('satisfaction', 0, 100, 2500);
                animateValue('support', 0, 24, 2500);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.tech-stats');
        if (statsSection) observer.observe(statsSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero" id="accueil">
            <div className="hero-background">
                <canvas id="techCanvas" ref={canvasRef}></canvas>
                <div className="tech-grid"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="typing-text">{typedText}</span>
                    </h1>
                    <p className="hero-subtitle">
                        Votre partenaire expert en développement logiciel et numérisation des infrastructures technologiques
                    </p>
                    <p className="hero-description">
                        Nous concevons des solutions logicielles innovantes et sur mesure qui propulsent votre entreprise
                        vers l'excellence numérique. De l'idée initiale au déploiement final, nous transformons vos défis
                        technologiques en opportunités de croissance.
                    </p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                    >
                        <motion.a
                            href="#contact"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>
                            Démarrer votre projet
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <i className="fas fa-compass" style={{ marginRight: '8px' }}></i>
                            Découvrir nos services
                        </motion.a>
                    </motion.div>
                    <div className="tech-stats">
                        <div className="stat-item">
                            <span className="stat-number">{stats.projects}</span>
                            <span className="stat-label">Projets réalisés</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{stats.satisfaction}%</span>
                            <span className="stat-label">Satisfaction</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{stats.support}/7</span>
                            <span className="stat-label">Support 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
