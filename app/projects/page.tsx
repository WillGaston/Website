"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Gallery from '../../components/Gallery';
import { useState } from 'react';


export default function Home() {

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageFilter = (language: string) => {
    setSelectedLanguage(language === selectedLanguage ? '' : language);
  };

  return (
    <MaxWidthWrapper>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <a href="/" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500'>Home</a>
        <div>
          <a href="/about" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-5'>About</a>
          <a href="/projects" className = 'text-orange-600 font-semibold text-2xl hover:text-orange-500 px-5 underline underline-offset-2'>Projects</a>
          <a href="/gallery" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-5'>Gallery</a>
        </div>
      </header> 
      <div className = 'py-16 mx-auto text-center flex flex-col items-center'>
        <h1 className = 'text-5xl font-bold tracking-tight text-gray-800'>
          My {' '}
          <span className='text-orange-500'>
            Projects
          </span>
          .
        </h1>
      </div>
      <div className = 'py-2 mx-auto text-center flex flex-col items-center text-xl'>
        Below are various projects I have completed as High School and Personal projects, and University assignments.
        <div className="space-x-4 py-4">
        <button
            onClick={() => handleLanguageFilter('C')}
            className={`py-2 px-4 font-bold rounded-full ${
              selectedLanguage === 'C' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'
            } border border-blue-700 hover:bg-blue-100`}
          >
            C
          </button>
          <button
            onClick={() => handleLanguageFilter('Python')}
            className={`py-2 px-4 font-bold rounded-full ${
              selectedLanguage === 'Python' ? 'bg-lime-700 text-white' : 'bg-white text-lime-700'
            } border border-lime-700 hover:bg-lime-100`}
          >
            Python
          </button>
          <button
            onClick={() => handleLanguageFilter('JavaScript/TypeScript')}
            className={`py-2 px-4 font-bold rounded-full ${
              selectedLanguage === 'JavaScript/TypeScript' ? 'bg-yellow-500 text-white' : 'bg-white text-yellow-500'
            } border border-yellow-500 hover:bg-yellow-100`}
          >
            JavaScript/TypeScript
          </button>
          <button
            onClick={() => handleLanguageFilter('Assembly')}
            className={`py-2 px-4 font-bold rounded-full ${
              selectedLanguage === 'Assembly' ? 'bg-red-500 text-white' : 'bg-white text-red-500'
            } border border-red-500 hover:bg-red-100`}
          >
            Assembly
          </button>
          <button
            onClick={() => handleLanguageFilter('Other')}
            className={`py-2 px-4 font-bold rounded-full ${
              selectedLanguage === 'Other' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
            } border border-gray-500 hover:bg-gray-100`}
          >
            Other
          </button>
        </div>
        <Gallery selectedLanguage={selectedLanguage}/>
      </div>
      
      
    

    </MaxWidthWrapper>)
}