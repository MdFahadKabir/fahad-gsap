import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Resize = ({
    children,
    duration = 0.5,
    delay = 0,
    ease = "power2.out",
    width = null,
    height = null,
    from = true,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const vars = { duration, delay, ease };
        if (width !== null) vars.width = width;
        if (height !== null) vars.height = height;

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
