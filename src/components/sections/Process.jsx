import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';

const Process = () => {
    const { t } = useLanguage();

    return (
        <Section id="processus" className="bg-dark-900">
            <div className="text-center mb-20">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-500 font-semibold tracking-wider uppercase text-sm"
                >
                    {t.process.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mt-2 font-display"
                >
                    {t.process.title}
                </motion.h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent"></div>

                <div className="space-y-12">
                    {t.process.steps.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex-1 md:text-right w-full pl-16 md:pl-0">
                                {/* Only show content on one side, empty on other for layout balance, but wait, layout is tricky with mapping. 
                                   Better approach: Content div is flex-1. Marker is center. 
                                */}
                            </div>

                            {/* Re-thinking layout for standard vertical timeline */}
                            {/* Mobile: Line on left. Desktop: Center line. */}
                        </motion.div>
                    ))}

                    {/* Let's redo the loop with explicit structure */}
                    {t.process.steps.map((item, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Content Side */}
                            <motion.div
                                className={`flex-1 w-full pl-16 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="bg-dark-800 p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors shadow-lg">
                                    <span className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2 block">{item.duration}</span>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <ul className={`space-y-2 text-sm text-gray-400 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                                        {item.items.map((subItem, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                {index % 2 === 1 && <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>}
                                                {subItem}
                                                {index % 2 === 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0"></span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Center Marker */}
                            <div className="absolute left-[14px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-dark-900 border-2 border-primary-500 z-10 shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                                <span className="text-xs font-bold text-white">{index + 1}</span>
                            </div>

                            {/* Empty Side for balance */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}

                </div>
            </div>
        </Section>
    );
};

export default Process;
