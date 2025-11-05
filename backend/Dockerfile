# Etapa base
FROM node:20-alpine AS base

WORKDIR /app

# Instalar dependencias del sistema necesarias para Prisma
RUN apk add --no-cache openssl libc6-compat

# Copiar archivos de dependencias
COPY package*.json ./
COPY prisma ./prisma/

# ============================================
# Etapa de desarrollo
# ============================================
FROM base AS development

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm install

# Generar Prisma Client
RUN npx prisma generate

# Copiar el resto de la aplicación
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para desarrollo (con hot reload)
CMD ["npm", "run", "dev"]

# ============================================
# Etapa de construcción para producción
# ============================================
FROM base AS builder

# Instalar dependencias de producción
RUN npm ci --only=production

# Generar Prisma Client
RUN npx prisma generate

# Copiar código fuente
COPY . .

# ============================================
# Etapa de producción
# ============================================
FROM node:20-alpine AS production

WORKDIR /app

# Instalar solo las dependencias necesarias
RUN apk add --no-cache openssl libc6-compat

# Copiar node_modules y Prisma Client desde builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Copiar código de la aplicación
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/server.js ./

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Cambiar ownership de archivos
RUN chown -R nodejs:nodejs /app

# Cambiar a usuario no-root
USER nodejs

# Exponer puerto
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Comando para producción
CMD ["node", "server.js"]
