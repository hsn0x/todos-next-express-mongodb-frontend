import { Modal } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../../redux/actions";
import TaskBoxEditModalBody from "./TaskBoxEditModalBody";
import TaskBoxEditModalFooter from "./TaskBoxEditModalFooter";
import TaskBoxEditModalHeader from "./TaskBoxEditModalHeader";

const TaskBoxEditModal = () => {
    const dispatch = useDispatch();
    const { isEdit } = useSelector(({ taskEdit }) => taskEdit);
    const { profile } = useSelector(({ auth }) => auth);

    const { taskEditUpdateisEditModal } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    const onClose = () => {
        taskEditUpdateisEditModal(false);
    };

    return (
        <div>
            {profile && (
                <Modal show={isEdit} onClose={onClose} size="6xl">
                    <TaskBoxEditModalHeader />
                    <TaskBoxEditModalBody />
                    <TaskBoxEditModalFooter />
                </Modal>
            )}
        </div>
    );
};

export default TaskBoxEditModal;
