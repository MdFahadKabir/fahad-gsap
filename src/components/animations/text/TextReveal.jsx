import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({
    children,
    mode = "word", // word, char, line (line is harder without SplitText, simulating word/char)
    duration = 0.5,
    stagger = 0.05,
    delay = 0,
    ease = "power2.out",
    animation = "fade-up", // fade-up, fade-in, slide-up
    className = ""
}) => {
    const comp = useRef(null);
    const text = typeof children === 'string' ? children : '';

    const words = text.split(' ');
    const chars = text.split('');

    useGSAP(() => {
        const elements = comp.current.children;

        let fromVars = { opacity: 0, duration, ease, stagger, delay };

        if (animation === "fade-up") fromVars.y = 20;
        if (animation === "slide-up") fromVars.y = "100%";

        gsap.from(elements, {
            ...fromVars,
            scrollTrigger: {
                trigger: comp.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, { scope: comp });

    return (
        <div ref={comp} className={`${className} flex flex-wrap`}>
            {mode === "word" && words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] overflow-hidden">
                    <span className="inline-block">{word}</span>
                </span>
            ))}
            {mode === "char" && chars.map((char, i) => (
                <span key={i} className="inline-block overflow-hidden">
                    <span className="inline-block">{char === ' ' ? '\u00A0' : char}</span>
                </span>
            ))}
        </div>
    );
};
