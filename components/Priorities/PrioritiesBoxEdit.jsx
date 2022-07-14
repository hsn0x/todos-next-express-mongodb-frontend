import { Checkbox, Dropdown, Label, Radio } from "flowbite-react";
import React, { Profiler } from "react";
import { FaCheck, FaFlag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";

const PrioritiesBoxEdit = ({ Priorities, row }) => {
    const dispatch = useDispatch();

    const { taskCreateUpdatePriorityId } = bindActionCreators(
        taskCreateActions,
        dispatch
    );

    return (
        <Dropdown
            label={
                <div className="flex gap-1">
                    <div className="flex items-center">
                        <FaFlag />
                    </div>
                    <div>{row.Priority?.name || "Priority"}</div>
                </div>
            }
            color={"gray"}
            size="sm"
        >
            {Priorities &&
                Priorities.map((priority) => (
                    <div
                        key={priority.id}
                        onClick={() => taskCreateUpdatePriorityId(priority.id)}
                        className="cursor-pointer"
                    >
                        <Dropdown.Item>
                            <div className="flex justify-between w-52">
                                <div>{priority.name}</div>
                                <div>
                                    {row.PriorityId == priority.id && (
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

export default PrioritiesBoxEdit;
