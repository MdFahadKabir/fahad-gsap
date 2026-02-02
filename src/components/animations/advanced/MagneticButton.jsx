import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const MagneticButton = ({ children, className = "", strength = 0.5 }) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const button = buttonRef.current;
        const text = textRef.current;

        const handleMouseMove = (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: "power2.out"
            });

            if (text) {
                gsap.to(text, {
                    x: x * strength * 0.5,
                    y: y * strength * 0.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });

            if (text) {
                gsap.to(text, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: buttonRef });

    return (
        <button ref={buttonRef} className={`relative inline-block ${className}`}>
            <span ref={textRef} className="relative z-10 block pointer-events-none">
                {children}
            </span>
        </button>
    );
};
