const TASK_CREATE_UPDATE_IS_CREATE = "TASK_CREATE_UPDATE_IS_CREATE";
const TASK_CREATE_UPDATE_TITLE = "TASK_CREATE_UPDATE_TITLE";
const TASK_CREATE_UPDATE_DESCRIPTION = "TASK_CREATE_UPDATE_DESCRIPTION";
const TASK_CREATE_UPDATE_LABELS_IDS = "TASK_CREATE_UPDATE_LABELS_IDS";
const TASK_CREATE_UPDATE_LABELS = "TASK_CREATE_UPDATE_LABELS";
const TASK_CREATE_UPDATE_PRIORITY_ID = "TASK_CREATE_UPDATE_PRIORITY_ID";
const TASK_CREATE_UPDATE_PRIORITY = "TASK_CREATE_UPDATE_PRIORITY";
const TASK_CREATE_UPDATE_PROJECT_ID = "TASK_CREATE_UPDATE_PROJECT_ID";
const TASK_CREATE_UPDATE_PROJECT = "TASK_CREATE_UPDATE_PROJECT";
const TASK_CREATE_UPDATE_DUE_DATE = "TASK_CREATE_UPDATE_DUE_DATE";
const TASK_CREATE_UPDATE_LOADING = "TASK_CREATE_UPDATE_LOADING";

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
        dueDate: null,
    },
    isCreate: false,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_CREATE_UPDATE_IS_CREATE:
            return {
                ...state,
                isCreate: action.payload,
            };
        case TASK_CREATE_UPDATE_TITLE:
            return {
                ...state,
                row: { ...state.row, title: action.payload },
            };
        case TASK_CREATE_UPDATE_DESCRIPTION:
            return {
                ...state,
                row: { ...state.row, description: action.payload },
            };
        case TASK_CREATE_UPDATE_LABELS_IDS:
            return {
                ...state,
                row: {
                    ...state.row,
                    LabelsIds: state.row.LabelsIds.includes(action.payload)
                        ? state.row.LabelsIds.filter((l) => l != action.payload)
                        : [...state.row.LabelsIds, action.payload],
                },
            };
        case TASK_CREATE_UPDATE_LABELS:
            return {
                ...state,
                row: {
                    ...state.row,
                    Labels: action.payload,
                },
            };
        case TASK_CREATE_UPDATE_PRIORITY_ID:
            return {
                ...state,
                row: { ...state.row, PriorityId: action.payload },
            };
        case TASK_CREATE_UPDATE_PRIORITY:
            return {
                ...state,
                row: { ...state.row, Priority: action.payload },
            };
        case TASK_CREATE_UPDATE_PROJECT_ID:
            return {
                ...state,
                row: { ...state.row, ProjectId: action.payload },
            };
        case TASK_CREATE_UPDATE_PROJECT:
            return {
                ...state,
                row: { ...state.row, Project: action.payload },
            };
        case TASK_CREATE_UPDATE_DUE_DATE:
            return {
                ...state,
                row: { ...state.row, dueDate: action.payload },
            };
        case TASK_CREATE_UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
