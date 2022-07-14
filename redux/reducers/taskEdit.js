const TASK_EDIT_UPDATE_IS_EDIT = "TASK_EDIT_UPDATE_IS_EDIT";
const TASK_EDIT_UPDATE_TITLE = "TASK_EDIT_UPDATE_TITLE";
const TASK_EDIT_UPDATE_DESCRIPTION = "TASK_EDIT_UPDATE_DESCRIPTION";
const TASK_EDIT_UPDATE_LABELS_IDS = "TASK_EDIT_UPDATE_LABELS_IDS";
const TASK_EDIT_UPDATE_LABELS = "TASK_EDIT_UPDATE_LABELS";
const TASK_EDIT_UPDATE_PRIORITY_ID = "TASK_EDIT_UPDATE_PRIORITY_ID";
const TASK_EDIT_UPDATE_PRIORITY = "TASK_EDIT_UPDATE_PRIORITY";
const TASK_EDIT_UPDATE_PROJECT_ID = "TASK_EDIT_UPDATE_PROJECT_ID";
const TASK_EDIT_UPDATE_PROJECT = "TASK_EDIT_UPDATE_PROJECT";

const initialState = {
    row: {
        title: "",
        description: "",
        Labels: [],
        LabelsIds: [],
        PriorityId: null,
        Priority: {},
        ProjectId: null,
        Project: {},
    },
    isEdit: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_EDIT_UPDATE_IS_EDIT:
            return {
                ...state,
                isEdit: action.payload,
            };
        case TASK_EDIT_UPDATE_TITLE:
            return {
                ...state,
                row: { ...state.row, title: action.payload },
            };
        case TASK_EDIT_UPDATE_DESCRIPTION:
            return {
                ...state,
                row: { ...state.row, description: action.payload },
            };
        case TASK_EDIT_UPDATE_LABELS_IDS:
            return {
                ...state,
                row: { ...state.row, LabelsIds: action.payload },
            };
        case TASK_EDIT_UPDATE_LABELS:
            return {
                ...state,
                row: { ...state.row, Labels: action.payload },
            };
        case TASK_EDIT_UPDATE_PRIORITY_ID:
            return {
                ...state,
                row: { ...state.row, PriorityId: action.payload },
            };
        case TASK_EDIT_UPDATE_PRIORITY:
            return {
                ...state,
                row: { ...state.row, Priority: action.payload },
            };
        case TASK_EDIT_UPDATE_PROJECT_ID:
            return {
                ...state,
                row: { ...state.row, ProjectId: action.payload },
            };
        case TASK_EDIT_UPDATE_PROJECT:
            return {
                ...state,
                row: { ...state.row, Project: action.payload },
            };
        default:
            return state;
    }
};

export default reducer;
