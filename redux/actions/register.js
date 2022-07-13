export const updateRegisterFirstName = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_REGISTER_FIRST_NAME",
            payload,
        });
    };
};
export const updateRegisterLastName = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_REGISTER_LAST_NAME",
            payload,
        });
    };
};
export const updateRegisterUsername = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_REGISTER_USERNAME",
            payload,
        });
    };
};
export const updateRegisterEmail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_REGISTER_EMAIL",
            payload,
        });
    };
};
export const updateRegisterPassword = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_REGISTER_PASSWORD",
            payload,
        });
    };
};

export const updateRegisterPasswordConfirmed = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_REGISTER_PASSWORD_CONFIRMED",
            payload,
        });
    };
};
