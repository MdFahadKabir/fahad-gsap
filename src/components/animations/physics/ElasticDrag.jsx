import React, { useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

export const ElasticDrag = ({ children, className = "" }) => {
    const elementRef = useRef(null);

    useGSAP(() => {
        Draggable.create(elementRef.current, {
            type: "x,y",
            onDragEnd: function () {
                // Snap back with elastic ease
                gsap.to(this.target, {
                    x: 0,
                    y: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.3)"
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
