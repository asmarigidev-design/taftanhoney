// کامپوننت معرفی اولیه - Intro screen component
import React, { useEffect, useState, useRef } from 'react';
import './Intro.css';

// تابع اصلی کامپوننت - Main component function
const Intro = () => {
  const [isVisible, setIsVisible] = useState(true); // وضعیت نمایش - Visibility state
  const welcomeRef = useRef(null); // ارجاع به عنصر خوش‌آمدگویی - Ref to welcome element

  // افکت اجرای انیمیشن و حذف کامپوننت - Animation and removal effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (welcomeRef.current) {
        welcomeRef.current.classList.add('disappearing'); // شروع انیمیشن خروج - Start exit animation
      }
    }, 3000);

    setTimeout(() => {
      setIsVisible(false); // حذف کامل پس از نمایش - Remove after display
    }, 60500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // شرط نمایش کامپوننت - Component visibility condition
  if (!isVisible) return null;

  // خروجی JSX کامپوننت - Component JSX output
  return (
    // سکشن خوش‌آمدگویی - Welcome screen section
    <div className="welcome-screen" ref={welcomeRef}>
      <div className="welcome-message">
        {/* تیتر خوش‌آمدگویی - Greeting title */}
        <div className="greeting" data-aos="fade-left">
          اگر به دنبال عسل طبیعی و خالص هستید، همراه ما باشید
        </div>
        {/* متن معرفی محصول - Product introduction text */}
        <div className="introduction" data-aos="fade-right">
          عسل تفتان، باکیفیت‌ترین عسل طبیعی، سرشار از آنتی‌اکسیدان‌ها و خواص ضد التهابی است
          برای خرید عسل طبیعی تفتان و بهره‌مندی از خواص فوق‌العاده آن، همین حالا اقدام کنید.
        </div>
      </div>
    </div>
  );
};

export default Intro;
