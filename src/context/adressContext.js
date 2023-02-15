import { createContext } from "react";
import { useState } from "react";

const initialValue = {
    city: 'Cidade',
    uf: 'UF'
}

export const adressContext = createContext(initialValue);

export const AdressProvider = ({ children }) => {

    const [adress, setAdress] = useState(initialValue);

    const modifyAdress = (adress) => {
        setAdress(adress);
    }

    return(
        <adressContext.Provider value={{adress, modifyAdress}}>
            {children}
        </adressContext.Provider>
    )
}