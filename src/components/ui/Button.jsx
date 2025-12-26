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
        primary: "bg-primary-600 text-white shadow-md shadow-primary-500/20 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30",
        secondary: "bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:shadow-md hover:border-slate-300",
        ghost: "bg-transparent text-slate-600 hover:text-primary-600 hover:bg-slate-50",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
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
