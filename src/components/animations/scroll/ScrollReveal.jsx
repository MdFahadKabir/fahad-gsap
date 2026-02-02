import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const ScrollReveal = ({
    children,
    animation = "fade-up", // fade-up, fade-in, slide-left, slide-right, scale-up
    duration = 1,
    stagger = 0,
    ease = "power2.out",
    start = "top 80%", // trigger start
    end = "bottom 20%",
    scrub = false,
    markers = false,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const elements = comp.current.children.length > 0
            ? gsap.utils.toArray(comp.current.children)
            : comp.current;

        let fromVars = { opacity: 0, duration, ease, stagger };

        if (animation === "fade-up") fromVars.y = 50;
        if (animation === "slide-left") fromVars.x = -50;
        if (animation === "slide-right") fromVars.x = 50;
        if (animation === "scale-up") fromVars.scale = 0.8;

        gsap.from(elements, {
            ...fromVars,
            scrollTrigger: {
                trigger: comp.current,
                start,
                end,
                scrub,
                markers,
                toggleActions: "play none none reverse"
            }
        });
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};
