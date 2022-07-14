import React from "react";
import TaskBoxCreateBodyButtons from "./TaskBoxCreateBodyButtons";
import TaskBoxCreateBodyInfo from "./TaskBoxCreateBodyInfo";

const TaskBoxCreateBody = () => {
    return (
        <div>
            <div className="border-2 rounded-lg border-gray-100 p-2">
                <TaskBoxCreateBodyInfo />
                <TaskBoxCreateBodyButtons />
            </div>
        </div>
    );
};

export default TaskBoxCreateBody;
