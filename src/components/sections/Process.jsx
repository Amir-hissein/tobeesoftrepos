import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';

const Process = () => {
    const { t } = useLanguage();

    const gradients = [
        'from-cyan-400 to-blue-500',
        'from-purple-400 to-pink-500',
        'from-green-400 to-emerald-500',
        'from-yellow-400 to-orange-500',
        'from-red-400 to-pink-500'
    ];

    return (
        <Section id="processus" className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1420] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm mb-4"
                    >
                        <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            {t.process.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white font-display"
                    >
                        {t.process.title}
                    </motion.h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Animated vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"
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
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className={`group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}
                                        >
                                            {/* Glow effect */}
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                                            {/* Card content */}
                                            <div className="relative">
                                                {/* Duration badge */}
                                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${gradient} mb-4`}>
                                                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                                                        {item.duration}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-white mb-6">
                                                    {item.title}
                                                </h3>

                                                {/* Items list */}
                                                <ul className="space-y-3">
                                                    {item.items.map((subItem, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: i * 0.1 }}
                                                            className="flex items-start gap-3 text-gray-400"
                                                        >
                                                            <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 text-transparent bg-gradient-to-r ${gradient} bg-clip-text`} />
                                                            <span className="text-sm leading-relaxed">{subItem}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                {/* Decorative corner */}
                                                <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-20 h-20 bg-gradient-to-${isEven ? 'bl' : 'tr'} ${gradient} opacity-5 ${isEven ? 'rounded-bl-full rounded-tr-3xl' : 'rounded-tl-full rounded-br-3xl'}`} />
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Center marker with animated pulse */}
                                    <motion.div
                                        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                                    >
                                        {/* Pulsing ring */}
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} animate-ping opacity-20`} />

                                        {/* Outer glow */}
                                        <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${gradient} blur-md opacity-50`} />

                                        {/* Main circle */}
                                        <div className={`relative w-12 h-12 rounded-full bg-[#0a0e1a] border-2 border-transparent bg-gradient-to-r ${gradient} bg-clip-border flex items-center justify-center shadow-lg`}>
                                            <div className="w-10 h-10 rounded-full bg-[#0a0e1a] flex items-center justify-center">
                                                <span className={`text-sm font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
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
