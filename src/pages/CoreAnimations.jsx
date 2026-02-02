import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { FadeIn, FadeOut } from '../components/animations/core/Fade';
import { Move, SlideIn } from '../components/animations/core/Move';
import { Scale, ZoomIn, ZoomOut } from '../components/animations/core/Scale';
import { Rotate } from '../components/animations/core/Rotate';
import { Skew } from '../components/animations/core/Skew';
import { Resize } from '../components/animations/core/Resize';
import { ColorChange } from '../components/animations/core/Color';
import { ClipReveal } from '../components/animations/core/Clip';
import { SVGMask } from '../components/animations/core/SVGMask';

import img1 from '../assets/img/gallery-1.webp';
import img2 from '../assets/img/gallery-2.webp';
import img3 from '../assets/img/gallery-3.webp';
import video1 from '../assets/videos/feature-1.mp4';

const Section = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-2">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {children}
        </div>
    </div>
);

const Card = ({ children, title }) => {
    const [key, setKey] = useState(0);

    const handleReplay = () => {
        setKey(prev => prev + 1);
    };

    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-white/5 flex flex-col items-center justify-center min-h-[200px] relative group">
            <button
                onClick={handleReplay}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                title="Replay Animation"
            >
                <RotateCcw size={16} />
            </button>
            <div className="mb-4" key={key}>{children}</div>
            <p className="text-sm text-gray-500 mt-4">{title}</p>
        </div>
    );
};

const Box = ({ className = "bg-blue-500" }) => (
    <div className={`w-20 h-20 rounded-lg ${className}`}></div>
);

const CoreAnimations = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Core Animations</h1>

            <Section title="Fade">
                <Card title="Fade In (Up)">
                    <FadeIn><img src={img1} alt="Gallery 1" className="w-32 h-32 object-cover rounded-lg" /></FadeIn>
                </Card>
                <Card title="Fade In (Right)">
                    <FadeIn x={-50} y={0}><Box className="bg-purple-500" /></FadeIn>
                </Card>
                <Card title="Fade Out">
                    <FadeOut endOpacity={0.2}><Box className="bg-red-500" /></FadeOut>
                </Card>
            </Section>

            <Section title="Move & Slide">
                <Card title="Slide In Left">
                    <SlideIn direction="left"><Box className="bg-green-500" /></SlideIn>
                </Card>
                <Card title="Move X/Y">
                    <Move x={50} y={-20}><img src={img2} alt="Gallery 2" className="w-32 h-32 object-cover rounded-lg" /></Move>
                </Card>
                <Card title="Slide In Bottom">
                    <SlideIn direction="bottom"><img src={img3} alt="Gallery 3" className="w-32 h-32 object-cover rounded-lg" /></SlideIn>
                </Card>
            </Section>

            <Section title="Scale & Zoom">
                <Card title="Zoom In">
                    <ZoomIn><Box className="bg-pink-500" /></ZoomIn>
                </Card>
                <Card title="Scale Y">
                    <Scale scaleY={0} duration={1}><Box className="bg-cyan-500" /></Scale>
                </Card>
                <Card title="Zoom Out">
                    <ZoomOut><Box className="bg-indigo-500" /></ZoomOut>
                </Card>
            </Section>

            <Section title="Rotate">
                <Card title="Rotate 360">
                    <Rotate>
                        <video src={video1} autoPlay loop muted className="w-32 h-32 object-cover rounded-lg" />
                    </Rotate>
                </Card>
                <Card title="Rotate X">
                    <Rotate rotationX={360} rotation={0}><Box className="bg-lime-500" /></Rotate>
                </Card>
                <Card title="Rotate Y">
                    <Rotate rotationY={360} rotation={0}><Box className="bg-fuchsia-500" /></Rotate>
                </Card>
            </Section>

            <Section title="Misc">
                <Card title="Skew">
                    <Skew skewX={30}><Box className="bg-rose-500" /></Skew>
                </Card>
                <Card title="Resize">
                    <Resize width={0}><Box className="bg-emerald-500" /></Resize>
                </Card>
                <Card title="Clip Reveal">
                    <ClipReveal direction="center">
                        <img src={img1} alt="Demo" className="w-32 h-32 object-cover rounded-lg" />
                    </ClipReveal>
                </Card>
                <Card title="SVG Mask">
                    <SVGMask>
                        <img src={img2} alt="Masked" className="w-32 h-32 object-cover" />
                    </SVGMask>
                </Card>
                <Card title="Move Percent">
                    <Move xPercent={50} yPercent={50}>
                        <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-xs text-center">
                            Percent Move
                        </div>
                    </Move>
                </Card>
            </Section>
        </div>
    );
};

export default CoreAnimations;
