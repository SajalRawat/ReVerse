import { useEffect, useState } from 'react';

function SunCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false); // Initially false to avoid flash at 0,0

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Use requestAnimationFrame for smoother updates if needed, 
            // but React state updates might be enough for simple cursor.
            // Let's stick to state for now, if laggy we can use ref + direct DOM manipulation.
            setPosition({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#FFD700', // Gold
                pointerEvents: 'none',
                transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
                zIndex: 9999,
                boxShadow: `
          0 0 15px #FFD700,
          0 0 30px #FFA500,
          0 0 50px #FF8C00
        `,
                mixBlendMode: 'screen',
                transition: 'transform 0.05s linear', // smooth follow
            }}
        />
    );
}

export default SunCursor;
