type ExperienceType = {
  title: string;
  company: string;
  duration: string;
  description: string;
  tags?: string[];
  image: string;
  when: string;
};

export const experience: ExperienceType[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Macquarie Group',
    duration: 'December 2025 - February 2026',
    description: '\n Summer intern in Corporate Operations Group as a full-stack engineer',
    tags: ['Tailwind', 'React'],
    image: 'https://media.licdn.com/dms/image/v2/C4D0BAQFWxaMqRxHNZQ/company-logo_200_200/company-logo_200_200/0/1630472263203/macquariegroup_logo?e=1765411200&v=beta&t=H16ri0PwZsFjDk0FXOZl-e50new_2-tZLbBxIZnDLRg',
    when: 'future',
  },
  {
    title: 'Casual Academic',
    company: 'UNSW CSE',
    duration: 'September 2025 - Present',
    description: '\n Lab Assistant for COMP2511 - Software Design and Architecture',
    tags: ['Java', 'OOP', 'Design Patterns'],
    image: 'https://media.licdn.com/dms/image/v2/C560BAQEcmwMoNBl6EA/company-logo_200_200/company-logo_200_200/0/1642382031452/unsw_computer_science_and_engineering_logo?e=1765411200&v=beta&t=--MJdgACzh8C792hKJkc7BVIi3SrfJ_uQfV0JC-Kjno',
    when: 'current',
  },
  {
    title: 'Student Work Experience',
    company: 'Phocas Software',
    duration: 'April 2022 - April 2022',
    description:
      'Week-long work experience opportunity in high school. Tasks included: shadowing developers, participating in pair programming, attending cross-team standups, rotations through full-stack, backend, frontend teams',
    tags: ['C#', 'Agile', 'Software Lifecycle'],
    image: 'https://media.licdn.com/dms/image/v2/D4D0BAQHywld87bn8pQ/company-logo_200_200/company-logo_200_200/0/1719257227053/phocas_2_logo?e=1765411200&v=beta&t=-HkwUwnzPade8w60_b0n0Pdw9KjuGiBuUEvWUO2bMpw',
    when: 'previous',
  },
];