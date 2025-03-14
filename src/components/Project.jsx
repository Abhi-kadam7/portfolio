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
    }
  ]);

  return (
    <div 
      id='projects' 
      className="main_container py-12 bg-gray-100 animate-fadeIn"
    >
      <h1 className="text-4xl pb-8 font-bold underline text-center animate-fadeInUp">
        Projects
      </h1>

      <div className="project_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 text-center">
        {projects.map((project, id) => (
          <div 
            key={id} 
            className="bg-white rounded-xl py-6 shadow-lg p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideInUp"
          >
            <h1 className="font-bold text-3xl pb-4 text-gray-800">{project.title}</h1>
            <p className="pb-4 text-lg text-gray-600">
              {project.description}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-500 text-white rounded-full text-lg shadow-md font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              Check
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
