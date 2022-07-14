import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCalendarAlt, FaComment, FaPen } from "react-icons/fa";
import { bindActionCreators, combineReducers } from "redux";
import { taskEditActions } from "../../redux/actions";

const TaskBox = ({ task }) => {
    const dispatch = useDispatch();
    const {
        taskEditUpdateisEdit,
        taskEditUpdateDescription,
        taskEditUpdateLabelsIds,
        taskEditUpdatePriorityId,
        taskEditUpdateTitle,
        taskEditUpdateProjectId,
        taskEditUpdateLabels,
        taskEditUpdatePriority,
        taskEditUpdateProject,
    } = bindActionCreators(taskEditActions, dispatch);
    const handleTaskClick = (task) => {
        taskEditUpdateTitle(task.title);
        taskEditUpdateDescription(task.description);
        taskEditUpdateLabels(task.Labels);
        taskEditUpdateLabelsIds(task.Labels.map((label) => label.id));
        taskEditUpdatePriority(task.Priority);
        taskEditUpdatePriorityId(task.Priority?.id);
        taskEditUpdateProject(task.Project);
        taskEditUpdateProjectId(task.Project?.id);
        taskEditUpdateisEdit(true);
    };
    return (
        <>
            <div
                className="flex justify-between gap-20 cursor-pointer"
                onClick={() => handleTaskClick(task)}
            >
                <div className="flex gap-2">
                    <div className="mt-0.5">
                        <input type="radio" name="" id="" />
                    </div>
                    <div>
                        <div className="text-lg">{task.title}</div>
                        <div className="text-xs">{task.description}</div>
                    </div>
                </div>

                <div className="flex gap-1">
                    <Button color={"gray"}>
                        <span>
                            <FaPen />
                        </span>
                    </Button>
                    <Button color={"gray"}>
                        <span>
                            <FaCalendarAlt />
                        </span>
                    </Button>
                    <Button color={"gray"}>
                        <span>
                            <FaComment />
                        </span>
                    </Button>
                </div>
            </div>
            <div className="mt-1 border-b-2 border-gray-100 h-2"></div>
        </>
    );
};

export default TaskBox;
