import React, { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import './MainContent.css'; // استيراد الأنماط الخاصة بمحتوى الصفحة

const MainContent: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useFetchData('https://api.example.com/data'); // استدعاء هوك لجلب البيانات

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (err) {
                setError('فشل في تحميل البيانات');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [fetchData]);

    if (loading) return <div className="loading">جارٍ التحميل...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="main-content">
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} className="content-item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <div className="no-data">لا توجد بيانات لعرضها</div>
            )}
        </div>
    );
};

export default MainContent;
