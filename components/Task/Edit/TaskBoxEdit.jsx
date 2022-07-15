import { Modal } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../../redux/actions";
import TaskBoxEditBody from "./TaskBoxEditBody";
import TaskBoxEditFooter from "./TaskBoxEditFooter";
import TaskBoxEditHeader from "./TaskBoxEditHeader";

const TaskBoxEdit = () => {
    const dispatch = useDispatch();
    const { isEdit } = useSelector(({ taskEdit }) => taskEdit);
    const { profile } = useSelector(({ auth }) => auth);

    const { taskEditUpdateisEdit } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    const onClose = () => {
        taskEditUpdateisEdit(false);
    };

    return (
        <div>
            {profile && (
                <Modal show={isEdit} onClose={onClose} size="4xl">
                    <TaskBoxEditHeader />
                    <TaskBoxEditBody />
                    <TaskBoxEditFooter />
                </Modal>
            )}
        </div>
    );
};

export default TaskBoxEdit;
