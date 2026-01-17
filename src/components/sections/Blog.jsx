import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import {
    Smartphone,
    Zap,
    Navigation,
    Shield,
    Search,
    FileText,
    Users,
    Clock,
    Sparkles,
    Target,
    CheckCircle2
} from 'lucide-react';

const Blog = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, type: "spring", bounce: 0.3 }
        }
    };

    const characteristics = [
        {
            icon: Smartphone,
            title: t.blog.characteristics.responsive.title,
            description: t.blog.characteristics.responsive.description,
        },
        {
            icon: Zap,
            title: t.blog.characteristics.performance.title,
            description: t.blog.characteristics.performance.description,
        },
        {
            icon: Navigation,
            title: t.blog.characteristics.navigation.title,
            description: t.blog.characteristics.navigation.description,
        },
        {
            icon: Shield,
            title: t.blog.characteristics.security.title,
            description: t.blog.characteristics.security.description,
        },
        {
            icon: Search,
            title: t.blog.characteristics.seo.title,
            description: t.blog.characteristics.seo.description,
        },
        {
            icon: FileText,
            title: t.blog.characteristics.content.title,
            description: t.blog.characteristics.content.description,
        },
        {
            icon: Users,
            title: t.blog.characteristics.accessibility.title,
            description: t.blog.characteristics.accessibility.description,
        },
        {
            icon: Clock,
            title: t.blog.characteristics.speed.title,
            description: t.blog.characteristics.speed.description,
        },
        {
            icon: Sparkles,
            title: t.blog.characteristics.design.title,
            description: t.blog.characteristics.design.description,
        },
        {
            icon: Target,
            title: t.blog.characteristics.cta.title,
            description: t.blog.characteristics.cta.description,
        }
    ];

    // Use only primary colors for all cards (matching Services and Process style)
    const colors = {
        border: 'border-primary-200 dark:border-primary-800',
        bg: 'bg-primary-50 dark:bg-primary-900/20',
        text: 'text-primary-600 dark:text-primary-400',
        hover: 'hover:border-primary-300 dark:hover:border-primary-600',
        shadow: 'shadow-primary-100 dark:shadow-none'
    };

    return (
        <Section id="blog" className="bg-white dark:bg-slate-900 relative overflow-hidden py-24 transition-colors duration-500">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-900/30 border border-secondary-200 dark:border-secondary-800 mb-6"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary-600 dark:text-secondary-400">
                            {t.blog.label}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                    >
                        {t.blog.title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"
                    />
                </div>

                {/* Featured Article Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <div className={`relative bg-white dark:bg-slate-800 border-2 ${colors.border} rounded-2xl p-8 md:p-10 shadow-md ${colors.hover} transition-all duration-300 hover:shadow-xl ${colors.shadow}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                                <Sparkles className={colors.text} size={24} />
                            </div>
                            <div>
                                <p className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                                    {t.blog.featured.tag}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {t.blog.featured.date}
                                </p>
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                            {t.blog.featured.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                            {t.blog.featured.intro}
                        </p>

                        {/* Decorative corner element */}
                        <div className={`absolute bottom-0 right-0 w-24 h-24 ${colors.bg} rounded-tl-full opacity-50 -z-10`} />
                    </div>
                </motion.div>

                {/* Characteristics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {characteristics.map((item, index) => {
                        const isHovered = hoveredIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative h-full"
                            >
                                {/* Card */}
                                <motion.div
                                    className={`relative h-full bg-white dark:bg-slate-800 border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 ${isHovered ? `shadow-xl ${colors.shadow}` : 'shadow-md'}`}
                                    whileHover={{ y: -4 }}
                                >
                                    {/* Header section */}
                                    <div className="flex items-start justify-between mb-5">
                                        {/* Number badge */}
                                        <motion.div
                                            className={`flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.text} font-black text-lg border ${colors.border}`}
                                            animate={isHovered ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </motion.div>

                                        {/* Icon */}
                                        <motion.div
                                            className={`p-2.5 rounded-lg ${colors.bg}`}
                                            animate={isHovered ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <item.icon size={22} className={colors.text} />
                                        </motion.div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display leading-tight">
                                        {item.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Decorative corner element */}
                                    <div className={`absolute bottom-0 right-0 w-20 h-20 ${colors.bg} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center max-w-2xl mx-auto"
                >
                    <div className={`inline-block ${colors.bg} rounded-2xl p-8 border-2 ${colors.border}`}>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 font-medium">
                            {t.blog.cta.text}
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
                        >
                            {t.blog.cta.button}
                            <Target size={20} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Blog;
