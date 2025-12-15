import React from 'react';
import { cn } from '../../lib/utils';

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
        primary: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5",
        secondary: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-primary-400 hover:-translate-y-0.5",
        ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-3 text-base font-semibold",
        lg: "px-8 py-4 text-lg font-bold"
    };

    return (
        <Comp
            className={cn(
                "inline-flex items-center justify-center rounded-xl transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            ref={ref}
            {...props}
        >
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
