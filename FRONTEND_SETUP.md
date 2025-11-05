# 🎨 Configuración del Frontend para Consumir API en Docker

Esta guía te ayudará a configurar el frontend para consumir la API del backend que corre en Docker.

## 🔗 URLs de Conexión

### Desarrollo Local (Backend en Docker)

Si el backend está corriendo en Docker y el frontend localmente:

```env
# .env.local en el frontend
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Todo en Docker

Si tanto backend como frontend corren en Docker:

```env
# .env.local en el frontend
NEXT_PUBLIC_API_URL=http://backend:3000/api
```

**Nota:** Dentro de la red de Docker, los servicios se comunican por nombre de servicio (`backend`), no por `localhost`.

## 📦 Configuración de Next.js

### 1. Crear archivo de configuración de API

```typescript
// frontend/src/lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const api = {
  baseURL: API_URL,
  
  // Helper para hacer requests
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_URL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error en la petición');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
  
  // Métodos de conveniencia
  get: (endpoint: string) => api.request(endpoint, { method: 'GET' }),
  post: (endpoint: string, body: any) => 
    api.request(endpoint, { method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint: string, body: any) => 
    api.request(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
  delete: (endpoint: string) => api.request(endpoint, { method: 'DELETE' }),
};
```

### 2. Servicios por Entidad

```typescript
// frontend/src/services/profileService.ts
import { api } from '@/lib/api';

export const profileService = {
  getProfile: async () => {
    return api.get('/profile');
  },
  
  createProfile: async (data: any) => {
    return api.post('/profile', data);
  },
  
  updateProfile: async (id: string, data: any) => {
    return api.put(`/profile/${id}`, data);
  },
};

// frontend/src/services/projectsService.ts
import { api } from '@/lib/api';

export const projectsService = {
  getProjects: async (params?: { page?: number; limit?: number; status?: string }) => {
    const query = new URLSearchParams(params as any).toString();
    return api.get(`/projects${query ? `?${query}` : ''}`);
  },
  
  getProject: async (id: string) => {
    return api.get(`/projects/${id}`);
  },
  
  createProject: async (data: any) => {
    return api.post('/projects', data);
  },
  
  updateProject: async (id: string, data: any) => {
    return api.put(`/projects/${id}`, data);
  },
  
  deleteProject: async (id: string) => {
    return api.delete(`/projects/${id}`);
  },
};

// Similar para skills, experience, contact...
```

### 3. Ejemplo de uso en componentes

```typescript
// frontend/src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { profileService } from '@/services/profileService';
import { projectsService } from '@/services/projectsService';

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [profileData, projectsData] = await Promise.all([
          profileService.getProfile(),
          projectsService.getProjects({ status: 'published', featured: true }),
        ]);
        
        setProfile(profileData.data);
        setProjects(projectsData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <main>
      <h1>{profile?.fullName}</h1>
      <p>{profile?.title}</p>
      
      <section>
        <h2>Featured Projects</h2>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
```

## 🐳 Docker Compose para Frontend

El `docker-compose.yml` ya está configurado:

```yaml
frontend:
  build:
    context: ./frontend
    dockerfile: Dockerfile
  container_name: portfolio_frontend
  restart: unless-stopped
  ports:
    - "3001:3000"
  environment:
    - NEXT_PUBLIC_API_URL=http://localhost:3000/api  # Para acceso desde el navegador
  volumes:
    - ./frontend:/app
    - /app/node_modules
    - /app/.next
  depends_on:
    - backend
  networks:
    - portfolio_network
```

**Importante:** 
- `NEXT_PUBLIC_API_URL=http://localhost:3000/api` es para que el navegador (cliente) acceda al backend
- Si necesitas hacer requests desde el servidor de Next.js, usa `http://backend:3000/api`

## 🔧 Configuración de CORS en Backend

El backend ya tiene CORS configurado, pero asegúrate de que permite el origen del frontend:

```javascript
// backend/src/app.js
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true,
}));
```

Agrega a tu `.env` del backend:

```env
FRONTEND_URL=http://localhost:3001
```

## 🧪 Testing de Conexión

### 1. Verificar que el backend responde

```bash
curl http://localhost:3000/api/health
```

### 2. Desde el frontend (JavaScript)

```javascript
// En la consola del navegador
fetch('http://localhost:3000/api/health')
  .then(res => res.json())
  .then(data => console.log(data));
```

### 3. Verificar CORS

```javascript
// Debería funcionar sin errores de CORS
fetch('http://localhost:3000/api/profile')
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🚀 Iniciar Todo

### Opción 1: Backend en Docker, Frontend Local

```bash
# Terminal 1: Iniciar backend
docker-compose up -d postgres backend

# Terminal 2: Iniciar frontend
cd frontend
npm run dev
```

Accede a:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3000/api
- PostgreSQL: localhost:5432

### Opción 2: Todo en Docker

```bash
# Iniciar todo
docker-compose up -d

# Ver logs
docker-compose logs -f
```

Accede a:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000/api
- PostgreSQL: localhost:5432

## 🐛 Troubleshooting

### Error: CORS policy

**Problema:** `Access to fetch at 'http://localhost:3000/api/...' from origin 'http://localhost:3001' has been blocked by CORS policy`

**Solución:**
1. Verifica que el backend tenga CORS habilitado
2. Agrega `FRONTEND_URL=http://localhost:3001` al `.env` del backend
3. Reinicia el backend: `docker-compose restart backend`

### Error: Network request failed

**Problema:** El frontend no puede conectarse al backend

**Solución:**
1. Verifica que el backend esté corriendo: `docker-compose ps backend`
2. Verifica la URL en `.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:3000/api`
3. Prueba el endpoint manualmente: `curl http://localhost:3000/api/health`

### Error: Connection refused

**Problema:** `ECONNREFUSED 127.0.0.1:3000`

**Solución:**
1. Si el frontend está en Docker, usa `http://backend:3000/api` en lugar de `localhost`
2. Si el frontend está local, asegúrate de que el puerto 3000 esté expuesto en docker-compose

### Variables de entorno no se actualizan

**Problema:** Cambios en `.env.local` no se reflejan

**Solución:**
1. Reinicia el servidor de desarrollo de Next.js
2. Si está en Docker: `docker-compose restart frontend`
3. Limpia el cache: `rm -rf .next && npm run dev`

## 📚 Recursos Adicionales

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## ✅ Checklist

Antes de empezar a desarrollar el frontend:

- [ ] Backend corriendo en Docker
- [ ] Health check responde: `curl http://localhost:3000/api/health`
- [ ] CORS configurado correctamente
- [ ] Variables de entorno configuradas
- [ ] Servicios de API creados
- [ ] Primer request exitoso desde el frontend

---

¿Listo para empezar? Corre `docker-compose up -d backend` y comienza a desarrollar tu frontend! 🚀
