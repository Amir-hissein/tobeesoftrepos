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

    return (
        <Section id="apropos" className="bg-dark-800">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-500 font-semibold tracking-wider uppercase text-sm"
                >
                    {t.about.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mt-2 font-display"
                >
                    {t.about.title}
                </motion.h2>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {[
                    { icon: BookOpen, title: t.about.history.title, content: t.about.history.content },
                    { icon: Target, title: t.about.mission.title, content: t.about.mission.content },
                    { icon: Eye, title: t.about.vision.title, content: t.about.vision.content }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="p-8 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-primary-500/30 hover:bg-dark-900 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
                    </motion.div>
                ))}
            </motion.div>

            <div className="border-t border-white/5 pt-20">
                <motion.h3
                    className="text-2xl font-bold text-white text-center mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {t.about.valuesTitle}
                </motion.h3>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {[
                        { icon: Star, title: t.about.values.excellence.title, content: t.about.values.excellence.content },
                        { icon: Ear, title: t.about.values.listening.title, content: t.about.values.listening.content },
                        { icon: Rocket, title: t.about.values.innovation.title, content: t.about.values.innovation.content },
                        { icon: Handshake, title: t.about.values.partnership.title, content: t.about.values.partnership.content }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="p-6 rounded-xl bg-gradient-to-b from-dark-900 to-transparent border border-white/5 text-center hover:border-primary-500/30 transition-all duration-300"
                        >
                            <div className="w-10 h-10 mx-auto rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-400 mb-4">
                                <item.icon size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400">{item.content}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
