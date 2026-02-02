import React from 'react';
import { IntroTimeline } from '../components/animations/timelines/IntroTimeline';
import { LoopingTimeline } from '../components/animations/timelines/LoopingTimeline';
import { MasterTimeline } from '../components/animations/timelines/MasterTimeline';
import { FadeIn } from '../components/animations/core/Fade';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import img3 from '../assets/img/gallery-3.webp';
import img4 from '../assets/img/gallery-4.webp';
import img5 from '../assets/img/gallery-5.webp';
import video1 from '../assets/videos/hero-1.mp4';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, description, children, className = "" }) => (
    <div className={`py-24 border-b border-white/5 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
            <div className="lg:col-span-2">
                {children}
            </div>
        </div>
    </div>
);

const TimelineAnimations = () => {
    // Scroll-synced Timeline Logic
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#scroll-sync-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

        tl.to("#sync-img-1", { y: -100, rotation: 5 })
            .to("#sync-img-2", { y: -200, rotation: -5 }, "<")
            .to("#sync-text", { scale: 1.5, opacity: 0 }, "<");
    });

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-blue-500/30">
            <div className="pt-32 pb-20 px-4 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] -z-10" />
                <FadeIn>
                    <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Choreography</span>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                        TIMELINES
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Complex sequences, perfectly orchestrated.
                    </p>
                </FadeIn>
            </div>

            {/* 1. Intro Timeline */}
            <Section
                title="1. Intro Timeline"
                description="A sequenced entrance animation ideal for hero sections. Elements cascade in with precise timing."
            >
                <div className="relative rounded-2xl overflow-hidden aspect-video group">
                    <video src={video1} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <IntroTimeline className="text-center z-10">
                            <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-xs font-mono mb-4 backdrop-blur-sm">PRESENTING</span>
                            <h3 className="text-5xl md:text-7xl font-bold mb-6">CINEMATIC</h3>
                            <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
                                ENTER
                            </button>
                        </IntroTimeline>
                    </div>
                </div>
            </Section>

            {/* 2. Outro Timeline */}
            <Section
                title="2. Outro Timeline"
                description="Graceful exit animations. Useful for page transitions or closing modals."
            >
                <div className="bg-[#111] p-12 rounded-2xl border border-white/10 flex items-center justify-center min-h-[400px]">
                    <IntroTimeline>
                        {/* Using IntroTimeline logic but styled as a card that could animate out */}
                        <div className="w-80 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                            <div className="h-48 overflow-hidden">
                                <img src={img3} alt="Outro" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-xl font-bold mb-2">Project Complete</h4>
                                <p className="text-gray-400 text-sm mb-6">Ready for the next step?</p>
                                <button className="w-full py-3 bg-blue-600 rounded-lg font-bold text-sm hover:bg-blue-500 transition-colors">
                                    CONTINUE
                                </button>
                            </div>
                        </div>
                    </IntroTimeline>
                </div>
            </Section>

            {/* 3. Looping Timeline */}
            <Section
                title="3. Looping Timeline"
                description="Continuous, seamless motion that breathes life into static elements."
            >
                <div className="bg-[#111] rounded-2xl border border-white/10 h-[500px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <LoopingTimeline>
                        <div className="relative w-64 h-80">
                            <img src={img4} alt="Loop" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                            <div className="absolute -inset-4 border border-white/20 rounded-3xl -z-10" />
                        </div>
                    </LoopingTimeline>
                </div>
            </Section>

            {/* 4. Scroll-synced Timeline */}
            <Section
                title="4. Scroll-synced"
                description="Animation playback is tied 1:1 with the scrollbar. Scrub through the timeline by scrolling."
            >
                <div id="scroll-sync-section" className="h-[600px] bg-[#111] rounded-2xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-50">
                        <div className="w-px h-full bg-white/10" />
                        <div className="w-px h-full bg-white/10" />
                        <div className="w-px h-full bg-white/10" />
                    </div>

                    <div id="sync-img-1" className="w-64 h-80 absolute left-20 top-1/2 -translate-y-1/2 shadow-2xl">
                        <img src={img5} alt="Sync 1" className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <div id="sync-text" className="relative z-10 text-center mix-blend-difference">
                        <h3 className="text-[10vw] font-black leading-none">SYNC</h3>
                    </div>

                    <div id="sync-img-2" className="w-64 h-80 absolute right-20 top-1/2 -translate-y-1/2 shadow-2xl">
                        <img src={img3} alt="Sync 2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </Section>

            {/* 5. Master & 6. Nested Timelines */}
            <Section
                title="5. Master & Nested"
                description="The power of GSAP. Control multiple complex timelines from a single master timeline."
            >
                <MasterTimeline />
            </Section>

        </div>
    );
};

export default TimelineAnimations;
