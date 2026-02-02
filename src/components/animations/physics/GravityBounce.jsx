import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const GravityBounce = ({ children, className = "" }) => {
    const elementRef = useRef(null);

    useGSAP(() => {
        const el = elementRef.current;

        // Initial drop
        gsap.fromTo(el,
            { y: -300, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out", delay: 0.5 }
        );

        const handleClick = () => {
            // Replay bounce
            gsap.fromTo(el,
                { y: -300, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out" }
            );
        };

        el.addEventListener('click', handleClick);
        return () => el.removeEventListener('click', handleClick);

    }, { scope: elementRef });

    return (
        <div ref={elementRef} className={`cursor-pointer ${className}`}>
            {children}
        </div>
    );
};
