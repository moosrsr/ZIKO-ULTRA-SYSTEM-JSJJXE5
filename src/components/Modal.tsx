import React from 'react';
import './Modal.css'; // استيراد الأنماط الخاصة بالنافذة المنبثقة

interface ModalProps {
    isOpen: boolean; // حالة الفتح
    onClose: () => void; // دالة لإغلاق النافذة
    title: string; // عنوان النافذة
    children: React.ReactNode; // المحتوى الداخلي للنافذة
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    // دالة لإغلاق النافذة عند الضغط خارجها
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <header className="modal-header">
                            <h2>{title}</h2>
                            <button className="close-button" onClick={onClose}>
                                &times;
                            </button>
                        </header>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
