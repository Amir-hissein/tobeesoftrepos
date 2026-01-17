import { cn } from '../../lib/utils';

const Section = ({
    className,
    id,
    children,
    fullWidth = false
}) => {
    return (
        <section
            id={id}
            className={cn(
                "relative py-20 overflow-hidden",
                className
            )}
        >
            <div className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                fullWidth ? "w-full" : "container"
            )}>
                {children}
            </div>
        </section>
    );
};

export default Section;
