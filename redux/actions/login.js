export const updateLoginEmail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_LOGIN_EMAIL",
            payload,
        });
    };
};

export const updateLoginPassword = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_LOGIN_PASSWORD",
            payload,
        });
    };
};
