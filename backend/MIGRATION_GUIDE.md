# 🔄 Guía de Migración: MongoDB → PostgreSQL

## ✅ Cambios Realizados

### 1. Dependencias
- ❌ Eliminado: `mongoose`, `express-mongo-sanitize`
- ✅ Agregado: `@prisma/client`, `prisma`

### 2. Base de Datos
- **Antes**: MongoDB (NoSQL)
- **Ahora**: PostgreSQL (SQL Relacional)

### 3. ORM
- **Antes**: Mongoose
- **Ahora**: Prisma

### 4. Estructura de Archivos

**Eliminados/Deprecados:**
```
src/infrastructure/database/mongo/
├── profileModel.js (Mongoose schema)
├── userModel.js
└── ...
```

**Nuevos:**
```
prisma/
└── schema.prisma (Definición de modelos)

src/infrastructure/database/prisma/
├── client.js (Prisma Client singleton)
└── profileRepository.js (Repositorio con Prisma)
```

---

## 🚀 Pasos para Iniciar

### 1. Instalar Dependencias
```bash
cd backend
npm install
```

### 2. Configurar Variables de Entorno
Copia `.env.example` a `.env` y actualiza:
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio?schema=public
```

### 3. Iniciar PostgreSQL

**Opción A: Con Docker (Recomendado)**
```bash
# Desde la raíz del proyecto
docker-compose up -d postgres
```

**Opción B: PostgreSQL Local**
```bash
# Asegúrate de tener PostgreSQL instalado y corriendo
# Crea la base de datos
createdb portfolio
```

### 4. Generar Prisma Client
```bash
npm run prisma:generate
```

### 5. Ejecutar Migraciones
```bash
npm run prisma:migrate
```

Esto creará todas las tablas en PostgreSQL según el schema definido.

### 6. Iniciar el Servidor
```bash
npm run dev
```

---

## 📊 Modelos Disponibles en Prisma

El schema incluye todos los modelos necesarios para el portafolio:

1. **Profile** - Información personal
2. **Project** - Proyectos del portafolio
3. **Skill** - Habilidades técnicas
4. **Experience** - Experiencia laboral
5. **Contact** - Mensajes de contacto
6. **Admin** - Usuarios administradores

---

## 🔍 Diferencias Clave

### MongoDB vs PostgreSQL

| Aspecto | MongoDB | PostgreSQL |
|---------|---------|------------|
| Tipo | NoSQL (Documentos) | SQL (Relacional) |
| Schema | Flexible | Estricto |
| IDs | ObjectId (24 chars) | UUID |
| Queries | find(), findOne() | SQL queries |
| Relaciones | Referencias | Foreign Keys |

### Mongoose vs Prisma

| Operación | Mongoose | Prisma |
|-----------|----------|--------|
| Crear | `Model.create()` | `prisma.model.create()` |
| Buscar uno | `Model.findOne()` | `prisma.model.findFirst()` |
| Buscar por ID | `Model.findById()` | `prisma.model.findUnique()` |
| Actualizar | `Model.findByIdAndUpdate()` | `prisma.model.update()` |
| Eliminar | `Model.findByIdAndDelete()` | `prisma.model.delete()` |
| Contar | `Model.countDocuments()` | `prisma.model.count()` |

---

## 🛠️ Comandos Útiles de Prisma

```bash
# Generar cliente de Prisma
npm run prisma:generate

# Crear y aplicar migración
npm run prisma:migrate

# Abrir Prisma Studio (GUI para ver datos)
npm run prisma:studio

# Formatear schema
npx prisma format

# Validar schema
npx prisma validate

# Resetear base de datos (¡CUIDADO!)
npx prisma migrate reset
```

---

## ✨ Ventajas de PostgreSQL + Prisma

### PostgreSQL
- ✅ ACID compliant (transacciones seguras)
- ✅ Mejor para datos estructurados
- ✅ Relaciones más eficientes
- ✅ Índices avanzados
- ✅ Full-text search nativo
- ✅ JSON support (lo mejor de ambos mundos)

### Prisma
- ✅ Type-safe (autocompletado)
- ✅ Migraciones automáticas
- ✅ Schema declarativo
- ✅ Prisma Studio (GUI)
- ✅ Mejor DX (Developer Experience)
- ✅ Protección contra SQL injection

---

## 🎯 Lo que NO Cambió

Gracias a la **Clean Architecture**, estos componentes permanecen **exactamente iguales**:

- ✅ Entidades del dominio (`profileEntity.js`)
- ✅ Casos de uso (`createProfileUseCase.js`, etc.)
- ✅ Controladores (`profileController.js`)
- ✅ Rutas (`profileRoutes.js`)
- ✅ Manejo de errores
- ✅ Logger
- ✅ Middlewares

**Solo cambió la capa de infraestructura** - esto demuestra el poder de la arquitectura limpia.

---

## 🐛 Troubleshooting

### Error: "Can't reach database server"
```bash
# Verifica que PostgreSQL esté corriendo
docker-compose ps

# O si es local:
pg_isready
```

### Error: "Prisma Client not generated"
```bash
npm run prisma:generate
```

### Error: "Database does not exist"
```bash
# Con Docker
docker-compose up -d postgres

# Local
createdb portfolio
```

### Ver logs de PostgreSQL
```bash
docker-compose logs -f postgres
```

---

## 📝 Próximos Pasos

1. ✅ Probar endpoints de Profile
2. ⏳ Implementar entidad Project
3. ⏳ Implementar entidad Skill
4. ⏳ Implementar entidad Experience
5. ⏳ Implementar entidad Contact
6. ⏳ Sistema de autenticación (Admin)
