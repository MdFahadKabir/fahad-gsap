import React from 'react';
import { SpringHover } from '../components/animations/physics/SpringHover';
import { DraggableCard } from '../components/animations/physics/DraggableCard';
import { GravityBounce } from '../components/animations/physics/GravityBounce';
import { SnapDraggable } from '../components/animations/physics/SnapDraggable';
import { MagneticDrag } from '../components/animations/physics/MagneticDrag';
import { ElasticDrag } from '../components/animations/physics/ElasticDrag';
import { FadeIn } from '../components/animations/core/Fade';

import img1 from '../assets/img/gallery-1.webp';
import img2 from '../assets/img/gallery-2.webp';
import img3 from '../assets/img/gallery-3.webp';
import img4 from '../assets/img/gallery-4.webp';
import video1 from '../assets/videos/hero-1.mp4';

const Section = ({ title, description, children, className = "" }) => (
    <div className={`py-20 border-b border-white/10 ${className}`}>
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white/90 mb-2">{title}</h2>
            <p className="text-gray-400 max-w-xl mx-auto">{description}</p>
        </div>
        {children}
    </div>
);

const PhysicsAnimations = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 pt-20">
                <FadeIn>
                    <h1 className="text-6xl md:text-8xl font-black text-center mb-6 tracking-tighter bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                        PHYSICS LAB
                    </h1>
                    <p className="text-xl text-gray-400 text-center mb-20 max-w-2xl mx-auto">
                        A collection of 8 realistic motion simulations.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 gap-10">

                    {/* 1. Spring Animation */}
                    <Section title="1. Spring Animation" description="Elements react with a spring-like bounce on interaction.">
                        <div className="flex justify-center gap-8">
                            <SpringHover>
                                <div className="w-64 aspect-[3/4] rounded-2xl overflow-hidden relative group">
                                    <img src={img1} alt="Spring" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute bottom-4 left-4 font-bold text-xl">Hover Me</div>
                                </div>
                            </SpringHover>
                        </div>
                    </Section>

                    {/* 2. Inertia / Momentum & 3. Throw Animation */}
                    <Section title="2. Inertia & 3. Throw" description="Drag and release to throw elements with simulated momentum.">
                        <div className="h-[500px] bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <DraggableCard className="absolute z-10">
                                <div className="w-72 bg-[#222] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <div className="h-40 bg-blue-600 flex items-center justify-center">
                                        <span className="text-4xl">🚀</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2">Throw Me!</h3>
                                        <p className="text-gray-400 text-sm">I carry momentum when you release me.</p>
                                    </div>
                                </div>
                            </DraggableCard>
                        </div>
                    </Section>

                    {/* 4. Draggable Animation */}
                    <Section title="4. Draggable" description="Standard drag interaction with bounds.">
                        <div className="h-[400px] bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <DraggableCard>
                                <div className="w-64 aspect-video rounded-xl overflow-hidden shadow-lg relative">
                                    <video src={video1} autoPlay loop muted className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        <span className="font-bold tracking-widest">DRAG VIDEO</span>
                                    </div>
                                </div>
                            </DraggableCard>
                        </div>
                    </Section>

                    {/* 5. Snap Animation */}
                    <Section title="5. Snap Animation" description="Elements snap to specific grid points when released.">
                        <div className="h-[400px] bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent bg-[length:20px_20px]">
                            <SnapDraggable snapPoints={[{ x: 0, y: 0 }, { x: 150, y: 0 }, { x: -150, y: 0 }]}>
                                <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl shadow-xl flex items-center justify-center">
                                    <span className="font-bold">Snap</span>
                                </div>
                            </SnapDraggable>

                            {/* Grid markers */}
                            <div className="absolute w-4 h-4 bg-white/20 rounded-full pointer-events-none" style={{ marginLeft: -150 }} />
                            <div className="absolute w-4 h-4 bg-white/20 rounded-full pointer-events-none" />
                            <div className="absolute w-4 h-4 bg-white/20 rounded-full pointer-events-none" style={{ marginLeft: 150 }} />
                        </div>
                    </Section>

                    {/* 6. Magnetic Drag */}
                    <Section title="6. Magnetic Drag" description="Resists movement and pulls back to center, like a strong magnet.">
                        <div className="h-[400px] bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <MagneticDrag>
                                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-[0_0_50px_rgba(124,58,237,0.5)] flex items-center justify-center cursor-grab active:cursor-grabbing">
                                    <span className="font-bold text-lg">Magnet</span>
                                </div>
                            </MagneticDrag>
                        </div>
                    </Section>

                    {/* 7. Elastic Return */}
                    <Section title="7. Elastic Return" description="Snaps back to origin with a bouncy, elastic effect.">
                        <div className="h-[400px] bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <ElasticDrag>
                                <div className="w-56 h-72 bg-[#222] rounded-2xl border border-white/10 p-2 rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <img src={img2} alt="Elastic" className="w-full h-full object-cover rounded-xl" />
                                </div>
                            </ElasticDrag>
                        </div>
                    </Section>

                    {/* 8. Physics-based Bounce */}
                    <Section title="8. Physics Bounce" description="Simulates gravity and collision bounce.">
                        <div className="h-[500px] flex items-end justify-center pb-20 gap-10">
                            <GravityBounce>
                                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                                    <span className="font-bold text-black">Ball</span>
                                </div>
                            </GravityBounce>
                            <GravityBounce>
                                <div className="w-32 h-32 bg-[#333] rounded-xl border border-white/20 flex items-center justify-center cursor-pointer">
                                    <span className="font-bold">Box</span>
                                </div>
                            </GravityBounce>
                        </div>
                    </Section>

                </div>
            </div>
        </div>
    );
};

export default PhysicsAnimations;
