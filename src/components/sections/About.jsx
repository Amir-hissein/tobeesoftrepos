import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { BookOpen, Target, Eye, Star, Ear, Rocket, Handshake } from 'lucide-react';

const About = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, type: "spring" }
        }
    };

    const mainCards = [
        { icon: BookOpen, title: t.about.history.title, content: t.about.history.content, gradient: 'from-primary-500 to-indigo-600' },
        { icon: Target, title: t.about.mission.title, content: t.about.mission.content, gradient: 'from-secondary-500 to-emerald-600' },
        { icon: Eye, title: t.about.vision.title, content: t.about.vision.content, gradient: 'from-accent-500 to-amber-600' }
    ];

    const valueCards = [
        { icon: Star, title: t.about.values.excellence.title, content: t.about.values.excellence.content, gradient: 'from-amber-500 to-orange-600' },
        { icon: Ear, title: t.about.values.listening.title, content: t.about.values.listening.content, gradient: 'from-indigo-500 to-blue-600' },
        { icon: Rocket, title: t.about.values.innovation.title, content: t.about.values.innovation.content, gradient: 'from-rose-500 to-pink-600' },
        { icon: Handshake, title: t.about.values.partnership.title, content: t.about.values.partnership.content, gradient: 'from-emerald-500 to-teal-600' }
    ];

    return (
        <Section id="apropos" className="bg-white relative overflow-hidden py-24">
            {/* Decorative background elements - very subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-[140px]" />
                <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary-500/3 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-primary-600">
                            {t.about.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 font-display mb-6 tracking-tight"
                    >
                        {t.about.title}
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"
                    />
                </div>

                {/* Main Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {mainCards.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            {/* Glow effect - subtle */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Card content */}
                            <div className="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                {/* Icon with gradient background */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 shadow-sm w-fit`}>
                                    <item.icon size={28} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-base flex-1">
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Section */}
                <div className="relative">
                    {/* Divider with gradient */}
                    <div className="flex items-center gap-4 mb-16">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                        <motion.h3
                            className="text-3xl font-bold text-slate-900 font-display px-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {t.about.valuesTitle}
                        </motion.h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                    </div>

                    {/* Value Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {valueCards.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Hover glow - subtle */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300`} />

                                {/* Card */}
                                <div className="relative p-6 rounded-2xl bg-white border border-slate-200 text-center hover:shadow-lg hover:border-primary-300 transition-all duration-300 h-full flex flex-col items-center">
                                    {/* Animated icon background */}
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shadow-sm`}>
                                        <item.icon size={24} className="text-white" />
                                    </div>

                                    <h4 className="text-lg font-bold text-slate-900 mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                                        {item.content}
                                    </p>

                                    {/* Decorative bottom line */}
                                    <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient} opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-300`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
