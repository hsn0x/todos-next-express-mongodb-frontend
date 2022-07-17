const COMMENT_CREATE_UPDATE_IS_CREATE = "COMMENT_CREATE_UPDATE_IS_CREATE";
const COMMENT_CREATE_UPDATE_TITLE = "COMMENT_CREATE_UPDATE_TITLE";
const COMMENT_CREATE_UPDATE_DESCRIPTION = "COMMENT_CREATE_UPDATE_DESCRIPTION";
const COMMENT_CREATE_UPDATE_LABELS_IDS = "COMMENT_CREATE_UPDATE_LABELS_IDS";
const COMMENT_CREATE_UPDATE_LABELS = "COMMENT_CREATE_UPDATE_LABELS";
const COMMENT_CREATE_UPDATE_PRIORITY_ID = "COMMENT_CREATE_UPDATE_PRIORITY_ID";
const COMMENT_CREATE_UPDATE_PRIORITY = "COMMENT_CREATE_UPDATE_PRIORITY";
const COMMENT_CREATE_UPDATE_PROJECT_ID = "COMMENT_CREATE_UPDATE_PROJECT_ID";
const COMMENT_CREATE_UPDATE_PROJECT = "COMMENT_CREATE_UPDATE_PROJECT";
const COMMENT_CREATE_UPDATE_DUE_DATE = "COMMENT_CREATE_UPDATE_DUE_DATE";
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
        case COMMENT_CREATE_UPDATE_TITLE:
            return {
                ...state,
                row: { ...state.row, title: action.payload },
            };
        case COMMENT_CREATE_UPDATE_DESCRIPTION:
            return {
                ...state,
                row: { ...state.row, description: action.payload },
            };
        case COMMENT_CREATE_UPDATE_LABELS_IDS:
            return {
                ...state,
                row: {
                    ...state.row,
                    LabelsIds: state.row.LabelsIds.includes(action.payload)
                        ? state.row.LabelsIds.filter((l) => l != action.payload)
                        : [...state.row.LabelsIds, action.payload],
                },
            };
        case COMMENT_CREATE_UPDATE_LABELS:
            return {
                ...state,
                row: {
                    ...state.row,
                    Labels: action.payload,
                },
            };
        case COMMENT_CREATE_UPDATE_PRIORITY_ID:
            return {
                ...state,
                row: { ...state.row, PriorityId: action.payload },
            };
        case COMMENT_CREATE_UPDATE_PRIORITY:
            return {
                ...state,
                row: { ...state.row, Priority: action.payload },
            };
        case COMMENT_CREATE_UPDATE_PROJECT_ID:
            return {
                ...state,
                row: { ...state.row, ProjectId: action.payload },
            };
        case COMMENT_CREATE_UPDATE_PROJECT:
            return {
                ...state,
                row: { ...state.row, Project: action.payload },
            };
        case COMMENT_CREATE_UPDATE_DUE_DATE:
            return {
                ...state,
                row: { ...state.row, dueDate: action.payload },
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
