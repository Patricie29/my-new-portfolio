import React from "react"
import clsx from "clsx"


type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Comp = 'section', className, children, ...props }, ref) => {
        return (
            <Comp ref={ref} className={clsx('px-4 py-6 md:px-4 md:py-6 lg:py-8', className)} {...props} >

                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>

            </Comp >
        )
    }
)

Bounded.displayName = 'Bounded'

export default Bounded