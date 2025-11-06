# 📸 Guía de Imágenes para Proyectos

Esta guía explica cómo agregar imágenes a tus proyectos en el portafolio.

## 📁 Ubicación de las Imágenes

### Opción 1: Local (Desarrollo)

Guarda tus imágenes en:
```
frontend/public/projects/
```

**Ejemplo:**
```
frontend/public/projects/
├── ecommerce-app.jpg
├── blog-platform.png
├── portfolio-website.webp
└── mobile-app.jpg
```

### Opción 2: Cloudinary (Producción - Recomendado)

1. Crea cuenta gratuita en [Cloudinary](https://cloudinary.com)
2. Sube tus imágenes
3. Copia la URL generada

---

## 🎨 Especificaciones de Imágenes

### Tamaño Recomendado
- **Ancho**: 1200px
- **Alto**: 800px
- **Ratio**: 3:2 (horizontal)

### Formato
- **Preferido**: WebP (mejor compresión)
- **Alternativo**: JPG o PNG
- **Peso máximo**: 500KB

### Nombres de Archivo
- Usa minúsculas
- Separa palabras con guiones
- Ejemplo: `mi-proyecto-web.jpg`

---

## 📝 Cómo Agregar Imágenes a un Proyecto

### 1. Guarda la imagen

Coloca tu imagen en `frontend/public/projects/`

### 2. Crea el proyecto en la base de datos

**Con Postman:**

```http
POST http://localhost:3000/api/projects
Content-Type: application/json

{
  "title": "E-commerce App",
  "description": "Aplicación de comercio electrónico con React y Node.js",
  "longDescription": "Descripción detallada del proyecto...",
  "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
  "image": "/projects/ecommerce-app.jpg",
  "gallery": [],
  "demoUrl": "https://demo.ejemplo.com",
  "repoUrl": "https://github.com/usuario/proyecto",
  "status": "published",
  "featured": true,
  "category": "Web Development",
  "order": 1
}
```

### 3. Verifica en el frontend

Abre `http://localhost:3001` y verás tu proyecto con la imagen.

---

## 🖼️ Ejemplos de URLs

### Local (Desarrollo)
```json
{
  "image": "/projects/mi-proyecto.jpg"
}
```

### Cloudinary (Producción)
```json
{
  "image": "https://res.cloudinary.com/tu-cuenta/image/upload/v1234567890/projects/mi-proyecto.jpg"
}
```

### URL Externa
```json
{
  "image": "https://ejemplo.com/imagen.jpg"
}
```

---

## 🔧 Optimizar Imágenes

### Herramientas Online (Gratis)
- [TinyPNG](https://tinypng.com/) - Compresión PNG/JPG
- [Squoosh](https://squoosh.app/) - Conversión a WebP
- [Compressor.io](https://compressor.io/) - Compresión general

### Desde la Terminal
```bash
# Instalar herramienta (opcional)
npm install -g sharp-cli

# Convertir a WebP
sharp -i input.jpg -o output.webp --webp

# Redimensionar
sharp -i input.jpg -o output.jpg --resize 1200 800
```

---

## 🚀 Migrar a Cloudinary (Producción)

### 1. Crear cuenta
- Ve a [cloudinary.com](https://cloudinary.com)
- Regístrate (plan gratuito: 25GB)

### 2. Configurar
```bash
# Instalar SDK (opcional)
npm install cloudinary
```

### 3. Subir imágenes
- Usa el dashboard web
- O usa la API de Cloudinary

### 4. Actualizar base de datos
```sql
UPDATE projects 
SET "image" = 'https://res.cloudinary.com/tu-cuenta/...'
WHERE id = 'project-id';
```

---

## 📋 Checklist

Antes de agregar un proyecto con imagen:

- [ ] Imagen optimizada (< 500KB)
- [ ] Tamaño correcto (1200x800px)
- [ ] Formato WebP o JPG
- [ ] Nombre descriptivo en minúsculas
- [ ] Guardada en `frontend/public/projects/`
- [ ] URL correcta en el campo `image`
- [ ] Proyecto marcado como `featured: true` si quieres que aparezca en inicio

---

## ❓ Troubleshooting

### La imagen no se muestra
1. Verifica que la ruta sea correcta: `/projects/nombre.jpg`
2. Revisa que el archivo exista en `frontend/public/projects/`
3. Recarga la página con Ctrl+F5
4. Revisa la consola del navegador para errores

### La imagen se ve pixelada
- Usa una imagen de mayor resolución (1200x800px mínimo)
- Asegúrate de que la imagen original sea de buena calidad

### La página carga lento
- Optimiza las imágenes (< 500KB cada una)
- Considera usar WebP en lugar de JPG/PNG
- Migra a Cloudinary para usar su CDN

---

## 💡 Tips

1. **Usa capturas de pantalla reales** de tus proyectos
2. **Mockups profesionales**: [Smartmockups](https://smartmockups.com/)
3. **Imágenes de stock**: [Unsplash](https://unsplash.com/) si no tienes capturas
4. **Mantén consistencia** en el estilo de todas las imágenes
5. **Agrega texto alternativo** descriptivo en el campo `title`

---

## 🎯 Ejemplo Completo

```bash
# 1. Guarda la imagen
frontend/public/projects/mi-super-app.jpg

# 2. Crea el proyecto (Postman)
POST http://localhost:3000/api/projects
{
  "title": "Mi Super App",
  "description": "Una aplicación increíble",
  "image": "/projects/mi-super-app.jpg",
  "technologies": ["React", "Node.js"],
  "featured": true,
  "status": "published"
}

# 3. ¡Listo! Verifica en http://localhost:3001
```
