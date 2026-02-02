import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const MouseParallax = ({ children, className = "", factor = 0.1 }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const elements = container.querySelectorAll('.parallax-layer');

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            elements.forEach((el) => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 1;
                gsap.to(el, {
                    x: x * 500 * factor * speed,
                    y: y * 500 * factor * speed,
                    duration: 1,
                    ease: "power2.out"
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {children}
        </div>
    );
};
