const taskEditUpdateTitle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_TITLE",
            payload,
        });
    };
};

const taskEditUpdateDescription = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_DESCRIPTION",
            payload,
        });
    };
};

const taskEditUpdateLabels = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_LABELS",
            payload,
        });
    };
};

const taskEditUpdatePriority = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASK_EDIT_UPDATE_PRIORITY",
            payload,
        });
    };
};

export {
    taskEditUpdateTitle,
    taskEditUpdateDescription,
    taskEditUpdateLabels,
    taskEditUpdatePriority,
};
