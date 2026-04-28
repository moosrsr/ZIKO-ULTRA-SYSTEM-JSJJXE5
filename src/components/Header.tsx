import React from 'react';
import './Header.css'; // استيراد الأنماط الخاصة بمكون الرأس

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/path/to/logo.png" alt="شعار الموقع" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">الرئيسية</a></li>
                    <li><a href="#about">عن الموقع</a></li>
                    <li><a href="#services">الخدمات</a></li>
                    <li><a href="#contact">تواصل معنا</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
