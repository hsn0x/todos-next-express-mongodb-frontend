import { Button } from "flowbite-react";
import React from "react";
import { FaChair, FaPen, FaTextHeight } from "react-icons/fa";

const TaskBox = ({ task }) => {
    const handleTaskClick = () => {
        console.log("handleTaskClick");
    };
    return (
        <>
            <div
                className="flex justify-between gap-20 cursor-pointer"
                onClick={() => handleTaskClick(task)}
            >
                <div className="flex gap-2">
                    <div className="mt-0.5">
                        <input type="radio" name="" id="" />
                    </div>
                    <div>
                        <div className="text-lg">{task.title}</div>
                        <div className="text-xs">{task.description}</div>
                    </div>
                </div>

                <div className="flex gap-1">
                    <Button color={"gray"}>
                        <span>
                            <FaPen />
                        </span>
                    </Button>
                    <Button color={"gray"}>
                        <span>
                            <FaChair />
                        </span>
                    </Button>
                    <Button color={"gray"}>
                        <span>
                            <FaTextHeight />
                        </span>
                    </Button>
                </div>
            </div>
            <div className="mt-1 border-b-2 border-gray-100 h-2"></div>
        </>
    );
};

export default TaskBox;
