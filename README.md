# 📺 Proyecto de Gestión de Series y Géneros 🎬

¡Bienvenido al proyecto de gestión de series y géneros! 🎉 Esta aplicación web te permite agregar, editar, eliminar y buscar tus series favoritas y sus géneros. Todo esto construido con **Express** y **Handlebars** para una experiencia dinámica y sencilla.
![alt text](/public/img/image.png)
![alt text](/public/img/image-1.png)
![alt text](/public/img/image-2.png)

## 🚀 Comenzando

### Requisitos

- **Node.js** 🟩
- **npm** (Node Package Manager)

### Instalación

1. **Clona** el repositorio en tu máquina local:
    ```sh
    git clone <URL-del-repositorio>
    ```
2. **Navega** al directorio del proyecto:
    ```sh
    cd nombre-del-proyecto
    ```
3. **Instala** las dependencias del proyecto:
    ```sh
    npm install
    ```

### Uso

1. **Ejecuta** el servidor:
    ```sh
    node app.js
    ```
2. **Abre** tu navegador web y navega a `http://localhost:8080` para ver la aplicación en acción.

## 🛠️ Configuración


### Plantillas Handlebars

Las plantillas Handlebars permiten renderizar contenido dinámico. Configuración del motor de plantillas en `app.js`:

```javascript
const { engine } = require("express-handlebars");

app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts",
    default: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");
```

### Rutas Principales

- **`/`**: Página de inicio.
- **`/modSeries`**: Agregar una nueva serie.
- **`/modGeneros`**: Agregar un nuevo género.
- **`/EditSeries/:id`**: Editar una serie existente.
- **`/EditGeneros/:id`**: Editar un género existente.
- **`/deteteSerie`**: Eliminar una serie.
- **`/deteteGenero`**: Eliminar un género.
- **`/buscarSeries`**: Buscar series por nombre o género.

### Controladores

Los controladores, ubicados en el directorio `controllers`, manejan la lógica de la aplicación para operaciones como agregar, editar y eliminar series y géneros.

### Manejo de Archivos JSON

El archivo `jsonFileHandler.js` en `utils` maneja la lectura y escritura de datos en archivos JSON. Los datos se almacenan en `data/series.json` y `data/generos.json`.

## 🌟 Contribución

¿Quieres contribuir? ¡Genial! Sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una **nueva rama** (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus **cambios** y haz **commits** (`git commit -m 'Agregar nueva característica'`).
4. **Sube** tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un **Pull Request**.

## 📜 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.

## 📧 Contacto

Para cualquier pregunta o comentario, puedes contactar al autor:

- **Nombre**: Gary Alexander Campusano Paredes
- **Correo**: [ingcampusano@outlook.com](mailto:ingcampusano@outlook.com)
- **LinkedIn**: [Linkedin](https://www.linkedin.com/in/gary-alexander-campusano-paredes-87a28724a/)
