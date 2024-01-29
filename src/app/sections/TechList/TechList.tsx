'use client'

import { FC, useRef, useLayoutEffect, useEffect } from 'react'
import React from 'react'
import { gsap } from 'gsap'
import { MdCircle } from 'react-icons/md'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Bounded from '@/app/components/Bounded'
import Heading from '@/app/components/Heading'

gsap.registerPlugin(ScrollTrigger)

const techList = [
    {
        name: 'React',
        color: '#40E0D0'
    },
    {
        name: 'Next.JS',
        color: '#ED7014'
    },
    {
        name: 'Typescript',
        color: '#ffff'
    },
    {
        name: 'TailwindCSS',
        color: '#C5C95C'
    },
    {
        name: 'Web3',
        color: '#008080'
    },
    {
        name: 'HTML&CSS',
        color: '#ffff'
    },
]

interface TechListProps {

}

const TechList: FC<TechListProps> = ({ }) => {

    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
                    },
                    ease: "power1.inOut",
                },
            );
        }, component)

        return () => ctx.revert(); // cleanup!

    }, [])

    return (
        <section id='tech_list' className="wrapper overflow-hidden" ref={component}>
            <Bounded as="div">
                <Heading as='h2' size='md' className='mb-8'>
                    What I Use
                </Heading>
            </Bounded>

            {techList.map(({ name, color }, index) => (
                <div key={index}
                    className="tech-row mb-4 flex items-center justify-center gap-4 text-slate-700"
                    aria-label={name || undefined}>
                    {Array.from({ length: 15 }, (_, index) => (
                        <React.Fragment key={index}>
                            <span
                                className={"tech-item text-3xl font-extrabold uppercase tracking-tighter"}
                                style={{ color: index === 7 && color ? color : "inherit" }}
                            >
                                {name}
                            </span>
                            <span className="text-lg">
                                <MdCircle />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </section>
    )
}
export default TechList