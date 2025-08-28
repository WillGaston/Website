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
      <div>
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {course.courseTitle}
        </h2>
        <p className="text-gray-600">{course.courseCode}</p>

        {isCompleted && (
          <div className="mt-3">
            <p className="text-sm text-black">
              Mark: {course.grade} | Rating: {course.rating}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <p
          className={`text-sm ${
            isCompleted
              ? 'text-green-600'
              : isCompleting
              ? 'text-red-600'
              : 'text-blue-600'
          }`}
        >
          {isCompleted
            ? `Completed: ${course.term}`
            : isCompleting
            ? `Completing: ${course.term}`
            : `Planned: ${course.term}`}
        </p>

        <div className="flex gap-2 flex-wrap max-w-[120px]">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2 py-1 rounded text-white ${
                LANGUAGE_COLORS[tag] || 'bg-gray-500'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}