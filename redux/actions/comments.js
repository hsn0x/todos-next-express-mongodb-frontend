export const commentsFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_FETCH_REQUEST",
        });
    };
};
export const commentsFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_FETCH_SUCCESS",
            payload,
        });
    };
};
export const commentsFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_FETCH_FAIL",
            payload,
        });
    };
};
export const commentsCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_CREATE_REQUEST",
        });
    };
};
export const commentsCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_CREATE_SUCCESS",
        });
    };
};
export const commentsCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_CREATE_FAIL",
        });
    };
};
export const commentsDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_REQUEST",
        });
    };
};
export const commentsDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_SUCCESS",
        });
    };
};
export const commentsDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_FAIL",
        });
    };
};
export const commentsDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_RESET",
        });
    };
};
