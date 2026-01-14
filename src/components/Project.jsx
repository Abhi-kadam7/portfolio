import { useState } from 'react';

const Project = () => {
  const [projects] = useState([
    {
      title: 'Quiz-App',
      description: 'I built an interactive Quiz App using React.js, designed to provide an engaging and seamless user experience. It features a dynamic and intuitive UI, instant feedback on answers, progress tracking, and a responsive design for accessibility on all devices. This project reflects my passion for building interactive web applications that enhance learning and engagement.',
      link: 'https://abhi-kadam7.github.io/vite-project/' 
    },    
    {
      title: 'Expense Tracker',
      description: 'A full-stack MERN Expense Tracker that helps users manage their finances effortlessly. It features real-time expense tracking and a clean, user-friendly interface. With data visualization, it makes budgeting smarter and easier. This project showcases my skills in backend integration, API handling, and building scalable web applications.',
      link: 'https://expense-tracker-6odnmotuu-expense-trackers-projects-3f794ac3.vercel.app'
    },    
    {
      title: 'Weather App',
      description: 'I developed a weather application using React.js that provides real-time weather updates based on user location. It features an intuitive UI, API integration for live weather data, and a seamless user experience. This project demonstrates my skills in API handling, state management, and responsive design.',
      link: 'https://abhi-kadam7.github.io/weather-app/' 
    },
    {
      title: 'Job Cards Project',
      description: 'A React.js project to practice props and reusable components with dynamic rendering and state management. This project helped me understand component reusability and passing data via props effectively.',
      link: '#' 
    },
    {
      title: 'Digital Clock using Hooks',
      description: 'A React.js clock application built using useState and useEffect hooks for real-time updates. This project helped me strengthen my understanding of React hooks and state management.',
      link: '#' 
    }
  ]);

  return (
    <div 
      id='projects' 
      className="main_container py-10 bg-gray-100 animate-fadeIn"
    >
      <h1 className="text-4xl pb-8 font-bold underline text-center animate-fadeInUp">
        Projects
      </h1>

      <div className="project_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 text-center">
        {projects.map((project, id) => (
          <div 
            key={id}
            className="relative group rounded-xl overflow-hidden p-[3px] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideInUp"
          >
            {/* Spinning Gradient Layer (Pauses on Hover) */}
            <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] group-hover:[animation-play-state:paused] bg-[conic-gradient(from_90deg_at_50%_50%,#F59E0B_0%,#EC4899_33%,#8B5CF6_66%,#F59E0B_100%)]" />

            {/* Content Layer (White Card) */}
            <div className="relative bg-white h-full rounded-xl p-5 shadow-lg flex flex-col justify-between">
              <div>
                <h1 className="font-bold text-2xl pb-3 text-gray-800">{project.title}</h1>
                <p className="pb-3 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="pt-3">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-1.5 bg-orange-500 text-white rounded-full text-base shadow-md font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:bg-orange-600"
                >
                  Check
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;