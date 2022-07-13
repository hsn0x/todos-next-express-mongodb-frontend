import React from "react";
import { useSelector } from "react-redux";
import { Button } from "flowbite-react";
import { FaPen, FaChair, FaTextHeight } from "react-icons/fa";
import TasksBox from "../Tasks/TasksBox";

const InboxPageTasks = () => {
    const { rows } = useSelector(({ tasks }) => tasks);
    return (
        <div>
            <TasksBox tasks={rows} />
        </div>
    );
};

export default InboxPageTasks;
