const COMMENT_EDIT_UPDATE_IS_EDIT = "COMMENT_EDIT_UPDATE_IS_EDIT";
const COMMENT_EDIT_UPDATE_ID = "COMMENT_EDIT_UPDATE_ID";
const COMMENT_EDIT_UPDATE_CONTENT = "COMMENT_EDIT_UPDATE_CONTENT";
const COMMENT_EDIT_UPDATE_TASK_ID = "COMMENT_EDIT_UPDATE_TASK_ID";
const COMMENT_EDIT_UPDATE_LOADING = "COMMENT_EDIT_UPDATE_LOADING";

const initialState = {
    row: {
        content: "",
        TaskId: null,
    },
    isEdit: false,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_EDIT_UPDATE_IS_EDIT:
            return {
                ...state,
                isEdit: action.payload,
            };
        case COMMENT_EDIT_UPDATE_ID:
            return {
                ...state,
                row: { ...state.row, id: action.payload },
            };
        case COMMENT_EDIT_UPDATE_CONTENT:
            return {
                ...state,
                row: { ...state.row, content: action.payload },
            };
        case COMMENT_EDIT_UPDATE_TASK_ID:
            return {
                ...state,
                row: { ...state.row, TaskId: action.payload },
            };
        case COMMENT_EDIT_UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
