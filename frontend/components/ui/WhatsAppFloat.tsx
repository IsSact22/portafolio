'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';

export const WhatsAppFloat: React.FC = () => {
  const { profile, fetchProfile } = useProfileStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchProfile();
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [fetchProfile]);

  const handleClick = () => {
    if (!profile?.phone) return;
    
    const formattedPhone = profile.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent('¡Hola! Me interesa contactarte.');
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!profile?.phone) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <button
        onClick={handleClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2.5} />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 whitespace-nowrap">
            ¡Escríbeme por WhatsApp!
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        </div>

        {/* Badge de notificación */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  );
};
