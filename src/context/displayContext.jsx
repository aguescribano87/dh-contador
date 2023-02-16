import { createContext, useReducer, useState } from "react";
import { displayReducer, initialState } from "./miReducer";

export const DisplayContext = createContext()

export const DisplayProvider = ({ children }) => {
    const [store, dispatch] = useReducer(displayReducer, initialState)

    return (
        <DisplayContext.Provider value={[store, dispatch]}>
            {children}
        </DisplayContext.Provider>
    )
}