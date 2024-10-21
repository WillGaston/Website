import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Photo from '../../components/Photos';


export default function Home() {
  return (
    <MaxWidthWrapper>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <a href="/" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500'>Home</a>
        <div>
          <a href="/about" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-7'>About</a>
          <a href="/projects" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-7'>Projects</a>
          <a href="/gallery" className = 'text-orange-600 font-semibold text-2xl hover:text-orange-500 px-7 underline underline-offset-2'>Gallery</a>
        </div>
      </header> 
      <div className = 'py-16 mx-auto text-center flex flex-col items-center'>
        <h1 className = 'text-5xl font-bold tracking-tight text-gray-800'>
          My {' '}
          <span className='text-orange-500'>
            Photos
          </span>
          .
        </h1>
      </div>
      <div className = 'py-4 mx-auto text-center flex flex-col items-center text-xl'>
        Below are various photos I have taken recently.
        <Photo />
      </div>
      
      
    

    </MaxWidthWrapper>)
}