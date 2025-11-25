import { images } from '@/app/data';
import Image from 'next/image';
import React from 'react';

interface GalleryProps {
  selectedLanguage: string;
}

const ProjectGallery: React.FC<GalleryProps> = (
  { selectedLanguage }
) => {
  const filteredImages = selectedLanguage
    ? images.filter((image) => {
        if (selectedLanguage === 'JavaScript/TypeScript') {
          return ['JavaScript', 'TypeScript'].some(lang => image.language.includes(lang));
        } else if (selectedLanguage === 'C') {
          return [/^C/].some(regex => regex.test(image.language));
          //return image.language === 'C';
        } else if (selectedLanguage === 'Other') {
          return !['JavaScript', 'TypeScript | React', 'Python | Pandas', 'TypeScript', 'Java', 'C', 'C++', 'Python'].includes(image.language)
        } else if (selectedLanguage === 'Python') {
          return image.language.includes('Python');
        } else {
          return image.language === selectedLanguage;
        }
      })
    : images;

  return (
      <div className="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-white">
    {filteredImages.map((image, index) => (
      <div
        key={index}
        className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden h-[32rem]" // fixed height
      >
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="text-center">
            <p className="text-lg md:text-2xl font-semibold truncate">{image.title}</p>
            <p className={`text-base font-normal ${image.color} truncate`}>{image.language}</p>
            <p className="text-sm mb-2 text-gray-600 truncate">{image.description}</p>
          </div>

          <div className="flex justify-center items-center w-full mt-2 rounded-lg shadow-lg overflow-hidden flex-1">
            <Image
              src={image.src}
              alt={`No Image Currently ${index + 1}`}
              width={600}
              height={400}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default ProjectGallery;