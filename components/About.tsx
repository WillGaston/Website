import Image from 'next/image';
import { useState } from 'react';
import CourseCard from './CourseCard';
import CourseTabs from './CourseTabs';

const courses = {
    completed: [{courseCode: "COMP1511", courseTitle: "Programming Fundamentals", term: "24T1", tags: ["C"], grade: "85"},
        {courseCode: "COMP1521", courseTitle: "Computer Systems Fundamentals", term: "24T2", tags: ["C", "Assembly"], grade: "89"},
        {courseCode: "COMP1531", courseTitle: "Software Engineering Fundamentals", term: "24T3", tags: ["TypeScript", "Git"], grade: "99"},
        {courseCode: "COMP2521", courseTitle: "Data Structures & Algorithms", term: "24T2", tags: ["C"], grade: "86"},
        {courseCode: "MATH1131", courseTitle: "Mathematics 1A", term: "24T1", tags: ["Linear Algebra", "Calc."], grade: "89"},
        {courseCode: "MATH1231", courseTitle: "Mathematics 1B", term: "24T2", tags: ["Linear Algebra", "Calc."], grade: "86"},
        {courseCode: "MATH1081", courseTitle: "Discrete Mathematics", term: "24T3", tags: ["Number Theory", "Proofs"], grade: "88"},
        {courseCode: "PHYS1160", courseTitle: "Introduction to Astronomy", term: "24T3", tags: ["Physics", "Gen ed"], grade: "97"}
    ],
    completing: [{courseCode: "COMP2511", courseTitle: "Object Oriented Design & Programming", term: "25T1", tags: ["Java", "Git"], grade: ""},
        {courseCode: "COMP2041", courseTitle: "Software Construction: Techniques and Tools", term: "25T1", tags: ["Shell", "Python"], grade: ""},
        {courseCode: "COMP3311", courseTitle: "Database Systems", term: "25T1", tags: ["PostgreSQL", "Python"], grade: ""}
    ],
    planned: [{courseCode: "COMP3231", courseTitle: "Operating Systems", term: "25T2", tags: ["C", "Linux"], grade: ""},
        {courseCode: "COMP3331", courseTitle: "Computer Networks and Applications", term: "25T2", tags: [], grade: ""},
        {courseCode: "COMP6841", courseTitle: "Extended Security Engineering and Cyber Security", term: "25T2", tags: [], grade: ""},
        {courseCode: "COMP3821", courseTitle: "Extended Algorithm Design and Analysis", term: "25T3", tags: ["DS & A", "Proofs"], grade: ""},
        {courseCode: "COMP6080", courseTitle: "Web Front-End Programming", term: "25T3", tags: ["JavaScript/TypeScript", "HTML/CSS", "React"], grade: ""},
        {courseCode: "COMP3900", courseTitle: "Computer Science Project", term: "26", tags: [], grade: ""},
        {courseCode: "COMP4920", courseTitle: "Professional Issues and Ethics in Information Technology", term: "26", tags: [], grade: ""},
        {courseCode: "ARTS2363", courseTitle: "Chinese Philosophy", term: "26", tags: ["Confucianism", "Toaism", "Mohism", "Legalism"], grade: ""}
    ]
};

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState<'completed' | 'planned' | 'completing'>('completed');
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

            <h1 className="text-3xl font-bold text-gray-900 font-mono tracking-tighter py-6">Courses</h1>
            <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-52">
                {courses[activeTab].map((course, index) => (
                <CourseCard key={index} course={course} type={activeTab} />
                ))}
            </div>

        </div>)
}