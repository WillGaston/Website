type CourseType = {
  courseCode: string;
  courseTitle: string;
  term: string;
  tags: Array<string>;
  grade: string;
  rating: string;
  link: string;
};

type CourseCardType = {
  course: CourseType;
  type: 'completed' | 'planned' | 'completing';
};

const LANGUAGE_COLORS: Record<string, string> = {
  'C': 'bg-blue-700',
  'Python': 'bg-lime-700',
  'Assembly': 'bg-red-500',
  'Java': 'bg-orange-400',
  'JavaScript': 'bg-yellow-500',
  'TypeScript': 'bg-blue-400',
  'PostgreSQL': 'bg-red-400',
  'Shell': 'bg-gray-500',
};

export default function CourseCard({ course, type }: CourseCardType) {
  const isCompleted = type === 'completed';
  const isCompleting = type === 'completing';

  return (
    <div
      className={`p-4 max-w-sm h-48 rounded-xl shadow-md border flex flex-col justify-between
        ${isCompleted ? 'border-green-400' : isCompleting ? 'border-red-400' : 'border-blue-400'}
      `}
    >
      <div className="pr-20">
        <h2 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors line-clamp-2">
          {course.courseTitle}
        </h2>
        <p className="text-sm text-gray-600 tracking-wide">
          {course.courseCode}
        </p>
      </div>

      {isCompleted && (
        <div className="flex gap-3 items-center bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-green-200/50">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-gray-600">Grade:</span>
            <span className="text-base font-bold text-gray-900">{course.grade}</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-gray-600">Rating:</span>
            <span className="text-base font-bold text-gray-900">{course.rating}</span>
          </div>
        </div>
      )}

      <div className="flex justify-between items-end gap-3">
        <div className="flex flex-col">
          <span className={`text-xs ${type==='completed' ? "text-green-600" : type === 'completing' ? 'text-red-600' : 'text-blue-600'} font-medium uppercase tracking-wide mb-0.5`}>
            {type === 'completed' ? 'Completed' : type === 'completing' ? 'In Progress' : 'Planned'}
          </span>
          <span className={`text-sm font-bold`}>
            {course.term}
          </span>
        </div>

        <div className="flex gap-1.5 flex-wrap justify-end max-w-[180px]">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className={`
                text-xs font-semibold px-2.5 py-1 rounded-lg text-white 
                ${LANGUAGE_COLORS[tag] || 'bg-gray-500'}
                shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}