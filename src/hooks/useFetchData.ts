// src/hooks/useFetchData.ts

import { useState, useEffect } from 'react';

// تعريف نوع البيانات المسترجعة من API
interface FetchDataOptions<T> {
    url: string;
    method?: 'GET' | 'POST';
    body?: T;
    headers?: HeadersInit;
}

const useFetchData = <T, R>(options: FetchDataOptions<T>): { data: R | null; loading: boolean; error: string | null } => {
    const { url, method = 'GET', body, headers } = options;
    const [data, setData] = useState<R | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method,
                    headers,
                    body: body ? JSON.stringify(body) : undefined,
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const result: R = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body, headers]);

    return { data, loading, error };
};

export default useFetchData;
