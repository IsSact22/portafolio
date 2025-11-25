'use client';

import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useExperienceStore } from '../../store/useExperienceStore';
import { Card, CardBody, CardHeader } from '../ui/Card';

export const ExperienceTimeline: React.FC = () => {
  const { experiences, loading, fetchExperiences } = useExperienceStore();

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
    });
  };

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Experiencia</h2>
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiencia Laboral</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mi trayectoria profesional
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>

                {/* Card */}
                <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card hover>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="text-blue-600" size={20} />
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        </div>
                        {exp.isCurrent && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-gray-700 font-semibold">{exp.company}</p>
                    </CardHeader>

                    <CardBody>
                      {/* Date & Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>
                            {formatDate(exp.startDate)} - {exp.isCurrent ? 'Presente' : formatDate(exp.endDate!)}
                          </span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        )}
                        {exp.type && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {exp.type}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      {/* Technologies */}
                      {exp.technologies.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Tecnologías:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {exp.achievements.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-gray-700 mb-2">Logros:</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
