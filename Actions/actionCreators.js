
const mapDispatchToProps = dispatch => ({
    login: () => dispatch({type: "LOGGING_IN"}),
    userLoggedIn: (userLoggedIn, loggedInUserID) => dispatch({type: "USER_LOGGED_IN", payload1: userLoggedIn, payload2: loggedInUserID}),
    logout: () => dispatch({type: "USER_LOGOUT"})
})

export default mapDispatchToProps;