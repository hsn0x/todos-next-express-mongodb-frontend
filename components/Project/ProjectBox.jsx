import { Checkbox, Dropdown, Label, Radio } from "flowbite-react";
import React, { Profiler } from "react";
import { FaCheck, FaDatabase, FaFlag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";

const ProjectBox = ({ Projects }) => {
    const dispatch = useDispatch();
    const { row, isCreate } = useSelector(({ taskCreate }) => taskCreate);

    const { taskCreateUpdateProjectId } = bindActionCreators(
        taskCreateActions,
        dispatch
    );

    return (
        <Dropdown
            label={
                <div className="flex gap-1">
                    <div className="flex items-center">
                        <FaDatabase />
                    </div>
                    <div>Inbox</div>
                </div>
            }
            color={"gray"}
            size="sm"
        >
            {Projects &&
                Projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => taskCreateUpdateProjectId(project.id)}
                        className="cursor-pointer"
                    >
                        <Dropdown.Item>
                            <div className="flex justify-between w-52">
                                <div>{project.name}</div>
                                <div>
                                    {row.ProjectId == project.id && <FaCheck />}
                                </div>
                            </div>
                        </Dropdown.Item>
                    </div>
                ))}
        </Dropdown>
    );
};

export default ProjectBox;
