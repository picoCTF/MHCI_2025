import { useEffect, useState } from "react";

function randomDelay<T>(
    value: T,
    min = 2000,
    max = 5000
): Promise<T> {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    return new Promise(resolve => {
        setTimeout(() => resolve(value), delay);
    });
}

export function useMockData<T>(data: T) {
    const [value, setValue] = useState<T | null>(null);

    useEffect(() => {
        let active = true;

        randomDelay(data).then(result => {
            if (active) setValue(result);
        });

        return () => {
            active = false;
        };
    }, [data]);

    return value;
}
