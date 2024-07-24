import { useState } from 'react';
import bannerImage from '../assets/bi2.jpg';

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title1: 'Full Stack-Developer',
    title2: 'Skills :',
    desc1: `I am a full-stack developer and dedicated learner in web design with hands-on experience from projects and courses.
     I specialize in creating user-friendly interfaces, optimizing performance, and ensuring robust functionality.
     Passionate about continuous improvement, I am eager to contribute to innovative projects and enhance my skills.`
  });

  const [skills, setSkills] = useState({
    skill_1: 'React JS',
    skill_2: 'SQL',
    skill_3: 'C++',
  });

  return (
    <div id="about" className="main-container py-8 bg-gray-100">
      <h1 className="text-4xl pb-8 font-bold underline text-center">About Me</h1>

      <div className="main-container2 flex flex-col lg:flex-row items-center">
        <div className='w-full flex justify-center lg:w-1/2 mb-8 lg:mb-0'> {/* banner image */}
          <img className="w-fit h-72 lg:w-fit lg:h-72 rounded-full shadow-2xl border-solid" src={bannerImage} alt="Not found" />
        </div>

        <div className='w-full flex justify-center lg:w-1/2'> {/* text */}
          <div className='w-11/12 lg:w-2/3 space-y-3 text-center lg:text-left'>
            <h1 className='text-3xl font-semibold'>{data.title1}</h1>
            <p className='text-lg'>{data.desc1}</p>
            <h2 className='text-2xl font-semibold'>{data.title2}</h2>
            <ul className='list-disc list-inside text-lg'>
              <li>{skills.skill_1}</li>
              <li>{skills.skill_2}</li>
              <li>{skills.skill_3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
