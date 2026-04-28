// src/services/apiService.ts

import axios, { AxiosResponse, AxiosError } from 'axios';

// تعريف واجهة للبيانات المستلمة
export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

// إعدادات Axios
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
});

// دالة لجلب البيانات من API
export const fetchData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await apiClient.get(endpoint);
        return {
            data: response.data,
            status: response.status,
            message: 'Data fetched successfully',
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        return {
            data: null as unknown as T, // نوع البيانات غير معروف في حالة الخطأ
            status: axiosError.response?.status || 500,
            message: axiosError.message,
        };
    }
};

// دالة لإرسال البيانات إلى API
export const postData = async <T>(endpoint: string, payload: T): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await apiClient.post(endpoint, payload);
        return {
            data: response.data,
            status: response.status,
            message: 'Data posted successfully',
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        return {
            data: null as unknown as T, // نوع البيانات غير معروف في حالة الخطأ
            status: axiosError.response?.status || 500,
            message: axiosError.message,
        };
    }
};

// دالة لتحديث البيانات في API
export const updateData = async <T>(endpoint: string, payload: T): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await apiClient.put(endpoint, payload);
        return {
            data: response.data,
            status: response.status,
            message: 'Data updated successfully',
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        return {
            data: null as unknown as T, // نوع البيانات غير معروف في حالة الخطأ
            status: axiosError.response?.status || 500,
            message: axiosError.message,
        };
    }
};

// دالة لحذف البيانات من API
export const deleteData = async (endpoint: string): Promise<ApiResponse<null>> => {
    try {
        const response: AxiosResponse<null> = await apiClient.delete(endpoint);
        return {
            data: null,
            status: response.status,
            message: 'Data deleted successfully',
        };
    } catch (error) {
        const axiosError = error as AxiosError;
        return {
            data: null,
            status: axiosError.response?.status || 500,
            message: axiosError.message,
        };
    }
};
