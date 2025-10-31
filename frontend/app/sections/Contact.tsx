import Section from '../components/Section';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

// 📝 PERSONALIZA AQUÍ TU INFORMACIÓN DE CONTACTO
const contactData = {
  email: 'your.email@example.com',
  github: {
    username: 'yourusername',
    url: 'https://github.com/yourusername',
  },
  linkedin: {
    username: 'yourusername',
    url: 'https://linkedin.com/in/yourusername',
  },
  location: 'Tu Ciudad, País',
};

export default function Contact() {
  return (
    <Section id="contact" title="Contacto" icon={<Mail size={32} />}>
      <div className="max-w-4xl mx-auto">
        <p className="text-zinc-400 text-center mb-12">
          ¿Tienes un proyecto en mente o quieres colaborar? 
          No dudes en contactarme a través de cualquiera de estos medios.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">
              Información de Contacto
            </h3>

            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Mail className="text-blue-400" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500">Email</div>
                <div className="text-white">{contactData.email}</div>
              </div>
            </a>

            <a
              href={contactData.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Github className="text-blue-400" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500">GitHub</div>
                <div className="text-white">@{contactData.github.username}</div>
              </div>
            </a>

            <a
              href={contactData.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="text-blue-400" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500">LinkedIn</div>
                <div className="text-white">{contactData.linkedin.url.replace('https://', '')}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <MapPin className="text-blue-400" size={20} />
              </div>
              <div>
                <div className="text-sm text-zinc-500">Ubicación</div>
                <div className="text-white">{contactData.location}</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6">
              Envíame un mensaje
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
