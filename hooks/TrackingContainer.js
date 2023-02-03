import React, { useState, useEffect, useRef } from 'react';

const TrackingContainer = ({ style, className, children, faktor = 100 }) => {
    const [transformX, setTransformX] = useState(0);
    const [transformY, setTransformY] = useState(0);
    const containerRef = useRef();

    useEffect(() => {
        const handleMouseMove = (event) => {
            const containerPos = containerRef.current.getBoundingClientRect();
            setTransformX(
                -(containerPos.x + containerPos.width / 2 - event.clientX) /
                    faktor
            );
            setTransformY(
                (containerPos.y + containerPos.height / 2 - event.clientY) /
                    faktor
            );
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} style={{ perspective: '1000px' }}>
            <div
                style={{
                    ...style,
                    transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`,
                    transition: 'all 200ms ease-out',
                }}
                className={className}>
                {children}
            </div>
        </div>
    );
};

export default TrackingContainer;
