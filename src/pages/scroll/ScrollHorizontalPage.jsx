import React from 'react';
import { HorizontalScroll } from '../../components/animations/scroll/HorizontalScroll';
import heroVideo from '../../assets/videos/hero-1.mp4';
import featureVideo from '../../assets/videos/feature-1.mp4';
import img3 from '../../assets/img/gallery-3.webp';

const ScrollHorizontalPage = () => {
    return (
        <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
            {/* Intro Section */}
            <div className="h-screen flex flex-col items-center justify-center relative">
                <div className="text-center z-10">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">HORIZONTAL</h1>
                    <p className="text-xl text-gray-400 max-w-md mx-auto">
                        A different perspective. Scroll down to move sideways.
                    </p>
                </div>
                <div className="absolute bottom-10 animate-bounce text-gray-500">
                    <span className="text-sm uppercase tracking-widest">Scroll</span>
                </div>
            </div>

            {/* Horizontal Scroll Section */}
            <HorizontalScroll>
                {/* Panel 1: Video */}
                <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <video src={heroVideo} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-20 max-w-4xl px-8">
                        <span className="text-blue-400 font-mono mb-4 block">01 / IMMERSIVE</span>
                        <h2 className="text-6xl md:text-8xl font-bold leading-none mb-6">CINEMATIC<br />EXPERIENCE</h2>
                        <p className="text-xl text-gray-300 max-w-xl">
                            Full-screen video backgrounds create an immediate emotional connection.
                        </p>
                    </div>
                </div>

                {/* Panel 2: Image */}
                <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden bg-[#111]">
                    <div className="flex flex-col md:flex-row items-center gap-20 max-w-7xl px-8">
                        <div className="w-full md:w-1/2">
                            <img src={img3} alt="Section 2" className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-purple-400 font-mono mb-4 block">02 / DETAIL</span>
                            <h2 className="text-6xl font-bold mb-6">FINE ART</h2>
                            <p className="text-xl text-gray-400">
                                High-resolution imagery deserves space to breathe. Horizontal scrolling mimics the experience of walking through a gallery.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Panel 3: Feature */}
                <div className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-red-900/20 z-10" />
                    <video src={featureVideo} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    <div className="relative z-20 text-center">
                        <span className="text-red-400 font-mono mb-4 block">03 / MOTION</span>
                        <h2 className="text-6xl md:text-9xl font-bold mb-8">IMPACT</h2>
                        <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-red-500 hover:text-white transition-colors">
                            GET STARTED
                        </button>
                    </div>
                </div>
            </HorizontalScroll>

            {/* Outro Section */}
            <div className="h-screen flex items-center justify-center bg-[#0a0a0a] relative z-20">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Back to Vertical</h2>
                    <p className="text-gray-500">The journey continues downwards.</p>
                </div>
            </div>
        </div>
    );
};

export default ScrollHorizontalPage;
