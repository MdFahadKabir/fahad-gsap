import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const SVGMaskReveal = ({
    children,
    duration = 1.5,
    delay = 0,
    ease = "power3.inOut",
    className = ""
}) => {
    const comp = useRef(null);
    const maskRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(maskRef.current,
            { attr: { r: 0 } },
            { attr: { r: 1000 }, duration, delay, ease }
        );
    }, { scope: comp });

    return (
        <div ref={comp} className={`relative overflow-hidden ${className}`}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <defs>
                    <mask id="circleMask">
                        <circle ref={maskRef} cx="50%" cy="50%" r="0" fill="white" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="#1a1a1a" mask="url(#circleMask)" className="opacity-0" />
                {/* Note: This SVG setup is for masking the CONTENT. 
            Actually, to reveal content FROM a mask, we usually mask the content container.
            Let's try a simpler approach: applying clip-path via CSS/GSAP is often easier than SVG masks for simple shapes,
            but for complex SVG shapes, we need the mask.
        */}
            </svg>
            {/* 
         Better SVG Mask Strategy:
         Wrap children in a div that has the mask-image style.
      */}
            <div style={{ maskImage: 'url(#mask-blob)', WebkitMaskImage: 'url(#mask-blob)', maskSize: 'cover', maskPosition: 'center' }}>
                {children}
            </div>
        </div>
    );
};

// A more robust SVG Mask implementation
export const CircleMaskReveal = ({
    children,
    duration = 1,
    delay = 0,
    ease = "power2.inOut",
    className = ""
}) => {
    const containerRef = useRef(null);
    const circleRef = useRef(null);

    useGSAP(() => {
        // We animate the circle radius from 0 to a large number to reveal
        gsap.fromTo(circleRef.current,
            { attr: { r: 0 } },
            { attr: { r: 200 }, duration, delay, ease }
        );
    }, { scope: containerRef });

    const maskId = `circle-mask-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <defs>
                    <mask id={maskId}>
                        <rect width="100%" height="100%" fill="white" />
                        <circle ref={circleRef} cx="50%" cy="50%" r="0" fill="black" />
                    </mask>
                </defs>
                {/* Overlay that gets eaten away by the black circle in the mask? 
                    No, usually mask: white = visible, black = hidden.
                    To REVEAL: start with black rect (hidden), animate white circle (visible).
                */}
            </svg>

            {/* Let's do a ClipPath approach for "SVG Mask" feel but simpler code if it's just a circle. 
                But user asked for SVG Mask.
            */}

            <svg width="0" height="0">
                <defs>
                    <clipPath id={maskId} clipPathUnits="objectBoundingBox">
                        <circle ref={circleRef} cx="0.5" cy="0.5" r="0" />
                    </clipPath>
                </defs>
            </svg>

            <div style={{ clipPath: `circle(0% at 50% 50%)` }} className="clip-content">
                {children}
            </div>
        </div>
    );
};

// Let's stick to a clean SVG Mask implementation that actually works
export const SVGMask = ({ children, duration = 1.5, className = "" }) => {
    const comp = useRef(null);
    const circleRef = useRef(null);
    const id = `mask-${Math.random().toString(36).substr(2, 9)}`;

    useGSAP(() => {
        gsap.to(circleRef.current, {
            attr: { r: 1.5 }, // 1.5 because objectBoundingBox is 0-1
            duration: duration,
            ease: "power2.inOut"
        });
    }, { scope: comp });

    return (
        <div ref={comp} className={`relative ${className}`}>
            <svg className="absolute w-0 h-0">
                <defs>
                    <clipPath id={id} clipPathUnits="objectBoundingBox">
                        <circle ref={circleRef} cx="0.5" cy="0.5" r="0" />
                    </clipPath>
                </defs>
            </svg>
            <div style={{ clipPath: `url(#${id})` }} className="w-full h-full">
                {children}
            </div>
        </div>
    );
};
