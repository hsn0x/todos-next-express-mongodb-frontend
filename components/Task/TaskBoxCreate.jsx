import { Button } from "flowbite-react";
import React from "react";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import TaskBoxCreateBody from "./TaskBoxCreateBody";
import TaskBoxCreateHandler from "./TaskBoxCreateHandler";

const TaskBoxCreate = () => {
    const dispatch = useDispatch();

    const { isCreate } = useSelector(({ taskCreate }) => taskCreate);
    const { profile } = useSelector(({ auth }) => auth);

    const { taskCreateUpdateisCreate } = bindActionCreators(
        taskCreateActions,
        dispatch
    );

    return (
        <div>
            {profile && isCreate ? (
                <form className="flex flex-col gap-1">
                    <TaskBoxCreateBody />
                    <TaskBoxCreateHandler />
                </form>
            ) : (
                <div>
                    <Button
                        color={"gray"}
                        onClick={() => taskCreateUpdateisCreate(true)}
                    >
                        Add Task
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TaskBoxCreate;
