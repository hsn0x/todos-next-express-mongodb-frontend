import React from "react";
import { useSelector } from "react-redux";
import TasksBox from "../Tasks/TasksBox";
import dynamic from "next/dynamic";
import TaskBoxAdd from "../Task/TaskBoxAdd";

const TaskBoxEdit = dynamic(() => import("../../components/Task/TaskBoxEdit"), {
    ssr: false,
});

const InboxPageTasks = () => {
    const { rows } = useSelector(({ tasks }) => tasks);

    return (
        <div className="w-3/4 mx-auto flex flex-col gap-2">
            <TasksBox tasks={rows} />
            <TaskBoxEdit />
            <TaskBoxAdd />
        </div>
    );
};

export default InboxPageTasks;
