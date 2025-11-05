'use client';

import React, { useState } from 'react';
import { Image, Search } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  // Datos de ejemplo
  const categories = [
    { id: 1, name: 'Categoría 1', image: '/api/placeholder/80/80' },
    { id: 2, name: 'Categoría 2', image: '/api/placeholder/80/80' },
    { id: 3, name: 'Categoría 3', image: '/api/placeholder/80/80' },
    { id: 4, name: 'Categoría 4', image: '/api/placeholder/80/80' }
  ];

  const products = [
    { id: 1, name: 'Producto 1', price: '$49.99', image: '/api/placeholder/200/200' },
    { id: 2, name: 'Producto 2', price: '$79.99', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Producto 3', price: '$59.99', image: '/api/placeholder/200/200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-32 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Action Button */}
            <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Acción
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Splash */}
        <div className="relative mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Splash Image */}
              <div className="relative flex-shrink-0">
                <div className="relative">
                  {/* Splash effect */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                    <path
                      d="M200,50 C250,50 280,80 290,120 C300,160 290,200 280,230 C270,260 240,280 200,290 C160,300 120,290 90,270 C60,250 40,220 35,180 C30,140 45,100 70,75 C95,50 150,50 200,50 Z M180,130 L220,130 L220,200 L250,200 L200,260 L150,200 L180,200 Z"
                      fill="#4B5563"
                      opacity="0.9"
                    />
                    <circle cx="100" cy="160" r="15" fill="#4B5563" opacity="0.7" />
                    <circle cx="320" cy="200" r="20" fill="#4B5563" opacity="0.6" />
                    <path d="M95,145 L85,135 M105,145 L115,135" stroke="#4B5563" strokeWidth="4" />
                    <path d="M315,185 L305,175 M325,185 L335,175" stroke="#4B5563" strokeWidth="4" />
                    <path d="M280,310 L270,320 M290,315 L300,325" stroke="#4B5563" strokeWidth="4" />
                  </svg>
                  {/* Image placeholder inside splash */}
                  <div className="relative z-10 bg-white rounded-lg p-4 m-12 shadow-lg">
                    <div className="w-48 h-32 bg-gray-200 rounded flex items-center justify-center">
                      <Image size={48} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-6 bg-gray-700 rounded"></div>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <button className="mt-6 bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between gap-8 overflow-x-auto pb-4">
              {categories.map((category) => (
                <div key={category.id} className="flex-shrink-0 text-center group cursor-pointer">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Image size={40} className="text-gray-600" />
                  </div>
                  <div className="h-2 w-20 bg-gray-400 rounded mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Product Cards */}
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="p-4">
                <div className="bg-gray-300 rounded-xl h-48 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Image size={64} className="text-gray-500" />
                </div>
                <div className="h-3 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gray-700 rounded"></div>
                  <div className="flex-1 h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Filter/Menu Card */}
          <div className="bg-gray-700 rounded-2xl p-6 flex flex-col justify-between text-white">
            <div className="space-y-4">
              <div className="h-3 bg-gray-500 rounded w-full"></div>
              <div className="h-3 bg-gray-500 rounded w-5/6"></div>
              <div className="h-3 bg-gray-500 rounded w-4/6"></div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-500 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-500 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-500 rounded-lg"></div>
              </div>
              <div className="h-8 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Featured Banner */}
        <div className="bg-gray-700 rounded-2xl p-12 text-center shadow-lg">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-8 inline-block">
              <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                <Image size={48} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Acerca de</h3>
              <div className="space-y-2">
                <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                <div className="h-2 bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <div className="space-y-2">
                <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                <div className="h-2 bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <div className="h-2 bg-gray-600 rounded w-3/4"></div>
                <div className="h-2 bg-gray-600 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}