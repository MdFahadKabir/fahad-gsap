import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/animations/core/Fade';
import { Layers, Image, ArrowRightLeft, Pin, MonitorPlay, Film } from 'lucide-react';

const ScrollAnimations = () => {
    const demos = [
        { path: '/scroll/reveal', label: 'Scroll Reveal', icon: <Layers size={32} />, desc: 'Fade, slide, and scale elements on scroll.' },
        { path: '/scroll/parallax', label: 'Parallax Effect', icon: <Image size={32} />, desc: 'Depth effects with moving backgrounds.' },
        { path: '/scroll/horizontal', label: 'Horizontal Scroll', icon: <ArrowRightLeft size={32} />, desc: 'Scroll vertically to move content horizontally.' },
        { path: '/scroll/pin', label: 'Pinned Content', icon: <Pin size={32} />, desc: 'Sticky content that stays in view while scrolling.' },
        { path: '/scroll/snap', label: 'Scroll Snap', icon: <MonitorPlay size={32} />, desc: 'CSS-based section snapping.' },
        { path: '/scroll/timeline', label: 'Scroll Timeline', icon: <Film size={32} />, desc: 'Complex choreography linked to scroll position.' },
    ];

    return (
        <div className="max-w-6xl mx-auto py-10">
            <FadeIn>
                <h1 className="text-5xl font-bold mb-6 text-center">Scroll Animations</h1>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
                    Explore different types of scroll-triggered animations. Each demo opens in a separate page for the best experience.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {demos.map((demo, index) => (
                    <FadeIn key={demo.path} delay={index * 0.1}>
                        <Link to={demo.path} className="block group">
                            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2 h-full">
                                <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                                    {demo.icon}
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-white">{demo.label}</h2>
                                <p className="text-gray-400">{demo.desc}</p>
                                <div className="mt-6 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    View Demo <span className="ml-1">→</span>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
};

export default ScrollAnimations;
