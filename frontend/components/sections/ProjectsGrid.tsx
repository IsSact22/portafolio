'use client';

import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useProjectsStore } from '../../store/useProjectsStore';
import { Card, CardBody, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProjectImage } from '../ui/ProjectImage';
import { Project } from '@/lib/types/project';

// --- COMPONENTE INDIVIDUAL (Maneja su propio carrusel) ---
function ProjectCardItem({ project }: { project: Project }) {
  // 1. Lógica de Imágenes
  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image || project.imageUrl];

  // 2. Estado del Carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

  // 3. Funciones de navegación
  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Card hover className="overflow-hidden h-full flex flex-col">
      {/* --- SECCIÓN DEL CARRUSEL --- */}
      <div className="h-48 overflow-hidden relative group">
        <ProjectImage
          src={images[currentSlide]}
          alt={`${project.title} - imagen ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />

        {/* Controles (Solo si hay más de 1 imagen) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 shadow-sm ${currentSlide === index ? "bg-white w-3" : "bg-white/60"}`} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* --- CABECERA Y CUERPO --- */}
      <CardHeader>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>

        {/* Aquí puedes poner la categoría con el estilo que vimos antes */}
        {project.category && (
          <p className="mt-2 w-fit px-3 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
            {project.category}
          </p>
        )}
      </CardHeader>

      <CardBody className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {project.demoUrl && (
            <Button variant="primary" size="sm" className="flex-1">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ExternalLink size={16} /> Demo
              </a>
            </Button>
          )}
          {(project.repoUrl || project.githubUrl) && (
            <Button variant="outline" size="sm" className="flex-1">
              <a href={project.repoUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github size={16} /> Código
              </a>
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

// --- COMPONENTE PRINCIPAL (GRID) ---
export const ProjectsGrid: React.FC = () => {
  const { featuredProjects, loading, fetchFeaturedProjects } = useProjectsStore();

  useEffect(() => {
    fetchFeaturedProjects();
  }, [fetchFeaturedProjects]);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ahora renderizamos el componente individual */}
          {featuredProjects.map((project) => (
            <ProjectCardItem key={project.id} project={project} />
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos los Proyectos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};