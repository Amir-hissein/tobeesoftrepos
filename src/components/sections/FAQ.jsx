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
        'from-cyan-400 to-blue-500',
        'from-purple-400 to-pink-500',
        'from-green-400 to-emerald-500',
        'from-yellow-400 to-orange-500',
        'from-red-400 to-pink-500',
        'from-blue-400 to-indigo-500'
    ];

    return (
        <Section id="faq" className="bg-gradient-to-b from-[#0a0e1a] to-[#0f1420] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm mb-4"
                    >
                        <HelpCircle className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            {t.faq.label}
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white font-display"
                    >
                        {t.faq.title}
                    </motion.h2>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
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
                                {/* Glow effect when active */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-lg opacity-0 ${isActive ? 'opacity-50' : 'group-hover:opacity-30'} transition-opacity duration-300`} />

                                {/* FAQ Card */}
                                <div className={`relative rounded-3xl border transition-all duration-300 overflow-hidden ${isActive
                                        ? 'bg-white/[0.05] border-white/20 shadow-2xl'
                                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.03] hover:border-white/15'
                                    }`}>
                                    {/* Question Button */}
                                    <button
                                        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div className="flex items-start gap-4 flex-1">
                                            {/* Number badge */}
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg ${isActive ? 'scale-110' : ''} transition-transform`}>
                                                {index + 1}
                                            </div>

                                            {/* Question text */}
                                            <span className={`font-semibold text-lg md:text-xl transition-all ${isActive
                                                    ? `bg-gradient-to-r ${gradient} bg-clip-text text-transparent`
                                                    : 'text-white group-hover:text-gray-200'
                                                }`}>
                                                {item.question}
                                            </span>
                                        </div>

                                        {/* Toggle Icon */}
                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex-shrink-0 p-2 rounded-xl border transition-all ${isActive
                                                    ? `bg-gradient-to-r ${gradient} border-transparent text-white`
                                                    : 'border-white/20 text-gray-400 group-hover:border-white/30'
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
                                                <div className="px-6 md:px-8 pb-6 md:pb-8">
                                                    <div className={`h-px bg-gradient-to-r ${gradient} mb-6 opacity-50`} />
                                                    <p className="text-gray-400 leading-relaxed text-base md:text-lg pl-14">
                                                        {item.answer}
                                                    </p>
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
