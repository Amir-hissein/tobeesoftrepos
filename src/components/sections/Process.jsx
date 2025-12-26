import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';

const Process = () => {
    const { t } = useLanguage();

    const gradients = [
        'from-primary-500 to-indigo-600',
        'from-secondary-500 to-emerald-600',
        'from-amber-500 to-orange-600',
        'from-rose-500 to-pink-600',
        'from-blue-500 to-cyan-600'
    ];

    return (
        <Section id="processus" className="bg-white relative overflow-hidden py-24">
            {/* Background decorations - very subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary-500/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-secondary-500/3 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 border border-secondary-200 mb-6"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary-600">
                            {t.process.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 font-display mb-6 tracking-tight"
                    >
                        {t.process.title}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated vertical line - cleaner look */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5">
                        <div className="absolute inset-0 bg-slate-200" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: 'top' }}
                        />
                    </div>

                    <div className="space-y-16">
                        {t.process.steps.map((item, index) => {
                            const gradient = gradients[index % gradients.length];
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content */}
                                    <motion.div
                                        className="flex-1 w-full pl-20 md:pl-0"
                                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <motion.div
                                            whileHover={{ y: -3 }}
                                            className={`group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}
                                        >
                                            {/* Subtle glow effect on hover */}
                                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                            {/* Card content */}
                                            <div className="relative">
                                                {/* Duration badge - cleaner style */}
                                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${gradient} mb-6 shadow-sm`}>
                                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                                        {item.duration}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
                                                    {item.title}
                                                </h3>

                                                {/* Items list */}
                                                <ul className="space-y-3">
                                                    {item.items.map((subItem, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.05 }}
                                                            className="flex items-start gap-3 text-slate-600"
                                                        >
                                                            <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-primary-600" />
                                                            <span className="text-sm leading-relaxed">{subItem}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Center marker - refined design */}
                                    <motion.div
                                        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        {/* Subtle pulsing effect - less aggressive */}
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} animate-ping opacity-10`} style={{ animationDuration: '3s' }} />

                                        {/* Outer ring */}
                                        <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${gradient} opacity-20 blur-sm`} />

                                        {/* Main circle - cleaner design */}
                                        <div className="relative w-14 h-14 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                                <span className="text-base font-black text-white">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Empty side for desktop balance */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Process;
