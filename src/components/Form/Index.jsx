import React, { useState } from 'react'; 
import styles from './Form.module.css';
import axios from 'axios';
import { API_BASE_URL } from "../../apiconfig";


const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const [error, setError] = useState('');

  // administra cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validar y enviar datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación
    if (
      !formData.title ||
      !formData.category ||
      !formData.image ||
      !formData.video ||
      !formData.description
    ) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    // Convierte la direccion del video en formato embed
    const embedUrl = formData.video.includes("watch?v=")
      ? formData.video.replace("watch?v=", "embed/")
      : formData.video;

    const updatedFormData = {
      ...formData,
      video: embedUrl,
    };

    try {
      await axios.post(API_BASE_URL, updatedFormData);
      /* await axios.post('https://67826f08c51d092c3dcf7b16.mockapi.io/api/v1/videos', updatedFormData); */
      /*Direccion local*/
      /* await axios.post('http://localhost:3000/videos', updatedFormData); */
      setError('');
      alert('Tarjeta creada con éxito');
      setFormData({ title: '', category: '', image: '', video: '', description: '' });
    } catch (err) {
      setError('Error al guardar los datos. Intente nuevamente.');
    }
  };

  const handleReset = () => {
    setFormData({ title: '', category: '', image: '', video: '', description: '' });
    setError('');
  };

  return (
    <div className={styles.Form}>
      <h1>Nuevo video</h1>
      <p>Complete el formulario para crear una nueva tarjeta de video</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ingrese el título"
          />
        </label>
        <label>
          Categoría:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Seleccione una categoría</option>
            <option value="Heavy Metal">Heavy Metal</option>
            <option value="Black Metal">Black Metal</option>
            <option value="Trash">Trash</option>
            <option value="Metal Progresivo">Metal Progresivo</option>
          </select>
        </label>
        <label>
          Imagen:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Ingrese el enlace de la imagen"
          />
        </label>
        <label>
          Video:
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="Ingrese el enlace del video"
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="¿De qué se trata este vídeo?"
          />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.buttons}>
          <button type="submit" className={styles.saveButton}>Guardar</button>
          <button type="button" onClick={handleReset} className={styles.resetButton}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
