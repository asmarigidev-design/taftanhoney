import React, { useState } from 'react';
import './About.css';
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const [hoveredLink, setHoveredLink] = useState(null); // وضعیت لینک فعال // Active link state

  const handleMouseEnter = (text) => setHoveredLink(text); // هنگام ورود موس // On mouse enter
  const handleMouseLeave = () => setHoveredLink(null);     // هنگام خروج موس // On mouse leave

  return (
    <>
      <div className="left-box" id="about" data-aos="flip-left"> {/* جعبه سمت راست با تصویر پس‌زمینه // Right box with background image */}
        <div className="data"> {/* اطلاعات اصلی // Main content */}
          <h1>عسل طبیعی</h1>
          <h1>خواص وافری که باید بدانید</h1>
          <h4>با خواص فوق‌العاده و فواید بی‌نظیر عسل در ادامه همراه ما باشید</h4>
          <hr />
          <h1>خواص عسل شامل:</h1>
          <h4>ضد التهاب، آنتی‌اکسیدان، تقویت سیستم ایمنی، کمک به هضم و درمان سرماخوردگی</h4>
          <hr />
        </div>

        <div className="benefits"> {/* بخش فواید عسل // Honey benefits section */}
          <h2>فواید عسل</h2>
          <div className="tree" data-aos="fade-up-left"> {/* لیست فواید // Benefits list */}
            {[
              'ضد التهابی',
              'آنتی‌اکسیدان',
              'تقویت سیستم ایمنی',
              'کمک به هضم',
              'درمان سرماخوردگی',
              'مرطوب‌کننده طبیعی',
              'ضد باکتری و قارچ',
              'بهبود زخم و سوختگی',
              'مساعدت در کاهش وزن'
            ].map((item, index) => (
              <h3 key={index} className="skill-item">{item}</h3> // آیتم فواید // Benefit item
            ))}
          </div>
        </div>

        <div className="footer-right"> {/* آیکون‌های شبکه اجتماعی // Social media icons */}
          <div className="social-icons"  data-aos="fade-down">
            <a
              href="instagram"
              onMouseEnter={() => handleMouseEnter('taftanjkk-123')}
              onMouseLeave={handleMouseLeave}
            >
              <FaInstagram />
            </a>
            <a
              href="telegram"
              onMouseEnter={() => handleMouseEnter('@taftan')}
              onMouseLeave={handleMouseLeave}
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https"
              onMouseEnter={() => handleMouseEnter('02587458745')}
              onMouseLeave={handleMouseLeave}
            >
              <FaWhatsapp />
            </a>
            <a
              href="09123456789"
              onMouseEnter={() => handleMouseEnter('095686542585')}
              onMouseLeave={handleMouseLeave}
            >
              <FaMobileAlt />
            </a>
          </div>
          {hoveredLink && (
            <div className="hover-address"> {/* نمایش متن هنگام هاور // Hover text display */}
              {hoveredLink}
            </div>
          )}
        </div>
      </div>

      <div className="asl"> {/* بخش پایین با دکمه‌ها // Bottom section with buttons */}
        <h1>Taftan.Ha</h1>
        <div>Natural honey</div>
        <a href="#features"><button className="buttonn">آموزش ها</button></a>
        <a href="#about"><button className="buttonnr">خریدعسل</button></a>
      </div>
    </>
  );
};

export default About;
