import { Checkbox, Dropdown, Label, Radio } from "flowbite-react";
import React, { Profiler } from "react";
import { FaCheck, FaDatabase, FaFlag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";

const ProjectBoxCreate = ({ Projects, row }) => {
    const dispatch = useDispatch();

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
                        key={project._id}
                        onClick={() => taskCreateUpdateProjectId(project._id)}
                        className="cursor-pointer"
                    >
                        <Dropdown.Item>
                            <div className="flex justify-between w-52">
                                <div>{project.name}</div>
                                <div>
                                    {row.ProjectId == project._id && (
                                        <FaCheck />
                                    )}
                                </div>
                            </div>
                        </Dropdown.Item>
                    </div>
                ))}
        </Dropdown>
    );
};

export default ProjectBoxCreate;
