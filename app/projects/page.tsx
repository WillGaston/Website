import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Gallery from '../../components/Gallery';


export default function Home() {
  return (
    <MaxWidthWrapper>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <a href="/" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500'>Home</a>
        <div>
          <a href="/about" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-7'>About</a>
          <a href="/projects" className = 'text-orange-600 font-semibold text-2xl hover:text-orange-500 px-7 underline underline-offset-2'>Projects</a>
          <a href="/gallery" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-7'>Gallery</a>
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
        <Gallery />
      </div>
      
      
    

    </MaxWidthWrapper>)
}