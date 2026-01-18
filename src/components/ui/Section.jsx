
const Section = ({
    className,
    id,
    children,
    fullWidth = false
}) => {
    return (
        <section
            id={id}
            className={[
                "relative py-20 overflow-hidden",
                className
            ].filter(Boolean).join(' ')}
        >
            <div className={[
                "mx-auto px-4 sm:px-6 lg:px-8",
                fullWidth ? "w-full" : "container"
            ].filter(Boolean).join(' ')}>
                {children}
            </div>
        </section>
    );
};

export default Section;
