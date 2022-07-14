export const taskCreateUpdateisCreate = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_IS_CREATE",
            payload,
        });
    };
};
export const taskCreateUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_TITLE",
            payload,
        });
    };
};

export const taskCreateUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

export const taskCreateUpdateLabelsIds = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_LABELS_IDS",
            payload,
        });
    };
};
export const taskCreateUpdateLabels = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_LABELS",
            payload,
        });
    };
};
export const taskCreateUpdatePriorityId = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_PRIORITY_ID",
            payload,
        });
    };
};
export const taskCreateUpdatePriority = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_PRIORITY",
            payload,
        });
    };
};
export const taskCreateUpdateProjectId = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_PROJECT_ID",
            payload,
        });
    };
};
export const taskCreateUpdateProject = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_PROJECT",
            payload,
        });
    };
};
export const taskCreateUpdateDueDate = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_CREATE_UPDATE_DUE_DATE",
            payload,
        });
    };
};
