import React from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "flowbite-react";
import { FaPen, FaChair, FaTextHeight } from "react-icons/fa";
import TasksBox from "../Tasks/TasksBox";
import TaskBoxEdit from "../Task/TaskBoxEdit";

const InboxPageTasks = () => {
    const { rows } = useSelector(({ tasks }) => tasks);
    const onClick = () => {
        console.log("onClick");
    };
    const onClose = () => {
        console.log("onClose");
    };
    return (
        <div>
            {/* <TasksBox tasks={rows} />
            <div> <TaskBoxEdit /></div>{" "} */}
        </div>
    );
};

export default InboxPageTasks;
