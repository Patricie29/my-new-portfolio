'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import Image from "next/image";
// import myAvatar from '@/public/Avatar/11.jpg'

interface AvatarProps {
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
    const component = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".avatar",
                {
                    opacity: 0,
                    scale: 1.4,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.3,
                    ease: "power3.inOut",
                },
            );

            window.onmousemove = (e) => {
                if (!component.current) return; // no component, no animation!
                const componentRect = (component.current as HTMLElement).getBoundingClientRect();
                const componentCenterX = componentRect.left + componentRect.width / 2;

                let componentPercent = {
                    x: (e.clientX - componentCenterX) / componentRect.width / 2,
                };

                let distFromCenterX = 1 - Math.abs(componentPercent.x);

                gsap
                    .timeline({
                        defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
                    })
                    .to(
                        ".avatar",
                        {
                            rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
                            duration: 0.5,
                        }, 0,
                    )
                    .to(
                        ".highlight",
                        {
                            opacity: distFromCenterX - 0.7,
                            x: -10 + 20 * componentPercent.x,
                            duration: 0.5,
                        }, 0,
                    );
            };
        },);
        return () => ctx.revert(); // cleanup!
    }, []);


    return (
        <div ref={component} className={clsx("relative h-full w-full", className)}>
            <div className="avatar aspect-square overflow-hidden opacity-0 rounded-3xl">
                <Image
                    src={'/Avatar/11.jpg'}
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    className="avatar-image h-full w-full object-fill rounded-3xl border-2 border-slate-700"
                />
                <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
            </div>
        </div>
    );
};

export default Avatar;
