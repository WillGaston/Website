"use client"

import Gallery from '@/components/Gallery';
import { useState } from 'react';

export default function ProjectsPage() {

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageFilter = (language: string) => {
    setSelectedLanguage(language === selectedLanguage ? '' : language);
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className = 'py-16 mx-auto text-center flex flex-col items-center'>
        <h1 className = 'text-5xl font-bold font-mono tracking-tighter text-gray-800'>
          My {' '}
          <span className='text-orange-500'>
            Projects
          </span>
          .
        </h1>
      </div>
      <div className = 'py-2 mx-auto text-center flex flex-col items-center text-xl font-mono tracking-tighter'>
        Below are various projects I have completed as High School and Personal projects, and University assignments.
        <div className="space-x-4 py-4">
        <button
            onClick={() => handleLanguageFilter('C')}
            className={`py-2 px-4 font-mono tracking-tighter rounded-full ${
              selectedLanguage === 'C' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
            } border border-blue-700 hover:bg-blue-100 hover:text-blue-700`}
          >
            C
          </button>
          <button
            onClick={() => handleLanguageFilter('Python')}
            className={`py-2 px-4 font-mono tracking-tighter rounded-full ${
              selectedLanguage === 'Python' ? 'bg-lime-700 text-white' : 'bg-white text-lime-700'
            } border border-lime-700 hover:bg-lime-100 hover:text-lime-700`}
          >
            Python
          </button>
          <button
            onClick={() => handleLanguageFilter('JavaScript/TypeScript')}
            className={`py-2 px-4 font-mono tracking-tighter rounded-full ${
              selectedLanguage === 'JavaScript/TypeScript' ? 'bg-yellow-500 text-white' : 'bg-white text-yellow-500'
            } border border-yellow-500 hover:bg-yellow-100 hover:text-yellow-500`}
          >
            JavaScript/TypeScript
          </button>
          <button
            onClick={() => handleLanguageFilter('Java')}
            className={`py-2 px-4 font-mono tracking-tighter rounded-full ${
              selectedLanguage === 'Java' ? 'bg-orange-400 text-white' : 'bg-white text-orange-400'
            } border border-orange-400 hover:bg-red-100 hover:text-orange-400`}
          >
            Java
          </button>
          <button
            onClick={() => handleLanguageFilter('Other')}
            className={`py-2 px-4 font-mono tracking-tighter rounded-full ${
              selectedLanguage === 'Other' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
            } border border-gray-500 hover:bg-gray-100 hover:text-gray-500`}
          >
            Other
          </button>
        </div>
        <Gallery selectedLanguage={selectedLanguage}/>
      </div>
      
      
    

    </div>)
}