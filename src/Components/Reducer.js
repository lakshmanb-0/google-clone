export const initialState = {
    term: null,
}
export const actionTypes = {
    Set_type_value: "Set_type_value",
}
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.Set_type_value:
            return {
                ...state,
                term: action.term,
            }
        default:
            return state;

    }
}
export default reducer