import Image from 'next/image';
import { useState } from 'react';
import CourseCard from './CourseCard';
import CourseTabs from './CourseTabs';
import LanguageBadge from './LanguageBadge';
import { motion } from "framer-motion";

const courses = {
    completed: [{courseCode: "COMP1511", courseTitle: "Programming Fundamentals", term: "24T1", tags: ["C"], grade: "85", rating: "8 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP1511"},
        {courseCode: "COMP1521", courseTitle: "Computer Systems Fundamentals", term: "24T2", tags: ["C", "Assembly"], grade: "89", rating: "7.5 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP1521"},
        {courseCode: "COMP1531", courseTitle: "Software Engineering Fundamentals", term: "24T3", tags: ["TypeScript", "Git"], grade: "99", rating: "9 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP1531"},
        {courseCode: "COMP2521", courseTitle: "Data Structures & Algorithms", term: "24T2", tags: ["C"], grade: "86", rating: "9 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2521"},
        {courseCode: "MATH1131", courseTitle: "Mathematics 1A", term: "24T1", tags: ["Linear Algebra", "Calc."], grade: "89", rating: "8 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1131"},
        {courseCode: "MATH1231", courseTitle: "Mathematics 1B", term: "24T2", tags: ["Linear Algebra", "Calc."], grade: "86", rating: "7 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1231"},
        {courseCode: "MATH1081", courseTitle: "Discrete Mathematics", term: "24T3", tags: ["Number Theory", "Proofs"], grade: "88", rating: "9 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1081"},
        {courseCode: "PHYS1160", courseTitle: "Introduction to Astronomy", term: "24T3", tags: ["Physics", "Gen ed"], grade: "97", rating: "9.5 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/PHYS1160"},
        {courseCode: "COMP2511", courseTitle: "Object Oriented Design & Programming", term: "25T1", tags: ["Java", "Git"], grade: "96", rating: "9.5 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2511"},
        {courseCode: "COMP2041", courseTitle: "Software Construction: Techniques and Tools", term: "25T1", tags: ["Shell", "Python"], grade: "88", rating: "7 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2041"},
        {courseCode: "COMP3311", courseTitle: "Database Systems", term: "25T1", tags: ["PostgreSQL", "Python"], grade: "97", rating: "9 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3311"},
        {courseCode: "COMP3231", courseTitle: "Operating Systems", term: "25T2", tags: ["C", "Linux"], grade: "90", rating: "9 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3231"},
        {courseCode: "COMP3331", courseTitle: "Computer Networks and Applications", term: "25T2", tags: ["TCP/IP"], grade: "89", rating: "8 / 10", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3331"},
        {courseCode: "COMP6841", courseTitle: "Extended Security Engineering and Cyber Security", term: "25T2", tags: ["Theory", "CTF"], grade: "84", rating: "7 / 10", link: "https://www.handbook.unsw.edu.au/postgraduate/courses/2025/COMP6841"}
    ],
    completing: [{courseCode: "COMP3121", courseTitle: "Algorithm Design and Analysis", term: "25T3", tags: ["DS & A", "Proofs"], grade: "", rating: "", link: ""},
        {courseCode: "COMP6080", courseTitle: "Web Front-End Programming", term: "25T3", tags: ["JavaScript", "HTML/CSS", "React"], grade: "", rating: "", link: ""},
    ],
    planned: [
        {courseCode: "COMP3900", courseTitle: "Computer Science Project", term: "26", tags: [], grade: "", rating: "", link: ""},
        {courseCode: "COMP4920", courseTitle: "Professional Issues and Ethics in Information Technology", term: "26", tags: [], grade: "", rating: "", link: ""},
        {courseCode: "ARTS2363", courseTitle: "Chinese Philosophy", term: "26", tags: ["Confucianism", "Toaism"], grade: "", rating: "", link: ""}
    ]
};

const languages = [{language: "C/C++", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
                    {language: 'Python', imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"},
                    {language: "TypeScript", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
                    {language: "Java", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
                    {language: "PostgreSQL", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"},
                    {language: "Shell", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"}
                ];

const tools = [{language: "Git", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
                {language: 'Linux', imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},
            ];

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState<'completed' | 'planned' | 'completing'>('completed');
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <div className='py-10 md:py-16 mx-auto text-center flex flex-col items-center'>
                <h1 className='text-2xl md:text-6xl font-bold font-mono tracking-tighter text-gray-800'>
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
                    <div className="rounded-3xl overflow-hidden w-48 h-48 md:w-96 md:h-96 border-solid border-4 border-orange-500 ml-5">
                        <Image src="/images/me1.jpg" alt="Your Photo" width={500} height={500} className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Right side with text */}
                <div className="flex flex-col justify-center w-1/2">
                    <h1 className="text-2xl md:text-6xl p-5 m:p-0 font-bold text-gray-900 font-mono tracking-tighter">Will Gaston</h1>
                    <p className="text-md md:text-2xl p-5 m:p-0 text-gray-700 font-mono tracking-tighter mt-4 mr-0 md:mr-2">
                        Originally from Orange in country NSW, I currently live and study in <span className='text-orange-500'>
                            Sydney at UNSW
                        </span>.<br></br><br></br>
                        I am a <span className='text-orange-500'>
                            2nd year
                        </span> (penultimate) student in <span className='text-orange-500'>
                            Computer Science
                        </span> with an <span className='text-orange-500'>
                            90.80 WAM
                        </span>.
                    </p>
                </div>
            </div>

            <div className='flex pt-20 pb-10 w-1/3 jusitfy-center items-center'>
                <hr className="w-full h-1 p-0.5 bg-orange-600 border-1 rounded"></hr>
            </div>

            <div className='flex flex-row'>
                <div className='w-1/2 flex flex-col items-center'>
                    <h1 className=" pt-10 text-xl md:text-3xl text-center font-bold text-gray-900 font-mono tracking-tighter py-6">Languages</h1>

                    <p className="text-center w-4/5 text-md md:text-xl text-gray-700 font-mono tracking-tighter">Below are the languages that I am currently learning or have had exposure to <br></br> </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pb-20">
                        {languages.map((lang, index) => (
                        <LanguageBadge key={index} language={lang.language} imgLink={lang.imgLink} index={index} />
                        ))}
                    </div>
                </div>

                <div className='w-1/2 flex flex-col items-center'>
                    <h1 className=" pt-10 text-xl md:text-3xl text-center font-bold text-gray-900 font-mono tracking-tighter py-6">Tools</h1>

                    <p className="text-center w-4/5 text-md md:text-xl text-gray-700 font-mono tracking-tighter">Below are the dev tools that I am currently learning or have had exposure to <br></br> </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 pb-20">
                        {tools.map((lang, index) => (
                        <LanguageBadge key={index} language={lang.language} imgLink={lang.imgLink} index={index} />
                        ))}
                    </div>
                </div>

            </div>

            <h1 className="text-xl md:text-3xl font-bold text-gray-900 font-mono tracking-tighter py-6">Extra-Curriculars</h1>
            <p className="text-center w-4/5 text-md md:text-xl text-gray-700 font-mono tracking-tighter pb-12">IMC Programming Contest (SPCPA) <br></br> AllUni Coding Competition <br></br> IMC Coding Competition (CPMSoc) <br></br> Various SPAR Contests <br></br>  </p>

            <h1 className="text-xl md:text-3xl font-bold text-gray-900 font-mono tracking-tighter py-6">Courses</h1>
            <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-52">
                {courses[activeTab].map((course, index) => (
                    <motion.a
                        key={index} 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full"
                        href={course.link}
                        target="_blank"
                    >
                        <CourseCard course={course} type={activeTab} />
                    </motion.a>
                ))}
            </div>

        </div>)
}