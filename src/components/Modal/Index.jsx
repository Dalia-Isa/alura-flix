import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src={`${import.meta.env.BASE_URL}img/x.svg`}
          alt="Cerrar"
          className={styles.x}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
