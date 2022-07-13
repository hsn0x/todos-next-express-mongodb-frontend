import { Button, Modal } from "flowbite-react";
import dynamic from "next/dynamic";
import React from "react";

const TodayPage = () => {
    const TaskBoxEdit = dynamic(
        () => import("../../components/Task/TaskBoxEdit"),
        {
            ssr: false,
        }
    );

    return (
        <div>
            <TaskBoxEdit />
        </div>
    );
};

export default TodayPage;
