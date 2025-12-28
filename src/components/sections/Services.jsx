import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { Code2, Cloud, Link as LinkIcon, Lightbulb, PenTool } from 'lucide-react';

const Services = () => {
    const { t } = useLanguage();

    const icons = {
        service1: Code2,
        service2: Cloud,
        service3: LinkIcon,
        service4: Lightbulb,
        service5: PenTool
    };

    const gradients = {
        service1: 'from-primary-500 to-indigo-600',
        service2: 'from-purple-500 to-violet-600',
        service3: 'from-secondary-500 to-emerald-600',
        service4: 'from-accent-500 to-amber-600',
        service5: 'from-rose-500 to-pink-600'
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, type: "spring", stiffness: 100 }
        }
    };

    const serviceKeys = ['service1', 'service2', 'service3', 'service4', 'service5'];

    return (
        <Section id="services" className="bg-white relative overflow-hidden py-24">
            {/* Animated background elements - light theme */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                            {t.services.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display mb-6 tracking-tight"
                    >
                        {t.services.title}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
                    />
                </div>

                {/* Service Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {serviceKeys.map((key, index) => {
                        const Icon = icons[key] || Code2;
                        const serviceData = t.services[key];
                        const gradient = gradients[key];

                        const subItems = Object.entries(serviceData)
                            .filter(([k]) => k !== 'title')
                            .map(([_, val]) => val);

                        return (
                            <motion.div
                                key={key}
                                variants={itemVariants}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative h-full p-8 rounded-3xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:translate-y-[-5px]">

                                    {/* Abstract shapes/glows - light theme */}
                                    <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className="relative z-10 mb-8">
                                        <div className="inline-flex p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-md group-hover:border-primary-300 transition-colors">
                                            <Icon size={32} className="text-primary-600" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-6 font-display tracking-tight">
                                        {serviceData.title}
                                    </h3>

                                    {/* Sub-items */}
                                    <div className="relative z-10 space-y-5">
                                        {subItems.map((item, idx) => (
                                            <div key={idx} className="group/item">
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${gradient} opacity-60 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all`} />
                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-700 mb-1 group-hover/item:text-slate-900 transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-xs text-slate-600 leading-relaxed group-hover/item:text-slate-700 transition-colors">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom gradient line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </Section>
    );
};

export default Services;
