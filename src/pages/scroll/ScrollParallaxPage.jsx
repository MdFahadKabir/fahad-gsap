import React from 'react';
import { Parallax } from '../../components/animations/scroll/Parallax';
import img4 from '../../assets/img/gallery-4.webp';
import img1 from '../../assets/img/gallery-1.webp';
import img5 from '../../assets/img/gallery-5.webp';

const ScrollParallaxPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
            {/* Hero Parallax */}
            <div className="relative h-screen overflow-hidden flex items-center justify-center">
                <Parallax speed={0.5} className="absolute inset-0">
                    <img src={img4} alt="Parallax BG" className="w-full h-[120%] object-cover -mt-[10%] opacity-60" />
                </Parallax>
                <div className="relative z-10 text-center mix-blend-overlay">
                    <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white">
                        DEPTH
                    </h1>
                </div>
                <div className="absolute bottom-10 left-10 z-10 max-w-xs">
                    <p className="text-gray-300 text-sm">
                        Parallax scrolling creates an illusion of depth in a 2D scene of a website.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl font-bold mb-8">Layered Motion</h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            By moving different layers at different speeds, we create a sense of three-dimensional space.
                            The background moves slower than the foreground, mimicking how we perceive distance in the real world.
                        </p>
                        <div className="h-px w-full bg-white/10" />
                    </div>

                    <div className="relative h-[600px] w-full">
                        {/* Back Layer */}
                        <Parallax speed={0.2} className="absolute top-0 right-0 w-3/4 h-3/4 z-0">
                            <img src={img1} alt="Layer 1" className="w-full h-full object-cover rounded-sm opacity-50 grayscale" />
                        </Parallax>

                        {/* Front Layer */}
                        <Parallax speed={1.2} className="absolute bottom-0 left-0 w-2/3 h-2/3 z-10 shadow-2xl">
                            <img src={img5} alt="Layer 2" className="w-full h-full object-cover rounded-sm" />
                        </Parallax>
                    </div>
                </div>
            </div>

            {/* Text Parallax */}
            <div className="py-40 overflow-hidden relative">
                <Parallax speed={-0.5} className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-10 pointer-events-none">
                    <h2 className="text-[20vw] font-black whitespace-nowrap text-white">
                        IMMERSIVE SCROLL
                    </h2>
                </Parallax>
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <h3 className="text-4xl font-bold mb-6">Typography Effects</h3>
                    <p className="text-gray-400">
                        Parallax isn't just for images. Use it on text to create dynamic, magazine-style layouts that feel alive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ScrollParallaxPage;
