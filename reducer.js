export const initialState = {
    isLoggedIn: false,
    entries: [{
        website: "",
        cardNumber: "",
        expirationDate: "",
        securityCode: "",
        username: "",
        password: ""
    }],
    loggedInUser: "",
    loggedInUserID: ""


}

const reducer = (state = initialState, action) => {
    const { type, payload1, payload2 } = action;
    switch(type) {
        case "USER_LOGGED_IN":
        return {...state, loggedInUser: payload1, loggedInUserID: payload2}
        break;

        case "USER_LOGOUT":
        return {...state, loggedInUser: "", loggedInUserID: ""}
        break;
    }
    return state;
}


export default reducer;