import { createContext } from "react";
import { useState } from "react";

export const countContext = createContext(0);

export const CountProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    return(
        <countContext.Provider value={{count, incrementCount, decrementCount}}>
            {children}
        </countContext.Provider>
    )
}