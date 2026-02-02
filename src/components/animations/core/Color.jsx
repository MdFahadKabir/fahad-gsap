import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ColorChange = ({
    children,
    duration = 0.5,
    delay = 0,
    ease = "power1.inOut",
    backgroundColor = null,
    color = null,
    borderColor = null,
    from = false,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const vars = { duration, delay, ease };
        if (backgroundColor) vars.backgroundColor = backgroundColor;
        if (color) vars.color = color;
        if (borderColor) vars.borderColor = borderColor;

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
