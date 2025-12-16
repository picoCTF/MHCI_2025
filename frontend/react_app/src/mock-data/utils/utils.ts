import {useCallback, useEffect, useState} from "react";

function randomDelay<T>(
    value: T,
    min = 1000,
    max = 3000
): Promise<T> {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

export function useMockData<T>(data: T) {
    const [refetchCount, setRefetchCount] = useState(0);
    const [state, setState] = useState<{ data: T | null; isLoading: boolean }>({
        data: null,
        isLoading: true
    });

    useEffect(() => {
        let active = true;
        setState({data: null, isLoading: true});
        randomDelay(data).then(result => {
            if (active) {
                // Clone to create new reference
                const clonedData = Array.isArray(result)
                    ? [...result]
                    : typeof result === 'object' && result !== null
                        ? { ...result }
                        : result;
                setState({data: clonedData as T, isLoading: false});
            }
        });
        return () => {
            active = false;
        };
    }, [data, refetchCount]);

    const refetch = useCallback(() => {
        setRefetchCount(prev => prev + 1);
    }, []);

    return { ...state, refetch };
}
