import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import Notification from '../ui/Notification';
import { Button } from '../ui/Button';
import { Mail, Phone, Send } from 'lucide-react';
import { trackContactFormSubmit } from '../../lib/analytics';
import officeImage from '../../assets/image2.png';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_lid2yta';
const EMAILJS_TEMPLATE_ID = 'template_0iv0rnp';
const EMAILJS_PUBLIC_KEY = '8wkbxHcPMNERdCeAY';

const Contact = () => {
    const { t } = useLanguage();
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    // Initialize EmailJS
    useEffect(() => {
        if (window.emailjs) {
            window.emailjs.init(EMAILJS_PUBLIC_KEY);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        // Honeypot check for spam
        if (data.website) {
            setLoading(false);
            return;
        }

        // Check if EmailJS is loaded
        if (!window.emailjs) {
            setNotification({
                message: t.contact.form.error || "Service email non disponible. Veuillez réessayer.",
                type: 'error'
            });
            setLoading(false);
            return;
        }

        // Format current time
        const now = new Date();
        const timeString = now.toLocaleString('fr-FR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Prepare template parameters matching the EmailJS template variables
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone || 'Non renseigné',
            company: data.company || 'Non renseigné',
            project_type: data.projectType,
            message: data.message,
            time: timeString
        };

        // Send email via EmailJS
        window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(() => {
                setLoading(false);
                setNotification({
                    message: t.contact.form.success || "Message envoyé avec succès !",
                    type: 'success'
                });
                formRef.current.reset();

                // Track successful contact form submission in Google Analytics
                trackContactFormSubmit();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setLoading(false);
                setNotification({
                    message: t.contact.form.error || "Erreur lors de l'envoi. Veuillez réessayer.",
                    type: 'error'
                });
            });
    };

    return (
        <Section id="contact" className="relative overflow-hidden py-24 transition-colors duration-500">
            {/* Background Glow - subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-primary-500/3 dark:hidden rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2" />
                <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-secondary-500/3 dark:hidden rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2" />
            </div>

            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <div className="relative z-10 text-center mb-12 md:mb-20 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                        {t.contact.label}
                    </span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-display mb-6 tracking-tight"
                >
                    {t.contact.title}
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 relative z-10 container mx-auto px-4">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 md:space-y-10"
                >
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-display">{t.contact.info.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            {t.contact.info.description}
                        </p>
                    </div>

                    {/* Contact Info - Simple display */}
                    <div className="space-y-5 mb-6">
                        {[
                            { icon: Mail, title: t.contact.info.email, value: "tobeesoft@gmail.com", href: "mailto:tobeesoft@gmail.com" },
                            { icon: Phone, title: t.contact.info.phone, value: "+90 535 504 87 12", href: "tel:+905355048712" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="flex-shrink-0 p-3 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5 uppercase tracking-wider">{item.title}</h4>
                                    {item.href ? (
                                        <a href={item.href} className="text-base font-medium text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-base font-medium text-slate-900 dark:text-white">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Office/Team Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 mb-8"
                    >
                        <div className="absolute inset-0 bg-primary-900/10 dark:bg-primary-900/20 mix-blend-overlay" />
                        <img
                            src={officeImage}
                            alt="Tobeesoft Office"
                            className="w-full h-40 sm:h-64 object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* CEO Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative mt-8 px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-primary-50/50 via-white to-secondary-50/50 dark:from-slate-800/50 dark:via-slate-800/30 dark:to-slate-800/50 rounded-lg border border-primary-100 dark:border-slate-700"
                    >
                        <div className="absolute -top-4 left-8">
                            <div className="bg-primary-600 dark:bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-2xl font-serif">
                                "
                            </div>
                        </div>
                        <blockquote className="relative">
                            <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed mb-4 font-medium">
                                Chez TOBEESOFT, l'innovation n'est pas une promesse, c'est une discipline qui transforme la vision en résultats.
                            </p>
                            <footer className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-300 dark:via-slate-600 to-transparent"></div>
                                <cite className="not-italic">
                                    <span className="block text-sm font-bold text-slate-900 dark:text-white">Amir Hissein</span>
                                    <span className="block text-xs text-primary-600 dark:text-primary-400 font-semibold">CEO & Founder</span>
                                </cite>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-300 dark:via-slate-600 to-transparent"></div>
                            </footer>
                        </blockquote>
                    </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/10 dark:from-primary-500/20 dark:via-secondary-500/20 dark:to-primary-500/20 rounded-lg blur opacity-20"></div>
                    <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 relative z-10 font-display">{t.contact.form.title}</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">{t.contact.form.name} *</label>
                                    <input type="text" id="name" name="name" required placeholder={t.contact.form.placeholders.name}
                                        className="w-full bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 md:py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">{t.contact.form.email} *</label>
                                    <input type="email" id="email" name="email" required placeholder={t.contact.form.placeholders.email}
                                        className="w-full bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 md:py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">{t.contact.form.phone}</label>
                                    <input type="tel" id="phone" name="phone" placeholder={t.contact.form.placeholders.phone}
                                        className="w-full bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 md:py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">{t.contact.form.company}</label>
                                    <input type="text" id="company" name="company" placeholder={t.contact.form.placeholders.company}
                                        className="w-full bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 md:py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="projectType" className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">{t.contact.form.projectType} *</label>
                                <div className="relative">
                                    <select id="projectType" name="projectType" required defaultValue=""
                                        className="w-full bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 md:py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 transition-all appearance-none"
                                    >
                                        <option value="" disabled>{t.contact.form.selectPlaceholder}</option>
                                        <option value="web">{t.contact.form.projectTypes.web}</option>
                                        <option value="mobile">{t.contact.form.projectTypes.mobile}</option>
                                        <option value="software">{t.contact.form.projectTypes.software}</option>
                                        <option value="cloud">{t.contact.form.projectTypes.cloud}</option>
                                        <option value="audit">{t.contact.form.projectTypes.audit}</option>
                                        <option value="other">{t.contact.form.projectTypes.other}</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">{t.contact.form.message} *</label>
                                <textarea id="message" name="message" required placeholder={t.contact.form.placeholders.message} rows="4"
                                    className="w-full bg-white dark:bg-[#1a2332] border border-slate-200 dark:border-slate-700 rounded-md px-4 py-3 md:py-3.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/30 transition-all resize-none"
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full py-4 text-base font-semibold tracking-wide"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {t.contact.form.sending}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        {t.contact.form.submit} <Send size={18} />
                                    </span>
                                )}
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
