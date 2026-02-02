import React, { useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

export const MagneticDrag = ({ children, className = "" }) => {
    const elementRef = useRef(null);

    useGSAP(() => {
        Draggable.create(elementRef.current, {
            type: "x,y",
            edgeResistance: 0.9, // High resistance feels "heavy" or magnetic
            // bounds: { minX: -100, maxX: 100, minY: -100, maxY: 100 }, // Limited range
            onDragEnd: function () {
                // Return to center slowly
                gsap.to(this.target, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            }
        });
    }, { scope: elementRef });

    return (
        <div ref={elementRef} className={`inline-block cursor-grab active:cursor-grabbing ${className}`}>
            {children}
        </div>
    );
};
