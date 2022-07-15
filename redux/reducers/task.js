const TASK_FETCH_REQUEST = "TASK_FETCH_REQUEST";
const TASK_FETCH_SUCCESS = "TASK_FETCH_SUCCESS";
const TASK_FETCH_FAIL = "TASK_FETCH_FAIL";
const TASK_CREATE_REQUEST = "TASK_CREATE_REQUEST";
const TASK_CREATE_SUCCESS = "TASK_CREATE_SUCCESS";
const TASK_CREATE_FAIL = "TASK_CREATE_FAIL";
const TASK_DELETE_REQUEST = "TASK_DELETE_REQUEST";
const TASK_DELETE_SUCCESS = "TASK_DELETE_SUCCESS";
const TASK_DELETE_FAIL = "TASK_DELETE_FAIL";
const TASK_DELETE_RESET = "TASK_DELETE_RESET";

const initialState = {
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case TASK_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: "",
            };
        case TASK_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case TASK_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case TASK_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case TASK_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case TASK_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case TASK_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case TASK_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case TASK_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export default reducer;
