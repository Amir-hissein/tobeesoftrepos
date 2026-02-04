import React from 'react';


const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    asChild = false,
    children,
    ...props
}, ref) => {
    const Comp = asChild ? String : 'button'; // Simplified asChild logic for now

    const variants = {
        // Primary - Vibrant gradient with glow in dark mode
        primary: `
            bg-gradient-to-r from-primary-600 to-primary-700 
            dark:from-primary-500 dark:to-primary-600
            text-white font-semibold
            hover:from-primary-700 hover:to-primary-800 
            dark:hover:from-primary-400 dark:hover:to-primary-500
            hover:scale-105 active:scale-95
            border border-primary-700 dark:border-primary-400
        `,

        // Secondary - Elegant with subtle glow in dark  
        secondary: `
            bg-white dark:bg-slate-800/80 
            backdrop-blur-sm
            border-2 border-slate-200 dark:border-slate-600
            text-slate-700 dark:text-slate-100 
            font-semibold
            hover:bg-slate-50 dark:hover:bg-slate-700/90 
            hover:border-slate-300 dark:hover:border-primary-500
            hover:scale-102 active:scale-98
        `,

        // Ghost - Subtle with vibrant hover
        ghost: `
            bg-transparent 
            text-slate-600 dark:text-slate-300 
            font-medium
            hover:text-primary-600 dark:hover:text-primary-400 
            hover:bg-slate-100/80 dark:hover:bg-slate-800/60
            transition-all duration-200
        `,

        // Outline - Bold borders with gradient on hover
        outline: `
            border-2 border-primary-600 dark:border-primary-400 
            text-primary-600 dark:text-primary-400 
            font-semibold
            bg-transparent
            hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700
            dark:hover:from-primary-500 dark:hover:to-primary-600
            hover:text-white hover:border-transparent
            transition-all duration-300
        `,

        // Danger - For destructive actions
        danger: `
            bg-gradient-to-r from-red-600 to-red-700 
            dark:from-red-500 dark:to-red-600
            text-white font-semibold
            hover:from-red-700 hover:to-red-800 
            dark:hover:from-red-400 dark:hover:to-red-500
            border border-red-700 dark:border-red-400
        `,

        // Success - For positive actions
        success: `
            bg-gradient-to-r from-emerald-600 to-emerald-700 
            dark:from-emerald-500 dark:to-emerald-600
            text-white font-semibold
            hover:from-emerald-700 hover:to-emerald-800 
            dark:hover:from-emerald-400 dark:hover:to-emerald-500
            border border-emerald-700 dark:border-emerald-400
        `
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <Comp
            className={[
                "inline-flex items-center justify-center rounded-xl transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
                variants[variant],
                sizes[size],
                className
            ].filter(Boolean).join(' ')}
            ref={ref}
            {...props}
        >
            {/* Shine effect overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {asChild ? children : (
                <>
                    <span className="relative z-10 flex items-center gap-2">{children}</span>
                </>
            )}
        </Comp>
    );
});

Button.displayName = "Button";

export { Button };
