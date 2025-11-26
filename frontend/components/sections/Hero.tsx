'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const { profile, loading, fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
        <div className="animate-pulse text-center">
          <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Avatar */}
          {profile?.avatar && (
            <div className="mb-8 relative w-32 h-32 mx-auto">
              <Image
                src={profile.avatar}
                alt={profile.fullName}
                fill
                className="rounded-full object-cover border-4 border-blue-500"
                priority
              />
            </div>
          )}

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            {profile?.fullName || 'Tu Nombre'}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">
            {profile?.title || 'Tu Título Profesional'}
          </p>

          {/* Bio */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {profile?.bio || 'Tu biografía aquí'}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </a>
            )}
            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <a href="#projects">Ver Proyectos</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Contáctame</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <ArrowDown size={32} className="text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
