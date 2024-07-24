import { useState } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([
    {
      title: 'Quiz-App',
      description: 'I built a quiz app with React.js, featuring a user-friendly interface, instant feedback, and progress tracking, showcasing my front-end development skills and passion for interactive design.',
    },
    {
      title: 'To-Do List',
      description: 'I developed a quiz app with React.js, offering an intuitive interface and progress tracking, demonstrating my front-end development expertise. I also created a to-do list app to improve task management and boost productivity.',
    },
    {
      title: 'Calculator',
      description: 'I designed and built a sophisticated calculator app using React.js, featuring a sleek and intuitive interface. This project highlights my skills in creating practical, user-friendly tools with precise functionality and responsive design.',
    },
  ]);

  return (
    <div id='projects' className="main_container py-8">
      <h1 className="text-4xl pb-8 font-bold underline text-center">
        Projects
      </h1>

      <div className="project_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 text-center">
        {projects.map((project, id) => (
          <div key={id} className="bg-gray-200 rounded-xl py-4 shadow-xl p-3">
            <h1 className="font-bold text-3xl pb-4">{project.title}</h1>
            <p className="pb-4 text-lg">
              {project.description}
            </p>
            <button className="px-2 py-1 bg-orange-500 rounded-full text-xl shadow-lg font-medium outline">
              Check
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
