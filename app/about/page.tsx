import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from 'next/image';


export default function Home() {
  return (
    <MaxWidthWrapper>
      <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <a href="/" className = 'text-gray-900 font-semibold text-1xl hover:text-orange-500'>Home</a>
        <div>
          <a href="/about" className = 'text-orange-600 font-semibold text-1xl hover:text-orange-500 px-5 underline underline-offset-2'>About</a>
          <a href="/projects" className = 'text-gray-900 font-semibold text-1xl hover:text-orange-500 px-5'>Projects</a>
          <a href="/gallery" className = 'text-gray-900 font-semibold text-1xl hover:text-orange-500 px-5'>Gallery</a>
        </div>
      </header> 
      <div className = 'py-8 mx-auto text-center flex flex-col items-center'>
        <h1 className = 'text-3xl font-bold tracking-tight text-gray-800'>
          {' '}
          <span className='text-orange-500'>
            Me
          </span>
          .
        </h1>
      </div>
      <div className="flex h-[60vh]">
        {/* Left side with a circular image */}
        <div className="flex justify-center items-center w-1/2">
          <div className="rounded-full overflow-hidden w-64 h-64 border-solid border-4 border-orange-500">
            {/* <Image src="/images/me.jpg" alt="Your Photo" width = {256} height = {256} className="object-cover w-full h-full" /> */}
          </div>
        </div>

        {/* Right side with text */}
        <div className="flex flex-col justify-center w-1/2 px-2">
          <h1 className="text-4xl font-bold text-gray-900">Will Gaston</h1>
          <p className="text-lg text-gray-700 mt-4">
            I am a first year computer science student at UNSW, currently living in Sydney but originally from Orange in regional NSW.
          </p>
        </div>
      </div>

      <div className="py-16 flex justify-center">
        <div className ="text-center">
          <h1 className="text-lg font-bold text-gray-900">Languages</h1>
          <p className="text-sm text-gray-700">Below are the languages and frameworks that I am familiar with. <br></br> As a student I am constantly learning and thus my proficiency is rapidly increasing.</p>
          <div className="py-6 grid grid-cols-3 gap-4 h-[40-vh]">
            <p className="text-gray-700"> • {' '}
              <span className='text-blue-700'>
                C
              </span></p>
            <p className="text-gray-700"> • {' '}
              <span className='text-yellow-500'>
                JavaScript
              </span> {' '}/{' '}
              <span className = 'text-blue-400'>
                TypeScript
              </span></p>
            <p className="text-gray-700"> • {' '}
              <span className='text-lime-700'>
                Python
              </span></p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className ="text-center">
          <h1 className="text-lg font-bold text-gray-900">Completed Uni Courses</h1>
          <p className="text-sm text-gray-700">Below are university courses I have completed or am currently studying.<br></br></p>
          <div className="py-6 grid grid-cols-2 h-[40vh]">
            <p className="text-gray-700 text-start text-sm"> • MATH1131 - 1A <br></br>
            • MATH1231 - 1B<br></br>
            • MATH1081 - Discrete</p>
            <p className="text-gray-700 text-start text-sm"> • COMP1511 - Prog. Fundamentals <br></br>
            • COMP1521 - Comp. Sys. Fundamentals <br></br>
            • COMP1531 - SENG Fundamentals <br></br>
            • COMP2521 - Data Structures and Algorithms </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className ="text-center">
          <h1 className="text-lg font-bold text-gray-900">Courses I want to complete</h1>
          <p className="text-sm text-gray-700">Below are university courses I intend to study.<br></br></p>
          <div className="py-6 grid grid-cols-2 h-[40vh]">
            <p className="text-gray-700 text-start text-sm"> 
              Year 2 <br></br><br></br>
              • COMP2511 - OOP<br></br>
              • COMP3331 - Networks<br></br>
              • COMP3121 - Algo Design & Analysis<br></br>
              • COMP2041 - Software Construction<br></br>
              • COMP3311 - Databases<br></br>
              • COMP6841 - Security Eng / Cyber Security<br></br>
              • COMP6080 - Web Front End<br></br>
              • COMP6991 - Rust<br></br><br></br>
            </p>
            <p className="text-gray-700 text-start text-sm">
            Year 3 <br></br><br></br>
            • COMP3231 - OS<br></br>
            • COMP4337 - Securing Fixes/Wireless Networks<br></br>
            • COMP3900 - Comp Sci Project<br></br>
            • COMP4920 - Issues/Ethics in IT<br></br>
            </p>
          </div>
        </div>
      </div>

    </MaxWidthWrapper>)
}