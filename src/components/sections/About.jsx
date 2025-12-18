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
        { icon: BookOpen, title: t.about.history.title, content: t.about.history.content, gradient: 'from-cyan-500 to-blue-600', shadowColor: 'cyan' },
        { icon: Target, title: t.about.mission.title, content: t.about.mission.content, gradient: 'from-purple-500 to-pink-600', shadowColor: 'purple' },
        { icon: Eye, title: t.about.vision.title, content: t.about.vision.content, gradient: 'from-green-500 to-emerald-600', shadowColor: 'green' }
    ];

    const valueCards = [
        { icon: Star, title: t.about.values.excellence.title, content: t.about.values.excellence.content, gradient: 'from-yellow-400 to-orange-500' },
        { icon: Ear, title: t.about.values.listening.title, content: t.about.values.listening.content, gradient: 'from-blue-400 to-cyan-500' },
        { icon: Rocket, title: t.about.values.innovation.title, content: t.about.values.innovation.content, gradient: 'from-purple-400 to-pink-500' },
        { icon: Handshake, title: t.about.values.partnership.title, content: t.about.values.partnership.content, gradient: 'from-green-400 to-emerald-500' }
    ];

    return (
        <Section id="apropos" className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1420] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4"
                    >
                        <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {t.about.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                    >
                        {t.about.title}
                    </motion.h2>
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
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                            {/* Card content */}
                            <div className="relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                                {/* Icon with gradient background */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}>
                                    <item.icon size={28} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-base">
                                    {item.content}
                                </p>

                                {/* Decorative corner element */}
                                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${item.gradient} opacity-5 rounded-tl-full rounded-br-3xl`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Section */}
                <div className="relative">
                    {/* Divider with gradient */}
                    <div className="flex items-center gap-4 mb-16">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <motion.h3
                            className="text-3xl font-bold text-white font-display px-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {t.about.valuesTitle}
                        </motion.h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
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
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="group relative"
                            >
                                {/* Hover glow */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300`} />

                                {/* Card */}
                                <div className="relative p-6 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/10 text-center hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col">
                                    {/* Animated icon background */}
                                    <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                                        <item.icon size={24} className="text-white" />
                                    </div>

                                    <h4 className={`text-lg font-bold text-white mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text group-hover:text-transparent transition-all`}>
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-gray-400 leading-relaxed flex-1">
                                        {item.content}
                                    </p>

                                    {/* Decorative bottom line */}
                                    <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient} mx-auto opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-300`} />
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
