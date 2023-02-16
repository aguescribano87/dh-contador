export const initialState = 0

export const displayReducer = (state, action) => {
    switch (action.type) {
        case "SUMAR":
            return state + action.payload
            break;
        case "RESTAR":
            return state - action.payload
            break;
        default:
            return initialState;
            break;
    }
}