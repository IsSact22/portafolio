# Imágenes de Proyectos

Esta carpeta contiene las imágenes de los proyectos destacados.

## 📁 Estructura

```
public/projects/
├── project-1.jpg
├── project-2.png
├── project-3.webp
└── ...
```

## 📝 Cómo usar

1. **Guarda tus imágenes aquí** con nombres descriptivos
2. **En la base de datos**, guarda la ruta relativa:
   ```
   image: "/projects/nombre-proyecto.jpg"
   ```

## 🎨 Recomendaciones

- **Formato**: WebP (mejor compresión) o JPG/PNG
- **Tamaño**: 1200x800px (ratio 3:2)
- **Peso**: Máximo 500KB por imagen
- **Nombres**: usa-guiones-en-minusculas.jpg

## 🖼️ Ejemplo de uso en Postman

Cuando crees un proyecto con POST `/api/projects`:

```json
{
  "title": "Mi Proyecto",
  "description": "Descripción del proyecto",
  "image": "/projects/mi-proyecto.jpg",
  "technologies": ["React", "Node.js"],
  "featured": true,
  "status": "published"
}
```

## 🌐 Para Producción

Considera migrar a Cloudinary:
1. Crea cuenta en https://cloudinary.com (gratis)
2. Sube las imágenes
3. Usa la URL completa: `https://res.cloudinary.com/...`
