import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allPhotos } from '../data/photos';

const Lightbox = ({ photos, index, onClose, onPrev, onNext }) => {
    const handleKey = useCallback((e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') onPrev();
        if (e.key === 'ArrowRight') onNext();
    }, [onClose, onPrev, onNext]);

    React.useEffect(() => {
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [handleKey]);

    return (
        <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

            <button
                className="lightbox-nav prev"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous"
            >
                ‹
            </button>

            <motion.img
                key={photos[index].src}
                src={photos[index].src}
                className="lightbox-img"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.28 }}
                onClick={(e) => e.stopPropagation()}
                decoding="async"
                alt=""
            />

            <button
                className="lightbox-nav next"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next"
            >
                ›
            </button>

            <div className="lightbox-counter">
                {index + 1} / {photos.length}
            </div>
        </motion.div>
    );
};

const Photography = () => {
    const [lightboxIdx, setLightboxIdx] = useState(null);

    const open = (i) => setLightboxIdx(i);
    const close = () => setLightboxIdx(null);
    const prev = () => setLightboxIdx(i => (i - 1 + allPhotos.length) % allPhotos.length);
    const next = () => setLightboxIdx(i => (i + 1) % allPhotos.length);

    return (
        <>
            <div className="photo-page">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <div className="section-label">Photography</div>
                    <h1 className="section-title">
                        Through the lens
                    </h1>
                    <p style={{
                        marginTop: '18px', fontSize: '17px',
                        color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '480px'
                    }}>
                        Documenting light, moments, and the world between frames.
                        Shot across Bengaluru and beyond.
                    </p>

                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                            {allPhotos.length} photographs
                        </span>
                        <span style={{ color: 'var(--text-dim)' }}>·</span>
                        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                            Click to open
                        </span>
                    </div>
                </motion.div>

                <div className="photo-masonry">
                    {allPhotos.map((photo, i) => (
                        <motion.div
                            key={photo.src}
                            className="masonry-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.5, delay: Math.min((i % 6) * 0.06, 0.35) }}
                            onClick={() => open(i)}
                        >
                            <img
                                src={photo.src}
                                alt=""
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightboxIdx !== null && (
                    <Lightbox
                        photos={allPhotos}
                        index={lightboxIdx}
                        onClose={close}
                        onPrev={prev}
                        onNext={next}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Photography;
