import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../redux/actions";
import TaskBoxButtons from "./TaskBoxButtons";

const TaskBoxInfo = ({ task }) => {
    return (
        <div className="flex gap-2">
            <div className="mt-0.5">
                <input type="radio" name="" id="" />
            </div>
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="text-lg">{task.title}</div>

                    <TaskBoxButtons task={task} />
                </div>
                <div className="text-xs">{task.description}</div>
            </div>
        </div>
    );
};

export default TaskBoxInfo;
