# 📝 Guía de Personalización del Portafolio

Esta guía te ayudará a personalizar tu portafolio paso a paso.

## 🎯 Pasos Rápidos

### 1. Información Personal Básica

**Archivo: `frontend/app/sections/Hero.tsx`**

Actualiza:
- Tu nombre y título profesional (líneas 18-23)
- Descripción y especialización (líneas 26-28)
- Stack principal (línea 32)
- Enlaces sociales (líneas 52-77)

```typescript
// Ejemplo de cambios:
<h1>Tu Nombre</h1>
<p>Tu especialización específica</p>
```

### 2. Sobre Mí

**Archivo: `frontend/app/sections/About.tsx`**

Personaliza:
- Descripción profesional (líneas 11-25)
- Años de experiencia (línea 47)
- Especialización técnica (líneas 13-15)

### 3. Proyectos

**Archivo: `frontend/app/sections/Projects.tsx`**

Edita el array `projects` (líneas 7-50):

```typescript
const projects = [
  {
    title: "Nombre de tu proyecto",
    description: "Descripción técnica detallada...",
    role: "Tu rol específico en el proyecto",
    stack: ["Laravel", "PostgreSQL", "Redis"],
    github: "https://github.com/tu-usuario/proyecto",
    demo: "https://demo-url.com", // Opcional
    diagram: "/images/tu-diagrama.png" // Opcional
  },
  // Agrega más proyectos...
];
```

**Importante:** 
- Enfoca la descripción en la arquitectura y decisiones técnicas
- Menciona el problema que resolviste
- Incluye métricas si es posible (ej: "Redujo tiempo de respuesta en 40%")

### 4. Stack Tecnológico

**Archivo: `frontend/app/sections/Stack.tsx`**

Actualiza el array `stackCategories` (líneas 7-30):

```typescript
const stackCategories = [
  {
    category: 'Backend',
    icon: <Server size={24} />,
    technologies: ['Tus', 'Tecnologías', 'Backend']
  },
  // Más categorías...
];
```

También actualiza las metodologías (líneas 40-54).

### 5. Arquitecturas

**Archivo: `frontend/app/sections/Architecture.tsx`**

Personaliza el array `architectures` con las arquitecturas que dominas (líneas 7-48).

### 6. Contacto

**Archivo: `frontend/app/sections/Contact.tsx`**

Actualiza:
- Email (líneas 18, 24)
- GitHub username (líneas 30, 36)
- LinkedIn (líneas 42, 48)
- Ubicación (línea 60)

### 7. Metadata SEO

**Archivo: `frontend/app/layout.tsx`**

Personaliza el metadata (líneas 15-18):

```typescript
export const metadata: Metadata = {
  title: "Tu Nombre - Desarrollador Full Stack",
  description: "Tu descripción profesional optimizada para SEO",
};
```

### 8. Footer

**Archivo: `frontend/app/components/Footer.tsx`**

Actualiza:
- Nombre/marca (línea 12)
- Enlaces sociales (líneas 21-43)
- Copyright (línea 51)

## 🖼️ Diagramas de Arquitectura

### Cómo crear diagramas profesionales:

**Herramientas recomendadas:**
1. **Draw.io / diagrams.net** (Gratis)
   - Plantillas para arquitectura de software
   - Exporta en PNG de alta calidad

2. **Excalidraw** (Gratis)
   - Estilo hand-drawn profesional
   - Ideal para diagramas rápidos

3. **Lucidchart** (Freemium)
   - Plantillas profesionales
   - Colaboración en tiempo real

4. **Mermaid** (Código)
   - Diagramas como código
   - Integración con GitHub

### Ejemplo de diagrama simple (ASCII):

```
┌─────────────────┐
│   API Gateway   │
└────────┬────────┘
         │
    ┌────▼────┐
    │ Service │
    └────┬────┘
         │
    ┌────▼────┐
    │   DB    │
    └─────────┘
```

### Ubicación de imágenes:

Guarda tus diagramas en: `frontend/public/images/`

Nombres sugeridos:
- `diagram-payments.png`
- `diagram-ecommerce.png`
- `diagram-microservices.png`

## 📄 CV / Resume

Coloca tu CV en: `frontend/public/cv.pdf`

El botón de descarga en el Hero lo enlazará automáticamente.

## 🎨 Personalización de Colores

**Archivo: `frontend/app/globals.css`**

Si quieres cambiar la paleta de colores, modifica las clases de Tailwind:

```css
/* Colores actuales */
bg-zinc-950  /* Background principal */
bg-zinc-900  /* Cards */
bg-zinc-800  /* Borders */
text-blue-400 /* Accent color */
```

Para cambiar el color de acento de azul a otro:
- Busca y reemplaza `blue-` por `purple-`, `green-`, etc.

## 🚀 Consejos para Proyectos Backend

### Qué destacar:

1. **Arquitectura**
   - Patrón utilizado (Clean, Hexagonal, etc.)
   - Separación de capas
   - Decisiones de diseño

2. **Escalabilidad**
   - Cómo manejaste el crecimiento
   - Optimizaciones implementadas
   - Caché, queues, etc.

3. **Tecnologías**
   - Stack completo
   - Por qué elegiste cada tecnología
   - Integraciones con servicios externos

4. **Problemas Resueltos**
   - Desafío técnico principal
   - Tu solución
   - Resultado/impacto

### Ejemplo de descripción efectiva:

❌ **Mal:**
"API de e-commerce con Laravel"

✅ **Bien:**
"Arquitectura de microservicios para e-commerce con Laravel y PostgreSQL. Implementé separación de servicios (Auth, Products, Orders) con comunicación asíncrona mediante Redis. Incluye autenticación JWT, rate limiting y sistema de caché que redujo el tiempo de respuesta en un 60%."

## 📊 Métricas que Impresionan

Incluye números cuando sea posible:
- "Maneja 10,000+ requests/día"
- "Redujo tiempo de consulta de 2s a 200ms"
- "Procesa 50,000 transacciones diarias"
- "API con 99.9% uptime"

## 🔗 Enlaces Importantes

Asegúrate de actualizar todos los enlaces:
- [ ] GitHub personal
- [ ] LinkedIn
- [ ] Email
- [ ] Enlaces a proyectos
- [ ] Demos (si aplica)

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] Toda la información personal está actualizada
- [ ] Los enlaces funcionan correctamente
- [ ] Las imágenes de diagramas están cargadas
- [ ] El CV está en `/public/cv.pdf`
- [ ] Los proyectos tienen descripciones técnicas detalladas
- [ ] El metadata SEO está optimizado
- [ ] Probaste en mobile y desktop
- [ ] No hay errores en consola

## 🎯 Próximos Pasos

1. Personaliza toda la información
2. Agrega tus proyectos reales
3. Crea diagramas de arquitectura
4. Prueba en diferentes dispositivos
5. Deploy en Vercel
6. Comparte en LinkedIn

---

¿Necesitas ayuda? Revisa el README.md principal o abre un issue en el repositorio.
