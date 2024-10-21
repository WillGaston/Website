import Image from 'next/image';
import React from 'react';

const images = [
  { src: '/images/gallery9.jpg' },
  { src: '/images/gallery10.jpg' },
  { src: '/images/gallery11.jpg' },
  { src: '/images/gallery12.jpg' },
  { src: '/images/gallery14.jpg' },
  { src: '/images/gallery1.jpg' },
  { src: '/images/gallery16.jpg' },
  { src: '/images/gallery5.jpg' },
  { src: '/images/gallery8.jpg' },
  { src: '/images/gallery17.jpg' },
  { src: '/images/gallery13.jpg' },
  { src: '/images/gallery15.jpg' },
];

const Photo = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col md:flex-row">
          <div className="p-4 items-center justify-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-auto w-full flex justify-center items-center">
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photo;