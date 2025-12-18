import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { Code2, Cloud, Link as LinkIcon, Lightbulb, PenTool, ArrowRight } from 'lucide-react';

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
        service1: 'from-cyan-500 to-blue-600',
        service2: 'from-purple-500 to-pink-600',
        service3: 'from-green-500 to-emerald-600',
        service4: 'from-yellow-500 to-orange-600',
        service5: 'from-red-500 to-pink-600'
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, type: "spring", bounce: 0.3 }
        }
    };

    const serviceKeys = ['service1', 'service2', 'service3', 'service4', 'service5'];

    return (
        <Section id="services" className="bg-gradient-to-b from-[#0f1420] to-[#0a0e1a] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-4"
                    >
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {t.services.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white font-display mb-4"
                    >
                        {t.services.title}
                    </motion.h2>
                </div>

                {/* Service Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
                                whileHover={{ y: -12, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500`} />

                                {/* Card */}
                                <div className="relative h-full p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                    {/* Decorative top corner gradient */}
                                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className="relative z-10 mb-6">
                                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                            <Icon size={32} className="text-white" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`relative z-10 text-2xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:${gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                                        {serviceData.title}
                                    </h3>

                                    {/* Sub-items */}
                                    <div className="relative z-10 space-y-4">
                                        {subItems.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="group/item"
                                            >
                                                <div className="relative pl-4 border-l-2 border-white/10 group-hover/item:border-white/30 transition-colors">
                                                    {/* Animated indicator */}
                                                    <div className={`absolute left-0 top-2 w-2 h-2 -translate-x-[5px] rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover/item:opacity-100 transition-opacity`} />

                                                    <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                                                        {item.title}
                                                        <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                                                    </h4>
                                                    <p className="text-xs text-gray-400 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Decorative bottom element */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
