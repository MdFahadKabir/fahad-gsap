import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const ScrollPin = ({
    children,
    pinnedContent,
    start = "top top",
    end = "+=100%",
    className = ""
}) => {
    const containerRef = useRef(null);
    const pinRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: start,
            end: end,
            pin: pinRef.current,
            pinSpacing: true,
            markers: false
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`relative min-h-screen flex ${className}`}>
            <div ref={pinRef} className="h-screen sticky top-0 flex items-center justify-center w-1/2">
                {pinnedContent}
            </div>
            <div className="w-1/2 ml-auto">
                {children}
            </div>
        </div>
    );
};
