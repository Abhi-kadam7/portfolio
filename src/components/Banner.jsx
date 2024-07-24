import bannerImage from '../assets/bi1.jpg';
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
  const [data,setData]=useState({
    title: 'Abhijit.B. Kadam',
    desc:`I am a dedicated learner in web design and full-stack development, passionate about creating seamless digital experiences.
 With a foundation in front-end and back-end technologies, I focus on user-centric design, performance optimization, and robust functionality.
 Driven by curiosity and a commitment to quality, I aim to contribute to innovative projects and continuously enhance my skills.`
  })

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack-Developer","Web-Designer"], // Strings to display
      
      // Speed settings
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
    <div id='home'
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: 'cover',
      }}
      className="main-container flex flex-col lg:flex-row items-center h-auto py-8 lg:py-0"
    >
      <div className="w-full flex justify-center text-white lg:w-1/2 px-5 lg:px-10">
        {/* text */}
        <div className='w-full lg:w-2/3 space-y-3 text-center lg:text-left'>
          <h3 className='text-3xl font-semibold'>Hi, I am</h3>
          <h1 className='text-4xl lg:text-5xl font-bold'>{data.title}</h1>
          <h2 className='text-2xl lg:text-3xl'>I am a <span className='font-bold underline' ref={el}></span></h2>
          <p className="text-sm lg:text-lg ">
{data.desc}
 </p>

          <div className='space-x-4 flex justify-center lg:justify-start'>
            {/* icons */}
            <a href='https://www.facebook.com/profile.php?id=100079260221773&mibextid=ZbWKwL'target='_blank' className=' cursor-pointer  hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-700'>
              <i className="fa-brands fa-facebook text-2xl lg:text-3xl"></i>
            </a>
            <a href='https://www.instagram.com/invites/contact/?i=1rlkt48w2384&utm_content=nzrci07 ' target='_blank' className='cursor-pointer  hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-700 '>
              <i className="fa-brands fa-square-instagram text-2xl lg:text-3xl"></i>
            </a>
            <a href='https://www.linkedin.com/in/abhijit-kadam-15b1912b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'  className='cursor-pointer  hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-700'>
              <i className="fa-brands fa-linkedin text-2xl lg:text-3xl"></i>
            </a>
            <a href='https://wa.me/917767884217'target='_blank' className='cursor-pointer  hover:bg-orange-600 px-3 py-3 w-11 h-10 rounded-full flex justify-center items-center bg-gray-700'>
              <i className="fa-brands fa-square-whatsapp text-2xl lg:text-3xl"></i>
            </a>
          </div>

          <div className='mt-4 pb-4 pt-3'>
            <a href="/contact" className='text-lg px-4 py-2 bg-orange-500 rounded-full shadow-lg outline text-white'>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center lg:w-1/2">
        {/* image */}
        <img className="h-96 w-fit lg:h-96 lg:w-fit rounded-full shadow-2xl mt-8 lg:mt-0" src={bannerImage} alt="Not found" />
      </div>
    </div>
  );
};

export default Banner;
