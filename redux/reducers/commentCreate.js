const COMMENT_CREATE_UPDATE_IS_CREATE = "COMMENT_CREATE_UPDATE_IS_CREATE";
const COMMENT_CREATE_UPDATE_CONTENT = "COMMENT_CREATE_UPDATE_CONTENT";
const COMMENT_CREATE_UPDATE_TASK_ID = "COMMENT_CREATE_UPDATE_TASK_ID";
const COMMENT_CREATE_UPDATE_LOADING = "COMMENT_CREATE_UPDATE_LOADING";

const initialState = {
    row: {
        content: "",
        TaskId: null,
    },
    isCreate: false,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE_UPDATE_IS_CREATE:
            return {
                ...state,
                isCreate: action.payload,
            };
        case COMMENT_CREATE_UPDATE_CONTENT:
            return {
                ...state,
                row: { ...state.row, content: action.payload },
            };
        case COMMENT_CREATE_UPDATE_TASK_ID:
            return {
                ...state,
                row: { ...state.row, TaskId: action.payload },
            };
        case COMMENT_CREATE_UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
