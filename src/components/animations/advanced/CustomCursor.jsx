import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useGSAP(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const handleMouseMove = (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15 });
        };

        const handleHoverStart = () => {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, { scale: 3, backgroundColor: "rgba(255, 255, 255, 0.1)", mixBlendMode: "difference", duration: 0.2 });
        };

        const handleHoverEnd = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.2 });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cursor-hover');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, { scope: cursorRef });

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference" />
            <div ref={followerRef} className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] transition-transform duration-200 ease-out" />
        </>
    );
};
