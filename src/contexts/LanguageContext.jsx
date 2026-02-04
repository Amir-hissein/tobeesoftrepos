import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'fr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'fr' ? 'en' : 'fr'));
    };

    // Memoize translations to prevent unnecessary re-renders
    const t = useMemo(() => translations[language], [language]);

    // Memoize context value to prevent unnecessary re-renders
    const value = useMemo(() => ({
        language,
        toggleLanguage,
        t
    }), [language, t]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
