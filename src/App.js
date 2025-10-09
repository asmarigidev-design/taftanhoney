// کامپوننت اصلی برنامه - Main application component
import {React, useEffect} from 'react';
import Hexagon from './components/Header/Hexagon';
import Hasht from './components/Header/Hasht.js';
import About from './components/About/About.js';
import Features from './components/features/Features';
import Intro from "./components/intro/Intro";
import Footer from './components/Footer/Footer.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

  
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    // ریشه صفحه - Root container
    <div className="app">

      {/* سکشن معرفی اولیه - Intro section */}
      <Intro />
      {/* سکشن شش‌ضلعی‌ها  - Hexagonsection */}
      <div className='aaa'>
        <Hexagon />
        <Hasht />
      </div>
      {/* سکشن درباره ما - About section */}
      <About />
      {/* سکشن ویژگی‌ها - Features section */}
      <Features />
      {/* سکشن پانوشت - Footer section */}
      <Footer />
    </div>
  );
}

export default App;
