import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const TiltCard = ({ children, className = "", intensity = 20 }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;
        const content = contentRef.current;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -intensity;
            const rotateY = ((x - centerX) / centerX) * intensity;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000,
                transformStyle: "preserve-3d"
            });

            // Parallax effect for content
            if (content) {
                gsap.to(content, {
                    x: (x - centerX) / 10,
                    y: (y - centerY) / 10,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            });

            if (content) {
                gsap.to(content, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <div ref={cardRef} className={`relative preserve-3d ${className}`} style={{ transformStyle: 'preserve-3d' }}>
            <div ref={contentRef} className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                {children}
            </div>
        </div>
    );
};
