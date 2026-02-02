import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Rotate = ({
    children,
    duration = 1,
    delay = 0,
    ease = "power2.out",
    rotation = 360,
    rotationX = 0,
    rotationY = 0,
    from = true,
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const vars = { rotation, rotationX, rotationY, duration, delay, ease };
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
