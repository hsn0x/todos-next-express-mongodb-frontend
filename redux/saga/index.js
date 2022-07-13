import { takeLatest, takeEvery } from "redux-saga/effects";
import { GET_USER } from "../reducers/users";
import { handleGetUser } from "./handlers/users";

export function* watcherSage() {
    yield takeEvery(GET_USER, handleGetUser);
}
