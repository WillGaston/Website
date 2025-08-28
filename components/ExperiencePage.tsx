
type ExperienceType = {
  title: string;
  company: string;
  duration: string;
  description: string;
  tags?: string[];
  image?: string;
  when: string;
};

export default function ExperienceSection() {
  const experiences: ExperienceType[] = [
    {
      title: 'Incoming Software Engineer Intern',
      company: 'Macquarie Group',
      duration: 'December 2025 - February 2026',
      description: '\n Incoming summer intern in the Corporate Operations team',
      tags: ['Tailwind', 'React'],
      image: '/images/uiux.png',
      when: 'future',
    },
    {
      title: 'Casual Academic',
      company: 'University of New South Wales, school of CSE',
      duration: 'September 2025 - December 2025',
      description: '\n Lab Assistant for COMP2511 - OOP design and programming',
      tags: ['Java', 'OOP', 'Design Patterns'],
      image: '/images/uiux.png',
      when: 'current',
    },
    {
      title: 'Student Work Experience',
      company: 'Phocas Software',
      duration: 'April 2022 - April 2022',
      description:
        '\n- shadowed developers\n- participated in pair programming\n- attended cross-team standups\n- rotations through full-stack, backend, frontend teams',
      tags: ['C#', 'Agile', 'Software Lifecycle'],
      image: '/images/frontend.png',
      when: 'previous',
    },
  ];

  // Split experiences by "when"
  const futureExps = experiences.filter(exp => exp.when === 'future');
  const currentExps = experiences.filter(exp => exp.when === 'current');
  const previousExps = experiences.filter(exp => exp.when === 'previous');

  const renderSection = (title: string, items: ExperienceType[]) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-12">
        <h2 className="text-3xl font-bold font-mono text-gray-800 mb-6 text-center">{title}</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4">
          {items.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="text-center">
                  <p className="text-lg md:text-2xl font-semibold">{exp.title}</p>
                  <p className="text-base font-normal text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                  <p className="text-sm mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
                </div>

              </div>
            </div>
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