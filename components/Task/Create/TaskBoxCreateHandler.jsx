import { Button, Spinner } from "flowbite-react";
import React from "react";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { axiosServer } from "../../../db/axios";
import { fetchProfile } from "../../../redux/reducers/auth";

const TaskBoxCreateHandler = () => {
    const dispatch = useDispatch();
    const { row, loading } = useSelector(({ taskCreate }) => taskCreate);

    const { taskCreateUpdateisCreate, taskCreateUpdateLoading } =
        bindActionCreators(taskCreateActions, dispatch);

    const handleTaskCreate = async (e) => {
        e.preventDefault();
        taskCreateUpdateLoading(true);
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
            const fetchData = async () => {
                dispatch(fetchProfile());
            };
            fetchData();
            console.log({ data });
            taskCreateUpdateisCreate(false);
        } catch (error) {
            console.log(error);
        } finally {
            taskCreateUpdateLoading(false);
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
                <div>Cancel</div>
            </Button>
            <Button
                color={"gray"}
                type="submit"
                onClick={(e) => {
                    handleTaskCreate(e);
                }}
                disabled={loading}
            >
                {loading ? (
                    <div className="flex gap-2">
                        <div>
                            <Spinner />
                        </div>
                        <div>Loading ...</div>
                    </div>
                ) : (
                    <div> Add Task</div>
                )}
            </Button>
        </div>
    );
};

export default TaskBoxCreateHandler;
