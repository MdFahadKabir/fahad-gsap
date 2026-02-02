import React, { useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

export const DraggableCard = ({ children, className = "", inertia = true }) => {
    const cardRef = useRef(null);

    useGSAP(() => {
        Draggable.create(cardRef.current, {
            type: "x,y",
            edgeResistance: 0.65,
            // bounds: "body",
            // inertia: inertia,
            onDragStart: function () {
                gsap.to(this.target, { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)", duration: 0.2 });
            },
            onDragEnd: function () {
                gsap.to(this.target, { scale: 1, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", duration: 0.2 });
            }
        });
    }, { scope: cardRef });

    return (
        <div ref={cardRef} className={`inline-block cursor-grab active:cursor-grabbing ${className}`}>
            {children}
        </div>
    );
};
