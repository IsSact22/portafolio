'use client';

import React from 'react';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';

export const Footer: React.FC = () => {
  const { profile } = useProfileStore();

  const socialLinks = [
    { 
      icon: Github, 
      href: profile?.socialLinks?.github, 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: profile?.socialLinks?.linkedin, 
      label: 'LinkedIn' 
    },
    { 
      icon: Twitter, 
      href: profile?.socialLinks?.twitter, 
      label: 'Twitter' 
    },
    {
      icon: MessageCircle,
      href: profile?.phone ? `https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}` : null,
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-gray-800 text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre mí</h3>
            <p className="text-gray-400">
              {profile?.bio || 'Desarrollador apasionado por crear soluciones innovadoras.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Conecta conmigo</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                // Renderizamos solo si existe el href (enlace)
                return link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <Icon size={24} />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} {profile?.fullName || 'Isaac Hung'}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};