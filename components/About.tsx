import Image from 'next/image';


export default function AboutPage() {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <div className='py-16 mx-auto text-center flex flex-col items-center'>
                <h1 className='text-6xl font-bold font-mono tracking-tighter text-gray-800'>
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
                    <div className="rounded-3xl overflow-hidden w-96 h-96 border-solid border-4 border-orange-500">
                        <Image src="/images/me1.jpg" alt="Your Photo" width={500} height={500} className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Right side with text */}
                <div className="flex flex-col justify-center w-1/2">
                    <h1 className="text-6xl font-bold text-gray-900 font-mono tracking-tighter">Will Gaston</h1>
                    <p className="text-2xl text-gray-700 font-mono tracking-tighter mt-4">
                        Originally from Orange in country NSW, I currently live and study in <span className='text-orange-500'>
                            Sydney at UNSW
                        </span>.<br></br><br></br>
                        I am a <span className='text-orange-500'>
                            2nd year
                        </span> (penultimate) student in <span className='text-orange-500'>
                            Computer Science
                        </span> with an <span className='text-orange-500'>
                            89.75 WAM
                        </span>.
                    </p>
                </div>
            </div>

            <div className="py-12 flex justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 font-mono tracking-tighter">Languages</h1>
                    <p className="text-2xl text-gray-700 font-mono tracking-tighter">Below are the languages that I am currently learning or have had exposure to <br></br> </p>
                    <div className="py-6 grid grid-cols-3 gap-4">
                        <p className="text-gray-700"> • {' '}
                            <span className='text-blue-700 font-mono tracking-tighter text-xl'>
                                C/C++
                            </span></p>
                        <p className="text-gray-700 font-mono tracking-tighter text-xl"> • {' '}
                            <span className='text-yellow-500'>
                                JavaScript
                            </span> {' '}/{' '}
                            <span className='text-blue-400'>
                                TypeScript
                            </span></p>
                        <p className="text-gray-700 font-mono tracking-tighter text-xl"> • {' '}
                            <span className='text-lime-700'>
                                Python
                            </span></p>
                        <p className="text-gray-700 font-mono tracking-tighter text-xl"> • {' '}
                            <span className='text-orange-400'>
                                Java
                            </span></p>
                        <p className="text-gray-700 font-mono tracking-tighter text-xl"> • {' '}
                            <span className='text-red-400'>
                                SQL
                            </span></p>
                        <p className="text-gray-700 font-mono tracking-tighter text-xl"> • {' '}
                            <span className='text-gray-500'>
                                Shell
                            </span></p>
                    </div>
                </div>
            </div>

            <div className="py-12 flex justify-center">
                <div className="text-center font-mono tracking-tighter">
                    <h1 className="text-3xl font-bold text-gray-900">Completed Uni Courses</h1>
                    <h2 className="text-2xl font-bold text-gray-800">WAM: 89.75</h2>
                    <p className="text-2xl text-gray-700">Below are university courses I have completed or am currently studying.<br></br></p>
                    <div className="py-6 grid grid-cols-2">
                        <p className="text-gray-700 text-start text-lg"> • MATH1131 - 1A : 89<br></br>
                            • MATH1231 - 1B : 86<br></br>
                            • MATH1081 - Discrete : 88<br></br>
                            • PHYS1160 - Intro to Astronomy : 97 (gen. ed.)</p>
                        <p className="text-gray-700 text-start text-lg"> • COMP1511 - Prog. Fundamentals : 85<br></br>
                            • COMP1521 - Comp. Sys. Fundamentals : 89<br></br>
                            • COMP1531 - SENG Fundamentals : 99<br></br>
                            • COMP2521 - Data Structures and Algorithms : 86</p>
                    </div>
                </div>
            </div>

            <div className="py-12 flex justify-center">
                <div className="text-center font-mono tracking-tighter">
                    <h1 className="text-3xl font-bold text-gray-900">Courses I want to complete</h1>
                    <p className="text-2xl text-gray-700">Below are university courses I intend to study.<br></br></p>
                    <div className="py-6 grid grid-cols-2">
                        <p className="text-gray-700 text-start text-lg">
                            Year 2 <br></br><br></br>
                            Term 1 <br></br>
                            • COMP2041 - Software Construction<br></br>
                            • COMP2511 - OOP<br></br>
                            • COMP3311 - Databases<br></br><br></br>
                            Term 2 <br></br>
                            • COMP3231 - Operating Systems<br></br>
                            • COMP3331 - Networks<br></br>
                            • COMP6841 - Extended Sec Eng / Cyber Sec<br></br><br></br>
                            Term 3 <br></br>
                            • COMP3121 - Algo Design & Analysis<br></br>
                            • COMP6080 - Web Front End<br></br><br></br>
                        </p>
                        <p className="text-gray-700 text-start text-lg">
                            Year 3 <br></br><br></br>
                            I have not decided on my courses and the structure <br></br>exactly but am thinking of the following:<br></br><br></br>
                            • COMP3900 - Comp Sci Project<br></br>
                            • COMP4337 - Securing Fixed/Wireless Networks<br></br>
                            • COMP4920 - Issues/Ethics in IT<br></br>
                            • COMP6714 - Information Retrieval and Web Search<br></br>
                            • COMP6843 - Extended Web Security<br></br>
                            • COMP9417 - Machine Learning and Data Mining<br></br>
                            • ARST2363 - CHinese Philosophy (gen. ed.)<br></br><br></br>
                        </p>
                    </div>
                </div>
            </div>

        </div>)
}