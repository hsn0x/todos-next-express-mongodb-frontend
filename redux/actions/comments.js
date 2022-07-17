const commentsFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_FETCH_REQUEST",
        });
    };
};
const commentsFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_FETCH_SUCCESS",
            payload,
        });
    };
};
const commentsFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_FETCH_FAIL",
            payload,
        });
    };
};
const commentsCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_CREATE_REQUEST",
        });
    };
};
const commentsCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_CREATE_SUCCESS",
        });
    };
};
const commentsCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_CREATE_FAIL",
        });
    };
};
const commentsDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_REQUEST",
        });
    };
};
const commentsDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_SUCCESS",
        });
    };
};
const commentsDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_FAIL",
        });
    };
};
const commentsDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "COMMENTS_DELETE_RESET",
        });
    };
};

export {
    commentsFetchRequest,
    commentsFetchSuccess,
    commentsFetchFail,
    commentsCreateRequest,
    commentsCreateSuccess,
    commentsCreateFail,
    commentsDeleteRequest,
    commentsDeleteSuccess,
    commentsDeleteFail,
    commentsDeleteReset,
};
