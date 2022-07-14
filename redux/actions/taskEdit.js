export const taskEditUpdateisEdit = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_IS_EDIT",
            payload,
        });
    };
};
export const taskEditUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_TITLE",
            payload,
        });
    };
};

export const taskEditUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

export const taskEditUpdateLabelsIds = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_LABELS_IDS",
            payload,
        });
    };
};
export const taskEditUpdateLabels = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_LABELS",
            payload,
        });
    };
};
export const taskEditUpdatePriorityId = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_PRIORITY_ID",
            payload,
        });
    };
};
export const taskEditUpdatePriority = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_PRIORITY",
            payload,
        });
    };
};
export const taskEditUpdateProjectId = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_PROJECT_ID",
            payload,
        });
    };
};
export const taskEditUpdateProject = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_PROJECT",
            payload,
        });
    };
};
