'use client';

import React, { useEffect } from 'react';
import { useSkillsStore } from '../../store/useSkillsStore';
import { Card, CardBody } from '../ui/Card';

export const SkillsSection: React.FC = () => {
  const { skillsByCategory, loading, fetchSkills } = useSkillsStore();

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Advanced':
        return 'bg-blue-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <Card key={category} className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
              <CardBody className="p-0">
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                          style={{
                            width: `${
                              skill.level === 'Expert'
                                ? 100
                                : skill.level === 'Advanced'
                                ? 75
                                : skill.level === 'Intermediate'
                                ? 50
                                : 25
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'año' : 'años'} de experiencia
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
