# 🚀 Portfolio Dinámico - Backend API

API REST completa para un portafolio dinámico y profesional construido con Node.js, Express, PostgreSQL y Prisma.

## ✨ Características

- ✅ **Clean Architecture** - Código modular y mantenible
- ✅ **PostgreSQL + Prisma ORM** - Base de datos relacional robusta
- ✅ **Docker & Docker Compose** - Fácil deployment y desarrollo
- ✅ **Validaciones Robustas** - Validación de datos en capa de dominio
- ✅ **Logging Profesional** - Winston para logs estructurados
- ✅ **Manejo de Errores Global** - Middleware centralizado
- ✅ **API RESTful** - Endpoints bien diseñados y documentados
- ✅ **Paginación y Filtros** - Para listados eficientes
- ✅ **CORS y Seguridad** - Helmet y configuración segura

## 📦 Entidades Implementadas

1. **Profile** - Información personal del portafolio
2. **Projects** - Proyectos destacados con tecnologías
3. **Skills** - Habilidades técnicas organizadas por categoría
4. **Experience** - Experiencia laboral detallada
5. **Contact** - Formulario de contacto con gestión de mensajes

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js 20
- **Framework:** Express.js
- **Base de Datos:** PostgreSQL 16
- **ORM:** Prisma
- **Logging:** Winston
- **Validación:** Joi
- **Seguridad:** Helmet, CORS
- **Containerización:** Docker & Docker Compose

## 🚀 Inicio Rápido

### Opción 1: Con Docker (Recomendado)

```bash
# 1. Clonar el repositorio
git clone <tu-repo>
cd portafolio

# 2. Iniciar servicios con Docker
docker-compose up -d postgres backend

# 3. La API estará disponible en http://localhost:3000
```

### Opción 2: Desarrollo Local

```bash
# 1. Iniciar PostgreSQL con Docker
docker-compose up -d postgres

# 2. Instalar dependencias
cd backend
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 4. Ejecutar migraciones
npm run prisma:migrate

# 5. Iniciar servidor de desarrollo
npm run dev
```

## 📋 Requisitos Previos

- Node.js 20 o superior
- Docker y Docker Compose
- PostgreSQL 16 (si no usas Docker)

## 🐳 Comandos Docker

```bash
# Iniciar todo
docker-compose up -d

# Ver logs
docker-compose logs -f backend

# Detener servicios
docker-compose down

# Reiniciar backend
docker-compose restart backend

# Ejecutar migraciones
docker exec -it portfolio_backend npx prisma migrate deploy

# Acceder a PostgreSQL
docker exec -it portfolio_postgres psql -U postgres -d portafolio
```

**💡 Tip:** Usa el script helper para facilitar operaciones:
```bash
chmod +x docker-helper.sh
./docker-helper.sh
```

## 📚 Documentación

- [Guía de Docker](./DOCKER_GUIDE.md) - Guía completa de Docker
- [Documentación de API](./backend/API_DOCUMENTATION.md) - Endpoints y ejemplos
- [Guía de Migración](./backend/MIGRATION_GUIDE.md) - Migración de MongoDB a PostgreSQL

## 🧪 Endpoints Principales

### Health Check
```bash
GET /api/health
```

### Profile
```bash
GET    /api/profile          # Obtener perfil activo
POST   /api/profile          # Crear perfil
PUT    /api/profile/:id      # Actualizar perfil
```

### Projects
```bash
GET    /api/projects         # Listar proyectos (con paginación)
GET    /api/projects/:id     # Obtener proyecto por ID
POST   /api/projects         # Crear proyecto
PUT    /api/projects/:id     # Actualizar proyecto
DELETE /api/projects/:id     # Eliminar proyecto
```

### Skills
```bash
GET    /api/skills           # Listar habilidades
GET    /api/skills/:id       # Obtener habilidad por ID
POST   /api/skills           # Crear habilidad
PUT    /api/skills/:id       # Actualizar habilidad
DELETE /api/skills/:id       # Eliminar habilidad
```

### Experience
```bash
GET    /api/experience       # Listar experiencias
GET    /api/experience/:id   # Obtener experiencia por ID
POST   /api/experience       # Crear experiencia
PUT    /api/experience/:id   # Actualizar experiencia
DELETE /api/experience/:id   # Eliminar experiencia
```

### Contact
```bash
POST   /api/contact          # Enviar mensaje (público)
GET    /api/contact          # Listar mensajes (admin)
GET    /api/contact/:id      # Obtener mensaje por ID (admin)
PUT    /api/contact/:id      # Actualizar estado (admin)
DELETE /api/contact/:id      # Eliminar mensaje (admin)
```

## 🧪 Testing con Postman

Importa la colección de Postman incluida:

```bash
backend/postman_collection.json
```

La colección incluye:
- ✅ Todos los endpoints configurados
- ✅ Variables de entorno
- ✅ Ejemplos de requests
- ✅ Scripts de auto-guardado de IDs

## 📁 Estructura del Proyecto

```
portafolio/
├── backend/
│   ├── src/
│   │   ├── domain/              # Entidades de negocio
│   │   ├── application/         # Casos de uso
│   │   ├── infrastructure/      # Repositorios y DB
│   │   ├── interfaces/          # Controladores
│   │   ├── config/              # Configuración
│   │   └── core/                # Errores y utilidades
│   ├── prisma/
│   │   ├── schema.prisma        # Schema de base de datos
│   │   └── migrations/          # Migraciones
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/                    # (Por implementar)
├── docker-compose.yml
├── DOCKER_GUIDE.md
└── README.md
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Iniciar con nodemon

# Prisma
npm run prisma:generate  # Generar Prisma Client
npm run prisma:migrate   # Crear y aplicar migración
npm run prisma:studio    # Abrir Prisma Studio (GUI)
npm run prisma:seed      # Ejecutar seed

# Producción
npm start                # Iniciar en producción
```

## 🔒 Seguridad

- ✅ Helmet para headers HTTP seguros
- ✅ CORS configurado
- ✅ Validación de entrada en todas las rutas
- ✅ SQL Injection protection (Prisma)
- ✅ Rate limiting (próximamente)
- ✅ JWT Authentication (próximamente)

## 🚧 Próximas Características

- [ ] Autenticación JWT para rutas admin
- [ ] Rate limiting
- [ ] Upload de imágenes
- [ ] Envío de emails
- [ ] Tests unitarios y de integración
- [ ] CI/CD con GitHub Actions
- [ ] Deployment a producción

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**Isaac Developer**

- GitHub: [@IsSact22](https://github.com/IsSact22)
- LinkedIn: [Isaac Developer](https://linkedin.com/in/isaachung-dev)

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
