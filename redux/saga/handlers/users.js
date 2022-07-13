import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/users";
import { requestGetUser } from "../requests/users";

export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data));
    } catch (error) {
        console.log(error);
    }
}
