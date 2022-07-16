import { Button, Checkbox, Dropdown } from "flowbite-react";
import React from "react";
import { FaCheck, FaKey, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../redux/actions";

const LabelsBoxEdit = ({ Labels, row }) => {
    const dispatch = useDispatch();

    const { taskEditUpdateLabelsIds } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    return (
        <div className="flex flex-col gap-1">
            <div className="text-lg">Labels</div>
            <Dropdown
                label={
                    <div className="flex gap-1">
                        <div className="flex items-center">
                            <FaKey />
                        </div>
                        <div>Labels</div>
                    </div>
                }
                color={"gray"}
                size="xs"
            >
                {Labels &&
                    Labels.map((label) => (
                        <div
                            key={label.id}
                            onClick={() => taskEditUpdateLabelsIds(label.id)}
                            className="cursor-pointer"
                        >
                            <Dropdown.Item>
                                <div
                                    className="flex justify-between w-52"
                                    htmlFor={`label-${label.id}`}
                                >
                                    <div>{label.name}</div>

                                    <div>
                                        {row.LabelsIds.length > 0 &&
                                            row.LabelsIds.includes(
                                                label.id
                                            ) && <FaCheck />}
                                    </div>
                                </div>
                            </Dropdown.Item>
                        </div>
                    ))}
            </Dropdown>

            <div className="flex flex-wrap gap-1">
                {row.Labels &&
                    row.Labels.map((label) => (
                        <div
                            key={label.id}
                            onClick={() => taskEditUpdateLabelsIds(label.id)}
                        >
                            <div className="rounded-full bg-gray-200 px-4 flex gap-1 text-base">
                                <div>{label.name}</div>
                                <Button pill={true} size={"xs"} color="gray">
                                    <FaTrash />
                                </Button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default LabelsBoxEdit;
