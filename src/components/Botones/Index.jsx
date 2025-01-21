import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Botones.module.css';
import homeIcon from '/img/home.svg';
import formIcon from '/img/form.svg';

const Botones = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => navigate('/')}>
        <img src={homeIcon} alt="Home" className={styles.icon} />
        <span className={styles.text}>Home</span>
      </button>
      <button className={styles.button} onClick={() => navigate('/new')}>
        <img src={formIcon} alt="Nuevo Video" className={styles.icon} />
        <span className={styles.text}>Nuevo Video</span>
      </button>
    </div>
  );
};

export default Botones;
