import {
    Button,
    Label,
    Modal,
    Select,
    Textarea,
    TextInput,
} from "flowbite-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { taskEditActions } from "../../redux/actions";

const TaskBoxEdit = () => {
    const dispatch = useDispatch();
    const { row, isEdit } = useSelector(({ taskEdit }) => taskEdit);
    const { profile } = useSelector(({ auth }) => auth);

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
            <Modal show={isEdit} onClose={onClose} size="4xl">
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="flex gap-2">
                        <form className="w-3/4">
                            <div className="">
                                <Label htmlFor="title" value="Title" />
                            </div>

                            <div>
                                <TextInput
                                    id="title"
                                    type="text"
                                    value={row.title}
                                    onChange={(e) =>
                                        taskEditUpdateTitle(e.target.value)
                                    }
                                />
                            </div>
                            <div className="">
                                <Label
                                    htmlFor="description"
                                    value="Description"
                                />
                            </div>
                            <div className="">
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
                                />
                            </div>
                        </form>
                        <div className="w-1/4">
                            <div>
                                <div className="">
                                    <Label
                                        htmlFor="projects"
                                        value="Change Project"
                                    />
                                </div>
                                <div>
                                    <Select
                                        id="projects"
                                        required={true}
                                        value={row.Project.id}
                                        onChange={(e) =>
                                            taskEditUpdateProjectId(
                                                e.target.value
                                            )
                                        }
                                    >
                                        {profile.Projects &&
                                            profile.Projects.map((project) => (
                                                <option
                                                    key={project.id}
                                                    value={project.id}
                                                >
                                                    {project.name}
                                                </option>
                                            ))}
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <Label
                                        htmlFor="Labels"
                                        value="Change Label"
                                    />
                                </div>
                                <div>
                                    <Select
                                        id="Labels"
                                        required={true}
                                        value={row.Label?.id || ""}
                                        onChange={(e) =>
                                            taskEditUpdateLabelId(
                                                e.target.value
                                            )
                                        }
                                    >
                                        {profile.Labels &&
                                            profile.Labels.map((label) => (
                                                <option
                                                    key={label.id}
                                                    value={label.id}
                                                >
                                                    {label.name}
                                                </option>
                                            ))}
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <Label
                                        htmlFor="priorities"
                                        value="Change Priority"
                                    />
                                </div>
                                <div>
                                    <Select
                                        id="priorities"
                                        required={true}
                                        value={row.Priority.id}
                                        onChange={(e) =>
                                            taskEditUpdatePriorityId(
                                                e.target.value
                                            )
                                        }
                                    >
                                        {profile.Priorities &&
                                            profile.Priorities.map(
                                                (priority) => (
                                                    <option
                                                        key={priority.id}
                                                        value={priority.id}
                                                    >
                                                        {priority.name}
                                                    </option>
                                                )
                                            )}
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color={"gray"} onClick={onClose}>
                        <span>Close</span>
                    </Button>
                    <Button color={"gray"}>
                        <span>Save</span>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TaskBoxEdit;
