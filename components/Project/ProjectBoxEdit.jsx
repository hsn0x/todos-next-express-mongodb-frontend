import { Checkbox, Dropdown, Label, Radio } from "flowbite-react";
import React, { Profiler } from "react";
import { FaCheck, FaDatabase, FaFlag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../redux/actions";

const ProjectBoxEdit = ({ Projects, row }) => {
    const dispatch = useDispatch();

    const { taskEditUpdateProjectId } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    return (
        <div className="flex flex-col gap-1">
            <div className="text-lg">Project</div>

            <Dropdown
                label={
                    <div className="flex gap-1">
                        <div className="flex items-center">
                            <FaDatabase />
                        </div>
                        <div>{row.Project?.name || "Project"}</div>
                    </div>
                }
                color={"gray"}
                size="xs"
            >
                {Projects &&
                    Projects.map((project) => (
                        <div
                            key={project._id}
                            onClick={() => taskEditUpdateProjectId(project._id)}
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
        </div>
    );
};

export default ProjectBoxEdit;
