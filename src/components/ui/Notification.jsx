import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
// Helper function to merge class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

const Notification = ({ message, type = 'info', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const variants = {
        success: {
            bg: "bg-white border-l-4 border-emerald-500",
            icon: CheckCircle,
            color: "text-emerald-600"
        },
        error: {
            bg: "bg-white border-l-4 border-rose-500",
            icon: AlertCircle,
            color: "text-rose-600"
        },
        info: {
            bg: "bg-white border-l-4 border-primary-500",
            icon: Info,
            color: "text-primary-600"
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
                    "fixed top-24 right-5 z-[100] p-4 rounded-lg shadow-xl flex items-start gap-4 text-slate-900 min-w-[320px] max-w-sm border border-slate-200",
                    currentVariant.bg
                )}
            >
                <div className={cn("p-1 rounded-full bg-slate-50", currentVariant.color)}>
                    <Icon size={20} />
                </div>
                <div className="flex-1 pt-0.5">
                    <p className="font-semibold text-sm leading-relaxed text-slate-900">{type === 'error' ? 'Error' : type === 'success' ? 'Success' : 'Info'}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors shrink-0 text-slate-400 hover:text-white"
                >
                    <X size={16} />
                </button>
            </motion.div>
        </AnimatePresence >
    );
};

export default Notification;
