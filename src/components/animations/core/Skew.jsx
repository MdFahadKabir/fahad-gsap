import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Skew = ({
    children,
    duration = 0.5,
    delay = 0,
    ease = "power2.out",
    skewX = 0,
    skewY = 0,
    from = true,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const vars = { skewX, skewY, duration, delay, ease };
        if (from) {
            gsap.from(comp.current, vars);
        } else {
            gsap.to(comp.current, vars);
        }
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};
