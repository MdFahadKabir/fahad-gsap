import React, { useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

export const SnapDraggable = ({ children, className = "", snapPoints = [] }) => {
    const elementRef = useRef(null);

    useGSAP(() => {
        Draggable.create(elementRef.current, {
            type: "x,y",
            edgeResistance: 0.65,
            // bounds: "parent",
            // inertia: true,
            liveSnap: {
                points: snapPoints.length > 0 ? snapPoints : [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: -100, y: 0 }],
                radius: 50
            },
            onDragStart: function () {
                gsap.to(this.target, { scale: 1.1, duration: 0.2 });
            },
            onDragEnd: function () {
                gsap.to(this.target, { scale: 1, duration: 0.2 });
            }
        });
    }, { scope: elementRef });

    return (
        <div ref={elementRef} className={`inline-block cursor-grab active:cursor-grabbing ${className}`}>
            {children}
        </div>
    );
};
