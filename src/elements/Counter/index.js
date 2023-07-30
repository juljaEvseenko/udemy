import { useCounter } from '../../hooks/useCounter';

export const Counter = ({initialCount = 0}) => {
    const {count, handler} = useCounter(initialCount);

    return <div>
        {count}

        <button onClick={handler}>Click!</button>
    </div>
}