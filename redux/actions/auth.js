export const updateIsAuthenticated = (isAuthenticated) => {
    return (dispatch) =>
        dispatch({
            type: "UPDATE_IS_AUTHENTICATED",
            payload: isAuthenticated,
        });
};

export const updateAuth = (payload) => {
    return (dispatch) =>
        dispatch({
            type: "UPDATE_AUTH",
            payload,
        });
};

export const updateProfile = (payload) => {
    return (dispatch) =>
        dispatch({
            type: "UPDATE_PROFILE",
            payload,
        });
};

export const updateEmail = (email) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_EMAIL",
            payload: email,
        });
    };
};

export const updatePassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PASSWORD",
            payload: password,
        });
    };
};
