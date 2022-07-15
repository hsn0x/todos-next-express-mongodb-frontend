import { Modal, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../../redux/actions";
import LabelsBoxEdit from "../../Labels/LabelsBoxEdit";
import PrioritiesBoxEdit from "../../Priorities/PrioritiesBoxEdit";
import ProjectBoxEdit from "../../Project/ProjectBoxEdit";

const TaskBoxEditBody = () => {
    const dispatch = useDispatch();

    const { row } = useSelector(({ taskEdit }) => taskEdit);
    const { profile } = useSelector(({ auth }) => auth);

    const { taskEditUpdateDescription, taskEditUpdateTitle } =
        bindActionCreators(taskEditActions, dispatch);

    return (
        <>
            {profile && (
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
                                    taskEditUpdateDescription(e.target.value)
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
            )}
        </>
    );
};

export default TaskBoxEditBody;
