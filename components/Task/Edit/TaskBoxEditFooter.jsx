import { Button, Modal, Spinner } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { axiosServer } from "../../../db/axios";
import { taskEditActions } from "../../../redux/actions";
import { fetchProfile } from "../../../redux/reducers/auth";

const TaskBoxEditFooter = () => {
    const dispatch = useDispatch();
    const { row, loading } = useSelector(({ taskEdit }) => taskEdit);

    const { taskEditUpdateisEdit, taskEditUpdateLoading } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    const onClose = () => {
        taskEditUpdateisEdit(false);
    };

    const handleTaskUpdate = async (e) => {
        e.preventDefault();
        taskEditUpdateLoading(true);

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
            const data = await axiosServer.put(`/tasks/${row.id}`, taskData);
            dispatch(fetchProfile());
            taskEditUpdateisEdit(false);
        } catch (error) {
            console.log(error);
        } finally {
            taskEditUpdateLoading(false);
        }
    };

    return (
        <Modal.Footer>
            <Button color={"gray"} onClick={onClose}>
                <span>Close</span>
            </Button>
            <Button color={"gray"} onClick={(e) => handleTaskUpdate(e)}>
                {loading ? (
                    <div className="flex gap-2">
                        <div>
                            <Spinner />
                        </div>
                        <div>Loading ...</div>
                    </div>
                ) : (
                    <div> Save</div>
                )}
            </Button>
        </Modal.Footer>
    );
};

export default TaskBoxEditFooter;
