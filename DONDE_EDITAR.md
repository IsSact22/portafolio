# 📍 Dónde Editar Tu Información

Guía rápida para personalizar tu portafolio. Todos los datos están organizados al inicio de cada archivo.

## 🏠 Hero / Inicio

**Archivo:** `frontend/app/sections/Hero.tsx`

```typescript
// Líneas 5-20
const heroData = {
  greeting: "I'm",                      // Saludo
  name: 'Tu Nombre',                    // Cambia esto
  title: 'Backend Developer & Full Stack', // Tu título
  subtitle: 'Tu especialización...',    // Descripción corta
  stack: 'Laravel • Node.js...',        // Tecnologías principales
  availability: 'Disponible...',        // Estado
  profileImage: '/profile.jpg',         // Tu foto (agrega en /public/)
  social: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-usuario',
    email: 'tu@email.com',
  },
  cv: '/cv.pdf',                        // Ruta a tu CV
};
```

**📸 Foto de Perfil:**
- Agrega tu foto en `frontend/public/profile.jpg`
- Recomendado: 400x400px o 800x800px
- Formato: JPG, PNG o WebP
- Por defecto usa un placeholder SVG

## 👨‍💻 Sobre Mí

**Archivo:** `frontend/app/sections/About.tsx`

```typescript
// Líneas 5-29
const aboutData = {
  description: [
    'Párrafo 1...',
    'Párrafo 2...',
    'Párrafo 3...',
  ],
  highlights: [
    {
      icon: Code2,
      title: 'Especialización',
      description: 'Tu especialización...',
      technologies: ['Tech1', 'Tech2'],
    },
    // Más highlights...
  ],
};
```

## 🎯 Skills (Nuevo)

**Archivo:** `frontend/app/sections/Skills.tsx`

```typescript
// Líneas 5-50
const skillsData = [
  {
    name: 'Laravel',
    icon: '🔷',      // Emoji o icono
    color: 'red',    // Color del hover
  },
  // Más skills...
];
```

**Colores disponibles:** `blue`, `orange`, `green`, `purple`, `yellow`, `red`, `cyan`

## ⚙️ Proyectos

**Archivo:** `frontend/app/sections/Projects.tsx`

```typescript
// Líneas 6-43
const projectsData = [
  {
    title: 'Nombre del Proyecto',
    description: 'Descripción técnica detallada...',
    role: 'Tu rol específico',
    stack: ['Laravel', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/tu-usuario/proyecto',
    demo: 'https://demo.com',           // Opcional
    diagram: '/images/diagrama.png',    // Opcional
  },
  // Más proyectos...
];
```

## 🧩 Stack Tecnológico

**Archivo:** `frontend/app/sections/Stack.tsx`

```typescript
// Líneas 6-43
const stackData = {
  categories: [
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Laravel', 'Node.js', 'Express'],
    },
    // Más categorías...
  ],
  methodologies: [
    {
      title: 'Arquitectura',
      items: ['Clean Architecture', 'Hexagonal'],
    },
    // Más metodologías...
  ],
};
```

## 🧠 Arquitecturas

**Archivo:** `frontend/app/sections/Architecture.tsx`

```typescript
// Líneas 6-51
const architecturesData = [
  {
    title: 'Clean Architecture',
    description: 'Descripción...',
    icon: Layers3,
    examples: [
      'Ejemplo 1',
      'Ejemplo 2',
    ],
  },
  // Más arquitecturas...
];
```

## 📬 Contacto

**Archivo:** `frontend/app/sections/Contact.tsx`

```typescript
// Líneas 5-16
const contactData = {
  email: 'tu@email.com',
  github: {
    username: 'tu-usuario',
    url: 'https://github.com/tu-usuario',
  },
  linkedin: {
    username: 'tu-usuario',
    url: 'https://linkedin.com/in/tu-usuario',
  },
  location: 'Tu Ciudad, País',
};
```

## 🎨 Colores y Estilos

**Archivo:** `frontend/app/globals.css`

Para cambiar el color de acento (azul por defecto):
- Busca `blue-` en todos los archivos
- Reemplaza por `purple-`, `green-`, `red-`, etc.

## 📄 Metadata SEO

**Archivo:** `frontend/app/layout.tsx`

```typescript
// Líneas 15-18
export const metadata: Metadata = {
  title: "Tu Nombre - Desarrollador Full Stack",
  description: "Tu descripción optimizada para SEO",
};
```

## 📸 Imágenes

### Diagramas de Arquitectura
- **Ubicación:** `frontend/public/images/`
- **Nombres:** `diagram-payments.png`, `diagram-analytics.png`, etc.
- **Referencia:** En `projectsData` usa `/images/nombre-diagrama.png`

### CV
- **Ubicación:** `frontend/public/cv.pdf`
- **Referencia:** Automática desde `heroData.cv`

## 🚀 Comandos Útiles

```bash
# Iniciar desarrollo
cd frontend
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## ✅ Checklist de Personalización

- [ ] Hero: Nombre, título, enlaces sociales
- [ ] About: Descripción y especialización
- [ ] Projects: Tus proyectos reales (mínimo 3-4)
- [ ] Stack: Tecnologías que dominas
- [ ] Architecture: Arquitecturas que implementas
- [ ] Contact: Email, GitHub, LinkedIn, ubicación
- [ ] Metadata: Título y descripción SEO
- [ ] Imágenes: Diagramas de arquitectura
- [ ] CV: Archivo PDF en `/public/cv.pdf`

## 💡 Tips

1. **Proyectos:** Enfócate en el aspecto técnico, no visual
2. **Descripciones:** Incluye el problema, tu solución y el impacto
3. **Stack:** Solo incluye tecnologías que realmente dominas
4. **Diagramas:** Usa Draw.io o Excalidraw para crearlos
5. **CV:** Asegúrate de que esté actualizado

---

**¿Dudas?** Revisa `GUIA_PERSONALIZACION.md` para más detalles.
