import React from 'react';
import './Hexagon.css';
// کامپوننت شش‌ضلعی‌ها - Hexagon component

const Hexagon = () => {
  return (
    // سکشن اصلی شش‌ضلعی‌ها - Main hexagon layout section
    <div className="hexagon-container">

      {/* سکشن ریشه چیدمان شش‌ضلعی‌ها - Root hexagon layout */}
      <div className="hhone">

        {/* ردیف اول شش‌ضلعی‌ها - First row of hexagons */}
        <div className='hh'>
          <div className="containerrrr">
            <div className="shadoww"></div>
            <div className='can'></div>
          </div>
          <div className="containerrrr">
            <div className="shadoww"></div>
            <div className='can'></div>
          </div>
          <div className="containerrrr">
            <div className="shadoww"></div>
            <div className='can'></div>
          </div>
        </div>

        {/* ردیف دوم شش‌ضلعی‌ها - Second row of hexagons */}
        <div className='hhh'>
          <div className="containerrrr">
            <div className="shadoww"></div>
            <div className='can'></div>
          </div>
          <div className="containerrrr">
            <div className="shadoww"></div>
            <div className='can'></div>
          </div>
          <div className="containerrrr">
            <div className="shadoww"></div>
            <div className='can'></div>
          </div>
        </div>

      </div>

      {/* شش‌ضلعی مرکزی یا برجسته - Central or highlighted hexagon */}
      <div className='hashtt'>
        <div className="containerrrr">  
          <div className="shadoww"></div>
          <div className='can'></div>
        </div>
      </div>

    </div>
  );
};

export default Hexagon;
