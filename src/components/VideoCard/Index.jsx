import React, { useState } from 'react';
import styles from './VideoCard.module.css';
import ModalVideo from '../ModalVideo/Index';
import editIcon from '../../assets/icons/edit-icon.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import axios from 'axios';
import { API_BASE_URL } from "../../apiconfig";

const VideoCard = ({ video, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      /* await axios.delete(`https://67826f08c51d092c3dcf7b16.mockapi.io/api/v1/videos/${id}`); */
      onDelete(id);
    } catch (error) {
      console.error('Error al eliminar el video:', error);
    }
  };

  return (
    <>
      <div
        className={`${styles.card} ${styles[video.category.replace(/\s+/g, '')]}`}
        onMouseEnter={(e) => e.currentTarget.classList.add(styles.zoom)}
        onMouseLeave={(e) => e.currentTarget.classList.remove(styles.zoom)}
      >
        <img
          src={video.image}
          alt={video.title}
          className={styles.thumbnail}
          onClick={handleOpenModal}
          style={{ cursor: 'pointer' }}
        />
        <div className={styles.info}>
 {/*          <h3 className={styles.title}>{video.title}</h3>
          <p className={`${styles.category} ${styles[`${video.category.replace(/\s+/g, '')}Text`]}`}>
            {video.category}
          </p> */}
        </div>
        <div className={styles.actions}>
          <button onClick={() => onEdit(video.id)} className={styles.editButton}>
            <img src={editIcon} alt="Edit" className={styles.icon} />
            Editar
          </button>
          <button
            onClick={() => handleDelete(video.id)}
            className={`${styles.deleteButton} ${styles[`${video.category.replace(/\s+/g, '')}Border`]}`}
          >
            <img src={deleteIcon} alt="Delete" className={styles.icon} />
            Eliminar
          </button>
        </div>
      </div>
      <ModalVideo
        isOpen={isModalOpen}
        videoUrl={video.video}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default VideoCard;