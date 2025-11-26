'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactStore } from '../../store/useContactStore';
import { Input, TextArea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card, CardBody, CardHeader } from '../ui/Card';

export const ContactForm: React.FC = () => {
  const { loading, error, success, sendMessage, clearState } = useContactStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(formData);
    
    if (!error) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold text-gray-900">Envíame un mensaje</h3>
          </CardHeader>
          <CardBody>
            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-600" size={24} />
                <div>
                  <p className="text-green-800 font-semibold">¡Mensaje enviado!</p>
                  <p className="text-green-700 text-sm">Te responderé lo antes posible.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="text-red-600" size={24} />
                <div>
                  <p className="text-red-800 font-semibold">Error al enviar</p>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1  text-black  md:grid-cols-2 gap-6">
                <Input
                  label="Nombre"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <Input
                label="Asunto"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="text-black"
                placeholder="¿De qué quieres hablar?"
                required
              />

              <TextArea
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="text-black"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={6}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={20} />
                    Enviar Mensaje
                  </span>
                )}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
