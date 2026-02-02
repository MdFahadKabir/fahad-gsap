import React from 'react';
import { FadeIn } from '../components/animations/core/Fade';
import { Typewriter } from '../components/animations/text/Typewriter';

const Home = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <FadeIn y={30} duration={1.5}>
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    GSAP Animation Library
                </h1>
            </FadeIn>

            <FadeIn y={20} delay={0.5} duration={1}>
                <p className="text-xl text-gray-400 mb-12">
                    <Typewriter text="A comprehensive collection of reusable GSAP animations for React." speed={0.03} delay={1} />
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeIn delay={1} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
                    <h2 className="text-xl font-semibold mb-2 text-white">Core Animations</h2>
                    <p className="text-gray-400">Essential animations like Fade, Move, Scale, and Rotate.</p>
                </FadeIn>
                <FadeIn delay={1.2} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors">
                    <h2 className="text-xl font-semibold mb-2 text-white">Scroll Trigger</h2>
                    <p className="text-gray-400">Powerful scroll-based animations and parallax effects.</p>
                </FadeIn>
                <FadeIn delay={1.4} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-green-500/50 transition-colors">
                    <h2 className="text-xl font-semibold mb-2 text-white">Text Effects</h2>
                    <p className="text-gray-400">Engaging text reveals and typewriter animations.</p>
                </FadeIn>
                <FadeIn delay={1.6} className="p-6 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-pink-500/50 transition-colors">
                    <h2 className="text-xl font-semibold mb-2 text-white">UI Components</h2>
                    <p className="text-gray-400">Interactive buttons, modals, and more.</p>
                </FadeIn>
            </div>
        </div>
    );
};

export default Home;
