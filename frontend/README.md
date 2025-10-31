# 🚀 Portafolio Desarrollador Full Stack

Portafolio profesional moderno para desarrolladores full stack con especialización en backend. Construido con Next.js 16, TypeScript y Tailwind CSS.

## ✨ Características

- 📱 **Diseño Responsive** - Optimizado para todos los dispositivos
- 🎨 **UI Moderna** - Diseño limpio y profesional con tema oscuro
- ⚡ **Performance** - Optimizado con Next.js App Router
- 🧩 **Componentes Reutilizables** - Arquitectura modular y escalable
- 🎯 **SEO Optimizado** - Metadata configurada para mejor posicionamiento

## 📋 Secciones

- **🏠 Inicio (Hero)** - Presentación impactante con CTA
- **👨‍💻 Sobre mí** - Descripción profesional y especialización
- **⚙️ Proyectos** - Showcase de proyectos con diagramas técnicos
- **🧩 Stack Tecnológico** - Tecnologías y herramientas
- **🧠 Arquitecturas** - Patrones y arquitecturas implementadas
- **📬 Contacto** - Formulario y enlaces sociales

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 16
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Iconos:** Lucide React
- **Fuentes:** Geist Sans & Geist Mono

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Personalización

### 1. Información Personal

Edita los archivos en `app/sections/` para actualizar:

- **Hero.tsx** - Nombre, título, descripción y enlaces sociales
- **About.tsx** - Biografía y experiencia
- **Projects.tsx** - Tus proyectos destacados
- **Stack.tsx** - Tecnologías que dominas
- **Contact.tsx** - Información de contacto

### 2. Proyectos

En `app/sections/Projects.tsx`, actualiza el array `projects`:

```typescript
{
  title: "Tu Proyecto",
  description: "Descripción técnica del proyecto",
  role: "Tu rol específico",
  stack: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/tu-usuario/proyecto",
  demo: "https://demo.com",
  diagram: "/images/diagram.png"
}
```

### 3. Imágenes

Coloca tus diagramas de arquitectura en `public/images/`:
- `diagram-payments.png`
- `diagram-analytics.png`
- etc.

### 4. CV

Agrega tu CV en `public/cv.pdf` para el botón de descarga.

## 📁 Estructura del Proyecto

```
frontend/
├── app/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Section.tsx
│   │   ├── TechStack.tsx
│   │   └── ArchitectureCard.tsx
│   ├── sections/          # Secciones del portafolio
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Stack.tsx
│   │   ├── Architecture.tsx
│   │   └── Contact.tsx
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── public/                # Archivos estáticos
└── package.json
```

## 🎨 Paleta de Colores

- **Background:** `#0a0a0a` (zinc-950)
- **Cards:** `#18181b` (zinc-900)
- **Borders:** `#27272a` (zinc-800)
- **Text:** `#ededed` (zinc-50)
- **Accent:** `#3b82f6` (blue-500)

## 📦 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Otros Servicios

El proyecto es compatible con:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias, siéntete libre de abrir un issue.

## 📄 Licencia

MIT License - Siéntete libre de usar este portafolio como base para el tuyo.

---

**Desarrollado con ❤️ usando Next.js y TypeScript**
