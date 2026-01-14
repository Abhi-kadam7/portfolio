import bannerImage from '../assets/bi1.jpg';
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [data] = useState({
    title: 'Abhijit Bhausaheb Kadam', 
    desc: `Frontend Developer with strong experience in building responsive and interactive web applications using HTML, CSS, JavaScript, and React.js. 
    I am skilled in developing reusable UI components, implementing modern layouts, and integrating REST APIs to create efficient and user-focused web interfaces.`,
  });

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Web-Designer", "React Developer"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      id='home'
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
      }}
      className="main-container flex flex-col lg:flex-row items-center h-auto py-10 lg:py-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Left Side - Text */}
      <motion.div 
        className="w-full flex justify-center text-white lg:w-1/2 px-5 lg:px-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='w-full lg:w-2/3 space-y-5 text-center lg:text-left'>
          <motion.h3 
            className='text-3xl font-semibold'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I am
          </motion.h3>
          <motion.h1 
            className='text-4xl lg:text-5xl font-bold'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {data.title}
          </motion.h1>
          <motion.h2 
            className='text-2xl lg:text-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            I am a <span className='font-bold underline wave-text text-orange-400' ref={el}></span>
          </motion.h2>
          <motion.p 
            className="text-sm lg:text-lg opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {data.desc}
          </motion.p>

          {/* Social Media Icons */}
          <motion.div 
            className='space-x-4 flex justify-center lg:justify-start p-5'
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
          >
            {[
              { href: 'https://www.facebook.com/profile.php?id=100079260221773', icon: 'fa-facebook' },
              { href: 'https://www.instagram.com/invites/contact/?i=1rlkt48w2384&utm_content=nzrci07', icon: 'fa-square-instagram' },
              { href: 'https://www.linkedin.com/in/abhijit-kadam-it', icon: 'fa-linkedin' },
              { href: 'https://wa.me/917767884217', icon: 'fa-square-whatsapp' },
              { href: 'https://github.com/Abhi-kadam7', icon: 'fa-github' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target='_blank'
                rel="noopener noreferrer"
                className='cursor-pointer hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-700 shadow-lg transition-colors duration-300'
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <i className={`fa-brands ${social.icon} text-2xl lg:text-3xl`}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div 
        className="w-full flex justify-center lg:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-300 flex justify-center items-center"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <img className="w-full h-full object-cover" src={bannerImage} alt="Profile" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;