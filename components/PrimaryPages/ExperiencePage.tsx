import { experience } from "@/app/data";
import ExperienceCard from "../Experience/ExperienceCard";

type ExperienceType = {
  title: string;
  company: string;
  duration: string;
  description: string;
  tags?: string[];
  image: string;
  when: string;
};

export default function ExperienceSection() {
  const futureExps = experience.filter(exp => exp.when === 'future');
  const currentExps = experience.filter(exp => exp.when === 'current');
  const previousExps = experience.filter(exp => exp.when === 'previous');

  const renderSection = (title: string, items: ExperienceType[]) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-mono text-orange-500 underline mb-6 text-center">{title}</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4">
          {items.map((exp, index) => (
            <ExperienceCard title={exp.title} company={exp.company} duration={exp.duration}
              description={exp.description} image={exp.image} key={index}/>  
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold font-mono tracking-tighter text-gray-800 text-center mb-4">
        My <span className="text-orange-500">Experience</span>.
      </h1>
      <p className="text-center text-xl font-mono tracking-tighter text-gray-700 mb-12 max-w-2xl">
        Below are the work experience, internship and job opportunities I have or will participate in.
      </p>

      {renderSection('Future', futureExps)}
      {renderSection('Current', currentExps)}
      {renderSection('Previous', previousExps)}
    </div>
  );
}