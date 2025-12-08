import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "Combien coûte le développement d'une application ?",
            answer: "Le coût dépend de nombreux facteurs : complexité fonctionnelle, technologies utilisées, design, intégrations tierces, etc. Nous proposons toujours un devis personnalisé après avoir analysé vos besoins."
        },
        {
            question: "Combien de temps prend le développement d'un projet ?",
            answer: "La durée varie selon la complexité. Un projet simple peut prendre 1-2 mois, tandis qu'un projet complexe peut nécessiter 6-12 mois ou plus."
        },
        {
            question: "Proposez-vous des contrats de maintenance ?",
            answer: "Oui, nous proposons différentes formules de maintenance et support : corrective, évolutive, préventive. Les contrats sont adaptables selon vos besoins."
        },
        {
            question: "Puis-je voir des exemples de vos réalisations ?",
            answer: "Absolument ! Nous pouvons vous présenter des études de cas et des démos de projets similaires au vôtre."
        },
        {
            question: "Travaillez-vous en régie ou au forfait ?",
            answer: "Nous proposons les deux modèles selon vos préférences. Le forfait est idéal pour des projets avec un périmètre bien défini."
        },
        {
            question: "Offrez-vous des garanties sur vos développements ?",
            answer: "Oui, tous nos projets incluent une période de garantie pendant laquelle nous corrigeons gratuitement les bugs."
        },
        {
            question: "Puis-je récupérer le code source ?",
            answer: "Oui, vous êtes propriétaire du code source développé pour votre projet. Nous vous remettons l'intégralité du code."
        },
        {
            question: "Comment gérez-vous la confidentialité ?",
            answer: "Nous signons systématiquement des accords de confidentialité (NDA) avant tout échange d'informations sensibles."
        }
    ];

    return (
        <section className="faq" id="faq">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Vos questions</span>
                    <h2 className="section-title">Questions Fréquentes</h2>
                </motion.div>

                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>
                                <motion.span
                                    className="faq-icon"
                                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
