import { useEffect, useState } from 'react';

export const useCounter = (initialCount = 0) => {

    const [count, setCount] = useState(initialCount);

    const handler = () => {
        setCount(count + 1);
    }


    useEffect(() => {
        console.log(count);
    }, [count]);

    return {
        count,
        handler
    }
}