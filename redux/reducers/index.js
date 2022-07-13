import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.js";
import users from "./users.js";

import login from "./login.js";
import register from "./register.js";

import tasks, { fetchTasks } from "./tasks.js";

const reducers = combineReducers({
    users,
    auth,

    login,
    register,

    tasks,
});

export default reducers;
export { fetchTasks };
