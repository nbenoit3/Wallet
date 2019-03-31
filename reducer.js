
export const initialState = {
    isLoggedIn: false,
    loggedInUser: "",
    loggedInUserID: "",
    currentListOfEnt: []


}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case "USER_LOGGED_IN":
            return {...state, loggedInUserID: payload}
            break;
        case "USER_LOGOUT":
            return {...state, loggedInUser: "", loggedInUserID: ""}
            break;
            default:
                return state;
    }
    
}


export default reducer;