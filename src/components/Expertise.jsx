import React from 'react';
import { motion } from 'framer-motion';

const Expertise = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="expertise" id="expertise">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Nos compétences</span>
                    <h2 className="section-title">Nos Domaines d'Expertise</h2>
                </motion.div>

                <div className="expertise-content">
                    <div className="expertise-section">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Secteurs d'Activité
                        </motion.h3>
                        <motion.div
                            className="expertise-tags"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-shopping-cart"></i> Commerce
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-heartbeat"></i> Santé
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-graduation-cap"></i> Éducation
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-coins"></i> Finance
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-industry"></i> Industrie
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-truck"></i> Logistique
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-building"></i> Immobilier
                            </motion.span>
                            <motion.span className="expertise-tag" variants={tagVariants} whileHover={{ scale: 1.05 }}>
                                <i className="fas fa-users"></i> RH
                            </motion.span>
                        </motion.div>
                    </div>

                    <div className="expertise-section">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Technologies et Compétences
                        </motion.h3>
                        <motion.div
                            className="tech-categories"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.div className="tech-category" variants={categoryVariants}>
                                <h4>Frontend & UI/UX</h4>
                                <div className="tech-list">
                                    <span>React</span><span>Vue.js</span><span>Angular</span>
                                    <span>Next.js</span><span>Tailwind</span>
                                </div>
                            </motion.div>

                            <motion.div className="tech-category" variants={categoryVariants}>
                                <h4>Backend & API</h4>
                                <div className="tech-list">
                                    <span>Node.js</span><span>Python</span><span>PHP</span>
                                    <span>Java</span><span>.NET Core</span>
                                </div>
                            </motion.div>

                            <motion.div className="tech-category" variants={categoryVariants}>
                                <h4>Mobile</h4>
                                <div className="tech-list">
                                    <span>React Native</span><span>Flutter</span>
                                    <span>Swift</span><span>Kotlin</span>
                                </div>
                            </motion.div>

                            <motion.div className="tech-category" variants={categoryVariants}>
                                <h4>Base de Données</h4>
                                <div className="tech-list">
                                    <span>PostgreSQL</span><span>MySQL</span>
                                    <span>MongoDB</span><span>Redis</span>
                                </div>
                            </motion.div>

                            <motion.div className="tech-category" variants={categoryVariants}>
                                <h4>Cloud & DevOps</h4>
                                <div className="tech-list">
                                    <span>AWS</span><span>Azure</span><span>Docker</span>
                                    <span>Kubernetes</span><span>CI/CD</span>
                                </div>
                            </motion.div>

                            <motion.div className="tech-category" variants={categoryVariants}>
                                <h4>IA & Data</h4>
                                <div className="tech-list">
                                    <span>ML</span><span>Deep Learning</span>
                                    <span>NLP</span><span>Data Analytics</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
