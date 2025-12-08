import React, { useState, useRef } from 'react';
import Notification from './Notification';
import { motion } from 'framer-motion';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        if (data.website) {
            console.warn('Spam detected');
            setLoading(false);
            return;
        }

        const now = new Date();
        const formattedTime = now.toLocaleDateString('fr-FR', {
            day: '2-digit', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });

        if (window.emailjs) {
            window.emailjs.send('service_lid2yta', 'template_0iv0rnp', {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone || 'Non renseigné',
                company: data.company || 'Non renseignée',
                project_type: data.projectType,
                message: data.message,
                time: formattedTime
            })
                .then(() => {
                    setNotification({
                        message: ' Merci ! Votre message a été envoyé avec succès.',
                        type: 'success'
                    });
                    formRef.current.reset();
                })
                .catch((error) => {
                    setNotification({
                        message: `❌ Erreur: ${error.text || 'Erreur inconnue'}`,
                        type: 'error'
                    });
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setNotification({
                message: '❌ Erreur: Service d\'email non disponible.',
                type: 'error'
            });
            setLoading(false);
        }
    };

    return (
        <section className="contact" id="contact">
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Parlons de votre projet</span>
                    <h2 className="section-title">Contactez-nous</h2>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Informations de Contact</h3>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:tobeesoft@gmail.com">tobeesoft@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-phone"></i></div>
                            <div>
                                <h4>Téléphone</h4>
                                <a href="tel:+90">+90 535 504 87 12</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                            <div>
                                <h4>Adresse</h4>
                                <p>İstanbul, Turquie</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon"><i className="fas fa-clock"></i></div>
                            <div>
                                <h4>Horaires d'Ouverture</h4>
                                <p>Lundi - Vendredi : 9h00 - 18h00</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        id="contactForm"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Envoyez-nous un message</h3>
                        <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nom complet *</label>
                                <input type="text" id="name" name="name" required placeholder="Votre nom" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" name="email" required placeholder="votre@email.com" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">Téléphone</label>
                                <input type="tel" id="phone" name="phone" placeholder="+33 6..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Entreprise</label>
                                <input type="text" id="company" name="company" placeholder="Nom de votre société" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectType">Type de projet *</label>
                            <select id="projectType" name="projectType" required defaultValue="">
                                <option value="" disabled>Sélectionnez une option</option>
                                <option value="web">Développement Web</option>
                                <option value="mobile">Application Mobile</option>
                                <option value="software">Logiciel Sur Mesure</option>
                                <option value="cloud">Cloud & DevOps</option>
                                <option value="audit">Audit & Conseil</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" name="message" required placeholder="Décrivez votre projet..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
