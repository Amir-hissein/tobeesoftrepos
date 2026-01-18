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
    MousePointer
} from 'lucide-react';

const Blog = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('web');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Fonction pour formater le texte avec TOBEESOFT et les prix en gras
    const formatText = (text) => {
        if (!text) return text;

        let formatted = text;

        // 1. D'abord, remplacer TOBEESOFT par version en gras
        formatted = formatted.replace(/TOBEESOFT/g, '<strong class="font-black text-slate-900 dark:text-white">TOBEESOFT</strong>');

        // 2. Gérer les patterns spéciaux d'abord (pour éviter les doubles remplacements)

        // Pattern "entre $X et $Y" ou "entre X$ et Y$"
        formatted = formatted.replace(/entre\s+\$?([\d,\s]+)\s*\$?\s+et\s+\$?([\d,\s]+)\s*\$/g, (match, num1, num2) => {
            const cleanNum1 = num1.trim().replace(/\s/g, ',');
            const cleanNum2 = num2.trim().replace(/\s/g, ',');
            return `entre <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum1}</strong> et <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum2}</strong>`;
        });

        // Pattern anglais "between $X and $Y"
        formatted = formatted.replace(/between\s+\$?([\d,\s]+)\s*\$?\s+and\s+\$?([\d,\s]+)\s*\$/g, (match, num1, num2) => {
            const cleanNum1 = num1.trim().replace(/\s/g, ',');
            const cleanNum2 = num2.trim().replace(/\s/g, ',');
            return `between <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum1}</strong> and <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum2}</strong>`;
        });

        // Pattern "à partir de $X" ou "from $X"
        formatted = formatted.replace(/(?:à partir de|from)\s+\$?([\d,\s]+)\s*\$/g, (match, num) => {
            const cleanNum = num.trim().replace(/\s/g, ',');
            const prefix = match.includes('partir') ? 'à partir de' : 'from';
            return `${prefix} <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum}</strong>`;
        });

        // Pattern "autour de $X"
        formatted = formatted.replace(/autour de\s+\$?([\d,\s]+)\s*\$/g, (match, num) => {
            const cleanNum = num.trim().replace(/\s/g, ',');
            return `autour de <strong class="font-bold text-slate-900 dark:text-white">$${cleanNum}</strong>`;
        });

        // 3. Patterns de prix généraux : $X, X$, $X/mois, X$/mois
        // Pattern : $nombre (avec virgules et espaces possibles) suivi éventuellement de /mois, /an, etc.
        formatted = formatted.replace(/\$([\d,\s]+)(?:\/(?:mois|month|an|year))?/g, (match, num) => {
            const cleanNum = num.trim().replace(/\s/g, ',');
            const suffix = match.includes('/') ? match.substring(match.indexOf('/')) : '';
            return `<strong class="font-bold text-slate-900 dark:text-white">$${cleanNum}${suffix}</strong>`;
        });

        // Pattern : nombre$ (prix après le nombre)
        formatted = formatted.replace(/([\d,\s]+)\s*\$(?![\d])/g, (match, num) => {
            const cleanNum = num.trim().replace(/\s/g, ',');
            return `<strong class="font-bold text-slate-900 dark:text-white">$${cleanNum}</strong>`;
        });

        // Pattern : nombre € (pour compatibilité euro au cas où)
        formatted = formatted.replace(/([\d,\s]+)\s*€/g, (match, num) => {
            const cleanNum = num.trim().replace(/\s/g, ',');
            return `<strong class="font-bold text-slate-900 dark:text-white">${cleanNum} €</strong>`;
        });

        return formatted;
    };

    const iconMap = {
        // Web
        responsive: Smartphone,     // Un Design Attrayant
        performance: Zap,           // Conformité aux Standards
        navigation: Navigation,     // Gestion de Contenu Simplifiée
        security: RefreshCw,        // Mises à Jour Rapides (Mapped to RefreshCw to match 'Mises à Jour')
        seo: Layers,                // Ergonomie Fluide (Mapped to Layers)
        content: Search,            // Visibilité Optimisée SEO (Mapped to Search)
        accessibility: Users,       // Message Clair
        speed: MessageSquare,       // Clavardage en Direct (Mapped to MessageSquare for chat)
        design: Sparkles,           // Site Mobile Friendly
        cta: Shield,                // HTTPS : Sécurité (Mapped to Shield)

        // Mobile
        ux: User,
        // performance: Zap (Reused),
        offline: WifiOff,
        push: Bell,
        compatibility: Layers,
        updates: RefreshCw,
        battery: Battery,
        feedback: MessageSquare,
        personalization: Sparkles,

        // Software
        fit: Puzzle,
        scalability: Maximize,
        integration: Layers,
        ownership: Key,
        efficiency: Settings,
        reporting: BarChart,
        roi: DollarSign,

        // Pricing
        type: Layers,               // Type de Site Web
        provider: Users,            // Le Prestataire Choisi
        time: Clock,                // Temps de Conception
        customization: Sparkles,    // Personnalisation
        specification: FileText,    // Cahier des Charges
        showcase: Smartphone,       // Site Vitrine
        blog: MessageSquare,        // Module Blog
        ecommerce: DollarSign,      // E-commerce
        agency: Headphones,         // Pourquoi une Agence
        recurring: RefreshCw        // Frais Récurrents
    };

    const currentPost = t.blog.posts[activeCategory] || t.blog.posts.web;
    const categories = Object.entries(t.blog.categories);

    // Use only primary colors for all cards (matching Services and Process style)
    const colors = {
        border: 'border-primary-200 dark:border-primary-800',
        bg: 'bg-primary-50 dark:bg-primary-900/20',
        text: 'text-primary-600 dark:text-primary-400',
        hover: 'hover:border-primary-300 dark:hover:border-primary-600',
        shadow: 'shadow-primary-100 dark:shadow-none'
    };

    return (
        <Section id="blog" className="bg-white dark:bg-[#1a2332] relative overflow-hidden py-24 transition-colors duration-500">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header with Tabs */}
                <div className="flex flex-col items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50 dark:bg-secondary-900/30 border border-secondary-200 dark:border-secondary-800 mb-8"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary-600 dark:text-secondary-400">
                            {t.blog.label}
                        </span>
                    </motion.div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(([key, label], index) => (
                            <motion.button
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveCategory(key)}
                                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border-2 ${activeCategory === key
                                    ? 'bg-primary-600 border-primary-600 text-white shadow-lg dark:shadow-none shadow-primary-500/30'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                                    }`}
                            >
                                {label}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Dynamic Title Section */}
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <motion.h2
                                className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                            >
                                {currentPost.title}
                            </motion.h2>

                            <motion.p
                                className="text-lg text-slate-600 dark:text-slate-300 mb-8"
                            >
                                {currentPost.description}
                            </motion.p>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6 }}
                                className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto rounded-full"
                            />
                        </div>

                        {/* Conditional Rendering: Article Format vs Cards */}
                        {currentPost.isArticle ? (
                            /* Article Format for Pricing */
                            <div className="max-w-4xl mx-auto">
                                {/* Intro Paragraph */}
                                {currentPost.intro && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-12 text-justify"
                                        dangerouslySetInnerHTML={{ __html: formatText(currentPost.intro) }}
                                    />
                                )}

                                {/* Article Sections */}
                                {currentPost.sections?.map((section, sectionIndex) => (
                                    <motion.div
                                        key={sectionIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: sectionIndex * 0.1 }}
                                        className="mb-12"
                                    >
                                        {/* Section Title */}
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display">
                                            {section.title}
                                        </h3>

                                        {/* Section Content Paragraphs */}
                                        {section.content && (
                                            <div className="space-y-4 mb-6">
                                                {Array.isArray(section.content) ? (
                                                    section.content.map((paragraph, pIndex) => (
                                                        <p
                                                            key={pIndex}
                                                            className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify"
                                                            dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
                                                        />
                                                    ))
                                                ) : (
                                                    <p
                                                        className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify"
                                                        dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {/* Subsections if any */}
                                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                                            <div key={subIndex} className="ml-4 md:ml-8 mb-6">
                                                <h4 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                                    {subsection.title}
                                                </h4>
                                                <p
                                                    className="text-base text-slate-600 dark:text-slate-400 leading-relaxed text-justify"
                                                    dangerouslySetInnerHTML={{ __html: formatText(subsection.content) }}
                                                />
                                            </div>
                                        ))}
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            /* Cards Format for other categories */
                            <>
                                {/* Featured Article Card */}
                                <div className="mb-16 max-w-4xl mx-auto">
                                    <div className={`relative bg-white dark:bg-slate-800 border-2 ${colors.border} rounded-2xl p-8 md:p-10 shadow-md dark:shadow-none ${colors.hover} transition-all duration-300 hover:shadow-xl dark:shadow-none ${colors.shadow}`}>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                                                <Sparkles className={colors.text} size={24} />
                                            </div>
                                            <div>
                                                <p className={`text-xs font-bold uppercase tracking-wider ${colors.text}`}>
                                                    {currentPost.featured.tag}
                                                </p>
                                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2 font-display">
                                                    {currentPost.featured.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                                            {currentPost.featured.content}
                                        </p>

                                        {/* Decorative corner element */}
                                        <div className={`absolute bottom-0 right-0 w-24 h-24 ${colors.bg} rounded-tl-full opacity-50 -z-10`} />
                                    </div>
                                </div>

                                {/* Characteristics Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                    {currentPost.characteristics.map((item, index) => {
                                        const isHovered = hoveredIndex === index;
                                        const Icon = iconMap[item.key] || CheckCircle2; // Fallback icon

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                                className="group relative h-full"
                                            >
                                                {/* Card */}
                                                <motion.div
                                                    className={`relative h-full bg-white dark:bg-slate-800 border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 ${isHovered ? `shadow-xl dark:shadow-none ${colors.shadow}` : 'shadow-md dark:shadow-none'}`}
                                                    whileHover={{ y: -4 }}
                                                >
                                                    {/* Header section */}
                                                    <div className="flex items-start justify-between mb-5">
                                                        {/* Number badge */}
                                                        <div
                                                            className={`flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.text} font-black text-lg border ${colors.border}`}
                                                        >
                                                            {String(index + 1).padStart(2, '0')}
                                                        </div>

                                                        {/* Icon */}
                                                        <div className={`p-2.5 rounded-lg ${colors.bg}`}>
                                                            <Icon size={22} className={colors.text} />
                                                        </div>
                                                    </div>

                                                    {/* Title */}
                                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display leading-tight">
                                                        {item.title}
                                                    </h4>

                                                    {/* Description */}
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                        {item.description}
                                                    </p>

                                                    {/* Decorative corner element */}
                                                    <div className={`absolute bottom-0 right-0 w-20 h-20 ${colors.bg} rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center max-w-2xl mx-auto"
                >
                    <div className={`inline-block ${colors.bg} rounded-2xl p-8 border-2 ${colors.border}`}>
                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 font-medium">
                            {t.blog.cta.text}
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg dark:shadow-none shadow-primary-500/30 hover:shadow-xl dark:shadow-none hover:shadow-primary-500/40 transition-all duration-300"
                        >
                            {t.blog.cta.button}
                            <Target size={20} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Blog;
