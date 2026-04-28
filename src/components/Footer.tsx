import React from 'react';
import './Footer.css'; // استيراد أنماط التذييل

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about" className="footer-link">حول</a>
                    <a href="/contact" className="footer-link">اتصل بنا</a>
                    <a href="/privacy" className="footer-link">سياسة الخصوصية</a>
                    <a href="/terms" className="footer-link">شروط الاستخدام</a>
                </div>
                <div className="footer-rights">
                    <p>جميع الحقوق محفوظة © {new Date().getFullYear()} شركتنا</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
