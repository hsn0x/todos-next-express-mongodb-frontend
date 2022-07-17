import { bindActionCreators } from "redux";
import { axiosServer } from "../../db/axios";
import { getError } from "../../utils/error";
import { commentsActions } from "../actions";

const COMMENTS_FETCH_REQUEST = "COMMENTS_FETCH_REQUEST";
const COMMENTS_FETCH_SUCCESS = "COMMENTS_FETCH_SUCCESS";
const COMMENTS_FETCH_FAIL = "COMMENTS_FETCH_FAIL";
const COMMENTS_CREATE_REQUEST = "COMMENTS_CREATE_REQUEST";
const COMMENTS_CREATE_SUCCESS = "COMMENTS_CREATE_SUCCESS";
const COMMENTS_CREATE_FAIL = "COMMENTS_CREATE_FAIL";
const COMMENTS_DELETE_REQUEST = "COMMENTS_DELETE_REQUEST";
const COMMENTS_DELETE_SUCCESS = "COMMENTS_DELETE_SUCCESS";
const COMMENTS_DELETE_FAIL = "COMMENTS_DELETE_FAIL";
const COMMENTS_DELETE_RESET = "COMMENTS_DELETE_RESET";

const initialState = {
    rows: [],
    loading: false,
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS_FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case COMMENTS_FETCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: "",
            };
        case COMMENTS_FETCH_FAIL:
            return { ...state, loading: false, error: action.payload };
        case COMMENTS_CREATE_REQUEST:
            return { ...state, loadingCreate: true };
        case COMMENTS_CREATE_SUCCESS:
            return { ...state, loadingCreate: false };
        case COMMENTS_CREATE_FAIL:
            return { ...state, loadingCreate: false, error: action.payload };
        case COMMENTS_DELETE_REQUEST:
            return { ...state, loadingDelete: true };
        case COMMENTS_DELETE_SUCCESS:
            return { ...state, loadingDelete: false, successDelete: true };
        case COMMENTS_DELETE_FAIL:
            return { ...state, loadingDelete: false };
        case COMMENTS_DELETE_RESET:
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export const fetchComments = () => {
    return async (dispatch, getState) => {
        const {
            commentsFetchFail,
            commentsFetchSuccess,
            commentsFetchRequest,
        } = bindActionCreators(commentsActions, dispatch);

        commentsFetchRequest();
        try {
            const { data } = await axiosServer.get(`/comments`);
            commentsFetchSuccess(data);
        } catch (error) {
            commentsFetchFail(getError(error));
        }
    };
};
export const fetchCommentsByUserId = () => {
    return async (dispatch, getState) => {
        const {
            commentsFetchFail,
            commentsFetchSuccess,
            commentsFetchRequest,
        } = bindActionCreators(commentsActions, dispatch);

        commentsFetchRequest();
        try {
            const { data } = await axiosServer.get(
                `/comments/UserId/${getState().auth.user.id}`
            );
            commentsFetchSuccess(data);
        } catch (error) {
            commentsFetchFail(getError(error));
        }
    };
};

export default reducer;
