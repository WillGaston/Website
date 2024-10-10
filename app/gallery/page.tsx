import MaxWidthWrapper from "@/components/MaxWidthWrapper";
/* import Image from 'next/image'; */


export default function Home() {
  return (
    <MaxWidthWrapper>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <a href="/" className = 'text-gray-900 font-semibold text-1xl hover:text-orange-500'>Home</a>
        <div>
          <a href="/about" className = 'text-gray-900 font-semibold text-1xl hover:text-orange-500 px-5'>About</a>
          <a href="/projects" className = 'text-gray-900 font-semibold text-1xl hover:text-orange-500 px-5'>Projects</a>
          <a href="/gallery" className = 'text-orange-600 font-semibold text-1xl hover:text-orange-500 px-5 underline underline-offset-2'>Gallery</a>
        </div>
      </header>
      <div className = 'py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        gallery
      </div>
      
    

    </MaxWidthWrapper>)
}