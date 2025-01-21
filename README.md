# Proyecto con React + Vite - Challenger Alura LATAM.

Este repositorio contiene el proyecto **AluraMETAL**, desarrollado como parte de un _Challenger_. La aplicación permite visualizar videos organizados por categorías, con funcionalidades para agregar, editar y eliminar contenido. Fue construida utilizando **React** y **Vite**, con integración de una API para el manejo de datos.

<img src="./src/assets/img/banner-home.png" alt="Vista previa" width="400">

## Descripción del Proyecto

El proyecto se divide en dos páginas principales:

1. **Home:**
   - Muestra las cards de videos organizadas por categoría.
   - Incluye botones para editar (modal) y eliminar cada card.
   - Contiene un _header_ con el logo y botones de navegación.
   - Cuenta con un banner que muestra de forma aleatoria un video, trayendo la información del mismo.
   - Incluye un _footer_ con el logo y texto adicional.

2. **Nuevo Video:**
   - Contiene un formulario para cargar nuevos videos.
   - Reutiliza componentes del _header_ y _footer_.

### Funcionalidades

#### Construcción de la Página Home

1. **Header:**
   - Incluye el logo y botones para navegar a la Home y la página de Nuevo Video.
2. **Banner:**
   - Muestra un título, descripción y un video aleatorio utilizando datos de [mockapi.io](https://mockapi.io).
3. **Footer:**
   - Contiene el logo y texto informativo.

#### Cards de Videos

- Muestra los videos organizados por categorías: _Heavy Metal_, _Black Metal_, _Metal Progresivo_ y _Trash_.
- Cada card incluye:
  - Imagen del video.
  - Botones para editar (abre un modal) y eliminar.

#### Modal para Edición de Videos

- Formulario para editar la información de un video.
- Incluye los campos:
  - Título.
  - Categoría (select).
  - Imagen.
  - Video.
  - Descripción.
- Botón "Modificar" para actualizar los datos.

#### Página Nuevo Video

- Formulario para agregar nuevos videos con los mismos campos que el modal.
- Envía los datos a la API para crear nuevas cards.

## Integración con json-server y mockapi.io

### Configuración de json-server

1. Instala json-server globalmente:
   ```bash
   npm install -g json-server
   ```
2. Crea un archivo `db.json` con la estructura deseada.
3. Inicia el servidor:
   ```bash
   json-server --watch db.json
   ```
4. Vincula los datos de json-server con [mockapi.io](https://mockapi.io) para que el proyecto funcione una vez desplegado.

## Solicitudes HTTP

### GET - Lectura de Datos

- Realiza una solicitud `GET` para obtener los datos de videos.
- Los videos se organizan por categorías y se muestran en la página inicial.

### POST - Agregar Nuevos Videos

- Envía una solicitud `POST` desde la página de Nuevo Video para crear nuevas cards.

### PUT - Editar Videos

- Al guardar cambios en el modal, se envía una solicitud `PUT` para actualizar los datos del video.

### DELETE - Eliminar Videos

- Cada card incluye un botón de eliminación que envía una solicitud `DELETE` para quitar el video.

## Tecnologías Utilizadas

- **React**
- **Vite**
- **json-server**
- **mockapi.io**
- **HTML**
- **CSS**

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Ale-pogo/visualiza-videos.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```
4. Configura y arranca json-server si lo necesitas:
   ```bash
   json-server --watch db.json
   ```

## Despliegue

El proyecto está configurado para ser desplegado en cualquier plataforma compatible con React y Vite. Puedes usar servicios como Vercel o Netlify para el despliegue.


---


<img src="./src/assets/img/logo_cha.svg" alt="Vista previa" width="250">

© 2025 Alejandro Casulli

