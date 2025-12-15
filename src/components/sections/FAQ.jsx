import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Section id="faq" className="bg-dark-900">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-500 font-semibold tracking-wider uppercase text-sm"
                >
                    {t.faq.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mt-2 font-display"
                >
                    {t.faq.title}
                </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {t.faq.questions.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index ? 'bg-dark-800 border-primary-500/50 shadow-lg' : 'bg-transparent border-white/5 hover:bg-white/5'}`}
                    >
                        <button
                            className="w-full text-left p-6 flex items-center justify-between gap-4"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className={`font-semibold text-lg transition-colors ${activeIndex === index ? 'text-primary-400' : 'text-white'}`}>
                                {item.question}
                            </span>
                            <div className={`p-1 rounded-full border transition-all ${activeIndex === index ? 'bg-primary-500/20 border-primary-500 text-primary-400' : 'border-white/20 text-gray-400'}`}>
                                {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                        <p className="pt-4">{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
