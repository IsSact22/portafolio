# 🧠 Dynamic Portfolio — Fullstack Project (Node.js + Express + Next.js + Docker)

> Proyecto fullstack para construir un portafolio completamente dinámico y gestionable desde un backend modular.  
> El frontend consume toda la información del backend mediante API REST, y el sistema completo corre bajo contenedores Docker.

---

## 🚀 OBJETIVO DEL PROYECTO

Desarrollar un **portafolio dinámico**, donde todos los datos (perfil, stack, proyectos, experiencia, redes, etc.) se administren desde un **backend tipo CMS**, y el **frontend (Next.js)** los consuma mediante **endpoints REST**.  
El entorno debe estar **contenedorizado con Docker** para facilitar despliegue y portabilidad.

---

## ⚙️ STACK TECNOLÓGICO

| Capa | Tecnología | Descripción |
|------|-------------|-------------|
| Backend | Node.js + Express | API REST modular con Arquitectura Limpia |
| Base de datos | MongoDB | Persistencia de toda la información del portafolio |
| Frontend | Next.js 15 | Interfaz dinámica del portafolio |
| Contenedores | Docker + Docker Compose | Despliegue completo y orquestación |
| Testing | Jest + Supertest | Pruebas unitarias e integrales |
| Otros | Helmet, Morgan, CORS, dotenv | Seguridad, logs y configuración |

---

## 🧱 ESTRUCTURA DEL PROYECTO

dynamic-portfolio/
├── backend/
│ ├── src/
│ │ ├── domain/ # Entidades del dominio
│ │ │ ├── userEntity.js
│ │ │ ├── projectEntity.js
│ │ │ ├── skillEntity.js
│ │ │ ├── experienceEntity.js
│ │ │ └── contactEntity.js
│ │ ├── application/ # Casos de uso (Use Cases)
│ │ │ ├── user/
│ │ │ ├── project/
│ │ │ ├── skill/
│ │ │ └── contact/
│ │ ├── interfaces/ # Controladores (entrada)
│ │ │ ├── controllers/
│ │ │ │ ├── userController.js
│ │ │ │ ├── projectController.js
│ │ │ │ ├── skillController.js
│ │ │ │ └── contactController.js
│ │ │ └── mappers/
│ │ ├── infrastructure/ # Capa de infraestructura
│ │ │ ├── database/
│ │ │ │ └── mongo/
│ │ │ │ ├── userModel.js
│ │ │ │ ├── projectModel.js
│ │ │ │ ├── skillModel.js
│ │ │ │ ├── experienceModel.js
│ │ │ │ └── contactModel.js
│ │ │ ├── webserver/
│ │ │ │ └── express/
│ │ │ │ ├── routes/
│ │ │ │ │ ├── userRoutes.js
│ │ │ │ │ ├── projectRoutes.js
│ │ │ │ │ ├── skillRoutes.js
│ │ │ │ │ ├── experienceRoutes.js
│ │ │ │ │ └── contactRoutes.js
│ │ │ │ └── middlewares/
│ │ │ │ ├── authMiddleware.js
│ │ │ │ └── errorHandler.js
│ │ ├── config/
│ │ │ ├── index.js
│ │ │ └── database.js
│ │ ├── core/
│ │ │ └── AppError.js
│ │ ├── tests/
│ │ │ ├── unit/
│ │ │ └── integration/
│ │ └── app.js
│ ├── server.js
│ ├── package.json
│ └── .env.example
│
├── frontend/
│ ├── app/
│ │ ├── page.jsx
│ │ ├── about/page.jsx
│ │ ├── projects/page.jsx
│ │ ├── contact/page.jsx
│ │ └── layout.jsx
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── ProjectCard.jsx
│ │ └── SkillBadge.jsx
│ ├── lib/
│ │ └── api.js
│ ├── package.json
│ └── .env.local
│
├── docker-compose.yml
└── README.md


## 🌐 ENDPOINTS DEL BACKEND

### 🧩 Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/users` | Crea un usuario |
| `GET` | `/api/users/:id` | Obtiene información del usuario |
| `PUT` | `/api/users/:id` | Actualiza datos del usuario |

### 💼 Proyectos
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/projects` | Lista todos los proyectos |
| `POST` | `/api/projects` | Crea un nuevo proyecto |
| `GET` | `/api/projects/:id` | Obtiene detalle de un proyecto |
| `PUT` | `/api/projects/:id` | Actualiza un proyecto |
| `DELETE` | `/api/projects/:id` | Elimina un proyecto |

### ⚙️ Skills
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/skills` | Lista todas las habilidades |
| `POST` | `/api/skills` | Agrega una habilidad |

### 🧾 Experiencia
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/experience` | Devuelve la experiencia laboral |
| `POST` | `/api/experience` | Crea un nuevo registro |

### 📬 Contacto
| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/contact` | Envía un mensaje de contacto |

### 🩺 Salud del servidor
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/health` | Verifica el estado del backend |

---

## 🖥️ FRONTEND – CONSUMO DE API

Ejemplo de consumo desde Next.js:

`frontend/lib/api.js`
```js
export async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  return res.json();
}

frontend/app/projects/page.jsx
import { getProjects } from "@/lib/api";

export default async function ProjectsPage() {
  const { projects } = await getProjects();

  return (
    <section className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div key={p._id} className="border rounded-xl p-4 shadow-md">
          <h3 className="text-xl font-bold">{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </section>
  );
}


## Docker
## docker-compose.yml

version: "3.9"
services:
  backend:
    build: ./backend
    container_name: portfolio_backend
    ports:
      - "3000:3000"
    env_file:
      - ./backend/.env
    volumes:
      - ./backend:/app
    depends_on:
      - mongo

  frontend:
    build: ./frontend
    container_name: portfolio_frontend
    ports:
      - "3001:3000"
    env_file:
      - ./frontend/.env.local
    volumes:
      - ./frontend:/app

  mongo:
    image: mongo:7
    container_name: portfolio_mongo
    restart: always
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:


## backend dockerfile 

FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

## frontend dockerfile 

FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]


## PLAN DE DESARROLLO


FASE 1 — Configuración base

Crear estructura backend/, frontend/ y docker-compose.yml.

Configurar entorno con .env y .env.local.

Verificar conexión a MongoDB.

FASE 2 — Backend (Clean Architecture)

Implementar entidades (User, Project, Skill, Experience, Contact).

Crear casos de uso para CRUDs.

Definir controladores y rutas REST.

Implementar manejo global de errores.

FASE 3 — Frontend (Next.js)

Crear estructura base (app, components, lib/api.js).

Implementar páginas: Home, About, Projects, Contact.

Conectar cada página a su endpoint correspondiente.

Estilizar con Tailwind CSS o Shadcn UI.

FASE 4 — Dockerización

Crear Dockerfile para backend y frontend.

Configurar docker-compose.yml con MongoDB.

Ejecutar docker compose up --build.

FASE 5 — Panel administrativo (opcional)

Implementar autenticación JWT.

Crear endpoints /api/admin/....

Integrar subida de imágenes (multer o Cloudinary).

FASE 6 — Deploy & CI/CD

Configurar pipeline con GitHub Actions.