import React from "react";
import { useSelector } from "react-redux";
import TasksBox from "../Tasks/TasksBox";
import dynamic from "next/dynamic";
import TaskBoxCreate from "../Task/TaskBoxCreate";

const TaskBoxEdit = dynamic(() => import("../../components/Task/TaskBoxEdit"), {
    ssr: false,
});

const InboxPageTasks = () => {
    const { rows } = useSelector(({ tasks }) => tasks);

    return (
        <div className="w-3/4 mx-auto flex flex-col gap-2">
            <TasksBox tasks={rows} />
            <TaskBoxEdit />
            <TaskBoxCreate />
        </div>
    );
};

export default InboxPageTasks;
