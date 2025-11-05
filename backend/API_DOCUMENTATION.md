# 📚 API Documentation - Portfolio Backend

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL 16+
- npm or yarn
- Docker (opcional)

### Installation

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# Generar Prisma Client
npm run prisma:generate

# Ejecutar migraciones
npm run prisma:migrate

# Iniciar servidor en desarrollo
npm run dev

# Iniciar servidor en producción
npm start
```

### Environment Variables

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/portfolio?schema=public
JWT_SECRET=your-super-secret-jwt-key
```

### Docker Setup

```bash
# Desde la raíz del proyecto
docker-compose up -d

# Ver logs
docker-compose logs -f backend

# Detener servicios
docker-compose down
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

---

## 🩺 Health Check

### Check API Health
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Portfolio API is healthy",
  "env": "development",
  "timestamp": "2024-11-05T12:00:00.000Z"
}
```

---

## 👤 Profile Endpoints

### 1. Create Profile

```http
POST /api/profile
Content-Type: application/json
```

**Request Body:**
```json
{
  "fullName": "Isaac Developer",
  "title": "Backend Developer | Node.js Specialist",
  "bio": "Passionate backend developer with expertise in Node.js, Express, MongoDB, and Docker. Love building scalable APIs with clean architecture.",
  "email": "isaac@example.com",
  "phone": "+1234567890",
  "location": "Ciudad, País",
  "avatar": "https://example.com/avatar.jpg",
  "resume": "https://example.com/resume.pdf",
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "portfolio": "https://yourportfolio.com",
    "instagram": "https://instagram.com/yourusername"
  }
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Profile created successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "Isaac Developer",
    "title": "Backend Developer | Node.js Specialist",
    "bio": "Passionate backend developer...",
    "email": "isaac@example.com",
    "phone": "+1234567890",
    "location": "Ciudad, País",
    "avatar": "https://example.com/avatar.jpg",
    "resume": "https://example.com/resume.pdf",
    "socialLinks": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "portfolio": "https://yourportfolio.com",
      "instagram": "https://instagram.com/yourusername"
    },
    "isActive": true,
    "createdAt": "2024-11-05T12:00:00.000Z",
    "updatedAt": "2024-11-05T12:00:00.000Z"
  }
}
```

**Error Response (409 Conflict):**
```json
{
  "success": false,
  "status": "fail",
  "message": "An active profile already exists. Please update the existing one instead."
}
```

---

### 2. Get Active Profile

```http
GET /api/profile
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "Isaac Developer",
    "title": "Backend Developer | Node.js Specialist",
    "bio": "Passionate backend developer...",
    "email": "isaac@example.com",
    "phone": "+1234567890",
    "location": "Ciudad, País",
    "avatar": "https://example.com/avatar.jpg",
    "resume": "https://example.com/resume.pdf",
    "socialLinks": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "portfolio": "https://yourportfolio.com",
      "instagram": "https://instagram.com/yourusername"
    },
    "isActive": true,
    "createdAt": "2024-11-05T12:00:00.000Z",
    "updatedAt": "2024-11-05T12:00:00.000Z"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "status": "fail",
  "message": "Profile not found"
}
```

---

### 3. Update Profile

```http
PUT /api/profile/:id
Content-Type: application/json
```

**Request Body (partial update allowed):**
```json
{
  "title": "Senior Backend Developer | Node.js & Docker Expert",
  "bio": "Updated bio with new skills and experience...",
  "phone": "+9876543210",
  "socialLinks": {
    "github": "https://github.com/newusername"
  }
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "Isaac Developer",
    "title": "Senior Backend Developer | Node.js & Docker Expert",
    "bio": "Updated bio with new skills and experience...",
    "email": "isaac@example.com",
    "phone": "+9876543210",
    "location": "Ciudad, País",
    "avatar": "https://example.com/avatar.jpg",
    "resume": "https://example.com/resume.pdf",
    "socialLinks": {
      "github": "https://github.com/newusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "twitter": "https://twitter.com/yourusername",
      "portfolio": "https://yourportfolio.com",
      "instagram": "https://instagram.com/yourusername"
    },
    "isActive": true,
    "createdAt": "2024-11-05T12:00:00.000Z",
    "updatedAt": "2024-11-05T12:30:00.000Z"
  }
}
```

---

## 🚨 Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "status": "fail",
  "message": "Full name is required, Valid email is required"
}
```

### Not Found (404)
```json
{
  "success": false,
  "status": "fail",
  "message": "Profile not found"
}
```

### Server Error (500)
```json
{
  "success": false,
  "status": "error",
  "message": "Something went wrong"
}
```

---

## 🧪 Testing with cURL

### Create Profile
```bash
curl -X POST http://localhost:3000/api/profile \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Isaac Developer",
    "title": "Backend Developer",
    "bio": "Passionate developer",
    "email": "isaac@example.com",
    "phone": "+1234567890",
    "location": "Ciudad, País"
  }'
```

### Get Profile
```bash
curl http://localhost:3000/api/profile
```

### Update Profile
```bash
curl -X PUT http://localhost:3000/api/profile/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Senior Backend Developer"
  }'
```

---

## 📝 Notes

- Solo puede existir **un perfil activo** a la vez
- Los campos `fullName`, `title`, y `email` son **obligatorios**
- El email debe ser **único** y **válido**
- Las actualizaciones son **parciales** (solo envía los campos que quieres cambiar)
- Todos los endpoints devuelven JSON
- Los logs se guardan en la carpeta `logs/`

---

## 🔜 Coming Soon

- Authentication endpoints (JWT)
- Projects endpoints
- Skills endpoints
- Experience endpoints
- Contact form endpoint
- File upload for avatar and resume
- Swagger UI documentation
