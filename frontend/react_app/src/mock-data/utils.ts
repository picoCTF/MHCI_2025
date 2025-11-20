import { useEffect, useState } from "react";

function randomDelay<T>(
    value: T,
    min = 2000,
    max = 5000
): Promise<T> {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
}

export function useMockData<T>(data: T) {
    const [state, setState] = useState<{ data: T | null; isLoading: boolean }>({
        data: null,
        isLoading: true
    });
    useEffect(() => {
        let active = true;
        setState({data: null, isLoading: true}); // reset on new data
        randomDelay(data).then(result => {
            if (active) setState({data: result, isLoading: false});
        });
        return () => {
            active = false;
        };
    }, [data]);
    return state;
}
