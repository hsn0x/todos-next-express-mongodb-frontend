import { Button } from "flowbite-react";
import React from "react";
import TaskBoxInfo from "./TaskBoxInfo";
import TaskBoxButtons from "./TaskBoxButtons";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../redux/actions";

const TaskBox = ({ task }) => {
    const dispatch = useDispatch();
    const {
        taskEditUpdateId,
        taskEditUpdateisEditModal,
        taskEditUpdateDescription,
        taskEditUpdateLabelsIds,
        taskEditUpdatePriorityId,
        taskEditUpdateTitle,
        taskEditUpdateProjectId,
        taskEditUpdateLabels,
        taskEditUpdatePriority,
        taskEditUpdateProject,
        taskEditUpdateDueDate,
        taskEditUpdateLoading,
    } = bindActionCreators(taskEditActions, dispatch);

    const handleTaskShowClick = (e) => {
        taskEditUpdateLoading(true);
        e.preventDefault();
        taskEditUpdateId(task._id);
        taskEditUpdateTitle(task.title);
        taskEditUpdateDescription(task.description);
        taskEditUpdateLabels(task.Labels);
        task.Labels.map((label) => taskEditUpdateLabelsIds(label._id));
        taskEditUpdatePriority(task.Priority);
        taskEditUpdatePriorityId(task.Priority?._id);
        taskEditUpdateProject(task.Project);
        taskEditUpdateProjectId(task.Project?._id);
        taskEditUpdateisEditModal(true);
        taskEditUpdateDueDate(task.due_date);
        taskEditUpdateLoading(false);
    };

    return (
        <div>
            <div
                className="cursor-pointer"
                onClick={(e) => handleTaskShowClick(e)}
            >
                <TaskBoxInfo task={task} />
            </div>
            <div className="my-2 border-b-2 border-gray-100 h-2"></div>
        </div>
    );
};

export default TaskBox;
