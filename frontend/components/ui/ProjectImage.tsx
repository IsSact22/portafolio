'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  const [imageError, setImageError] = useState(false);

  // Si no hay imagen o hubo error, mostrar placeholder
  if (!src || imageError) {
    return (
      <div className={`bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <ImageIcon size={64} className="text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">Sin imagen</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      onError={() => setImageError(true)}
    />
  );
};
