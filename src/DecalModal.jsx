// DecalModal.jsx
import React, { useState } from 'react';
import {
    AiFillVideoCamera
} from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { state } from './store';
import './assets/styles/style.css';

export default function DecalModal({ decal, onClose }) {
    const slides =
        decal.slides && Array.isArray(decal.slides) && decal.slides.length > 0
            ? decal.slides
            : [decal.full];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const snap = useSnapshot(state);

    const handleDotClick = (index, e) => {
        e.stopPropagation();
        setCurrentSlide(index);
    };

    const handleImageClick = (e) => {
        e.stopPropagation();
        setFullscreen(true);
    };

    const handleCloseFullscreen = (e) => {
        e.stopPropagation();
        setFullscreen(false);
    };

    const panelVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: {
            x: '0%',
            opacity: 1,
            transition: { type: 'spring', stiffness: 70, damping: 12, duration: 0.7 }
        },
        exit: {
            x: '-100%',
            opacity: 0,
            transition: { type: 'spring', stiffness: 70, damping: 12, duration: 0.5 }
        }
    };

    return (
        <>
            <motion.div
                className="decal-panel-overlay"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={panelVariants}
                onClick={onClose}
            >
                <motion.div
                    className="decal-panel-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="content-wrapper">
                        <div className="slideshow-container">
                            <img
                                src={slides[currentSlide]}
                                alt="Selected Decal"
                                className="decal-image"
                                onClick={handleImageClick}
                            />
                            {slides.length > 1 && (
                                <div className="dots-container">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => handleDotClick(index, e)}
                                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <p className="legend">
                            {decal.legend || 'Decal description here'}
                        </p>
                        {decal.buttonLink && (
                            <div className="link-container">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(decal.buttonLink, '_blank');
                                    }}
                                    className="custom-btn"
                                >
                                    BONUS: KINO MODE<AiFillVideoCamera size="1.3em" />
                                </button>
                            </div>
                        )}
                        <div className="spacer" />
                        <button className="modal-close custom-btn" onClick={onClose}>
                            FERMER
                        </button>
                    </div>
                </motion.div>
            </motion.div>
            <AnimatePresence>
                {fullscreen && (
                    <motion.div
                        className="fullscreen-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseFullscreen}
                    >
                        <motion.img
                            src={slides[currentSlide]}
                            alt="Fullscreen Decal"
                            className="fullscreen-image"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
