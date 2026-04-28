// src/types/index.d.ts

// تعريف نوع المستخدم
export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

// تعريف نوع البيانات المسترجعة من API
export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}

// تعريف نوع العنصر في قائمة العناصر
export interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

// تعريف نوع الحالة العالمية
export interface AppState {
    users: User[];
    items: Item[];
    loading: boolean;
    error: string | null;
}

// تعريف نوع سياق التطبيق
export interface AppContextType {
    state: AppState;
    dispatch: React.Dispatch<any>;
}

// تعريف نوع خصائص المكونات
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

// تعريف نوع خصائص الزر
export interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}
