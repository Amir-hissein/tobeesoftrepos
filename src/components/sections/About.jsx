import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { BookOpen, Target, Eye, Star, Ear, Rocket, Handshake } from 'lucide-react';
import techImage from '../../assets/image5.png';

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
        <Section id="apropos" className="bg-white dark:bg-[#1a2332] relative overflow-hidden py-24 transition-colors duration-500">
            {/* Decorative background elements - very subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary-500/3 dark:hidden rounded-full blur-[140px]" />
                <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-secondary-500/3 dark:hidden rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                            {t.about.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
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

                {/* Image Section */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.p
                            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {t.about.subtitle || "Nous sommes une équipe passionnée de développeurs et de créatifs, dédiée à transformer vos idées en solutions digitales innovantes et performantes."}
                        </motion.p>
                        <motion.p
                            className="text-base text-slate-500 dark:text-slate-400 leading-relaxed"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {t.about.description || "Notre expertise couvre le développement web, mobile et logiciel, avec une approche centrée sur l'utilisateur et les dernières technologies du marché."}
                        </motion.p>
                    </div>

                    {/* Image */}
                    <motion.div
                        className="order-1 lg:order-2 relative group"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        {/* Glow effect behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-indigo-500/20 to-secondary-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Image container */}
                        <motion.div
                            className="relative overflow-hidden rounded-2xl shadow-2xl dark:shadow-none"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Decorative border */}
                            <div className="absolute inset-0 border-2 border-primary-200/50 dark:border-primary-500/30 rounded-2xl pointer-events-none z-10" />

                            <img
                                src={techImage}
                                alt="Tobeesoft - Digital Innovation"
                                className="w-full h-auto object-cover rounded-2xl"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        </motion.div>

                        {/* Decorative floating elements */}
                        <motion.div
                            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl opacity-80"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-500 to-emerald-600 rounded-xl opacity-80"
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.div>

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
                            <div className="relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg dark:shadow-none transition-all duration-300 h-full flex flex-col">
                                {/* Icon with gradient background */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 shadow-sm dark:shadow-none w-fit`}>
                                    <item.icon size={28} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base flex-1">
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
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
                        <motion.h3
                            className="text-3xl font-bold text-slate-900 dark:text-white font-display px-6 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            {t.about.valuesTitle}
                        </motion.h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
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
                                {/* Hover glow - subtle */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300`} />

                                {/* Card */}
                                <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center hover:shadow-xl dark:shadow-none hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 h-full flex flex-col items-center">
                                    {/* Animated icon background with multiple effects */}
                                    <motion.div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-lg dark:shadow-none relative overflow-hidden`}
                                        whileHover={{
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: 1.15
                                        }}
                                        transition={{
                                            rotate: { duration: 0.5 },
                                            scale: { duration: 0.2 }
                                        }}
                                        animate={{
                                            boxShadow: [
                                                "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                                "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                                "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                            ]
                                        }}
                                    >
                                        {/* Rotating background effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                        />

                                        {/* Icon with dynamic animations */}
                                        <motion.div
                                            whileHover={{
                                                scale: [1, 1.2, 1],
                                                rotate: [0, 360]
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <item.icon size={28} className="text-white relative z-10" />
                                        </motion.div>
                                    </motion.div>

                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                                        {item.content}
                                    </p>

                                    {/* Decorative bottom line with animation */}
                                    <motion.div
                                        className={`mt-4 h-1 rounded-full bg-gradient-to-r ${item.gradient}`}
                                        initial={{ width: "3rem", opacity: 0.5 }}
                                        whileHover={{ width: "100%", opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
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
