import { Button, Modal, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { axiosServer } from "../../db/axios";
import { taskEditActions } from "../../redux/actions";
import LabelsBoxEdit from "../Labels/LabelsBoxEdit";
import PrioritiesBoxEdit from "../Priorities/PrioritiesBoxEdit";
import ProjectBoxEdit from "../Project/ProjectBoxEdit";

const TaskBoxEdit = () => {
    const dispatch = useDispatch();
    const { row, isEdit } = useSelector(({ taskEdit }) => taskEdit);

    const { profile } = useSelector(({ auth }) => auth);
    const handleTaskUpdate = async (e) => {
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
            const data = await axiosServer.put(`/tasks/${task.id}`, taskData);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const {
        taskEditUpdateDescription,
        taskEditUpdateLabelsIds,
        taskEditUpdatePriorityId,
        taskEditUpdateProjectId,
        taskEditUpdateTitle,
        taskEditUpdateisEdit,
    } = bindActionCreators(taskEditActions, dispatch);

    const onClose = () => {
        taskEditUpdateisEdit(false);
    };

    return (
        <div>
            {profile && (
                <Modal show={isEdit} onClose={onClose} size="4xl">
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Body>
                        <div className="flex gap-2">
                            <form className="w-3/4">
                                <TextInput
                                    id="title"
                                    type="text"
                                    value={row.title}
                                    onChange={(e) =>
                                        taskEditUpdateTitle(e.target.value)
                                    }
                                    style={{
                                        background: "transparent",
                                        border: 0,
                                        outline: "none",
                                        "--tw-ring-opacity": 0,
                                        fontSize: "1.5rem",
                                    }}
                                />
                                <Textarea
                                    rows={4}
                                    id="description"
                                    type="text"
                                    value={row.description}
                                    onChange={(e) =>
                                        taskEditUpdateDescription(
                                            e.target.value
                                        )
                                    }
                                    style={{
                                        background: "transparent",
                                        border: 0,
                                        "--tw-ring-opacity": 0,
                                    }}
                                />
                            </form>
                            <div className="w-1/4 flex flex-col gap-3">
                                <div>
                                    <ProjectBoxEdit
                                        row={row}
                                        Projects={profile.Projects}
                                    />
                                </div>
                                <div>
                                    <LabelsBoxEdit
                                        row={row}
                                        Labels={profile.Labels}
                                    />
                                </div>
                                <div>
                                    <PrioritiesBoxEdit
                                        row={row}
                                        Priorities={profile.Priorities}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color={"gray"} onClick={onClose}>
                            <span>Close</span>
                        </Button>
                        <Button
                            color={"gray"}
                            onClick={(e) => handleTaskUpdate(e)}
                        >
                            <span>Save</span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default TaskBoxEdit;
