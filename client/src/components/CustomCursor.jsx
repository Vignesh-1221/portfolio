import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    let raf;
    const animate = () => {
      ringRef.current.x += (pos.x - ringRef.current.x) * 0.15;
      ringRef.current.y += (pos.y - ringRef.current.y) * 0.15;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [pos.x, pos.y]);

  useEffect(() => {
    const els = document.querySelectorAll('a, button, [role="button"]');
    const enter = () => setHover(true);
    const leave = () => setHover(false);
    els.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className={`cursor-ring ${hover ? 'cursor-ring--active' : ''}`}
        style={{
          left: ringPos.x,
          top: ringPos.y,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
