import { Checkbox, Dropdown } from "flowbite-react";
import React from "react";
import { FaCheck, FaKey } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";

const LabelsBoxCreate = ({ Labels, row }) => {
    const dispatch = useDispatch();

    const { taskCreateUpdateLabelsIds } = bindActionCreators(
        taskCreateActions,
        dispatch
    );

    return (
        <Dropdown
            label={
                <div>
                    <FaKey />
                </div>
            }
            color={"gray"}
            size="sm"
            pill={true}
        >
            {Labels &&
                Labels.map((label) => (
                    <div
                        key={label.id}
                        onClick={() => taskCreateUpdateLabelsIds(label.id)}
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

export default LabelsBoxCreate;
