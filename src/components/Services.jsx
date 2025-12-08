import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="services" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Ce que nous faisons</span>
                    <h2 className="section-title">Nos Services</h2>
                </motion.div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Service 1 */}
                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="service-header">
                            <div className="service-icon"><i className="fas fa-laptop-code"></i></div>
                            <h3>Développement Logiciel sur Mesure</h3>
                        </div>
                        <div className="service-content">
                            <div className="service-item">
                                <h4>Applications Web</h4>
                                <p>Création d'applications web modernes, réactives et performantes.</p>
                            </div>
                            <div className="service-item">
                                <h4>Applications Mobiles</h4>
                                <p>Développement d'applications mobiles natives et cross-platform.</p>
                            </div>
                            <div className="service-item">
                                <h4>Applications Desktop</h4>
                                <p>Conception de logiciels desktop puissants et intuitifs.</p>
                            </div>
                            <div className="service-item">
                                <h4>Logiciels Métier</h4>
                                <p>Solutions spécialement conçues pour votre secteur (ERP, CRM).</p>
                            </div>
                        </div>
                        <div className="service-tech">
                            <span className="tech-badge">React</span>
                            <span className="tech-badge">Vue.js</span>
                            <span className="tech-badge">Node.js</span>
                            <span className="tech-badge">Python</span>
                        </div>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="service-header">
                            <div className="service-icon"><i className="fas fa-cloud"></i></div>
                            <h3>Numérisation des Infrastructures</h3>
                        </div>
                        <div className="service-content">
                            <div className="service-item">
                                <h4>Audit et Diagnostic</h4>
                                <p>Analyse approfondie de votre infrastructure.</p>
                            </div>
                            <div className="service-item">
                                <h4>Migration vers le Cloud</h4>
                                <p>Transition sécurisée vers des solutions cloud.</p>
                            </div>
                            <div className="service-item">
                                <h4>Automatisation</h4>
                                <p>Mise en place de workflows automatisés.</p>
                            </div>
                            <div className="service-item">
                                <h4>Modernisation Legacy</h4>
                                <p>Transformation de vos anciens systèmes.</p>
                            </div>
                        </div>
                        <div className="service-tech">
                            <span className="tech-badge">AWS</span>
                            <span className="tech-badge">Azure</span>
                            <span className="tech-badge">Docker</span>
                            <span className="tech-badge">Kubernetes</span>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="service-header">
                            <div className="service-icon"><i className="fas fa-link"></i></div>
                            <h3>Intégration de Systèmes</h3>
                        </div>
                        <div className="service-content">
                            <div className="service-item">
                                <h4>API et Microservices</h4>
                                <p>Développement d'APIs robustes.</p>
                            </div>
                            <div className="service-item">
                                <h4>Intégration ERP/CRM</h4>
                                <p>Connexion de vos outils de gestion.</p>
                            </div>
                            <div className="service-item">
                                <h4>Bases de Données</h4>
                                <p>Synchronisation et migration de données.</p>
                            </div>
                        </div>
                        <div className="service-tech">
                            <span className="tech-badge">REST API</span>
                            <span className="tech-badge">GraphQL</span>
                            <span className="tech-badge">PostgreSQL</span>
                        </div>
                    </motion.div>

                    {/* Service 4 */}
                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="service-header">
                            <div className="service-icon"><i className="fas fa-lightbulb"></i></div>
                            <h3>Conseil et Stratégie</h3>
                        </div>
                        <div className="service-content">
                            <div className="service-item">
                                <h4>Audit Technologique</h4>
                                <p>Évaluation complète de votre maturité digitale.</p>
                            </div>
                            <div className="service-item">
                                <h4>Feuille de Route</h4>
                                <p>Stratégie de transformation numérique sur mesure.</p>
                            </div>
                            <div className="service-item">
                                <h4>Architecture</h4>
                                <p>Conception de l'architecture technique optimale.</p>
                            </div>
                        </div>
                        <div className="service-tech">
                            <span className="tech-badge">Consulting</span>
                            <span className="tech-badge">Strategy</span>
                            <span className="tech-badge">Training</span>
                        </div>
                    </motion.div>

                    {/* Service 5 */}
                    <motion.div
                        className="service-card"
                        variants={cardVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="service-header">
                            <div className="service-icon"><i className="fas fa-tools"></i></div>
                            <h3>Maintenance et Support</h3>
                        </div>
                        <div className="service-content">
                            <div className="service-item">
                                <h4>Maintenance Corrective</h4>
                                <p>Correction rapide des bugs.</p>
                            </div>
                            <div className="service-item">
                                <h4>Maintenance Évolutive</h4>
                                <p>Ajout de nouvelles fonctionnalités.</p>
                            </div>
                            <div className="service-item">
                                <h4>Support 24/7</h4>
                                <p>Assistance technique réactive.</p>
                            </div>
                        </div>
                        <div className="service-tech">
                            <span className="tech-badge">24/7</span>
                            <span className="tech-badge">Monitoring</span>
                            <span className="tech-badge">Security</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
