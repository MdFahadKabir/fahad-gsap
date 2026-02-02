import React from 'react';
import { ScrollPin } from '../../components/animations/scroll/ScrollPin';
import img2 from '../../assets/img/gallery-2.webp';

const ScrollPinPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <div className="h-[50vh] flex flex-col items-center justify-center border-b border-white/10">
                <h1 className="text-6xl font-bold mb-4">Pinned Content</h1>
                <p className="text-gray-400">Keep important visuals in view while scrolling context.</p>
            </div>

            <ScrollPin
                pinnedContent={
                    <div className="w-full h-full flex items-center justify-center p-10">
                        <div className="relative w-full aspect-[4/5] max-w-md rounded-2xl overflow-hidden shadow-2xl">
                            <img src={img2} alt="Pinned" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">Modern Living</h3>
                                <p className="text-gray-300 text-sm">Design for the future.</p>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="py-20 px-10 max-w-xl mx-auto space-y-40">
                    <div className="flex flex-col justify-center min-h-[50vh]">
                        <span className="text-blue-500 font-mono mb-4">01. CONCEPT</span>
                        <h2 className="text-4xl font-bold mb-6">Minimalist Approach</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Less is more. By stripping away the unnecessary, we focus on what truly matters: space, light, and form.
                            The pinned image stays as a constant reference point while you explore the philosophy behind it.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center min-h-[50vh]">
                        <span className="text-purple-500 font-mono mb-4">02. MATERIALS</span>
                        <h2 className="text-4xl font-bold mb-6">Natural Elements</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We use raw materials like concrete, wood, and glass.
                            These elements ground the design and provide texture that interacts with light in unique ways.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center min-h-[50vh]">
                        <span className="text-green-500 font-mono mb-4">03. SUSTAINABILITY</span>
                        <h2 className="text-4xl font-bold mb-6">Eco-Friendly</h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Modern design isn't just about looks. It's about responsibility.
                            Our approach minimizes waste and maximizes energy efficiency.
                        </p>
                    </div>
                </div>
            </ScrollPin>

            <div className="h-[50vh] flex items-center justify-center border-t border-white/10">
                <h2 className="text-3xl font-bold text-gray-500">End of Section</h2>
            </div>
        </div>
    );
};

export default ScrollPinPage;
