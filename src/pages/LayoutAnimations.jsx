import React, { useState } from 'react';
import { PageLoader } from '../components/animations/layout/PageLoader';
import { SmartNavbar } from '../components/animations/layout/SmartNavbar';
import { HeroSection } from '../components/animations/layout/HeroSection';
import { ImageReveal, ImageZoom, ImageParallax } from '../components/animations/layout/ImageEffects';
import { FadeIn } from '../components/animations/core/Fade';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/img/gallery-1.webp';
import img2 from '../assets/img/gallery-2.webp';
import img3 from '../assets/img/gallery-3.webp';
import img4 from '../assets/img/gallery-4.webp';
import img5 from '../assets/img/gallery-5.webp';
import video1 from '../assets/videos/hero-1.mp4';

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, children, className = "" }) => (
    <div className={`py-20 px-4 max-w-7xl mx-auto ${className}`}>
        <h2 className="text-3xl font-bold mb-10 text-white/90">{title}</h2>
        {children}
    </div>
);

const LayoutAnimations = () => {
    const [loading, setLoading] = useState(true);

    // Grid Item Animation Stagger
    useGSAP(() => {
        if (!loading) {
            gsap.from(".grid-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".grid-container",
                    start: "top 80%"
                }
            });
        }
    }, [loading]);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {loading && <PageLoader onComplete={() => setLoading(false)} />}

            {!loading && (
                <>
                    <SmartNavbar />

                    <HeroSection
                        title="LAYOUT & MOTION"
                        subtitle="A collection of page transitions, reveals, and structural animations."
                        video={video1}
                    />

                    {/* Section Reveal Animation */}
                    <Section title="Section Reveal">
                        <FadeIn>
                            <div className="bg-[#111] p-10 rounded-3xl border border-white/10">
                                <h3 className="text-2xl font-bold mb-4">Smooth Entry</h3>
                                <p className="text-gray-400">
                                    This entire section fades and slides in as you scroll.
                                    Essential for keeping the user engaged as they explore the page.
                                </p>
                            </div>
                        </FadeIn>
                    </Section>

                    {/* Grid Item Animation */}
                    <Section title="Grid Item Animation">
                        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[img1, img2, img3, img4, img5, img1].map((img, i) => (
                                <div key={i} className="grid-item group relative aspect-[4/5] overflow-hidden rounded-xl">
                                    <img src={img} alt={`Grid ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="font-bold tracking-widest">VIEW</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* Image Effects */}
                    <Section title="Image Effects">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-400">Reveal</h3>
                                <ImageReveal src={img3} className="aspect-[3/4] rounded-lg" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-400">Zoom Hover</h3>
                                <ImageZoom src={img4} className="aspect-[3/4] rounded-lg" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-400">Parallax</h3>
                                <ImageParallax src={img5} className="aspect-[3/4] rounded-lg h-[400px]" />
                            </div>
                        </div>
                    </Section>

                    {/* Sticky Header Demo (Simulated content) */}
                    <div className="h-[50vh] bg-[#111] flex items-center justify-center border-t border-white/10">
                        <p className="text-gray-500">Scroll up to see the Navbar reappear</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default LayoutAnimations;
