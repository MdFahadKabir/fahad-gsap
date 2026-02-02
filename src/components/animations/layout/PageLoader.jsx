import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const PageLoader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const progressRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.to(loaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: onComplete
                });
            }
        });

        tl.to(progressRef.current, {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut"
        })
            .to(textRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.5
            }, "-=0.5");

    }, { scope: loaderRef });

    return (
        <div ref={loaderRef} className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
            <div className="overflow-hidden mb-4">
                <h2 ref={textRef} className="text-4xl font-black text-white tracking-tighter">
                    LOADING
                </h2>
            </div>
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                <div ref={progressRef} className="h-full bg-blue-500 w-0" />
            </div>
        </div>
    );
};
