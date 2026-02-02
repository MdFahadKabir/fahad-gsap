import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RotateCcw } from 'lucide-react';

export const IntroTimeline = ({ children, className = "" }) => {
    const containerRef = useRef(null);
    const [key, setKey] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        const elements = containerRef.current.children;

        tl.fromTo(elements[0], { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
            .fromTo(elements[1], { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, "-=0.5")
            .fromTo(elements[2], { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.6");

    }, { scope: containerRef, dependencies: [key] });

    return (
        <div className={`relative ${className}`}>
            <div ref={containerRef} className="flex flex-col items-center gap-4">
                {children}
            </div>
            <button
                onClick={() => setKey(k => k + 1)}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
                <RotateCcw size={16} />
            </button>
        </div>
    );
};
