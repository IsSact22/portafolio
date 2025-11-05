# 🐳 Guía de Docker para Portfolio Backend

Esta guía te ayudará a ejecutar el backend completo en contenedores Docker.

## 📋 Requisitos Previos

- Docker Desktop instalado
- Docker Compose instalado (viene con Docker Desktop)

## 🏗️ Arquitectura de Contenedores

```
┌─────────────────────────────────────────────────────┐
│                  Docker Network                      │
│                portfolio_network                     │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │  PostgreSQL  │  │   Backend    │  │ Frontend  │ │
│  │   Port 5432  │◄─│   Port 3000  │◄─│Port 3001  │ │
│  │              │  │              │  │           │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
│         ▲                                            │
│         │                                            │
│    postgres_data                                     │
│    (Volumen persistente)                             │
└─────────────────────────────────────────────────────┘
```

## 🚀 Inicio Rápido

### Opción 1: Solo Backend + PostgreSQL

```bash
# Desde la raíz del proyecto
docker-compose up -d postgres backend
```

### Opción 2: Stack Completo (Backend + Frontend + PostgreSQL)

```bash
# Desde la raíz del proyecto
docker-compose up -d
```

## 📝 Comandos Útiles

### Ver logs en tiempo real

```bash
# Todos los servicios
docker-compose logs -f

# Solo backend
docker-compose logs -f backend

# Solo PostgreSQL
docker-compose logs -f postgres
```

### Detener servicios

```bash
# Detener todos
docker-compose down

# Detener y eliminar volúmenes (⚠️ elimina la base de datos)
docker-compose down -v
```

### Reiniciar un servicio

```bash
# Reiniciar backend
docker-compose restart backend

# Reiniciar PostgreSQL
docker-compose restart postgres
```

### Ver estado de los contenedores

```bash
docker-compose ps
```

### Ejecutar comandos dentro del contenedor

```bash
# Entrar al contenedor del backend
docker exec -it portfolio_backend sh

# Ejecutar migraciones manualmente
docker exec -it portfolio_backend npx prisma migrate deploy

# Ver logs de Prisma
docker exec -it portfolio_backend npx prisma studio
```

## 🔧 Configuración

### Variables de Entorno

El archivo `docker-compose.yml` ya tiene las variables configuradas:

**Backend:**
- `NODE_ENV=development`
- `PORT=3000`
- `DATABASE_URL=postgresql://postgres:1218@postgres:5432/portafolio?schema=public`
- `JWT_SECRET=your-super-secret-jwt-key-change-this`

**Frontend:**
- `NEXT_PUBLIC_API_URL=http://localhost:3000/api`

### Puertos Expuestos

- **PostgreSQL**: `5432` → `localhost:5432`
- **Backend**: `3000` → `localhost:3000`
- **Frontend**: `3001` → `localhost:3001`

## 🗄️ Base de Datos

### Acceder a PostgreSQL

```bash
# Desde tu máquina local
docker exec -it portfolio_postgres psql -U postgres -d portafolio

# Comandos útiles dentro de psql:
\dt              # Listar tablas
\d profiles      # Ver estructura de tabla
\q               # Salir
```

### Backup de la Base de Datos

```bash
# Crear backup
docker exec -t portfolio_postgres pg_dump -U postgres portafolio > backup.sql

# Restaurar backup
docker exec -i portfolio_postgres psql -U postgres portafolio < backup.sql
```

### Resetear Base de Datos

```bash
# Detener servicios
docker-compose down

# Eliminar volumen de PostgreSQL
docker volume rm portafolio_postgres_data

# Volver a levantar
docker-compose up -d postgres backend

# Las migraciones se ejecutarán automáticamente
```

## 🧪 Probar la API

Una vez que los contenedores estén corriendo:

### Health Check

```bash
curl http://localhost:3000/api/health
```

### Crear un Perfil

```bash
curl -X POST http://localhost:3000/api/profile \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Isaac Developer",
    "title": "Backend Developer",
    "bio": "Desarrollador backend con Docker y PostgreSQL",
    "email": "isaac@example.com"
  }'
```

## 🐛 Troubleshooting

### El backend no se conecta a PostgreSQL

**Problema:** `Error: P1001: Can't reach database server`

**Solución:**
```bash
# Verificar que PostgreSQL esté corriendo
docker-compose ps postgres

# Ver logs de PostgreSQL
docker-compose logs postgres

# Reiniciar servicios en orden
docker-compose down
docker-compose up -d postgres
# Esperar 10 segundos
docker-compose up -d backend
```

### Puerto ya en uso

**Problema:** `Error: bind: address already in use`

**Solución:**
```bash
# Ver qué proceso usa el puerto 3000
netstat -ano | findstr :3000

# Detener el proceso o cambiar el puerto en docker-compose.yml
ports:
  - "3001:3000"  # Cambiar 3000 a 3001
```

### Las migraciones no se ejecutan

**Problema:** Las tablas no se crean en PostgreSQL

**Solución:**
```bash
# Ejecutar migraciones manualmente
docker exec -it portfolio_backend npx prisma migrate deploy

# O regenerar Prisma Client
docker exec -it portfolio_backend npx prisma generate
docker-compose restart backend
```

### Cambios en el código no se reflejan

**Problema:** Hot reload no funciona

**Solución:**
```bash
# Verificar que el volumen esté montado correctamente
docker-compose ps

# Reiniciar el contenedor
docker-compose restart backend

# O reconstruir la imagen
docker-compose up -d --build backend
```

## 🔄 Workflow de Desarrollo

### Desarrollo Local (Recomendado)

```bash
# 1. Levantar solo PostgreSQL en Docker
docker-compose up -d postgres

# 2. Correr backend localmente
cd backend
npm run dev

# Ventajas:
# - Hot reload más rápido
# - Debugging más fácil
# - Menos uso de recursos
```

### Desarrollo con Docker (Producción-like)

```bash
# 1. Levantar todo en Docker
docker-compose up -d

# 2. Ver logs
docker-compose logs -f backend

# Ventajas:
# - Ambiente idéntico a producción
# - Aislamiento completo
# - Fácil de compartir con el equipo
```

## 📊 Monitoreo

### Ver uso de recursos

```bash
# Ver estadísticas en tiempo real
docker stats

# Ver solo backend y postgres
docker stats portfolio_backend portfolio_postgres
```

### Ver logs estructurados

```bash
# Últimas 100 líneas
docker-compose logs --tail=100 backend

# Desde una fecha específica
docker-compose logs --since 2025-11-05T10:00:00 backend
```

## 🚢 Preparar para Producción

### Build de producción

```bash
# Crear imagen optimizada
docker build -t portfolio-backend:latest -f backend/Dockerfile.prod backend/

# Usar docker-compose.prod.yml
docker-compose -f docker-compose.prod.yml up -d
```

### Variables de entorno para producción

Crear archivo `.env.production`:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:password@host:5432/db?schema=public
JWT_SECRET=super-secret-production-key-min-32-chars
```

## 📚 Recursos Adicionales

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Prisma Docker Guide](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-docker)
- [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)

## ✅ Checklist de Verificación

Antes de considerar que todo está funcionando:

- [ ] PostgreSQL está corriendo: `docker-compose ps postgres`
- [ ] Backend está corriendo: `docker-compose ps backend`
- [ ] Health check responde: `curl http://localhost:3000/api/health`
- [ ] Migraciones aplicadas: `docker exec -it portfolio_backend npx prisma migrate status`
- [ ] Puedes crear un perfil via API
- [ ] Los logs no muestran errores: `docker-compose logs backend`

---

¿Necesitas ayuda? Revisa la sección de Troubleshooting o consulta los logs con `docker-compose logs -f`
