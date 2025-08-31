import React from 'react';

// کامپوننت هشتگ‌های برجسته - Highlighted Hashtag Component
import './Hexagon.css';

const Hasht = () => {
  return (
    // سکشن موقعیت هشتگ اصلی - Main hashtag position section
    <div className='hasht'>

      {/* شش‌ضلعی اول در موقعیت اصلی - First hexagon in main position */}
      <div className="containerrrr">
        <div className="shadoww"></div>
        <div className='can'></div>
      </div>

      {/* سکشن هشتگ شناور - Floating hashtag section */}
      <div className='hashtsh'>
        <div className="containerrrr">
          <div className="shadoww"></div>
          <div className='can'></div>
        </div>
      </div>

    </div>
  );
};

export default Hasht;
