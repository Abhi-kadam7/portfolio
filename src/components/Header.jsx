import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa"; 

const Header = () => {
  const [brandName, setBrandName] = useState("Abhijit.B.Kadam");
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "#home", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Projects", link: "#projects", id: 3 },
    { title: "Contact", link: "#contact", id: 4 },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-200 border-b">
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {menuLinks.map((link) => (
              <a key={link.id} href={link.link} className="hover:text-orange-500 transition duration-300">
                {link.title}
              </a>
            ))}
          </nav>

          {/* Download CV Button */}
          <a
            href="/Abhi_Kadam_R.pdf"  // ✅ Make sure this matches your file name in the public folder
            download="Abhi_Kadam_R.pdf" // ✅ This is the name the file will have when downloaded
            style={{
              padding: "10px 25px",
              backgroundColor: "#ff7300",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              borderRadius: "25px",
              textDecoration: "none",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease-in-out",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e65c00";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ff7300";
              e.target.style.transform = "scale(1)";
            }}
          >
            Download CV
            <FaDownload />
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>{isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}</button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {menuLinks.map((link) => (
              <a key={link.id} href={link.link} className="hover:text-orange-500 transition duration-300">
                {link.title}
              </a>
            ))}

            {/* Mobile Download CV Button */}
            <a
              href="/Abhi_Kadam_R.pdf" // ✅ Updated filename here too
              download="Abhi_Kadam_R.pdf" // ✅ Updated filename here too
              style={{
                padding: "10px 25px",
                backgroundColor: "#ff7300",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                borderRadius: "25px",
                textDecoration: "none",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease-in-out",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e65c00";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ff7300";
                e.target.style.transform = "scale(1)";
              }}
            >
              Download CV
              <FaDownload />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;