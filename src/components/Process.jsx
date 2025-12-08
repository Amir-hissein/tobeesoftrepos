import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const timelineItems = [
        {
            id: 1,
            title: "Découverte et Analyse",
            duration: "1-2 semaines",
            items: [
                "Rencontre initiale pour comprendre votre contexte",
                "Analyse approfondie des besoins fonctionnels",
                "Étude de faisabilité technique et financière",
                "Proposition détaillée avec périmètre et budget"
            ]
        },
        {
            id: 2,
            title: "Conception et Design",
            duration: "2-3 semaines",
            items: [
                "Architecture technique et choix des technologies",
                "Wireframes et maquettes UI/UX",
                "Spécifications techniques détaillées",
                "Validation client avant développement"
            ]
        },
        {
            id: 3,
            title: "Développement",
            duration: "Variable selon projet",
            items: [
                "Sprints agiles avec livraisons régulières",
                "Revues hebdomadaires ou bi-hebdomadaires",
                "Tests continus (unitaires, intégration)",
                "Code reviews systématiques"
            ]
        },
        {
            id: 4,
            title: "Tests et Validation",
            duration: "1-2 semaines",
            items: [
                "Tests fonctionnels complets",
                "Tests de performance et charge",
                "Audit de sécurité",
                "Recette utilisateur avec accompagnement"
            ]
        },
        {
            id: 5,
            title: "Déploiement",
            duration: "1 semaine",
            items: [
                "Préparation de l'environnement de production",
                "Migration des données si nécessaire",
                "Mise en production sécurisée",
                "Formation des utilisateurs"
            ]
        },
        {
            id: 6,
            title: "Support et Évolution",
            duration: "Continue",
            items: [
                "Période de garantie avec support inclus",
                "Monitoring et surveillance en temps réel",
                "Maintenance évolutive",
                "Mises à jour de sécurité régulières"
            ]
        }
    ];

    return (
        <section className="process" id="processus">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Comment nous travaillons</span>
                    <h2 className="section-title">Notre Processus de Travail</h2>
                </motion.div>

                <div className="timeline">
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="timeline-marker">{item.id}</div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <span className="timeline-duration">{item.duration}</span>
                                <ul>
                                    {item.items.map((subItem, i) => (
                                        <li key={i}>{subItem}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
