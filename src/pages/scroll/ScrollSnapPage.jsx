import React from 'react';
import img1 from '../../assets/img/gallery-1.webp';
import img2 from '../../assets/img/gallery-2.webp';
import img3 from '../../assets/img/gallery-3.webp';
import img4 from '../../assets/img/gallery-4.webp';

const ScrollSnapPage = () => {
    const sections = [
        {
            id: 1,
            img: img1,
            title: "Discover",
            subtitle: "Explore the unknown",
            color: "from-blue-900/80"
        },
        {
            id: 2,
            img: img2,
            title: "Create",
            subtitle: "Build your vision",
            color: "from-purple-900/80"
        },
        {
            id: 3,
            img: img3,
            title: "Inspire",
            subtitle: "Share with the world",
            color: "from-red-900/80"
        },
        {
            id: 4,
            img: img4,
            title: "Connect",
            subtitle: "Join the community",
            color: "from-green-900/80"
        },
    ];

    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            {sections.map((section) => (
                <section key={section.id} className="h-screen w-full snap-start relative flex items-center justify-center overflow-hidden group">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={section.img}
                            alt={section.title}
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b ${section.color} to-black/60`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-4">
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-bold tracking-widest text-white/80 mb-6 backdrop-blur-sm">
                            SECTION 0{section.id}
                        </span>
                        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter opacity-0 translate-y-10 animate-[fadeUp_1s_ease-out_forwards_0.3s]">
                            {section.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light opacity-0 translate-y-10 animate-[fadeUp_1s_ease-out_forwards_0.5s]">
                            {section.subtitle}
                        </p>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </div>
                </section>
            ))}

            <style jsx>{`
        @keyframes fadeUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>
        </div>
    );
};

export default ScrollSnapPage;
