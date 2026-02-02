import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const HeroSection = ({ title, subtitle, image, video }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Image/Video Reveal
        tl.from(".hero-media", {
            scale: 1.2,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out"
        })
            // Text Stagger
            .from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1
            }, "-=1");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
            <div className="hero-media absolute inset-0 z-0">
                {video ? (
                    <video src={video} autoPlay loop muted className="w-full h-full object-cover opacity-60" />
                ) : (
                    <img src={image} alt="Hero" className="w-full h-full object-cover opacity-60" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="hero-text text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                    {title}
                </h1>
                <p className="hero-text text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};
