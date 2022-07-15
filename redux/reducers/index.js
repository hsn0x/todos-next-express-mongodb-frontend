import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.js";
import users from "./users.js";

import login from "./login.js";
import register from "./register.js";

import tasks, { fetchTasksByUserId } from "./tasks.js";

import taskCreate from "./taskCreate.js";
import taskEdit from "./taskEdit.js";

const reducers = combineReducers({
    users,
    auth,

    login,
    register,

    tasks,
    taskEdit,
    taskCreate,
});

export default reducers;
export { fetchTasksByUserId };
