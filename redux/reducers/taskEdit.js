const TASK_EDIT_UPDATE_TITLE = "TASK_EDIT_UPDATE_TITLE";
const TASK_EDIT_UPDATE_DESCRIPTION = "TASK_EDIT_UPDATE_DESCRIPTION";
const TASK_EDIT_UPDATE_LABELS = "TASK_EDIT_UPDATE_LABELS";
const TASK_EDIT_UPDATE_PRIORITY = "TASK_EDIT_UPDATE_PRIORITY";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_EDIT_UPDATE_TITLE:
            return {
                ...state,
                edit: { ...state.edit, title: action.payload },
            };
        case TASK_EDIT_UPDATE_DESCRIPTION:
            return {
                ...state,
                edit: { ...state.edit, description: action.payload },
            };
        case TASK_EDIT_UPDATE_LABELS:
            return {
                ...state,
                edit: { ...state.edit, Labels: action.payload },
            };
        case TASK_EDIT_UPDATE_PRIORITY:
            return {
                ...state,
                edit: { ...state.edit, PriorityId: action.payload },
            };
        default:
            return state;
    }
};

export default reducer;
