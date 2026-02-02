import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const LiquidEffect = ({ children, className = "" }) => {
    const containerRef = useRef(null);
    const filterRef = useRef(null);

    useGSAP(() => {
        // Animate the turbulence frequency or scale to create liquid motion
        gsap.to(filterRef.current, {
            attr: { baseFrequency: "0.01 0.02" },
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: containerRef });

    const filterId = `liquid-filter-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <svg className="absolute w-0 h-0">
                <filter id={filterId}>
                    <feTurbulence ref={filterRef} type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="3" result="warp" />
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                </filter>
            </svg>
            <div style={{ filter: `url(#${filterId})` }}>
                {children}
            </div>
        </div>
    );
};
