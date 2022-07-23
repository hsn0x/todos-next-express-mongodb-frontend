import React from "react";
import TaskBox from "../Task/TaskBox";

const TasksBox = ({ tasks }) => {
    return (
        <div className="">
            {tasks &&
                tasks.map((task) => <TaskBox key={task._id} task={task} />)}
        </div>
    );
};

export default TasksBox;
