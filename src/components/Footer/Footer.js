// کامپوننت فوتر ویژه با اطلاعات تماس - Special footer with contact info
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="special-footer">
      {/* محتوای اصلی فوتر - Main footer content */}
      <div className="footer-content">
        <h2 data-aos="fade-up">🍯 عسل طبیعی تفتان – ترکیب هنر و طبیعت 🍯</h2>
        <p data-aos="fade-left">
          از دل کوهستان‌های بکر تفتان، عسل طبیعی و خالصی به دست می‌آید که نه‌تنها طعمی بی‌نظیر دارد، بلکه سرشار از خواص درمانی است.
        </p>
    
        <p data-aos="fade-right">
          اگر به دنبال طعمی اصیل و خواصی بی‌نظیر هستید، همین حالا سفارش دهید و از عسل تفتان لذت ببرید.
        </p>
        <button className="cta-button">خرید مستقیم</button>

        {/* اطلاعات تماس و آدرس - Contact and address info */}
        <div className="contact-info">
          <p><strong>📞 شماره تماس:</strong> ۰۹۱۲۱۲۳۴۵۶۷</p>
          <p><strong>📍 آدرس:</strong> زاهدان، خیابان دانشگاه، مجتمع تفتان</p>
          <p><strong>✉️ ایمیل:</strong> info@taftanhoney.ir</p>
          <p><strong>🌐 وب‌سایت:</strong> www.taftanhoney.ir</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
