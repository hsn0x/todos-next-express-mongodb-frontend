export const commentCreateUpdateisCreate = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENT_CREATE_UPDATE_IS_CREATE",
            payload,
        });
    };
};
export const commentCreateUpdateContent = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENT_CREATE_UPDATE_CONTENT",
            payload,
        });
    };
};
export const commentCreateUpdateTaskId = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENT_CREATE_UPDATE_TASK_ID",
            payload,
        });
    };
};
export const commentCreateUpdateLoading = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "COMMENT_CREATE_UPDATE_LOADING",
            payload,
        });
    };
};
