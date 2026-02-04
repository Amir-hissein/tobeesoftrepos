import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { CheckCircle2, Lightbulb, Palette, Code, TestTube, Rocket, Headphones } from 'lucide-react';

const Process = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const stepIcons = [Lightbulb, Palette, Code, TestTube, Rocket, Headphones];

    return (
        <Section id="processus" className="bg-white dark:bg-[#1a2332] relative overflow-hidden py-24 transition-colors duration-500">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-500/5 dark:hidden rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 dark:hidden rounded-full blur-[120px]" />
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
                            {t.process.label}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                    >
                        {t.process.title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"
                    />
                </div>

                {/* Process steps grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {t.process.steps.map((item, index) => {
                        const Icon = stepIcons[index % stepIcons.length];
                        const isHovered = hoveredIndex === index;

                        // Use only primary colors for all cards
                        const colors = {
                            border: 'border-primary-200 dark:border-primary-800',
                            bg: 'bg-primary-50 dark:bg-primary-900/20',
                            text: 'text-primary-600 dark:text-primary-400',
                            hover: 'hover:border-primary-300 dark:hover:border-primary-600'
                        };

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
                                    className={`relative h-full bg-white dark:bg-slate-800 border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300`}
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
                                            {index + 1}
                                        </motion.div>

                                        {/* Icon */}
                                        <motion.div
                                            className={`p-2.5 rounded-lg ${colors.bg}`}
                                            animate={isHovered ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon size={22} className={colors.text} />
                                        </motion.div>
                                    </div>

                                    {/* Duration badge */}
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} border ${colors.border} mb-4`}>
                                        <div className={`w-1.5 h-1.5 ${colors.text} rounded-full`} />
                                        <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wide`}>
                                            {item.duration}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display leading-tight">
                                        {item.title}
                                    </h3>

                                    {/* Items list */}
                                    <ul className="space-y-2.5">
                                        {item.items.map((subItem, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-2.5"
                                            >
                                                <CheckCircle2
                                                    size={16}
                                                    className={`flex-shrink-0 mt-0.5 ${colors.text}`}
                                                />
                                                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                                    {subItem}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Decorative corner element */}
                                    <div className={`absolute bottom-0 right-0 w-20 h-20 ${colors.bg} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                                </motion.div>

                                {/* Step connector line (visible except for last items) */}
                                {index < t.process.steps.length - 1 && (index + 1) % 3 !== 0 && (
                                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-slate-200">
                                        <motion.div
                                            className="h-full bg-primary-200"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                        Chaque étape est soigneusement orchestrée pour garantir le succès de votre projet
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

export default Process;
