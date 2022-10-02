import { createContext, useReducer, useState } from "react";

export const DisplayContext = createContext()

const initialDisplay = {
    display: 0
}

const displayReducer = (state, action) => {
    switch (action.type) {
        case 'SUMAR_UNO':
            return { display: ++state.display }
            break;
        case 'RESTAR_UNO':
            return { display: --state.display }
            break;
        case 'RESET':
            return { display: 0 }
            break;
        case 'RESTAR_CINCO':
            return { display: state.display - action.payload }
            break;
        case 'SUMAR_CINCO':
            return { display: state.display + action.payload }
            break;

    }
}

export const DisplayProvider = ({ children }) => {
    const [store, dispatch] = useReducer(displayReducer, initialDisplay)

    return (
        <DisplayContext.Provider value={[store, dispatch]}>
            {children}
        </DisplayContext.Provider>
    )
}