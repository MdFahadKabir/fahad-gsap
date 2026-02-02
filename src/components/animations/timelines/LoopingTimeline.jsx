import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const LoopingTimeline = ({ children, className = "" }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
        const el = containerRef.current.children[0];

        tl.to(el, { y: -20, duration: 2 })
            .to(el, { rotation: 5, duration: 2 }, "<")
            .to(el, { scale: 1.05, duration: 2 }, "<");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};
