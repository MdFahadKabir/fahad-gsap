import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ClipReveal = ({
    children,
    duration = 1,
    delay = 0,
    ease = "power3.inOut",
    direction = "left", // left, right, top, bottom, center
    className = ""
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        let clipPath = "";
        // Initial clip-path states (hidden)
        if (direction === "left") clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
        if (direction === "right") clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
        if (direction === "top") clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
        if (direction === "bottom") clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
        if (direction === "center") clipPath = "circle(0% at 50% 50%)";

        // Final state (visible)
        const finalClipPath = direction === "center"
            ? "circle(150% at 50% 50%)"
            : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

        gsap.fromTo(comp.current,
            { clipPath: clipPath },
            { clipPath: finalClipPath, duration, delay, ease }
        );
    }, { scope: comp });

    return (
        <div ref={comp} className={className}>
            {children}
        </div>
    );
};
