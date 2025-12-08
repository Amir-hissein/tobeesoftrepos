import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="about" id="apropos">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Qui sommes-nous</span>
                    <h2 className="section-title">À Propos de TOBEESOFT</h2>
                </motion.div>

                <motion.div
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="about-icon"><i className="fas fa-book-open"></i></div>
                        <h3>Notre Histoire</h3>
                        <p>Tobeesoft est née d'une passion commune pour l'innovation technologique et d'une volonté de
                            rendre la transformation digitale accessible à toutes les entreprises. Depuis notre création,
                            nous avons accompagné des dizaines d'organisations dans leur évolution numérique.</p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="about-icon"><i className="fas fa-bullseye"></i></div>
                        <h3>Notre Mission</h3>
                        <p>Nous croyons fermement que chaque entreprise mérite d'avoir accès à des solutions technologiques
                            de pointe. Notre mission est de démocratiser l'excellence logicielle en proposant des services
                            de développement qui allient qualité, innovation et accessibilité.</p>
                    </motion.div>

                    <motion.div className="about-card" variants={itemVariants}>
                        <div className="about-icon"><i className="fas fa-eye"></i></div>
                        <h3>Notre Vision</h3>
                        <p>Devenir le partenaire de référence des entreprises qui souhaitent accélérer leur transformation
                            digitale et construire un avenir technologique durable, performant et évolutif.</p>
                    </motion.div>
                </motion.div>

                <div className="values-section">
                    <motion.h3
                        className="values-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Nos Valeurs
                    </motion.h3>
                    <motion.div
                        className="values-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div className="value-card" variants={itemVariants}>
                            <div className="value-icon"><i className="fas fa-star"></i></div>
                            <h4>Excellence Technique</h4>
                            <p>Nous nous engageons à livrer des solutions de la plus haute qualité, en utilisant les
                                technologies les plus récentes.</p>
                        </motion.div>
                        <motion.div className="value-card" variants={itemVariants}>
                            <div className="value-icon"><i className="fas fa-ear-listen"></i></div>
                            <h4>Écoute et Transparence</h4>
                            <p>Votre réussite est notre priorité. Nous écoutons attentivement vos besoins et maintenons une
                                communication claire.</p>
                        </motion.div>
                        <motion.div className="value-card" variants={itemVariants}>
                            <div className="value-icon"><i className="fas fa-rocket"></i></div>
                            <h4>Innovation Continue</h4>
                            <p>Le monde technologique évolue rapidement. Nous restons constamment à la pointe de
                                l'innovation.</p>
                        </motion.div>
                        <motion.div className="value-card" variants={itemVariants}>
                            <div className="value-icon"><i className="fas fa-handshake"></i></div>
                            <h4>Partenariat Durable</h4>
                            <p>Nous ne sommes pas qu'un simple prestataire, nous sommes votre partenaire à long terme.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
