import React from "react";
import { useSelector } from "react-redux";
import TasksBox from "../Tasks/TasksBox";
import dynamic from "next/dynamic";

const TaskBoxEdit = dynamic(() => import("../../components/Task/TaskBoxEdit"), {
    ssr: false,
});

const InboxPageTasks = () => {
    const { rows } = useSelector(({ tasks }) => tasks);

    return (
        <div>
            <TasksBox tasks={rows} />
            <div>
                <TaskBoxEdit />
            </div>
        </div>
    );
};

export default InboxPageTasks;
