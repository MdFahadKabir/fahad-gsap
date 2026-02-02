import React from 'react';
import { ScrollReveal } from '../../components/animations/scroll/ScrollReveal';
import img1 from '../../assets/img/gallery-1.webp';
import img2 from '../../assets/img/gallery-2.webp';
import img3 from '../../assets/img/gallery-3.webp';
import img4 from '../../assets/img/gallery-4.webp';
import img5 from '../../assets/img/gallery-5.webp';

const ScrollRevealPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
            {/* Hero Section */}
            <div className="h-screen flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <ScrollReveal animation="fade-up" duration={1.5}>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-center bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
                        REVEAL
                    </h1>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={0.3}>
                    <p className="mt-6 text-xl text-gray-400 max-w-lg text-center font-light">
                        The art of showing content at the perfect moment.
                        <br />Scroll down to experience.
                    </p>
                </ScrollReveal>
                <div className="absolute bottom-10 animate-bounce text-gray-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="max-w-7xl mx-auto px-4 py-20 space-y-32">

                {/* Feature 1: Image Left, Text Right */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <ScrollReveal animation="scale-up" duration={1.2}>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                                <img src={img1} alt="Architecture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ScrollReveal animation="fade-up" stagger={0.1}>
                            <h2 className="text-5xl font-bold mb-6">Modern Architecture</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Clean lines and geometric shapes define the modern aesthetic.
                                Our animations respect these principles, adding motion without clutter.
                            </p>
                            <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                Explore Project
                            </button>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Feature 2: Text Left, Image Right */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <ScrollReveal animation="slide-left" duration={1.2}>
                            <div className="relative aspect-video overflow-hidden rounded-sm">
                                <img src={img2} alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ScrollReveal animation="fade-up" stagger={0.1}>
                            <h2 className="text-5xl font-bold mb-6">Interior Spaces</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Light and shadow play a crucial role in perception.
                                We use opacity and blur to mimic natural optical effects.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Feature 3: Full Width */}
                <div className="py-20">
                    <ScrollReveal animation="fade-up">
                        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16">Visual Harmony</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal animation="fade-up" delay={0}>
                            <div className="aspect-[3/4] overflow-hidden rounded-sm relative group">
                                <img src={img3} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={0.2}>
                            <div className="aspect-[3/4] overflow-hidden rounded-sm relative group md:-mt-20">
                                <img src={img4} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={0.4}>
                            <div className="aspect-[3/4] overflow-hidden rounded-sm relative group">
                                <img src={img5} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

            </div>

            {/* Footer Spacer */}
            <div className="h-40 flex items-center justify-center border-t border-white/10">
                <p className="text-gray-500 uppercase tracking-widest text-sm">End of Showcase</p>
            </div>
        </div>
    );
};

export default ScrollRevealPage;
