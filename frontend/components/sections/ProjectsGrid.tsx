'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useProjectsStore } from '../../store/useProjectsStore';
import { Card, CardBody, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';


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
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} hover className="overflow-hidden">
              {/* Project Image */}
              {project.imageUrl && (
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              <CardHeader>
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                {/* Project Description */}
                <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
              </CardHeader>

              <CardBody>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button variant="primary" size="sm" className="flex-1">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* View All Button */}
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
