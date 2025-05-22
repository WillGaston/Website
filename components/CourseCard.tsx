

type CourseType = {
    courseCode: string;
    courseTitle: string;
    term: string;
    tags: Array<string>;
    grade: string;
    rating: string;
    link: string;
}

type CourseCardType = {
  course: CourseType;
  type: 'completed' | 'planned' | 'completing'
}

const languageColors: Record<string, string> = {
  "C": 'bg-blue-700',
  "Python": 'bg-lime-700',
  "Assembly": 'bg-red-500',
  "Java": 'bg-orange-400',
  'JavaScript': 'bg-yellow-500',
  "TypeScript": 'bg-blue-400',
  "PostgreSQL": 'bg-red-400',
  "Shell": 'bg-gray-500'
};

export default function CourseCard({ course, type }: CourseCardType) {
  const isCompleted = type === 'completed';
  const areCompleting = type == 'completing'

  return (
    <div className={`p-4 max-w-sm rounded-xl shadow-md border ${isCompleted ? 'border-green-400' : (areCompleting ? 'text-red-400' : 'text-blue-400')}`}>
      <h2 className="text-xl font-semibold text-gray-800">{course.courseTitle}</h2>
      <p className="text-gray-600">{course.courseCode}</p>
      <p className={`mt-2 text-sm text-black`}>
          {isCompleted ? `Mark:  ${course.grade}   |   Rating:  ${course.rating}` : ''}
      </p>
      <p className={`mt-2 text-sm text-black`}>
      </p>
      <div className="flex justify-between items-center mb-2">
        <p className={`mt-2 text-sm ${isCompleted ? 'text-green-600' : (areCompleting ? 'text-red-600' : 'text-blue-600')}`}>
          {isCompleted ? `Completed: ${course.term}` : (areCompleting ? `Completing: ${course.term}` : `Planned: ${course.term}`)}
        </p>
  
        <div className="flex justify-end gap-2 mt-2">
          {course.tags.map((lang, index) => (
            <span
              key={index}
              className={`text-sm font-medium px-2 py-1 rounded ${languageColors[lang] || 'bg-gray-500'} text-white`}
            >
              {lang}
            </span>
          ))}
        
        </div>

      </div>
    </div>
  );
}