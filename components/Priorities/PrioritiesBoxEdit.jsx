import { Checkbox, Dropdown, Label, Radio } from "flowbite-react";
import React, { Profiler } from "react";
import { FaCheck, FaFlag } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../redux/actions";

const PrioritiesBoxEdit = ({ Priorities, row }) => {
    const dispatch = useDispatch();

    const { taskEditUpdatePriorityId } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    return (
        <div className="flex flex-col gap-1">
            <div className="text-lg">Priority</div>

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
                size="xs"
            >
                {Priorities &&
                    Priorities.map((priority) => (
                        <div
                            key={priority._id}
                            onClick={() =>
                                taskEditUpdatePriorityId(priority._id)
                            }
                            className="cursor-pointer"
                        >
                            <Dropdown.Item>
                                <div className="flex justify-between w-52">
                                    <div>{priority.name}</div>
                                    <div>
                                        {row.PriorityId == priority._id && (
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

export default PrioritiesBoxEdit;
