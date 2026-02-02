import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Scale = ({
    children,
    duration = 0.5,
    delay = 0,
    ease = "back.out(1.7)",
    scale = 0,
    scaleX = null,
    scaleY = null,
    from = true,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const vars = { duration, delay, ease };
        if (scaleX !== null) vars.scaleX = scaleX;
        if (scaleY !== null) vars.scaleY = scaleY;
        if (scaleX === null && scaleY === null) vars.scale = scale;

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

export const ZoomIn = ({ children, duration = 0.5, delay = 0, ease = "back.out(1.7)", className = "" }) => (
    <Scale from={true} scale={0} duration={duration} delay={delay} ease={ease} className={className}>
        {children}
    </Scale>
);

export const ZoomOut = ({ children, duration = 0.5, delay = 0, ease = "power2.in", className = "" }) => (
    <Scale from={false} scale={0} duration={duration} delay={delay} ease={ease} className={className}>
        {children}
    </Scale>
);
