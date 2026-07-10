import { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Lightbox.css';

export default function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index];

  const prev = useCallback(() => {
    onIndex((index - 1 + items.length) % items.length);
  }, [index, items.length, onIndex]);

  const next = useCallback(() => {
    onIndex((index + 1) % items.length);
  }, [index, items.length, onIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  if (!item) return null;

  return (
    <motion.div
      className="lb"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button className="lb__scrim" onClick={onClose} aria-label="Close" />
      <button className="lb__nav lb__nav--prev" onClick={prev} aria-label="Previous">
        <span>←</span>
      </button>
      <div className="lb__frame">
        <img src={item.src} alt="" />
      </div>
      <button className="lb__nav lb__nav--next" onClick={next} aria-label="Next">
        <span>→</span>
      </button>
      <button className="lb__close" onClick={onClose} aria-label="Close">Close</button>
      <div className="lb__counter">
        {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </div>
    </motion.div>
  );
}
