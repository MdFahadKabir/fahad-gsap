import React from 'react';
import { TiltCard } from '../components/animations/advanced/TiltCard';
import { FlipCard } from '../components/animations/advanced/FlipCard';
import { MagneticButton } from '../components/animations/advanced/MagneticButton';
import { MouseParallax } from '../components/animations/advanced/MouseParallax';
import { CustomCursor } from '../components/animations/advanced/CustomCursor';
import { LiquidEffect } from '../components/animations/advanced/LiquidEffect';
import { FadeIn } from '../components/animations/core/Fade';

import img1 from '../assets/img/gallery-1.webp';
import img2 from '../assets/img/gallery-2.webp';
import img3 from '../assets/img/gallery-3.webp';
import img4 from '../assets/img/gallery-4.webp';

const Section = ({ title, children, className = "" }) => (
    <div className={`py-20 border-b border-white/10 ${className}`}>
        <h2 className="text-3xl font-bold mb-10 text-center text-white/80">{title}</h2>
        {children}
    </div>
);

const AdvancedAnimations = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white cursor-none">
            <CustomCursor />

            <div className="max-w-6xl mx-auto px-4 pt-20">
                <FadeIn>
                    <h1 className="text-6xl md:text-8xl font-black text-center mb-6 tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ADVANCED FX
                    </h1>
                    <p className="text-xl text-gray-400 text-center mb-20 max-w-2xl mx-auto">
                        High-end interactive animations. Move your mouse to explore.
                    </p>
                </FadeIn>

                <Section title="3D Tilt Cards">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <TiltCard intensity={15} className="cursor-hover">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                                <img src={img1} alt="Tilt 1" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        Perspective
                                    </h3>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        Interact with depth.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                        <TiltCard intensity={25} className="cursor-hover">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                                <img src={img2} alt="Tilt 2" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-3xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        Immersion
                                    </h3>
                                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        Feel the motion.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </Section>

                <Section title="3D Flip Cards">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[img3, img4, img1].map((img, i) => (
                            <div key={i} className="h-80 cursor-hover">
                                <FlipCard
                                    direction={i === 1 ? "vertical" : "horizontal"}
                                    front={
                                        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-white/10 bg-[#1a1a1a]">
                                            <img src={img} alt="Front" className="w-full h-full object-cover opacity-50" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl font-bold">HOVER ME</span>
                                            </div>
                                        </div>
                                    }
                                    back={
                                        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-6 text-center">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2">REVEALED</h3>
                                                <p className="text-sm text-white/80">Content on the back side.</p>
                                            </div>
                                        </div>
                                    }
                                    className="w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Magnetic Buttons">
                    <div className="flex flex-wrap gap-8 justify-center items-center py-10">
                        <MagneticButton strength={0.3} className="cursor-hover">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
                                Low Strength
                            </button>
                        </MagneticButton>
                        <MagneticButton strength={0.8} className="cursor-hover">
                            <button className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl shadow-lg shadow-blue-600/30">
                                High Strength
                            </button>
                        </MagneticButton>
                        <MagneticButton strength={0.5} className="cursor-hover">
                            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="text-2xl">→</span>
                            </div>
                        </MagneticButton>
                    </div>
                </Section>

                <Section title="Mouse Parallax">
                    <div className="h-[600px] w-full rounded-3xl overflow-hidden relative bg-[#111] border border-white/5">
                        <MouseParallax className="w-full h-full flex items-center justify-center">
                            {/* Background Layers */}
                            <div className="parallax-layer absolute inset-0 opacity-20" data-speed="0.02">
                                <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
                                <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl" />
                            </div>

                            {/* Mid Layer */}
                            <div className="parallax-layer absolute z-10" data-speed="0.05">
                                <h2 className="text-[10vw] font-black text-white/5 pointer-events-none">
                                    DEPTH
                                </h2>
                            </div>

                            {/* Front Layer */}
                            <div className="parallax-layer relative z-20 text-center" data-speed="0.1">
                                <h3 className="text-5xl font-bold mb-4">Move Your Mouse</h3>
                                <p className="text-xl text-gray-400">Elements react to cursor position.</p>
                            </div>

                            {/* Floating Elements */}
                            <div className="parallax-layer absolute top-1/4 right-1/4 z-30" data-speed="0.15">
                                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl rotate-12 shadow-lg" />
                            </div>
                            <div className="parallax-layer absolute bottom-1/3 left-1/4 z-30" data-speed="0.12">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full shadow-lg" />
                            </div>
                        </MouseParallax>
                    </div>
                </Section>

                <Section title="Liquid Distortion">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <LiquidEffect>
                            <div className="relative h-80 rounded-2xl overflow-hidden group cursor-hover">
                                <img src={img1} alt="Liquid" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <h3 className="text-4xl font-bold text-white drop-shadow-lg">LIQUID</h3>
                                </div>
                            </div>
                        </LiquidEffect>
                        <div className="flex items-center justify-center">
                            <p className="text-gray-400 text-lg">
                                SVG filters combined with GSAP create organic, fluid-like distortions on images or text.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title="Glassmorphism">
                    <div className="relative h-96 rounded-3xl overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                        <MouseParallax className="absolute inset-0" factor={0.05}>
                            <div className="parallax-layer absolute top-10 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" data-speed="0.1"></div>
                            <div className="parallax-layer absolute top-10 right-20 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" data-speed="0.12"></div>
                            <div className="parallax-layer absolute -bottom-8 left-40 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" data-speed="0.08"></div>
                        </MouseParallax>

                        <TiltCard className="cursor-hover" intensity={10}>
                            <div className="relative w-80 h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-6 rounded bg-white/30"></div>
                                    <div className="text-xs text-white/50">VISA</div>
                                </div>
                                <div>
                                    <div className="text-lg tracking-widest mb-2">•••• •••• •••• 4242</div>
                                    <div className="flex justify-between text-xs text-white/70">
                                        <span>JOHN DOE</span>
                                        <span>12/25</span>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default AdvancedAnimations;
