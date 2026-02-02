import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScroll = ({
    children,
    className = ""
}) => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray(wrapperRef.current.children);

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + containerRef.current.offsetWidth
            }
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`overflow-hidden ${className}`}>
            <div ref={wrapperRef} className="flex w-[300%] h-screen">
                {/* Note: w-[300%] assumes 3 children. Ideally this should be dynamic or passed as prop. 
            For this library, we'll let the user handle the width or use flex-nowrap.
        */}
                {React.Children.map(children, (child) => (
                    <div className="w-screen h-screen flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
