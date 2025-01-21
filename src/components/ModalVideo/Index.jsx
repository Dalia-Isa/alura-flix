import React from 'react';
import styles from './ModalVideo.module.css';

const ModalVideo = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          src={`${import.meta.env.BASE_URL}img/x.svg`}
          alt="Cerrar"
          className={styles.x}
          onClick={onClose}
        />        
        <iframe
          src={videoUrl}
          title="Video Player"
          className={styles.video}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ModalVideo;
