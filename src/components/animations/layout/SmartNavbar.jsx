import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SmartNavbar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        const showAnim = gsap.from(navRef.current, {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
    }, { scope: navRef });

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center transition-all duration-300">
            <div className="font-bold text-xl tracking-tighter">BRAND</div>
            <div className="flex gap-6 text-sm font-medium text-gray-300">
                <a href="#" className="hover:text-white transition-colors">Work</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
        </nav>
    );
};
