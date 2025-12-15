import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const Notification = ({ message, type = 'info', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const variants = {
        success: {
            bg: "bg-gradient-to-r from-emerald-500 to-teal-600",
            icon: CheckCircle
        },
        error: {
            bg: "bg-gradient-to-r from-red-500 to-rose-600",
            icon: AlertCircle
        },
        info: {
            bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
            icon: Info
        }
    };

    const currentVariant = variants[type] || variants.info;
    const Icon = currentVariant.icon;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.9 }}
                className={cn(
                    "fixed top-24 right-5 z-[100] p-4 rounded-xl shadow-2xl flex items-center gap-4 text-white min-w-[300px] max-w-sm backdrop-blur-sm",
                    currentVariant.bg
                )}
            >
                <Icon size={24} className="shrink-0 text-white/90" />
                <p className="flex-1 font-medium text-sm leading-relaxed">{message}</p>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors shrink-0"
                >
                    <X size={18} />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Notification;
