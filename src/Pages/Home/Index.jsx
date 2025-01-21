import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from "../../components/Banner/Index"; 
import VideoCard from '../../components/VideoCard/Index';
import Modal from '../../components/Modal/Index';
import styles from './Index.module.css';
import { API_BASE_URL } from "../../apiconfig";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVideo, setEditingVideo] = useState(null);

    // Obtener los datos de los videos
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(API_BASE_URL);
                /* const response = await axios.get('https://67826f08c51d092c3dcf7b16.mockapi.io/api/v1/videos'); */
                const fetchedVideos = response.data.map(video => ({
                    ...video,
                    thumbnail: video.image,
                }));
                setVideos(fetchedVideos);
            } catch (error) {
                console.error('Error al obtener los videos:', error);
            }
        };
        fetchVideos();
    }, []);

    // Función para manejar la edición
    const handleEdit = (id) => {
        const videoToEdit = videos.find((video) => video.id === id);
        setEditingVideo(videoToEdit);
        setIsModalOpen(true);
    };

    // Función para guardar los cambios
    const handleSave = async (updatedVideo) => {
        try {
            await axios.put(`${API_BASE_URL}/${updatedVideo.id}`, updatedVideo);
            /* await axios.put(`https://67826f08c51d092c3dcf7b16.mockapi.io/api/v1/videos/${updatedVideo.id}`, updatedVideo); */
            setVideos((prevVideos) =>
                prevVideos.map((video) =>
                    video.id === updatedVideo.id ? updatedVideo : video
                )
            );
            setIsModalOpen(false);
            setEditingVideo(null);
        } catch (error) {
            console.error('Error al guardar el video:', error);
        }
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingVideo(null);
    };

    // Categorías x colores
    const categoryColors = {
        "Heavy Metal": "var(--verde)",
        "Black Metal": "var(--rojo)",
        "Trash": "var(--azul5)",
        "Metal Progresivo": "var(--amarillo)"
    };

    // Renderizamos los videos por categoría
    const renderVideosByCategory = () => {
        const categories = [...new Set(videos.map((video) => video.category))];

        return categories.map((category) => (
            <div key={category} className={styles.categorySection}>
                <h1
                    className={styles.categoryTitulo}
                    style={{ backgroundColor: categoryColors[category] || 'gray' }}
                >
                    {category}
                </h1>
                <div className={styles.videoGrid}>
                    {videos
                        .filter((video) => video.category === category)
                        .map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                onEdit={handleEdit}
                                onDelete={(id) =>
                                    setVideos((prevVideos) =>
                                        prevVideos.filter((video) => video.id !== id)
                                    )
                                }
                            />
                        ))}
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Banner /> 
            <div className={styles.container}>
                {renderVideosByCategory()}
            </div>

            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <h2>Editar Video</h2>
                    {editingVideo && (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const updatedVideo = {
                                    ...editingVideo,
                                    title: e.target.title.value,
                                    description: e.target.description.value,
                                    image: e.target.image.value,
                                    video: e.target.video.value,
                                };
                                handleSave(updatedVideo);
                            }}
                        >
                            <div className={styles.formGroup}>
                                <label htmlFor="title">Título</label>
                                <input
                                    type="text"
                                    id="title"
                                    defaultValue={editingVideo.title}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="description">Descripción</label>
                                <textarea
                                    id="description"
                                    defaultValue={editingVideo.description}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="image">Imagen</label>
                                <input
                                    type="url"
                                    id="image"
                                    defaultValue={editingVideo.image}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="video">Video (URL)</label>
                                <input
                                    type="url"
                                    id="video"
                                    defaultValue={editingVideo.video}
                                    required
                                />
                            </div>
                            <div className={styles.actions}>
                                <button type="submit" className={styles.saveButton}>
                                    Modificar
                                </button>
                                {/* <button type="button" className={styles.clearButton}
                                    onClick={() => {
                                        e.target.reset();
                                    }}
                                >
                                    Limpiar
                                </button> */}
                            </div>
                        </form>
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Home;
