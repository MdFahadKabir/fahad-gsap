import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ButtonHover = ({
    children,
    animation = "scale", // scale, lift, glow, ripple
    className = "",
    onClick
}) => {
    const comp = useRef(null);

    useGSAP(() => {
        const el = comp.current;

        if (animation === "scale") {
            el.addEventListener("mouseenter", () => gsap.to(el, { scale: 1.05, duration: 0.2 }));
            el.addEventListener("mouseleave", () => gsap.to(el, { scale: 1, duration: 0.2 }));
        }

        if (animation === "lift") {
            el.addEventListener("mouseenter", () => gsap.to(el, { y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", duration: 0.3 }));
            el.addEventListener("mouseleave", () => gsap.to(el, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 }));
        }

        if (animation === "glow") {
            el.addEventListener("mouseenter", () => gsap.to(el, { boxShadow: "0 0 20px rgba(100, 108, 255, 0.6)", duration: 0.3 }));
            el.addEventListener("mouseleave", () => gsap.to(el, { boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 }));
        }

    }, { scope: comp });

    return (
        <button ref={comp} className={className} onClick={onClick}>
            {children}
        </button>
    );
};
