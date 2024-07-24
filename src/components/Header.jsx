import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  //  for navigation

const Header = () => {
  const [brandName, setBrandName] = useState('Abhijit.B.Kadam');
  const [menuLinks, setMenuLinks] = useState([
    { title: 'Home', 
      link: '#home', 
      id: 1 },
    { title: 'About',
       link: '#about', 
       id: 2 },
    { title: 'Projects',
       link: '#projects',
        id: 3 },
    { title: 'Contact', 
      link: '#contact',
       id: 4 },
  ]);
  
  
  const [hireButton, setHireButton] = useState({
    title: 'Hire Me',
    link: '#hire',
  });


  const [isMenuOpen, setIsMenuOpen] = useState(false);  // setup navigation button
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-200 border-b">
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="hidden lg:block">
        
        
          <nav className="flex space-x-6">   {/* //for pc */}
            
            {menuLinks.map((link) => (
              <a key={link.id} href={link.link} className="hover:text-orange-500">
                {link.title}
              </a>
            ))}
          </nav>
       
        </div>
        <div className="hidden lg:block">
        
          <a href={hireButton.link} className="px-4 py-2 bg-orange-500 rounded-full text-xl shadow-lg font-semibold outline">
            {hireButton.title}
          </a>
      
        </div>
        
        
        
        
        <div className="lg:hidden">
          
          
          <button onClick={toggleMenu} >     {/* navigation button */}
            {isMenuOpen ? <FaTimes className="text-2xl " /> : <FaBars className="text-2xl" />}
          </button>
     
       </div>
     </div>
     
      {isMenuOpen && (         // for mobile
        <div className="lg:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {menuLinks.map((link) => (
              <a key={link.id} href={link.link} className="hover:text-orange-500">
                {link.title}
              </a>
            ))}
          
          
            <a href={hireButton.link} className="px-4 py-2 bg-orange-500 rounded-full text-xl shadow-lg font-semibold outline">
              {hireButton.title}
            </a>
       
       
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
