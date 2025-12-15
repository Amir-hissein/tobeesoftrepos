import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { Code2, Cloud, Link as LinkIcon, Lightbulb, PenTool, Database, Terminal, Shield } from 'lucide-react';

const Services = () => {
    const { t } = useLanguage();

    const icons = {
        service1: Code2,
        service2: Cloud,
        service3: LinkIcon,
        service4: Lightbulb,
        service5: PenTool
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const serviceKeys = ['service1', 'service2', 'service3', 'service4', 'service5'];

    return (
        <Section id="services" className="bg-theme-tertiary">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-500 font-semibold tracking-wider uppercase text-sm"
                >
                    {t.services.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-theme-primary mt-2 font-display"
                >
                    {t.services.title}
                </motion.h2>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {serviceKeys.map((key) => {
                    const Icon = icons[key] || Code2;
                    const serviceData = t.services[key];

                    // Helper to get sub-items. Assuming structure consistency.
                    // If sub-items keys are dynamic, we might need a safer way.
                    // For now, let's extract what we know or map object entries.
                    const subItems = Object.entries(serviceData)
                        .filter(([k]) => k !== 'title')
                        .map(([_, val]) => val);


                    return (
                        <motion.div
                            key={key}
                            variants={itemVariants}
                            className="group relative p-8 rounded-2xl bg-theme-card border border-theme hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                    <Icon size={30} />
                                </div>

                                <h3 className="text-xl font-bold text-theme-primary mb-6 group-hover:text-primary-400 transition-colors">
                                    {serviceData.title}
                                </h3>

                                <div className="space-y-6">
                                    {subItems.map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-white/10 pl-4 hover:border-primary-500 transition-colors">
                                            <h4 className="text-sm font-semibold text-theme-primary mb-1">{item.title}</h4>
                                            <p className="text-xs text-theme-secondary leading-relaxed theme-dependent-text">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </Section>
    );
};

export default Services;
