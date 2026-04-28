// src/components/Sidebar.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // استيراد الأنماط الخاصة بشريط التنقل

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">التنقل</h2>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">
                            الصفحة الرئيسية
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active-link">
                            حول
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName="active-link">
                            الخدمات
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active-link">
                            اتصل بنا
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
