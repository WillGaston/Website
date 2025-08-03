import Image from 'next/image';
import React from 'react';

const images = [
  { src: '/images/avodb.png', 
    language: 'Python | PostgreSQL', 
    title: 'avoDB',
    color: 'text-lime-700',
    description: 'End-to-end encrypted database-as-a-service and messanger - cli based with an emphasis on security' },

  { src: '/images/NovelNote.jpg', 
    language: 'Python | Pandas', 
    title: 'NovelNote',
    color: 'text-lime-700',
    description: 'Python program featuring robust novel and quote recording capabilities, data querying and graphical statistics' },

  { src: '/images/comp1531Test.jpg',
    language: 'TypeScript',
    color: 'text-blue-400',
    title: 'Toohak - Quiz Game Backend',
    description: 'Quiz Game Backend using RESTful API, with integration testing of HTTP endpoints: made during COMP1531 24T3' },

  { src: '/images/proxy.jpg', 
    language: 'Python',
    color: 'text-lime-700',
    title: 'HTTP Web Proxy', 
    description: 'HTTP Web Proxy featuring LRU cache, concurrency, and persistence. Supports GET, POST, HEAD, CONNECT requests ' },

  { src: '/images/pageTab.jpg', 
    language: 'C', 
    title: 'Virtual Memory & Paging',
    color: 'text-blue-700',
    description: 'Virtual memory and a paging management system built on top of OS/161 educational operating system' },

  { src: '/images/oft.jpg', 
    language: 'C', 
    title: 'Virtual File System Abstractions',
    color: 'text-blue-700',
    description: 'Designed a set of file system abstractions including open file tables and per-process file descriptors for OS/161 OS' },

  { src: '/images/huffman.jpg', 
    language: 'C',
    color: 'text-blue-700',
    title: 'Huffman Tree Encoder/Decoder', 
    description: 'CLI program which can encode and decode a huffman tree: made during COMP2521 24T2 Ass1' },

  { src: '/images/take.jpg',
      language: 'Shell',
      color: 'text-gray-500',
      title: 'Automatic Assignment Marker',
      description: 'Shell scripts to mimic university assignment submission and marking: made during COMP2041 25T1' },

  { src: '/images/sed.jpg',
    language: 'Python',
    color: 'text-lime-700',
    title: 'sed',
    description: 'Remade subset of sed using python: made during COMP2041 25T1' },

  { src: '/images/trains.jpeg',
    language: 'Java',
    color: 'text-orange-400',
    title: 'Train Network',
    description: 'Train Network made using OOP principles: made during COMP2511 25T1' },

  { src: '/images/dungeonmania.jpg',
    language: 'Java',
    color: 'text-orange-400',
    title: 'Dungeon Crawler Game',
    description: 'Refactored and extended a given dungeon crawler game: made during COMP2511 25T1' },

  { src: '/images/BudgetBuilder.jpg',
      language: 'TypeScript',
      color: 'text-blue-400',
      title: 'Budget Builder (WIP)',
      description: 'WIP bugetting website' },

  { src: '/images/flightscollector.jpg',
      language: 'C++',
      color: 'text-blue-700',
      title: 'Flights Collector',
      description: 'Collects cheapest flights data using web scraping' },


  { src: '/images/poodle.jpg', 
    language: 'C',
    color: 'text-blue-700',
    title: 'Simulated Worm',
    description: 'CLI program which acts uses graphs to simulare the propogation of a worm: made during COMP2521 24T2 Ass2' },


  { src: '/images/filesync.jpg', 
    language: 'C',
    color: 'text-blue-700',
    title: 'File Synchroniser',
    description: 'CLI program which acts as a simplified rsync: made during COMP1521 24T2 Ass2' },


  { src: '/images/breakout.jpg', 
      language: 'Assembly',
      color: 'text-red-500',
      title: 'Breakout in MIPS',
      description: 'Translated given C code into MIPS assembly: made during COMP1521 24T2 Ass1' },


  { src: '/images/website.jpg', 
    language: 'TypeScript | React',
      color: 'text-blue-400',
      title: 'Personal Website',
      description: 'Personal Website for my portfolio and to showcase my personality' },


  { src: '/images/salesaggregator.png',
    language: 'JavaScript',
    color: 'text-yellow-500',
    title: 'SalesAggregator',
    description: 'Web Scraper and React website for showing Sales and Limited Offers from online retailers.' },


  { src: '/images/avoshell.jpg',
    language: 'C',
    color: 'text-blue-400',
    title: 'AvoShell',
    description: 'Shell made using arguments and posix_spawn' },

];

interface GalleryProps {
  selectedLanguage: string;
}

const Gallery: React.FC<GalleryProps> = (
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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
      {filteredImages.map((image, index) => (
        <div key={index} className="flex flex-col">
          <div className="p-4 flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold text-center">{image.title}</p>
            <p className={`text-base font-normal text-center ${image.color}`}>{image.language}</p>
            <p className="text-lg mb-2 tracking-tight font-thin text-center">{image.description}</p>
            <div className="overflow-hidden rounded-lg shadow-lg h-auto w-full flex justify-center items-center">
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

export default Gallery;