import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Banner.module.css';
import banner from '../../assets/img/banner-home.png';
import { API_BASE_URL } from "../../apiconfig";

const categoryColors = {
  "Heavy Metal": "var(--verde)",
  "Black Metal": "var(--rojo)",
  "Trash": "var(--azul5)",
  "Metal Progresivo": "var(--amarillo)",
};

const Banner = () => {
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    const fetchRandomVideo = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        /* const response = await axios.get('https://67826f08c51d092c3dcf7b16.mockapi.io/api/v1/videos'); */
        const videos = response.data;
        const randomIndex = Math.floor(Math.random() * videos.length);
        setRandomVideo(videos[randomIndex]);
      } catch (error) {
        console.error('Error al obtener los videos:', error);
      }
    };

    fetchRandomVideo();
  }, []);

  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url(${banner})` }}
    >
      {randomVideo && (
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <h2 style={{ color: categoryColors[randomVideo.category] || 'white' }}>
              {randomVideo.category}
            </h2>
            <p>{randomVideo.description}</p>
          </div>
          <div className={styles.rightSection}>
            <iframe
              src={randomVideo.video}
              title={randomVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
