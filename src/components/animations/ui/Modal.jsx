import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Modal = ({
    isOpen,
    onClose,
    children,
    animation = "fade", // fade, scale, slide-up
    className = ""
}) => {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({ paused: true });

        tl.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });

        if (animation === "fade") {
            tl.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 }, "<");
        } else if (animation === "scale") {
            tl.fromTo(modalRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "<");
        } else if (animation === "slide-up") {
            tl.fromTo(modalRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, "<");
        }

        if (isOpen) {
            containerRef.current.style.display = "flex";
            tl.play();
        } else {
            tl.reverse().then(() => {
                if (containerRef.current) containerRef.current.style.display = "none";
            });
        }

    }, [isOpen, animation]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-50 flex items-center justify-center hidden"
        >
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/50 opacity-0"
                onClick={onClose}
            />
            <div
                ref={modalRef}
                className={`relative bg-[#242424] p-6 rounded-lg shadow-xl z-10 ${className}`}
            >
                {children}
            </div>
        </div>
    );
};
