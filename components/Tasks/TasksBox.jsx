import { Button } from "flowbite-react";
import React from "react";
import { FaChair, FaPen, FaTextHeight } from "react-icons/fa";
import TaskBox from "../Task/TaskBox";

const TasksBox = ({ tasks }) => {
    return (
        <div className="w-3/4 mx-auto flex flex-col gap-2">
            {tasks &&
                tasks.map((task) => <TaskBox key={task.id} task={task} />)}
        </div>
    );
};

export default TasksBox;
