// src/context/AppContext.tsx

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// تعريف الأنواع للحالة
interface AppState {
    user: null | { id: string; name: string };
    theme: string;
    isLoading: boolean;
}

// تعريف الإجراءات
type Action =
    | { type: 'SET_USER'; payload: { id: string; name: string } }
    | { type: 'LOGOUT' }
    | { type: 'SET_THEME'; payload: string }
    | { type: 'SET_LOADING'; payload: boolean };

// الحالة الافتراضية
const initialState: AppState = {
    user: null,
    theme: 'light',
    isLoading: false,
};

// الوظيفة المخفضة (Reducer) لإدارة الحالة
const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'LOGOUT':
            return { ...state, user: null };
        case 'SET_THEME':
            return { ...state, theme: action.payload };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

// إنشاء السياق
const AppContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

// مكون موفر السياق
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// هوك لاستخدام السياق
export const useAppContext = () => {
    return useContext(AppContext);
};
