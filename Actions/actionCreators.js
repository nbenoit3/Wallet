
const mapDispatchToProps = dispatch => ({
    userLoggedIn: (currentUserID) => dispatch({type: "USER_LOGGED_IN", payload: {currentUserID}}),
    logout: () => dispatch({type: "USER_LOGOUT"})
})

export default mapDispatchToProps;