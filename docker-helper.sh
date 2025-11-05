#!/bin/bash

# 🐳 Docker Helper Script para Portfolio Backend
# Este script facilita las operaciones comunes con Docker

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funciones de utilidad
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Función para mostrar el menú
show_menu() {
    echo ""
    echo "🐳 Portfolio Backend - Docker Helper"
    echo "===================================="
    echo ""
    echo "1)  Iniciar todo (PostgreSQL + Backend + Frontend)"
    echo "2)  Iniciar solo Backend + PostgreSQL"
    echo "3)  Iniciar solo PostgreSQL"
    echo "4)  Detener todos los servicios"
    echo "5)  Ver logs (todos)"
    echo "6)  Ver logs del Backend"
    echo "7)  Ver logs de PostgreSQL"
    echo "8)  Ver estado de contenedores"
    echo "9)  Reiniciar Backend"
    echo "10) Reiniciar PostgreSQL"
    echo "11) Ejecutar migraciones"
    echo "12) Acceder a PostgreSQL (psql)"
    echo "13) Resetear base de datos"
    echo "14) Backup de base de datos"
    echo "15) Ver estadísticas de recursos"
    echo "16) Limpiar todo (⚠️  elimina volúmenes)"
    echo "17) Rebuild Backend"
    echo "0)  Salir"
    echo ""
    echo -n "Selecciona una opción: "
}

# Funciones de operación
start_all() {
    print_info "Iniciando todos los servicios..."
    docker-compose up -d
    print_success "Todos los servicios iniciados"
    print_info "Backend: http://localhost:3000"
    print_info "Frontend: http://localhost:3001"
    print_info "PostgreSQL: localhost:5432"
}

start_backend() {
    print_info "Iniciando Backend + PostgreSQL..."
    docker-compose up -d postgres backend
    print_success "Backend y PostgreSQL iniciados"
    print_info "Backend: http://localhost:3000"
    print_info "PostgreSQL: localhost:5432"
}

start_postgres() {
    print_info "Iniciando solo PostgreSQL..."
    docker-compose up -d postgres
    print_success "PostgreSQL iniciado"
    print_info "PostgreSQL: localhost:5432"
    print_info "Puedes correr el backend localmente con: npm run dev"
}

stop_all() {
    print_info "Deteniendo todos los servicios..."
    docker-compose down
    print_success "Todos los servicios detenidos"
}

view_logs() {
    print_info "Mostrando logs de todos los servicios (Ctrl+C para salir)..."
    docker-compose logs -f
}

view_backend_logs() {
    print_info "Mostrando logs del Backend (Ctrl+C para salir)..."
    docker-compose logs -f backend
}

view_postgres_logs() {
    print_info "Mostrando logs de PostgreSQL (Ctrl+C para salir)..."
    docker-compose logs -f postgres
}

view_status() {
    print_info "Estado de los contenedores:"
    docker-compose ps
}

restart_backend() {
    print_info "Reiniciando Backend..."
    docker-compose restart backend
    print_success "Backend reiniciado"
}

restart_postgres() {
    print_info "Reiniciando PostgreSQL..."
    docker-compose restart postgres
    print_success "PostgreSQL reiniciado"
}

run_migrations() {
    print_info "Ejecutando migraciones de Prisma..."
    docker exec -it portfolio_backend npx prisma migrate deploy
    print_success "Migraciones ejecutadas"
}

access_postgres() {
    print_info "Accediendo a PostgreSQL (escribe \\q para salir)..."
    docker exec -it portfolio_postgres psql -U postgres -d portafolio
}

reset_database() {
    print_warning "⚠️  ADVERTENCIA: Esto eliminará TODOS los datos de la base de datos"
    echo -n "¿Estás seguro? (escribe 'yes' para confirmar): "
    read confirmation
    
    if [ "$confirmation" = "yes" ]; then
        print_info "Deteniendo servicios..."
        docker-compose down
        
        print_info "Eliminando volumen de PostgreSQL..."
        docker volume rm portafolio_postgres_data 2>/dev/null || true
        
        print_info "Iniciando PostgreSQL..."
        docker-compose up -d postgres
        
        print_info "Esperando a que PostgreSQL esté listo..."
        sleep 10
        
        print_info "Iniciando Backend (ejecutará migraciones)..."
        docker-compose up -d backend
        
        print_success "Base de datos reseteada"
    else
        print_info "Operación cancelada"
    fi
}

backup_database() {
    BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).sql"
    print_info "Creando backup de la base de datos..."
    docker exec -t portfolio_postgres pg_dump -U postgres portafolio > "$BACKUP_FILE"
    print_success "Backup creado: $BACKUP_FILE"
}

view_stats() {
    print_info "Estadísticas de recursos (Ctrl+C para salir)..."
    docker stats portfolio_backend portfolio_postgres
}

clean_all() {
    print_warning "⚠️  ADVERTENCIA: Esto eliminará TODOS los contenedores, volúmenes e imágenes"
    echo -n "¿Estás seguro? (escribe 'yes' para confirmar): "
    read confirmation
    
    if [ "$confirmation" = "yes" ]; then
        print_info "Deteniendo y eliminando todo..."
        docker-compose down -v
        print_success "Todo limpiado"
    else
        print_info "Operación cancelada"
    fi
}

rebuild_backend() {
    print_info "Reconstruyendo imagen del Backend..."
    docker-compose up -d --build backend
    print_success "Backend reconstruido"
}

# Loop principal
while true; do
    show_menu
    read option
    
    case $option in
        1) start_all ;;
        2) start_backend ;;
        3) start_postgres ;;
        4) stop_all ;;
        5) view_logs ;;
        6) view_backend_logs ;;
        7) view_postgres_logs ;;
        8) view_status ;;
        9) restart_backend ;;
        10) restart_postgres ;;
        11) run_migrations ;;
        12) access_postgres ;;
        13) reset_database ;;
        14) backup_database ;;
        15) view_stats ;;
        16) clean_all ;;
        17) rebuild_backend ;;
        0) 
            print_info "¡Hasta luego!"
            exit 0
            ;;
        *)
            print_error "Opción inválida"
            ;;
    esac
    
    echo ""
    echo -n "Presiona Enter para continuar..."
    read
done
