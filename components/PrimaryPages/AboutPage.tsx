import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import LanguageBadge from '../LanguageBadge';
import CourseTabs from '../Course/CourseTabs';
import CourseCard from '../Course/CourseCard';
import { courses, languages, tools } from '@/app/data';

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState<'completed' | 'planned' | 'completing'>('completed');
    const [inputText, setInputText] = useState("");
    const [sortType, setSortType] = useState("");
    const [sortedCourses ,setSortedCourses] = useState(courses);

    const doSort = (itemsToSort) => {
        if (!itemsToSort) return;
        
        const sorted = [...itemsToSort].sort((a, b) => {
        
        switch (sortType) {
        case "GA":
            return Number(a.grade) - Number(b.grade);
        case "GD":
            return Number(b.grade) - Number(a.grade);
        case "RA":
            return Number(a.rating) - Number(b.rating);
        case "RD":
            return Number(b.rating) - Number(a.rating);
        case "DA":
            return a.term.localeCompare(b.term);
        case "DD": {
            return b.term.localeCompare(a.term);
        }
        default:
            return 0;
        }
        });

        return sorted;
    }

    const doSearch = () => {
        const sortedSearched = courses[activeTab].filter((course) => {
                return course.courseCode.toLowerCase().includes(inputText.toLowerCase()) ||
                course.courseTitle.toLowerCase().includes(inputText.toLowerCase());
            });

        const sorted = doSort(sortedSearched);
        setSortedCourses(prev => ({
            ...prev,
            [activeTab]: sorted
        }));
    }

    useEffect(() => {
        doSearch();
    }, [sortType, inputText, activeTab]);

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className='py-10 md:py-16 mx-auto text-center flex flex-col items-center h-full'>
                <h1 className='text-2xl md:text-6xl font-bold font-mono tracking-tighter text-gray-800'>
                    {' '}
                    <span className='text-orange-500'>
                        Me
                    </span>
                    .
                </h1>
            </div>
            <div className="flex h-[60vh]">
                <div className="flex justify-center items-center w-1/2">
                    <div className="rounded-3xl overflow-hidden w-48 h-48 md:w-96 md:h-96 border-solid border-4 border-orange-500 ml-5">
                        <Image src="/images/me1.jpg" alt="Your Photo" width={500} height={500} className="object-cover w-full h-full" />
                    </div>
                </div>

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

            <div className='flex flex-row gap-2'>
                <input
                    type='text'
                    placeholder='Begin typing to search courses...'
                    onChange={(event) => setInputText(event.target.value)}
                    className='border border-gray-600 rounded-lg p-2 w-[200px] md:w-[600px] text-sm'
                />

                <select
                    id="sort" name="sort"
                    className='border border-gray-600 rounded-lg'
                    onChange={(event) => setSortType(event.target.value)}
                    defaultValue={""}
                >
                    <option value="" disabled>Sort By...</option>
                    <option value="GA">Grade Ascending</option>
                    <option value="GD">Grade Descending</option>
                    <option value="RA">Rating Ascending</option>
                    <option value="RD">Rating Descending</option>
                    <option value="DA">Date Ascending</option>
                    <option value="DD">Date Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-52">
                {sortedCourses[activeTab].map((course, index) => (
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