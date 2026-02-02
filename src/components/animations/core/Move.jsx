import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Move = ({
    children,
    duration = 1,
    delay = 0,
    ease = "power2.out",
    x = 0,
    y = 0,
    xPercent = 0,
    yPercent = 0,
    from = true, // true for 'from' tween, false for 'to' tween
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const vars = { x, y, xPercent, yPercent, duration, delay, ease };
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

export const SlideIn = ({
    children,
    direction = "left", // left, right, top, bottom
    distance = 100,
    duration = 1,
    delay = 0,
    ease = "power2.out",
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        let x = 0, y = 0;
        if (direction === "left") x = -distance;
        if (direction === "right") x = distance;
        if (direction === "top") y = -distance;
        if (direction === "bottom") y = distance;

        gsap.from(comp.current, { x, y, opacity: 0, duration, delay, ease });
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};
