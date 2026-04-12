// Google Analytics 4 Configuration
// Documentation: https://developers.google.com/analytics/devguides/collection/ga4

// ID Google Analytics TOBEESOFT issu de l'environnement
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialise Google Analytics 4
 * À appeler une seule fois au chargement de l'application
 */
export const initGA = () => {
    // Vérifier si on est en production
    if (typeof window === 'undefined') return;

    // Charger le script Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialiser gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
        send_page_view: true
    });

    console.log('✅ Google Analytics initialisé');
};

/**
 * Envoie un événement de vue de page à Google Analytics
 * À appeler à chaque changement de route
 */
export const pageview = (url) => {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

/**
 * Envoie un événement personnalisé à Google Analytics
 * @param {string} action - L'action (ex: 'click', 'submit', 'download')
 * @param {object} params - Paramètres additionnels
 */
export const event = ({ action, category, label, value }) => {
    if (typeof window === 'undefined' || !window.gtag) return;

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

// Événements prédéfinis pour TOBEESOFT
export const trackContactFormSubmit = () => {
    event({
        action: 'form_submit',
        category: 'Contact',
        label: 'Contact Form'
    });
};

export const trackServiceClick = (serviceName) => {
    event({
        action: 'click',
        category: 'Services',
        label: serviceName
    });
};

export const trackBlogPostView = (postTitle) => {
    event({
        action: 'view',
        category: 'Blog',
        label: postTitle
    });
};

export const trackCTAClick = (ctaLocation) => {
    event({
        action: 'click',
        category: 'CTA',
        label: ctaLocation
    });
};
