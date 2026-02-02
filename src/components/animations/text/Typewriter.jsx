import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Typewriter = ({
    text,
    speed = 0.05,
    delay = 0,
    cursor = true,
    className = ""
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const cursorRef = useRef(null);

    useGSAP(() => {
        let ctx = gsap.context(() => {
            // Cursor blinking
            if (cursor) {
                gsap.to(cursorRef.current, {
                    opacity: 0,
                    repeat: -1,
                    yoyo: true,
                    duration: 0.5,
                    ease: "steps(1)"
                });
            }

            // Typing effect
            const tl = gsap.timeline({ delay });
            const chars = text.split("");

            chars.forEach((char, i) => {
                tl.to({}, {
                    duration: speed,
                    onComplete: () => {
                        setDisplayedText(prev => prev + char);
                    }
                });
            });
        });

        return () => ctx.revert();
    }, [text, speed, delay]);

    return (
        <div className={className}>
            {displayedText}
            {cursor && <span ref={cursorRef} className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"></span>}
        </div>
    );
};
