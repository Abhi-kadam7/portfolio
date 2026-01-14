import { useState } from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/bi2.jpg';

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title1: 'Computer Science Student & Frontend Developer', 
    title2: 'Technical Skills:',
    desc1: `Frontend Developer with strong experience in building responsive and interactive web applications using HTML, CSS, JavaScript, and React.js. 
    I am skilled in developing reusable UI components, implementing modern layouts, and integrating REST APIs. 
    I have a good understanding of web standards, cross-browser compatibility, and frontend performance optimization, seeking to create efficient and user-focused web interfaces.`,
  });

  const [skills] = useState([
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Node.js & MongoDB',
    'REST APIs & JWT Authentication',
    'Git, GitHub & Postman',
    'Java (Core)',
    'Tailwind CSS' 
  ]);

  return (
    <motion.div 
      id="about" 
      className="main-container py-12 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1 
        className="text-4xl pb-8 font-bold underline text-center text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <div className="main-container2 flex flex-col lg:flex-row items-center px-6 lg:px-20 gap-10">
        {/* Profile Image */}
        <motion.div 
          className="w-full flex justify-center lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-orange-400">
            <img 
              className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
              src={data.image} 
              alt="Profile"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div 
          className="w-full flex justify-center lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full space-y-6 text-center lg:text-left">
            <motion.h1 
              className="text-3xl font-bold text-gray-800"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {data.title1}
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              {data.desc1}
            </motion.p>

            <motion.div>
                <motion.h2 
                className="text-2xl font-semibold text-gray-800 mb-4"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                >
                {data.title2}
                </motion.h2>

                <motion.ul 
                // Updated Grid: 1 column on mobile (grid-cols-1), 2 columns on small screens+ (sm:grid-cols-2)
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-lg text-gray-700"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                }}
                >
                {skills.map((skill, index) => (
                    <motion.li 
                    key={index} 
                    className="flex items-center gap-2 justify-center lg:justify-start"
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {skill}
                    </motion.li>
                ))}
                </motion.ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;