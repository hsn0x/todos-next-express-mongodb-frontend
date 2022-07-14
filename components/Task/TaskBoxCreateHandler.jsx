import { Button } from "flowbite-react";
import React from "react";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { axiosServer } from "../../db/axios";

const TaskBoxCreateHandler = () => {
    const dispatch = useDispatch();
    const { row } = useSelector(({ taskCreate }) => taskCreate);

    const { taskCreateUpdateisCreate } = bindActionCreators(
        taskCreateActions,
        dispatch
    );

    const handleTaskCreate = async (e) => {
        e.preventDefault();
        const {
            title,
            description,
            ProjectId,
            dueDate,
            PriorityId,
            LabelsIds,
        } = row;
        const taskData = {
            title,
            description,
            ProjectId,
            dueDate,
            PriorityId,
            LabelsIds,
        };
        try {
            const data = await axiosServer.post("/tasks", taskData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex gap-1 justify-end">
            <Button
                color={"gray"}
                type="submit"
                onClick={() => {
                    taskCreateUpdateisCreate(false);
                }}
            >
                Cancel
            </Button>
            <Button
                color={"gray"}
                type="submit"
                onClick={(e) => {
                    handleTaskCreate(e);
                }}
            >
                Add Task
            </Button>
        </div>
    );
};

export default TaskBoxCreateHandler;
