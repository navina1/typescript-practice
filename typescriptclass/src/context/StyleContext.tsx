import { createContext } from "react";
import { StyleObj } from "./Style";

export const StyleObjectContext=createContext(StyleObj);
interface StyleContextType{
    Children:React.ReactNode
}

export const StyleContextProvider=({Children}:StyleContextType)=>{
    return <StyleObjectContext.Provider value={StyleObj}>
        {Children}
    </StyleObjectContext.Provider>
}