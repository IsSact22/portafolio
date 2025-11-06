'use client';

import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Download, ExternalLink } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
  const { profile, loading, fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-200 h-64 rounded-2xl"></div>
              <div className="bg-gray-200 h-64 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria y experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio Card */}
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mi Historia</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {profile?.bio || 'Desarrollador apasionado por crear soluciones innovadoras y eficientes.'}
              </p>
              
              {/* Resume Download */}
              {profile?.resumeUrl && (
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download size={20} />
                    Descargar CV
                  </a>
                </Button>
              )}
            </CardBody>
          </Card>

          {/* Contact Info Card */}
          <Card>
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {/* Email */}
                {profile?.email && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="font-medium hover:text-blue-600 transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Phone */}
                {profile?.phone && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <a
                        href={`tel:${profile.phone}`}
                        className="font-medium hover:text-green-600 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                {profile?.location && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Ubicación</p>
                      <p className="font-medium">{profile.location}</p>
                    </div>
                  </div>
                )}

                {/* Website */}
                {profile?.website && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <ExternalLink size={20} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Sitio Web</p>
                      <a
                        href={profile.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-orange-600 transition-colors"
                      >
                        {profile.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
