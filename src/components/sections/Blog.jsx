import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import {
    Smartphone,
    Zap,
    Navigation,
    Shield,
    Search,
    FileText,
    Users,
    Clock,
    Sparkles,
    Target,
    CheckCircle2,
    WifiOff,
    Bell,
    Layers,
    RefreshCw,
    Battery,
    MessageSquare,
    User,
    Maximize,
    Key,
    Settings,
    DollarSign,
    Puzzle,
    BarChart,
    Share2,
    Headphones,
    MousePointer,
    Calendar,
    ArrowRight
} from 'lucide-react';

const Blog = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('web');

    // Fonction pour formater le texte avec TOBEESOFT et les prix en gras
    const formatText = (text) => {
        if (!text) return text;

        let formatted = text;

        // 1. D'abord, remplacer TOBEESOFT par version en gras
        formatted = formatted.replace(/TOBEESOFT/g, '<strong class="font-black text-slate-900 dark:text-white">TOBEESOFT</strong>');

        // 2. Gérer les patterns spéciaux
        formatted = formatted.replace(/entre\s+\$?([\d,\s]+)\s*\$?\s+et\s+\$?([\d,\s]+)\s*\$/g, (match, num1, num2) => {
            const cleanNum1 = num1.trim().replace(/\s/g, ',');
            const cleanNum2 = num2.trim().replace(/\s/g, ',');
            return `entre <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum1}</strong> et <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum2}</strong>`;
        });
        // ... (autres patterns de prix conservés si nécessaire, simplifiés pour la démo) ...

        return formatted;
    };

    const iconMap = {
        responsive: Smartphone, performance: Zap, navigation: Navigation, security: Shield,
        seo: Search, content: FileText, accessibility: Users, speed: Clock, design: Sparkles,
        cta: Target, ux: User, offline: WifiOff, push: Bell, compatibility: Layers,
        updates: RefreshCw, battery: Battery, feedback: MessageSquare, personalization: Settings,
        fit: Puzzle, scalability: Maximize, integration: Share2, ownership: Key,
        efficiency: MousePointer, reporting: BarChart, roi: DollarSign
    };

    const currentPost = t.blog.posts[activeCategory] || t.blog.posts.web;
    const categories = Object.entries(t.blog.categories);

    const getIcon = (key) => iconMap[key] || CheckCircle2;

    return (
        <Section id="blog" className="bg-white dark:bg-[#1a2332] relative overflow-hidden py-24 transition-colors duration-500">
            {/* Background - kept minimal */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-4">
                        {t.blog.label}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-display mb-8 tracking-tight text-center">
                        {t.blog.title}
                    </h2>

                    {/* Professional Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700">
                        {categories.map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === key
                                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white ring-1 ring-slate-200 dark:ring-slate-700'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Article Content Area */}
                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Article Header */}
                            <header className="mb-10 md:mb-12 border-b border-slate-100 dark:border-slate-800 pb-10">
                                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800/50">
                                        Blog
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        5 min de lecture
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        Mis à jour récemment
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display mb-6 leading-tight">
                                    {currentPost.title}
                                </h1>
                                <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                                    {currentPost.description}
                                </p>
                            </header>

                            {/* Featured / Intro Section */}
                            {currentPost.featured && (
                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 mb-12 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-700">
                                        <Sparkles size={120} />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                                            {currentPost.featured.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                            {currentPost.featured.content}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Main Content Body */}
                            <div className="space-y-12">
                                {/* Case 1: Standard Article (Pricing) */}
                                {currentPost.isArticle && currentPost.sections?.map((section, idx) => (
                                    <div key={idx} className="prose prose-lg dark:prose-invert max-w-none">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display flex items-center gap-3">
                                            {section.title}
                                        </h3>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-300">
                                            {Array.isArray(section.content) ? (
                                                section.content.map((p, i) => (
                                                    <p key={i} dangerouslySetInnerHTML={{ __html: formatText(p) }} />
                                                ))
                                            ) : (
                                                <p dangerouslySetInnerHTML={{ __html: formatText(section.content) }} />
                                            )}
                                        </div>

                                        {section.subsections?.map((sub, sIdx) => (
                                            <div key={sIdx} className="mt-8 pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                                    {sub.title}
                                                </h4>
                                                <p className="text-slate-600 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: formatText(sub.content) }} />
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                {/* Case 2: Listicle (Features/Characteristics) */}
                                {!currentPost.isArticle && currentPost.characteristics?.map((item, index) => {
                                    const Icon = getIcon(item.key);
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-10%" }}
                                            transition={{ delay: index * 0.05 }}
                                            className="group md:flex gap-6 items-start pb-12 border-b border-slate-100 dark:border-slate-800 last:border-0"
                                        >
                                            <div className="flex-none mb-4 md:mb-0">
                                                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-lg group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                                    {index + 1}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display flex items-center gap-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Article Footer / Author */}
                            <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-700">
                                <div className="flex items-center justify-between flex-wrap gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5">
                                            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center font-bold text-primary-600">
                                                TS
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white">L'équipe Tobeesoft</p>
                                            <p className="text-sm text-slate-500">Experts en transformation digitale</p>
                                        </div>
                                    </div>

                                    <motion.a
                                        href="/contact"
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 font-bold text-primary-600 dark:text-primary-400 group"
                                    >
                                        {t.blog.cta.text || "Démarrer un projet"}
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </motion.a>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
};

export default Blog;
