import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const FadeIn = ({
    children,
    duration = 1,
    delay = 0,
    ease = "power2.out",
    startOpacity = 0,
    y = 20,
    x = 0,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.fromTo(comp.current,
            { opacity: startOpacity, y: y, x: x },
            { opacity: 1, y: 0, x: 0, duration, delay, ease }
        );
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};

export const FadeOut = ({
    children,
    duration = 1,
    delay = 0,
    ease = "power2.in",
    endOpacity = 0,
    y = -20,
    x = 0,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.to(comp.current,
            { opacity: endOpacity, y: y, x: x, duration, delay, ease }
        );
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};
