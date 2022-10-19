import { useReducer } from "react";
import { createContext } from "react";

export const DisplayContext = createContext()

const initialState = 0

const displayReducer = (state, action) => {
    switch (action.type) {
        case 'SUMA_UNO':
            return ++state
            break;
        case 'RESTAR_UNO':
            return --state
            break;
        case 'RESET':
            return initialState
            break;
        case 'RESTAR_CINCO':
            return state - action.payload
            break;
        case 'SUMAR_CINCO':
            return state + action.payload
            break;
    }
}

export const DisplayProvider = ({ children }) => {
    const [store, dispatch] = useReducer(displayReducer, initialState)

    return (
        <DisplayContext.Provider value={[store, dispatch]}>
            {children}
        </DisplayContext.Provider>
    )
}