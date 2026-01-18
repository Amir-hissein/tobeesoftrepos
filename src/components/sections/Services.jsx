import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { Code2, Cloud, Link as LinkIcon, Lightbulb, PenTool, CheckCircle2 } from 'lucide-react';

const Services = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const icons = {
        service1: Code2,
        service2: Cloud,
        service3: LinkIcon,
        service4: Lightbulb,
        service5: PenTool
    };

    const serviceKeys = ['service1', 'service2', 'service3', 'service4', 'service5'];

    return (
        <Section id="services" className="bg-white dark:bg-[#1a2332] relative overflow-hidden py-24 transition-colors duration-500">
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
                            {t.services.label}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                    >
                        {t.services.title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"
                    />
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {serviceKeys.map((key, index) => {
                        const Icon = icons[key] || Code2;
                        const serviceData = t.services[key];
                        const isHovered = hoveredIndex === index;

                        // Use only primary colors for all cards
                        const colors = {
                            border: 'border-primary-200 dark:border-primary-800',
                            bg: 'bg-primary-50 dark:bg-primary-900/20',
                            text: 'text-primary-600 dark:text-primary-400',
                            hover: 'hover:border-primary-300 dark:hover:border-primary-600',
                            shadow: 'shadow-primary-100 dark:shadow-none'
                        };

                        const subItems = Object.entries(serviceData)
                            .filter(([k]) => k !== 'title')
                            .map(([_, val]) => val);

                        return (
                            <motion.div
                                key={key}
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
                                    className={`relative h-full bg-white dark:bg-slate-800 border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 ${isHovered ? `shadow-xl dark:shadow-none ${colors.shadow}` : 'shadow-md dark:shadow-none'}`}
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

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-display leading-tight">
                                        {serviceData.title}
                                    </h3>

                                    {/* Sub-items list */}
                                    <ul className="space-y-3">
                                        {subItems.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.05 }}
                                                className="group/item"
                                            >
                                                <div className="flex items-start gap-2.5">
                                                    <CheckCircle2
                                                        size={16}
                                                        className={`flex-shrink-0 mt-0.5 ${colors.text}`}
                                                    />
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Decorative corner element */}
                                    <div className={`absolute bottom-0 right-0 w-20 h-20 ${colors.bg} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default Services;
