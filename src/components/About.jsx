import { useState } from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../assets/bi2.jpg';

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title1: 'Full Stack Developer',
    title2: 'Skills:',
    desc1: `I am a full-stack developer and dedicated learner in web design with hands-on experience from projects and courses.
     I specialize in creating user-friendly interfaces, optimizing performance, and ensuring robust functionality.
     Passionate about continuous improvement, I am eager to contribute to innovative projects and enhance my skills.`,
  });

  const [skills] = useState(['React', 'JavaScript', 'MongoDB', 'Java']);

  return (
    <motion.div 
      id="about" 
      className="main-container py-10 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1 
        className="text-4xl pb-4 font-bold underline text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <div className="main-container2 flex flex-col lg:flex-row items-center">
        {/* Profile Image */}
        <motion.div 
          className="w-full flex justify-center lg:w-1/2 mb-8 lg:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="w-72 h-72 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-gray-300">
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
          <div className="w-11/12 lg:w-2/3 space-y-4 text-center lg:text-left">
            <motion.h1 
              className="text-3xl font-semibold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {data.title1}
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              {data.desc1}
            </motion.p>

            <motion.h2 
              className="text-2xl font-semibold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {data.title2}
            </motion.h2>

            <motion.ul 
              className="list-disc list-inside text-lg space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
              }}
            >
              {skills.map((skill, index) => (
                <motion.li 
                  key={index} 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
