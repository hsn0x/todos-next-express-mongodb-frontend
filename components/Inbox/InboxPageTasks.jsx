import React from "react";
import { useSelector } from "react-redux";
import TasksBox from "../Tasks/TasksBox";
import dynamic from "next/dynamic";
import TaskBoxCreate from "../Task/Create/TaskBoxCreate";

const TaskBoxEditModal = dynamic(
    () => import("../../components/Task/Edit/TaskBoxEditModal"),
    {
        ssr: false,
    }
);

const InboxPageTasks = () => {
    const { rows } = useSelector(({ tasks }) => tasks);
    const { profile } = useSelector(({ auth }) => auth);
    console.log({ profile });

    return (
        <div className="w-3/4 mx-auto flex flex-col gap-2">
            {profile && <TasksBox tasks={profile.Tasks} />}
            <TaskBoxEditModal />
            <TaskBoxCreate />
        </div>
    );
};

export default InboxPageTasks;
