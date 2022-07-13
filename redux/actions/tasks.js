const tasksFetchRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_FETCH_REQUEST",
        });
    };
};
const tasksFetchSuccess = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_FETCH_SUCCESS",
            payload,
        });
    };
};
const tasksFetchFail = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_FETCH_FAIL",
            payload,
        });
    };
};
const tasksCreateRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_CREATE_REQUEST",
        });
    };
};
const tasksCreateSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_CREATE_SUCCESS",
        });
    };
};
const tasksCreateFail = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_CREATE_FAIL",
        });
    };
};
const tasksDeleteRequest = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_DELETE_REQUEST",
        });
    };
};
const tasksDeleteSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_DELETE_SUCCESS",
        });
    };
};
const tasksDeleteFail = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_DELETE_FAIL",
        });
    };
};
const tasksDeleteReset = () => {
    return (dispatch) => {
        dispatch({
            type: "TASKS_DELETE_RESET",
        });
    };
};

export {
    tasksFetchRequest,
    tasksFetchSuccess,
    tasksFetchFail,
    tasksCreateRequest,
    tasksCreateSuccess,
    tasksCreateFail,
    tasksDeleteRequest,
    tasksDeleteSuccess,
    tasksDeleteFail,
    tasksDeleteReset,
};
