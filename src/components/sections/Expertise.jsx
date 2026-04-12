import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { ShoppingCart, Heart, GraduationCap, Coins, Factory, Truck, Building, Users, Sparkles } from 'lucide-react';
import devImage from '../../assets/image1.png';

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
        { icon: ShoppingCart, label: t.expertise.industries.commerce, gradient: 'from-blue-500 to-indigo-600' },
        { icon: Heart, label: t.expertise.industries.health, gradient: 'from-rose-500 to-pink-600' },
        { icon: GraduationCap, label: t.expertise.industries.education, gradient: 'from-indigo-500 to-violet-600' },
        { icon: Coins, label: t.expertise.industries.finance, gradient: 'from-emerald-500 to-teal-600' },
        { icon: Factory, label: t.expertise.industries.industry, gradient: 'from-slate-500 to-gray-600' },
        { icon: Truck, label: t.expertise.industries.logistics, gradient: 'from-orange-500 to-amber-600' },
        { icon: Building, label: t.expertise.industries.realEstate, gradient: 'from-amber-500 to-yellow-600' },
        { icon: Users, label: t.expertise.industries.hr, gradient: 'from-cyan-500 to-blue-600' },
    ];

    const technologies = [
        { title: t.expertise.technologies.frontend, items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind'], gradient: 'from-blue-500 to-cyan-600' },
        { title: t.expertise.technologies.backend, items: ['Node.js', 'Python', 'PHP', 'Java', '.NET Core'], gradient: 'from-green-500 to-emerald-600' },
        { title: t.expertise.technologies.mobile, items: ['React Native', 'Flutter', 'Swift', 'Kotlin'], gradient: 'from-purple-500 to-pink-600' },
        { title: t.expertise.technologies.database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'], gradient: 'from-orange-500 to-red-600' },
        { title: t.expertise.technologies.cloud, items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'], gradient: 'from-cyan-500 to-blue-600' },
        { title: t.expertise.technologies.ai, items: ['ML', 'Deep Learning', 'NLP', 'Data Analytics'], gradient: 'from-pink-500 to-purple-600' },
    ];

    return (
        <Section id="expertise" className="relative overflow-hidden py-24 transition-colors duration-500">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-20 w-[500px] h-[500px] bg-primary-500/5 hidden rounded-full blur-[100px]" />
                <div className="absolute bottom-1/3 left-20 w-[500px] h-[500px] bg-secondary-500/5 hidden rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                            {t.expertise.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                    >
                        {t.expertise.title}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Industries Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-display mb-2 flex items-center gap-4">
                                <div className="w-1.5 h-12 bg-gradient-to-b from-primary-500 to-indigo-700 rounded-full" />
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
                                    {/* Hover glow - subtle gray */}
                                    <div className="absolute -inset-0.5 bg-slate-200 dark:bg-slate-700 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-300" />

                                    {/* Pill - cleaner design */}
                                    <div className="relative flex items-center gap-3 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all cursor-default">
                                        <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
                                            <item.icon size={16} className="text-slate-500 dark:text-slate-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-200 text-sm font-semibold">{item.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Image Section below Industries */}
                        <motion.div
                            className="mt-12 relative group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/15 via-purple-500/15 to-indigo-500/15 dark:from-primary-500/10 dark:via-purple-500/10 dark:to-indigo-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Image container - transparent background */}
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img
                                    src={devImage}
                                    alt="Tobeesoft - Development Environment"
                                    className="w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </motion.div>

                            {/* Decorative floating elements */}
                            <motion.div
                                className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl opacity-80 flex items-center justify-center"
                                animate={{
                                    y: [0, -8, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="text-white text-lg font-bold font-mono">&lt;/&gt;</span>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-secondary-500 to-emerald-600 rounded-lg opacity-80"
                                animate={{
                                    y: [0, 8, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
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
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-display mb-2 flex items-center gap-4">
                                <div className="w-1.5 h-12 bg-gradient-to-b from-secondary-500 to-emerald-700 rounded-full" />
                                {t.expertise.technologies.title}
                            </h3>
                        </motion.div>

                        <div className="space-y-10">
                            {technologies.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.gradient}`} />
                                        <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                            {tech.title}
                                        </h4>
                                        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700 group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors" />
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {tech.items.map((item, j) => (
                                            <motion.span
                                                key={j}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className={`relative text-xs font-medium px-3.5 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-default`}
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
