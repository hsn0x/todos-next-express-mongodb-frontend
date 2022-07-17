const COMMENT_EDIT_UPDATE_IS_EDIT = "COMMENT_EDIT_UPDATE_IS_EDIT";
const COMMENT_EDIT_UPDATE_ID = "COMMENT_EDIT_UPDATE_ID";
const COMMENT_EDIT_UPDATE_TITLE = "COMMENT_EDIT_UPDATE_TITLE";
const COMMENT_EDIT_UPDATE_DESCRIPTION = "COMMENT_EDIT_UPDATE_DESCRIPTION";
const COMMENT_EDIT_UPDATE_LABELS_IDS = "COMMENT_EDIT_UPDATE_LABELS_IDS";
const COMMENT_EDIT_UPDATE_LABELS = "COMMENT_EDIT_UPDATE_LABELS";
const COMMENT_EDIT_UPDATE_PRIORITY_ID = "COMMENT_EDIT_UPDATE_PRIORITY_ID";
const COMMENT_EDIT_UPDATE_PRIORITY = "COMMENT_EDIT_UPDATE_PRIORITY";
const COMMENT_EDIT_UPDATE_PROJECT_ID = "COMMENT_EDIT_UPDATE_PROJECT_ID";
const COMMENT_EDIT_UPDATE_PROJECT = "COMMENT_EDIT_UPDATE_PROJECT";
const COMMENT_EDIT_UPDATE_DUE_DATE = "COMMENT_EDIT_UPDATE_DUE_DATE";
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
        case COMMENT_EDIT_UPDATE_TITLE:
            return {
                ...state,
                row: { ...state.row, title: action.payload },
            };
        case COMMENT_EDIT_UPDATE_DESCRIPTION:
            return {
                ...state,
                row: { ...state.row, description: action.payload },
            };
        case COMMENT_EDIT_UPDATE_LABELS_IDS:
            return {
                ...state,
                row: {
                    ...state.row,
                    LabelsIds: state.row.LabelsIds.includes(action.payload)
                        ? state.row.LabelsIds.filter((l) => l != action.payload)
                        : [...state.row.LabelsIds, action.payload],
                },
            };
        case COMMENT_EDIT_UPDATE_LABELS:
            return {
                ...state,
                row: {
                    ...state.row,
                    Labels: action.payload,
                },
            };
        case COMMENT_EDIT_UPDATE_PRIORITY_ID:
            return {
                ...state,
                row: { ...state.row, PriorityId: action.payload },
            };
        case COMMENT_EDIT_UPDATE_PRIORITY:
            return {
                ...state,
                row: { ...state.row, Priority: action.payload },
            };
        case COMMENT_EDIT_UPDATE_PROJECT_ID:
            return {
                ...state,
                row: { ...state.row, ProjectId: action.payload },
            };
        case COMMENT_EDIT_UPDATE_PROJECT:
            return {
                ...state,
                row: { ...state.row, Project: action.payload },
            };
        case COMMENT_EDIT_UPDATE_DUE_DATE:
            return {
                ...state,
                row: { ...state.row, dueDate: action.payload },
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
