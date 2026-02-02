import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const FlipCard = ({ front, back, className = "", direction = "horizontal" }) => {
    const cardRef = useRef(null);
    const frontRef = useRef(null);
    const backRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useGSAP(() => {
        const axis = direction === "horizontal" ? "rotateY" : "rotateX";
        const rotationValue = 180;

        gsap.set(backRef.current, { [axis]: -rotationValue });

        if (isFlipped) {
            gsap.to(frontRef.current, { [axis]: rotationValue, duration: 0.6, ease: "back.out(1.5)" });
            gsap.to(backRef.current, { [axis]: 0, duration: 0.6, ease: "back.out(1.5)" });
        } else {
            gsap.to(frontRef.current, { [axis]: 0, duration: 0.6, ease: "back.out(1.5)" });
            gsap.to(backRef.current, { [axis]: -rotationValue, duration: 0.6, ease: "back.out(1.5)" });
        }
    }, [isFlipped, direction]);

    return (
        <div
            className={`relative perspective-1000 cursor-pointer ${className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            ref={cardRef}
        >
            <div ref={frontRef} className="absolute inset-0 backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                {front}
            </div>
            <div ref={backRef} className="absolute inset-0 backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                {back}
            </div>
        </div>
    );
};
