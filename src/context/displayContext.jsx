import { createContext, useContext, useReducer, useState } from "react";
import { displayReducer, initialState } from "./miReducer";

export const DisplayContext = createContext()

export const DisplayProvider = ({ children }) => {

    return (
        <DisplayContext.Provider value={useReducer(displayReducer, initialState)}>
            {children}
        </DisplayContext.Provider>
    )
}

export const useStore = () => useContext(DisplayContext)[0]
export const useDispatch = () => useContext(DisplayContext)[1]