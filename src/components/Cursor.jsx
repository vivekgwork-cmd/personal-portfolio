import { useEffect, useRef } from 'react';

export default function Cursor() {
  const wrapperRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const state = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!wrapper || !dot || !ring) return;

    const onMove = (e) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const raf = () => {
      const s = state.current;
      s.rx += (s.x - s.rx) * 0.18;
      s.ry += (s.y - s.ry) * 0.18;
      ring.style.transform = `translate3d(${s.rx}px, ${s.ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor="hover"]');
      wrapper.classList.toggle('hover', !!target);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="cursor-wrapper" aria-hidden>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
