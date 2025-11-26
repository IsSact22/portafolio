'use client';

import React, { useEffect } from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useProfileStore } from '../../store/useProfileStore';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const { profile, fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleWhatsAppClick = () => {
    if (!profile?.phone) return;
    
    const formattedPhone = profile.phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent('¡Hola! Me interesa contactarte para un proyecto.');
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600">
            ¿Tienes un proyecto en mente? ¡Hablemos por WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* WhatsApp Card */}
          <Card className="bg-linear-to-br flex item-center justify-center from-green-50 to-green-100 border-2 border-green-200">
            <CardBody className="p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MessageCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Escríbeme por WhatsApp
              </h3>
              <p className="text-gray-700 mb-6">
                La forma más rápida de contactarme. Te respondo en minutos.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleWhatsAppClick}
                disabled={!profile?.phone}
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Abrir WhatsApp
                </span>
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
