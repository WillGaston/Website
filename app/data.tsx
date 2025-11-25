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

export const courses = {
  completed: [
    {courseCode: "COMP1511", courseTitle: "Programming Fundamentals", term: "24T1", tags: ["C"], grade: "85", rating: "8", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP1511"},
    {courseCode: "COMP1521", courseTitle: "Computer Systems Fundamentals", term: "24T2", tags: ["C", "Assembly"], grade: "89", rating: "7.5", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP1521"},
    {courseCode: "COMP1531", courseTitle: "Software Engineering Fundamentals", term: "24T3", tags: ["TypeScript", "Git"], grade: "99", rating: "9", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP1531"},
    {courseCode: "COMP2521", courseTitle: "Data Structures & Algorithms", term: "24T2", tags: ["C"], grade: "86", rating: "9", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2521"},
    {courseCode: "MATH1131", courseTitle: "Mathematics 1A", term: "24T1", tags: ["Linear Algebra", "Calc."], grade: "89", rating: "8", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1131"},
    {courseCode: "MATH1231", courseTitle: "Mathematics 1B", term: "24T2", tags: ["Linear Algebra", "Calc."], grade: "86", rating: "7", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1231"},
    {courseCode: "MATH1081", courseTitle: "Discrete Mathematics", term: "24T3", tags: ["Number Theory", "Proofs"], grade: "88", rating: "9", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/MATH1081"},
    {courseCode: "PHYS1160", courseTitle: "Introduction to Astronomy", term: "24T3", tags: ["Physics", "Gen ed"], grade: "97", rating: "9.5", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/PHYS1160"},
    {courseCode: "COMP2511", courseTitle: "Object Oriented Design & Programming", term: "25T1", tags: ["Java", "Git"], grade: "96", rating: "9.5", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2511"},
    {courseCode: "COMP2041", courseTitle: "Software Construction: Techniques and Tools", term: "25T1", tags: ["Shell", "Python"], grade: "88", rating: "7", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP2041"},
    {courseCode: "COMP3311", courseTitle: "Database Systems", term: "25T1", tags: ["PostgreSQL", "Python"], grade: "97", rating: "9", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3311"},
    {courseCode: "COMP3231", courseTitle: "Operating Systems", term: "25T2", tags: ["C", "Linux"], grade: "90", rating: "9", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3231"},
    {courseCode: "COMP3331", courseTitle: "Computer Networks and Applications", term: "25T2", tags: ["TCP/IP"], grade: "89", rating: "8", link: "https://www.handbook.unsw.edu.au/undergraduate/courses/2025/COMP3331"},
    {courseCode: "COMP6841", courseTitle: "Extended Security Engineering and Cyber Security", term: "25T2", tags: ["Theory", "CTF"], grade: "84", rating: "7", link: "https://www.handbook.unsw.edu.au/postgraduate/courses/2025/COMP6841"}
  ],
  completing: [
    {courseCode: "COMP3121", courseTitle: "Algorithm Design and Analysis", term: "25T3", tags: ["DSA", "Proofs"], grade: "", rating: "", link: ""},
    {courseCode: "COMP6080", courseTitle: "Web Front-End Programming", term: "25T3", tags: ["JS", "React"], grade: "", rating: "", link: ""},
  ],
  planned: [
    {courseCode: "COMP3900", courseTitle: "Computer Science Project", term: "26T2", tags: [], grade: "", rating: "", link: ""},
    {courseCode: "COMP4920", courseTitle: "Professional Issues and Ethics in Information Technology", term: "26T1", tags: [], grade: "", rating: "", link: ""},
    {courseCode: "COMP6771", courseTitle: "Advanced C++ Programming", term: "26T2", tags: [], grade: "", rating: "", link: ""},
    {courseCode: "ARTS2363", courseTitle: "Chinese Philosophy", term: "26", tags: ["Confucianism", "Toaism"], grade: "", rating: "", link: ""}
  ]
};

export const languages = [
  {language: "C/C++", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
  {language: 'Python', imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"},
  {language: "JS/TS", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
  {language: "Java", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
  {language: "PostgreSQL", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"},
  {language: "Shell", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"}
];

export const tools = [
  {language: "Git", imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
  {language: 'Linux', imgLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"},
];

export const images = [
  {
    src: '/images/avodb.png', 
    language: 'Python | PostgreSQL', 
    title: 'avoDB',
    color: 'text-lime-700',
    description: 'End-to-end encrypted database-as-a-service and messanger - cli based with an emphasis on security'
  },
  {
    src: '/images/NovelNote.jpg', 
    language: 'Python | Pandas', 
    title: 'NovelNote',
    color: 'text-lime-700',
    description: 'Python program featuring robust novel and quote recording capabilities, data querying and graphical statistics'
  },
  {
    src: '/images/comp1531Test.jpg',
    language: 'TypeScript',
    color: 'text-blue-400',
    title: 'Toohak - Quiz Game Backend',
    description: 'Quiz Game Backend using RESTful API, with integration testing of HTTP endpoints: made during COMP1531 24T3'
  },
  {
    src: '/images/proxy.jpg', 
    language: 'Python',
    color: 'text-lime-700',
    title: 'HTTP Web Proxy', 
    description: 'HTTP Web Proxy featuring LRU cache, concurrency, and persistence. Supports GET, POST, HEAD, CONNECT requests '
  },
  {
    src: '/images/vm.jpg', 
    language: 'C', 
    title: 'Virtual Memory & Paging',
    color: 'text-blue-700',
    description: 'Virtual memory and a paging management system built on top of OS/161 educational operating system'
  },
  {
    src: '/images/file.jpg', 
    language: 'C', 
    title: 'Virtual File System Abstractions',
    color: 'text-blue-700',
    description: 'Designed a set of file system abstractions including open file tables and per-process file descriptors for OS/161 OS'
  },
  {
    src: '/images/slackr.jpg', 
    language: 'JavaScript', 
    title: 'Frontend Slack Clone',
    color: 'text-yellow-500',
    description: 'Frontend slack clone messaging app written in vanilla javascript'
  },
  {
    src: '/images/airbrb.jpg', 
    language: 'JavaScript', 
    title: 'Frontend Airbnb Clone',
    color: 'text-yellow-500',
    description: 'Frontend airbnb clone written in react'
  },
  {
    src: '/images/huffman.jpg', 
    language: 'C',
    color: 'text-blue-700',
    title: 'Huffman Tree Encoder/Decoder', 
    description: 'CLI program which can encode and decode a huffman tree: made during COMP2521 24T2 Ass1'
  },
  {
    src: '/images/take.jpg',
    language: 'Shell',
    color: 'text-gray-500',
    title: 'Automatic Assignment Marker',
    description: 'Shell scripts to mimic university assignment submission and marking: made during COMP2041 25T1'
  },
  {
    src: '/images/sed.jpg',
    language: 'Python',
    color: 'text-lime-700',
    title: 'sed',
    description: 'Remade subset of sed using python: made during COMP2041 25T1'
  },
  {
    src: '/images/trains.jpeg',
    language: 'Java',
    color: 'text-orange-400',
    title: 'Train Network',
    description: 'Train Network made using OOP principles: made during COMP2511 25T1'
  },
  {
    src: '/images/dungeonmania.jpg',
    language: 'Java',
    color: 'text-orange-400',
    title: 'Dungeon Crawler Game',
    description: 'Refactored and extended a given dungeon crawler game: made during COMP2511 25T1'
  },
  {
    src: '/images/BudgetBuilder.jpg',
    language: 'TypeScript',
    color: 'text-blue-400',
    title: 'Budget Builder (WIP)',
    description: 'WIP bugetting website'
  },
  {
    src: '/images/flightscollector.jpg',
    language: 'C++',
    color: 'text-blue-700',
    title: 'Flights Collector',
    description: 'Collects cheapest flights data using web scraping'
  },
  {
    src: '/images/poodle.jpg', 
    language: 'C',
    color: 'text-blue-700',
    title: 'Simulated Worm',
    description: 'CLI program which acts uses graphs to simulare the propogation of a worm: made during COMP2521 24T2 Ass2'
  },
  {
    src: '/images/filesync.jpg', 
    language: 'C',
    color: 'text-blue-700',
    title: 'File Synchroniser',
    description: 'CLI program which acts as a simplified rsync: made during COMP1521 24T2 Ass2'
  },
  {
    src: '/images/breakout.jpg', 
    language: 'Assembly',
    color: 'text-red-500',
    title: 'Breakout in MIPS',
    description: 'Translated given C code into MIPS assembly: made during COMP1521 24T2 Ass1' 
  },
  {
    src: '/images/website.jpg', 
    language: 'TypeScript | React',
    color: 'text-blue-400',
    title: 'Personal Website',
    description: 'Personal Website for my portfolio and to showcase my personality'
  },
  {
    src: '/images/salesaggregator.png',
    language: 'JavaScript',
    color: 'text-yellow-500',
    title: 'SalesAggregator',
    description: 'Web Scraper and React website for showing Sales and Limited Offers from online retailers.'
  },
  {
    src: '/images/avoshell.jpg',
    language: 'C',
    color: 'text-blue-400',
    title: 'AvoShell',
    description: 'Shell made using arguments and posix_spawn'
  },
];
