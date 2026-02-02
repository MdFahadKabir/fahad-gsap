import React from 'react';
import { TextReveal } from '../components/animations/text/TextReveal';
import { Typewriter } from '../components/animations/text/Typewriter';
import { RotateCcw } from 'lucide-react';
import { useState } from 'react';

const ReplaySection = ({ children, title, className = "" }) => {
    const [key, setKey] = useState(0);

    return (
        <div className={`relative group ${className}`}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-400">{title}</h2>
                <button
                    onClick={() => setKey(k => k + 1)}
                    className="p-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Replay Animation"
                >
                    <RotateCcw size={20} />
                </button>
            </div>
            <div key={key}>
                {children}
            </div>
        </div>
    );
};

const TextAnimations = () => {
    return (
        <div className="max-w-4xl mx-auto pb-40">
            <h1 className="text-4xl font-bold mb-12">Text Animations</h1>

            <div className="space-y-24">
                <ReplaySection title="Typewriter Effect">
                    <div className="text-3xl font-mono text-green-400 bg-black/30 p-6 rounded-lg border border-green-500/30">
                        <Typewriter text="> Initializing system..." speed={0.1} />
                        <br />
                        <Typewriter text="> Loading modules..." speed={0.1} delay={2.5} />
                        <br />
                        <Typewriter text="> System ready." speed={0.1} delay={4.5} />
                    </div>
                </ReplaySection>

                <ReplaySection title="Word Reveal (Fade Up)">
                    <div className="text-4xl font-bold leading-tight">
                        <TextReveal mode="word" animation="fade-up" stagger={0.1}>
                            Creativity is intelligence having fun.
                        </TextReveal>
                    </div>
                </ReplaySection>

                <ReplaySection title="Character Reveal (Slide Up)">
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                        <TextReveal mode="char" animation="slide-up" stagger={0.03}>
                            INNOVATION
                        </TextReveal>
                    </div>
                </ReplaySection>

                <ReplaySection title="Paragraph Reveal">
                    <div className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                        <TextReveal mode="word" animation="fade-in" stagger={0.02}>
                            GSAP allows you to create high-performance animations that work in every major browser.
                            It handles the hard work of compatibility and timing, so you can focus on the creative side.
                        </TextReveal>
                    </div>
                </ReplaySection>
            </div>
        </div>
    );
};

export default TextAnimations;
