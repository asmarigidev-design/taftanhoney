// کامپوننت ویژگی‌ها - Features component
import React, { useState } from 'react';
import './Features.css';

// وارد کردن ویدیوها - Importing videos
import video1 from './13.mp4';
import video2 from './14.mp4';
import video3 from './15.mp4';
import video5 from './17.mp4';
import video6 from './18.mp4';
import video7 from './13.mp4';
import video8 from './14.mp4';
import video9 from './15.mp4';
import video10 from './13.mp4';
import video11 from './14.mp4';
import video12 from './15.mp4';
import video14 from './17.mp4';
import video15 from './18.mp4';
import video16 from './13.mp4';
import video17 from './14.mp4';
import video18 from './15.mp4';

// آرایه ویدیوها با عنوان و توضیح - Videos array with title and description
const videos = [
  { src: video1, title: "خواص دمنوش دارچین وعسل", description: "خواص دارچین و عسل در تقویت سیستم ایمنی، کاهش التهاب و بهبود هضم بسیار مثبت است. این دمنوش طبیعی، برای سلامت قلب و کنترل قندخون مؤثر است و انرژی‌بخش است." },
  { src: video2, title: "معجون لیمو وعسل", description: "لیمو و عسل به دلیل داشتن ویتامین C و خواص ضد التهابی، سیستم ایمنی بدن را تقویت می‌کنند. این معجون، برای رفع سرماخوردگی، افزایش انرژی و بهبود هضم مفید است." },
  { src: video3, title: "خواص دمنوش حرفه‌ای عسل", description: "این دمنوش، با خواص ضدعفونی‌کننده و آرام‌بخشی، در بهبود خواب، کاهش اضطراب و تقویت حافظه موثر است. عسل، خواص ضد باکتری و انرژی‌زا دارد که مفید است." },
  { src: video5, title: "خواص دمنوش بابونه وعسل وجنسینگ", description: "بابونه و عسل، خواص ضدالتهابی و آرام‌بخش دارند و به کاهش استرس، بهبود خواب و تقویت انرژی کمک می‌کنند. جنسینگ هم انرژی‌زا و تقویت‌کننده است." },
  { src: video6, title: "خواص دمنوش اویشن وعسل", description: "اویشن و عسل، در ترمیم دستگاه گوارش، ضد سرفه و آرام‌بخشی موثر هستند. این دمنوش برای تقویت سیستم ایمنی و کاهش التهاب مفید است." },
  { src: video7, title: "خواص دمنوش دارچین وعسل", description: "خواص دارچین و عسل در تقویت سیستم ایمنی، کاهش التهاب و بهبود هضم بسیار مثبت است. این دمنوش طبیعی، برای سلامت قلب و کنترل قندخون مؤثر است و انرژی‌بخش است." },
  { src: video8, title: "معجون لیمو وعسل", description: "لیمو و عسل به دلیل داشتن ویتامین C و خواص ضد التهابی، سیستم ایمنی بدن را تقویت می‌کنند. این معجون، برای رفع سرماخوردگی، افزایش انرژی و بهبود هضم مفید است." },
  { src: video9, title: "خواص دمنوش حرفه‌ای عسل", description: "این دمنوش، با خواص ضدعفونی‌کننده و آرام‌بخشی، در بهبود خواب، کاهش اضطراب و تقویت حافظه موثر است. عسل، خواص ضد باکتری و انرژی‌زا دارد که مفید است." },
  { src: video10, title: "خواص دمنوش دارچین وعسل", description: "خواص دارچین و عسل در تقویت سیستم ایمنی، کاهش التهاب و بهبود هضم بسیار مثبت است. این دمنوش طبیعی، برای سلامت قلب و کنترل قندخون مؤثر است و انرژی‌بخش است." },
  { src: video11, title: "معجون لیمو وعسل", description: "لیمو و عسل به دلیل داشتن ویتامین C و خواص ضد التهابی، سیستم ایمنی بدن را تقویت می‌کنند. این معجون، برای رفع سرماخوردگی، افزایش انرژی و بهبود هضم مفید است." },
  { src: video12, title: "خواص دمنوش حرفه‌ای عسل", description: "این دمنوش، با خواص ضدعفونی‌کننده و آرام‌بخشی، در بهبود خواب، کاهش اضطراب و تقویت حافظه موثر است. عسل، خواص ضد باکتری و انرژی‌زا دارد که مفید است." },
  { src: video14, title: "خواص دمنوش بابونه وعسل وجنسینگ", description: "بابونه و عسل، خواص ضدالتهابی و آرام‌بخش دارند و به کاهش استرس، بهبود خواب و تقویت انرژی کمک می‌کنند. جنسینگ هم انرژی‌زا و تقویت‌کننده است." },
  { src: video15, title: "خواص دمنوش اویشن وعسل", description: "اویشن و عسل، در ترمیم دستگاه گوارش، ضد سرفه و آرام‌بخشی موثر هستند. این دمنوش برای تقویت سیستم ایمنی و کاهش التهاب مفید است." },
  { src: video16, title: "خواص دمنوش دارچین وعسل", description: "خواص دارچین و عسل در تقویت سیستم ایمنی، کاهش التهاب و بهبود هضم بسیار مثبت است. این دمنوش طبیعی، برای سلامت قلب و کنترل قندخون مؤثر است و انرژی‌بخش است." },
  { src: video17, title: "معجون لیمو وعسل", description: "لیمو و عسل به دلیل داشتن ویتامین C و خواص ضد التهابی، سیستم ایمنی بدن را تقویت می‌کنند. این معجون، برای رفع سرماخوردگی، افزایش انرژی و بهبود هضم مفید است." },
  { src: video18, title: "خواص دمنوش حرفه‌ای عسل", description: "این دمنوش، با خواص ضدعفونی‌کننده و آرام‌بخشی، در بهبود خواب، کاهش اضطراب و تقویت حافظه موثر است. عسل، خواص ضد باکتری و انرژی‌زا دارد که مفید است." }
];

// تابع اصلی کامپوننت - Main component function
const Features = () => {
  const [playingIndex, setPlayingIndex] = useState(null); // وضعیت پخش ویدیو - Video playing state

  const handlePlay = (index) => setPlayingIndex(index); // شروع پخش - Handle play
  const handlePause = () => setPlayingIndex(null);       // توقف پخش - Handle pause

  return (
    // بخش نمایش ویدیوها - Video display section
    <>
    <div className="features-container" id="features">
<div className="header">
  <p data-aos="fade-up">
    برای آشنایی با خواص بی‌نظیر عسل، کافیست  گوشه‌ی ویدیو کلیک کنید.
  </p>
</div>

      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          <video data-aos="flip-left"
            src={video.src}
            className="video-element"
            controls
            preload="auto"
            onPlay={() => handlePlay(index)}
            onPause={handlePause}
          />
          {playingIndex !== index && (
            // لایه توضیح روی ویدیو - Video overlay with description
            <div className="video-overlay">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default Features; 
