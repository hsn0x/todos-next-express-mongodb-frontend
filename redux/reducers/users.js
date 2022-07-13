export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const getUser = () => ({
    type: GET_USER,
});
export const getUsers = () => ({
    type: GET_USERS,
});
export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});
export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
});
export const delteUser = (user) => ({
    type: DELETE_USER,
    payload: user,
});

const initialState = {
    user: null,
    users: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload };
        case GET_USERS:
            return action.payload;
        case SET_USER:
            return { ...state, user: action.payload };
        case UPDATE_USER:
            return action.payload;
        case DELETE_USER:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
