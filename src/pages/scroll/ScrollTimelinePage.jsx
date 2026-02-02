import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import img5 from '../../assets/img/gallery-5.webp';

gsap.registerPlugin(ScrollTrigger);

const ScrollTimelinePage = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const progressRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%", // 300% scroll distance
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

        // Animation Sequence
        tl.to(imageRef.current, {
            scale: 1,
            borderRadius: "0%",
            width: "100%",
            height: "100%",
            duration: 2,
            ease: "power2.inOut"
        })
            .to(imageRef.current, {
                filter: "brightness(0.4)",
                duration: 1
            }, "<") // Start at same time
            .fromTo(textRef.current,
                { opacity: 0, y: 100, scale: 0.8 },
                { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.7)" }
            )
            .to(progressRef.current, {
                width: "100%",
                duration: 3,
                ease: "none"
            }, 0); // Start from beginning

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-white/10 z-50">
                <div ref={progressRef} className="h-full bg-blue-500 w-0" />
            </div>

            {/* Initial State: Small Circle Image */}
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    ref={imageRef}
                    className="w-64 h-64 rounded-full overflow-hidden z-10 transform scale-50 origin-center"
                    style={{ width: '20vw', height: '20vw' }} // Responsive initial size
                >
                    <img src={img5} alt="Timeline" className="w-full h-full object-cover" />
                </div>

                {/* Text that appears */}
                <div ref={textRef} className="absolute z-20 text-center opacity-0">
                    <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 mix-blend-difference">
                        TIMELINE
                    </h1>
                    <p className="text-xl text-white/80 font-light tracking-widest uppercase">
                        Scroll Driven Choreography
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 text-white/50 animate-pulse">
                Scroll to Animate
            </div>
        </div>
    );
};

export default ScrollTimelinePage;
