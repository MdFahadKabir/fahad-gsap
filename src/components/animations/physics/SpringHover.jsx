import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const SpringHover = ({ children, className = "" }) => {
    const elementRef = useRef(null);

    useGSAP(() => {
        const el = elementRef.current;

        const handleMouseEnter = () => {
            gsap.to(el, {
                scale: 1.1,
                duration: 1.5,
                ease: "elastic.out(1, 0.3)"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(el, {
                scale: 1,
                duration: 1,
                ease: "elastic.out(1, 0.3)"
            });
        };

        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: elementRef });

    return (
        <div ref={elementRef} className={`inline-block cursor-pointer ${className}`}>
            {children}
        </div>
    );
};
