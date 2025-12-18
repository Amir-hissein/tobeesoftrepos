import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { ShoppingCart, Heart, GraduationCap, Coins, Factory, Truck, Building, Users, Sparkles } from 'lucide-react';

const Expertise = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const industries = [
        { icon: ShoppingCart, label: t.expertise.industries.commerce, gradient: 'from-blue-400 to-cyan-500' },
        { icon: Heart, label: t.expertise.industries.health, gradient: 'from-red-400 to-pink-500' },
        { icon: GraduationCap, label: t.expertise.industries.education, gradient: 'from-purple-400 to-indigo-500' },
        { icon: Coins, label: t.expertise.industries.finance, gradient: 'from-green-400 to-emerald-500' },
        { icon: Factory, label: t.expertise.industries.industry, gradient: 'from-gray-400 to-slate-500' },
        { icon: Truck, label: t.expertise.industries.logistics, gradient: 'from-orange-400 to-red-500' },
        { icon: Building, label: t.expertise.industries.realEstate, gradient: 'from-yellow-400 to-orange-500' },
        { icon: Users, label: t.expertise.industries.hr, gradient: 'from-cyan-400 to-blue-500' },
    ];

    const technologies = [
        { title: t.expertise.technologies.frontend, items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind'], gradient: 'from-blue-400 to-cyan-500' },
        { title: t.expertise.technologies.backend, items: ['Node.js', 'Python', 'PHP', 'Java', '.NET Core'], gradient: 'from-green-400 to-emerald-500' },
        { title: t.expertise.technologies.mobile, items: ['React Native', 'Flutter', 'Swift', 'Kotlin'], gradient: 'from-purple-400 to-pink-500' },
        { title: t.expertise.technologies.database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'], gradient: 'from-orange-400 to-red-500' },
        { title: t.expertise.technologies.cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'], gradient: 'from-cyan-400 to-blue-500' },
        { title: t.expertise.technologies.ai, items: ['ML', 'Deep Learning', 'NLP', 'Data Analytics'], gradient: 'from-pink-400 to-purple-500' },
    ];

    return (
        <Section id="expertise" className="bg-gradient-to-b from-[#0f1420] to-[#0a0e1a] relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-gradient-to-r from-green-500/30 to-cyan-500/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
                    >
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {t.expertise.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white font-display"
                    >
                        {t.expertise.title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Industries Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h3 className="text-3xl font-bold text-white font-display mb-2 flex items-center gap-3">
                                <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                                {t.expertise.industries.title}
                            </h3>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {industries.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    className="group relative"
                                >
                                    {/* Glow on hover */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-full blur opacity-0 group-hover:opacity-60 transition duration-300`} />

                                    {/* Pill */}
                                    <div className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all cursor-default">
                                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}>
                                            <item.icon size={14} className="text-white" />
                                        </div>
                                        <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Technologies Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h3 className="text-3xl font-bold text-white font-display mb-2 flex items-center gap-3">
                                <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
                                {t.expertise.technologies.title}
                            </h3>
                        </motion.div>

                        <div className="space-y-8">
                            {technologies.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.gradient}`} />
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
                                            {tech.title}
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {tech.items.map((item, j) => (
                                            <motion.span
                                                key={j}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className={`relative text-xs px-3 py-1.5 rounded-lg bg-white/[0.03] text-gray-300 border border-white/10 hover:border-white/20 hover:bg-gradient-to-r hover:${tech.gradient} hover:text-white transition-all cursor-default`}
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Expertise;
