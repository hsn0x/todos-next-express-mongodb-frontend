import { bindActionCreators } from "redux";
import { axiosServer } from "../../db/axios";
import { getError } from "../../utils/error";
import { tasksActions } from "../actions";

const TASKS_FETCH_REQUEST = "TASKS_FETCH_REQUEST";
const TASKS_FETCH_SUCCESS = "TASKS_FETCH_SUCCESS";
const TASKS_FETCH_FAIL = "TASKS_FETCH_FAIL";
const TASKS_CREATE_REQUEST = "TASKS_CREATE_REQUEST";
const TASKS_CREATE_SUCCESS = "TASKS_CREATE_SUCCESS";
const TASKS_CREATE_FAIL = "TASKS_CREATE_FAIL";
const TASKS_DELETE_REQUEST = "TASKS_DELETE_REQUEST";
const TASKS_DELETE_SUCCESS = "TASKS_DELETE_SUCCESS";
const TASKS_DELETE_FAIL = "TASKS_DELETE_FAIL";
const TASKS_DELETE_RESET = "TASKS_DELETE_RESET";

const initialState = {
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKS_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case TASKS_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: "",
            };
        case TASKS_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case TASKS_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case TASKS_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case TASKS_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case TASKS_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case TASKS_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case TASKS_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case TASKS_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export const fetchTasks = () => {
    return async (dispatch, getState) => {
        const { tasksFetchFail, tasksFetchSuccess, tasksFetchRequest } =
            bindActionCreators(tasksActions, dispatch);

        tasksFetchRequest();
        try {
            const { data } = await axiosServer.get("/tasks");
            console.log({ data });
            tasksFetchSuccess(data);
        } catch (error) {
            tasksFetchFail(getError(error));
        }
    };
};

export default reducer;
