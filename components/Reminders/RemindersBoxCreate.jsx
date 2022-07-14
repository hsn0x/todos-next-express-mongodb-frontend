import { Checkbox, Dropdown } from "flowbite-react";
import React from "react";
import { FaClock } from "react-icons/fa";

const RemindersBoxCreate = () => {
    return (
        <div>
            <Dropdown
                label={
                    <div>
                        <FaClock />
                    </div>
                }
                color={"gray"}
                size="sm"
                pill={true}
            >
                <Dropdown.Item>
                    <div className="flex justify-between w-52">
                        <div>Reminder</div>
                        <div>
                            <Checkbox />
                        </div>
                    </div>
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
};

export default RemindersBoxCreate;
