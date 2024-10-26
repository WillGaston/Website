import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from 'next/image';


export default function Home() {
  return (
    <MaxWidthWrapper>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <a href="/" className = 'text-orange-600 font-semibold text-2xl hover:text-orange-500 underline underline-offset-2'>Home</a>
        <div>
          <a href="/about" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-5'>About</a>
          <a href="/projects" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-5'>Projects</a>
          <a href="/gallery" className = 'text-gray-900 font-semibold text-2xl hover:text-orange-500 px-5'>Gallery</a>
        </div>
      </header>
      <div className = 'py-20 mx-auto text-center flex flex-col items-center'>
        <h1 className = 'text-7xl font-bold tracking-tight text-gray-800'>
          Hey, I am {' '}
          <span className='text-orange-500'>
            Will
          </span>
          .
        </h1>
        <h2 className ='py-5 text-5xl font-semibold tracking-tighter text-gray-600'>
        Student, Bookworm, aspiring Developer.
        </h2>
        <p className = 'py-5 text-3xl font-sans tracking-tighter text-gray-800'>
         ⚲ Sydney <br></br>
          Currently a 1st year Computer Science student at UNSW.
          <br></br>
          This website is a passion project detailing my interests and developer journey
        </p>
        <hr className="w-48 h-1 bg-orange-600 border-0 rounded"></hr>
        <div className='flex space-x-14 py-10 px-10'>
          <div className='flex w-16 h-16 bg-orange-500 rounded-xl items-center justify-center'>
            <Image className = 'object-cover' src='/images/c-icon.png' alt='C Icon' width = {64} height = {64}/>
          </div>
          <div className='flex w-16 h-16 bg-orange-500 rounded-xl items-center justify-center'>
            <Image className = 'object-cover' src='/images/js-icon.png' alt='JavaScript Icon' width = {50} height = {50}/>
          </div>
          <div className='flex w-16 h-16 bg-orange-500 rounded-xl items-center justify-center'>
            <Image className = 'object-cover' src='/images/ts-icon.png' alt='TypeScript Icon' width = {50} height = {50}/>
          </div>
          <div className='flex w-16 h-16 bg-orange-500 rounded-xl items-center justify-center'>
            <Image className = 'object-cover' src='/images/gitlab-icon.png' alt='Gitlab Icon' width = {50} height = {50}/>
          </div>
        </div>
      </div>
      
    

    </MaxWidthWrapper>)
}
