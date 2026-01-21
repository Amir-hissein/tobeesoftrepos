import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const gradients = [
        'from-primary-500 to-indigo-600',
        'from-secondary-500 to-emerald-600',
        'from-amber-500 to-orange-600',
        'from-rose-500 to-pink-600',
        'from-blue-500 to-cyan-600',
        'from-purple-500 to-violet-600'
    ];

    return (
        <Section id="faq" className="bg-slate-50 dark:bg-[#1a2332] relative overflow-hidden py-24 transition-colors duration-500">
            {/* Background elements - subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/3 dark:hidden rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-500/3 dark:hidden rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 mb-6"
                    >
                        <HelpCircle className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                            {t.faq.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                    >
                        {t.faq.title}
                    </motion.h2>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-3">
                    {t.faq.questions.map((item, index) => {
                        const gradient = gradients[index % gradients.length];
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative"
                            >
                                {/* Subtle glow effect when active */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 ${isActive ? 'opacity-10' : 'group-hover:opacity-5'} transition-opacity duration-300`} />

                                {/* FAQ Card */}
                                <div className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                                    ? 'bg-white dark:bg-slate-800 border-primary-300 dark:border-primary-600 shadow-md dark:shadow-none'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm dark:hover:shadow-none'
                                    }`}>
                                    {/* Question Button */}
                                    <button
                                        className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-6"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        {/* Question text */}
                                        <span className={`font-bold text-lg md:text-xl transition-colors font-display ${isActive
                                            ? 'text-slate-900 dark:text-white'
                                            : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white'
                                            }`}>
                                            {item.question}
                                        </span>

                                        {/* Toggle Icon - simpler */}
                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.25 }}
                                            className={`flex-shrink-0 p-2 rounded-lg transition-all ${isActive
                                                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
                                                }`}
                                        >
                                            {isActive ? <Minus size={20} /> : <Plus size={20} />}
                                        </motion.div>
                                    </button>

                                    {/* Answer */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 md:px-7 pb-7 pt-0">
                                                    <div className="">
                                                        <div className="h-px bg-slate-200 dark:bg-slate-700 mb-5" />
                                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
