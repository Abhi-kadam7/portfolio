import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer'; // Correct import

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <Project />
      <About />
      <Footer /> {/* Correct usage */}
    </>
  );
}

export default App;
