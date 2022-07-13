const updateEmail = (email) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_EMAIL",
            payload: email,
        });
    };
};

const updatePassword = (password) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_PASSWORD",
            payload: password,
        });
    };
};

export { updateEmail, updatePassword };
