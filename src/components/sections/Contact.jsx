import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../ui/Section';
import Notification from '../ui/Notification';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Github } from 'lucide-react';

const Contact = () => {
    const { t } = useLanguage();
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        if (data.website) {
            setLoading(false);
            return;
        }

        // Mock submission for demo
        setTimeout(() => {
            setLoading(false);
            setNotification({
                message: t.contact.form.success || "Message sent successfully!",
                type: 'success'
            });
            formRef.current.reset();
        }, 1500);

        // Real implementation logic remains compatible
        /* 
        if (window.emailjs) { ... }
        */
    };

    return (
        <Section id="contact" className="bg-dark-800">
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-primary-500 font-semibold tracking-wider uppercase text-sm"
                >
                    {t.contact.label}
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mt-2 font-display"
                >
                    {t.contact.title}
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">{t.contact.info.title}</h3>
                        <p className="text-gray-400 mb-8">
                            Let's discuss your project and see how we can help you achieve your goals.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {[
                            { icon: Mail, title: t.contact.info.email, value: "tobeesoft@gmail.com", href: "mailto:tobeesoft@gmail.com" },
                            { icon: Phone, title: t.contact.info.phone, value: "+90 535 504 87 12", href: "tel:+905355048712" },
                            { icon: MapPin, title: t.contact.info.address, value: "İstanbul, Turquie", href: null },
                            { icon: Clock, title: t.contact.info.hours, value: t.contact.info.hoursValue, href: null }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-dark-900/50 border border-white/5 hover:border-primary-500/30 transition-colors">
                                <div className="p-3 rounded-lg bg-white/5 text-primary-400">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-300 mb-1">{item.title}</h4>
                                    {item.href ? (
                                        <a href={item.href} className="text-white hover:text-primary-400 transition-colors font-medium">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        {[Linkedin, Twitter, Github].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-300">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-dark-900 p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-white mb-8 relative z-10">{t.contact.form.title}</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">{t.contact.form.name} *</label>
                                <input type="text" id="name" name="name" required placeholder={t.contact.form.placeholders.name}
                                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">{t.contact.form.email} *</label>
                                <input type="email" id="email" name="email" required placeholder={t.contact.form.placeholders.email}
                                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">{t.contact.form.phone}</label>
                                <input type="tel" id="phone" name="phone" placeholder={t.contact.form.placeholders.phone}
                                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-gray-400 ml-1">{t.contact.form.company}</label>
                                <input type="text" id="company" name="company" placeholder={t.contact.form.placeholders.company}
                                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="projectType" className="text-sm font-medium text-gray-400 ml-1">{t.contact.form.projectType} *</label>
                            <div className="relative">
                                <select id="projectType" name="projectType" required defaultValue=""
                                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none"
                                >
                                    <option value="" disabled>{t.contact.form.selectPlaceholder}</option>
                                    <option value="web">{t.contact.form.projectTypes.web}</option>
                                    <option value="mobile">{t.contact.form.projectTypes.mobile}</option>
                                    <option value="software">{t.contact.form.projectTypes.software}</option>
                                    <option value="cloud">{t.contact.form.projectTypes.cloud}</option>
                                    <option value="audit">{t.contact.form.projectTypes.audit}</option>
                                    <option value="other">{t.contact.form.projectTypes.other}</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">{t.contact.form.message} *</label>
                            <textarea id="message" name="message" required placeholder={t.contact.form.placeholders.message} rows="4"
                                className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                            ></textarea>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
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
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
