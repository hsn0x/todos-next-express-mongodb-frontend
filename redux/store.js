import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index.js";
import { watcherSage } from "./saga/index.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(watcherSage);

export default store;
