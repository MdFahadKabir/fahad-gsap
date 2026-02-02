import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const ScrollProgress = ({
    color = "#3b82f6",
    height = "4px",
    className = ""
}) => {
    const barRef = useRef(null);

    useGSAP(() => {
        gsap.to(barRef.current, {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0
            }
        });
    }, { scope: barRef });

    return (
        <div className={`fixed top-0 left-0 w-full z-50 ${className}`} style={{ height }}>
            <div
                ref={barRef}
                className="w-full h-full scale-x-0"
                style={{ backgroundColor: color }}
            />
        </div>
    );
};
