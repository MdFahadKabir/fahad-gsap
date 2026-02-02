import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ImageReveal = ({ src, className = "" }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        tl.fromTo(".reveal-mask",
            { scaleY: 1 },
            { scaleY: 0, duration: 1.2, ease: "power4.inOut", transformOrigin: "top" }
        )
            .fromTo(".reveal-img",
                { scale: 1.2 },
                { scale: 1, duration: 1.2, ease: "power4.out" },
                "<"
            );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <div className="reveal-mask absolute inset-0 bg-white z-10" />
            <img src={src} alt="Reveal" className="reveal-img w-full h-full object-cover" />
        </div>
    );
};

export const ImageZoom = ({ src, className = "" }) => {
    return (
        <div className={`group overflow-hidden ${className}`}>
            <img
                src={src}
                alt="Zoom"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
        </div>
    );
};

export const ImageParallax = ({ src, speed = 0.5, className = "" }) => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(imgRef.current,
            { yPercent: -10 },
            {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <img ref={imgRef} src={src} alt="Parallax" className="w-full h-[120%] object-cover -mt-[10%]" />
        </div>
    );
};
