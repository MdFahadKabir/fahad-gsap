import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import img1 from '../../../assets/img/gallery-1.webp';
import img2 from '../../../assets/img/gallery-2.webp';

export const MasterTimeline = ({ className = "" }) => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useGSAP(() => {
        const master = gsap.timeline();
        const img1Ref = containerRef.current.querySelector('.img-1');
        const img2Ref = containerRef.current.querySelector('.img-2');
        const textRef = containerRef.current.querySelector('.text-content');

        // Nested Timeline 1: Image 1 Entrance
        const tl1 = gsap.timeline();
        tl1.fromTo(img1Ref,
            { x: -100, opacity: 0, rotation: -10 },
            { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" }
        );

        // Nested Timeline 2: Image 2 Entrance (overlapping)
        const tl2 = gsap.timeline();
        tl2.fromTo(img2Ref,
            { x: 100, opacity: 0, rotation: 10 },
            { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" }
        );

        // Nested Timeline 3: Text Reveal
        const tl3 = gsap.timeline();
        tl3.fromTo(textRef,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
        );

        // Master Timeline Orchestration
        master.add(tl1)
            .add(tl2, "-=0.8") // Start tl2 0.8s before tl1 ends
            .add(tl3, "-=0.5"); // Start tl3 0.5s before tl2 ends

        timelineRef.current = master;
    }, { scope: containerRef });

    const togglePlay = () => {
        if (timelineRef.current.paused()) {
            timelineRef.current.play();
            setIsPlaying(true);
        } else {
            timelineRef.current.pause();
            setIsPlaying(false);
        }
    };

    const restart = () => {
        timelineRef.current.restart();
        setIsPlaying(true);
    };

    return (
        <div className={`relative ${className}`}>
            <div ref={containerRef} className="relative h-[400px] bg-[#111] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

                <div className="relative z-10 flex items-center gap-4">
                    <div className="img-1 w-48 h-64 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 border border-white/20">
                        <img src={img1} alt="Composition 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="img-2 w-48 h-64 rounded-lg overflow-hidden shadow-2xl transform rotate-6 border border-white/20">
                        <img src={img2} alt="Composition 2" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-content absolute bottom-10 left-0 right-0 text-center z-20">
                    <h3 className="text-3xl font-bold text-white mb-1">Orchestrated</h3>
                    <p className="text-blue-400 font-mono text-sm">MASTER TIMELINE</p>
                </div>
            </div>

            <div className="flex gap-4 mt-6 justify-center">
                <button onClick={togglePlay} className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                    {isPlaying ? <><Pause size={18} /> PAUSE</> : <><Play size={18} /> PLAY</>}
                </button>
                <button onClick={restart} className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
                    <RotateCcw size={20} />
                </button>
            </div>
        </div>
    );
};
