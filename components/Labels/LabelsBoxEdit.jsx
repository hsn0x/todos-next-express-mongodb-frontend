import { Checkbox, Dropdown } from "flowbite-react";
import React from "react";
import { FaCheck, FaKey } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../redux/actions";

const LabelsBoxEdit = ({ Labels, row }) => {
    const dispatch = useDispatch();

    const { taskEditUpdateLabelsIds } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    return (
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
            size="sm"
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
                                        row.LabelsIds.includes(label.id) && (
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

export default LabelsBoxEdit;
