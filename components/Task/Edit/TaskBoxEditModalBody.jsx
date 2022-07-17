import { Modal, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../../redux/actions";
import DueDateBoxEdit from "../../DueDate/DueDateBoxEdit";
import LabelsBoxEdit from "../../Labels/LabelsBoxEdit";
import PrioritiesBoxEdit from "../../Priorities/PrioritiesBoxEdit";
import ProjectBoxEdit from "../../Project/ProjectBoxEdit";
import TaskBoxEditModalComment from "./TaskBoxEditModalComment";
import TaskBoxEditModalMain from "./TaskBoxEditModalMain";
import TaskBoxEditModalRight from "./TaskBoxEditModalRight";

const TaskBoxEditModalBody = () => {
    const dispatch = useDispatch();

    const { row } = useSelector(({ taskEdit }) => taskEdit);
    const { profile } = useSelector(({ auth }) => auth);

    const { taskEditUpdateDescription, taskEditUpdateTitle } =
        bindActionCreators(taskEditActions, dispatch);

    return (
        <>
            {profile && (
                <Modal.Body>
                    <div className="flex gap-10">
                        <div className="w-3/4 flex flex-col gap-2">
                            <div>
                                <TaskBoxEditModalMain />
                            </div>
                            <div className="h-0.5 bg-gray-200 my-5"></div>
                            <div>
                                <TaskBoxEditModalComment />
                            </div>
                        </div>
                        <div className="w-1/4 ">
                            <TaskBoxEditModalRight />
                        </div>
                    </div>
                </Modal.Body>
            )}
        </>
    );
};

export default TaskBoxEditModalBody;
