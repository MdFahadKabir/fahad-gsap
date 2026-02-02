import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const Parallax = ({
    children,
    speed = 1, // -1 to 1 usually, or higher for more effect
    id = "parallax-container",
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.to(comp.current, {
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed * 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0
            }
        });
    }, { scope: comp });

    // A simpler parallax implementation for single elements relative to viewport
    useGSAP(() => {
        gsap.fromTo(comp.current,
            { y: -50 * speed },
            {
                y: 50 * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: comp.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};
