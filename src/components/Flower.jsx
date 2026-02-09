import { useState, useEffect, useRef } from 'react';
import FlowerImg from "/Flower.svg";

function Flower() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate rotation based on mouse position relative to the center of the window
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate distance from center (-1 to 1)
            const relativeX = (mouseX - centerX) / centerX;
            const relativeY = (mouseY - centerY) / centerY;

            // Map to degrees (e.g., -15deg to 15deg)
            const maxRotation = 15;
            // Invert the rotation so positive X (right) results in negative rotation (face right)
            const rotateY = relativeX * maxRotation * -1;
            // Invert the rotation so positive Y (down) results in positive rotation (face down? No wait)
            // Positive rotateX = Face Up.
            // If mouse is Down (relativeY > 0), we want Face Down.
            // Face Down = Negative rotateX.
            // So relativeY (>0) -> rotateX (<0).
            const rotateX = relativeY * maxRotation * -1;
            // Wait, let's re-verify X axis.
            // Thumb right. Fingers curl to BACK. Top goes BACK. Face points UP.
            // So Positive RotateX = Face UP.
            // Mouse UP (relativeY < 0). We want Face UP (Positive Rotation).
            // relativeY (-ve) * -1 = Positive. Correct.
            // Mouse DOWN (relativeY > 0). We want Face DOWN (Negative Rotation).
            // relativeY (+ve) * -1 = Negative. Correct.

            setRotation({ x: rotateX, y: rotateY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className='absolute'
            style={{
                transform: `perspective(1000px) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
                transition: 'transform 0.1s ease-out',
                zIndex: 10,
                transformStyle: 'preserve-3d'
            }}
        >
            <img
                src={FlowerImg}
                alt="Flower"
                className='flower'
            />
        </div>
    );
}

export default Flower;
