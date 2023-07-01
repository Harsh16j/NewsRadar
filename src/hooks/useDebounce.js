import { useState, useEffect } from "react";

function useDebounce(value, delay = 1000) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => {
            clearTimeout(timeOutID);
        };
    }, [value, delay]);
    return debounced;
}

export default useDebounce;
