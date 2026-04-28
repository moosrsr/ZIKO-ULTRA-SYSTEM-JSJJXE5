// src/components/Button.tsx

import React from 'react';
import './Button.css'; // استيراد أنماط الزر

interface ButtonProps {
    label: string; // نص الزر
    onClick: () => void; // دالة عند الضغط على الزر
    variant?: 'primary' | 'secondary'; // نوع الزر
    size?: 'small' | 'medium' | 'large'; // حجم الزر
    disabled?: boolean; // حالة الزر
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
}) => {
    const buttonClass = `button ${variant} ${size} ${disabled ? 'disabled' : ''}`; // بناء الفئة الخاصة بالزر

    return (
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;

/* src/components/Button.css */

.button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.button.primary {
    background-color: #007bff;
    color: white;
}

.button.secondary {
    background-color: #6c757d;
    color: white;
}

.button.small {
    padding: 8px 12px;
    font-size: 14px;
}

.button.medium {
    padding: 10px 16px;
    font-size: 16px;
}

.button.large {
    padding: 12px 20px;
    font-size: 18px;
}

.button:hover:not(.disabled) {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.button.disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
}
