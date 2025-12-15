import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { ShoppingCart, Heart, GraduationCap, Coins, Factory, Truck, Building, Users } from 'lucide-react';

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
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const industries = [
        { icon: ShoppingCart, label: t.expertise.industries.commerce },
        { icon: Heart, label: t.expertise.industries.health },
        { icon: GraduationCap, label: t.expertise.industries.education },
        { icon: Coins, label: t.expertise.industries.finance },
        { icon: Factory, label: t.expertise.industries.industry },
        { icon: Truck, label: t.expertise.industries.logistics },
        { icon: Building, label: t.expertise.industries.realEstate },
        { icon: Users, label: t.expertise.industries.hr },
    ];

    const technologies = [
        { title: t.expertise.technologies.frontend, items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind'] },
        { title: t.expertise.technologies.backend, items: ['Node.js', 'Python', 'PHP', 'Java', '.NET Core'] },
        { title: t.expertise.technologies.mobile, items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
        { title: t.expertise.technologies.database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
        { title: t.expertise.technologies.cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] },
        { title: t.expertise.technologies.ai, items: ['ML', 'Deep Learning', 'NLP', 'Data Analytics'] },
    ];

    return (
        <Section id="expertise" className="bg-dark-800">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-500 font-semibold tracking-wider uppercase text-sm"
                >
                    {t.expertise.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mt-2 font-display"
                >
                    {t.expertise.title}
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Industries */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">
                        {t.expertise.industries.title}
                    </h3>
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
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900 border border-white/5 hover:border-primary-500/50 hover:bg-white/5 transition-all cursor-default"
                            >
                                <item.icon size={16} className="text-primary-400" />
                                <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Technologies */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-secondary-500 pl-4">
                        {t.expertise.technologies.title}
                    </h3>
                    <div className="space-y-6">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider group-hover:text-white transition-colors">
                                    {tech.title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, j) => (
                                        <span key={j} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 group-hover:border-secondary-500/30 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Expertise;
