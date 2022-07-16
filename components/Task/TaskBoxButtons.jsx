import { Button } from "flowbite-react";
import React from "react";
import { FaCalendarAlt, FaComment, FaPen } from "react-icons/fa";
import DueDateBoxButton from "../DueDate/DueDateBoxButton";

const TaskBoxButtons = ({ task }) => {
    const taskEditHandler = (e) => {
        e.stopPropagation();
    };

    const taskCommentHandler = (e) => {
        e.stopPropagation();
    };
    return (
        <div>
            <div className="flex gap-1">
                <Button
                    size="sm"
                    pill={true}
                    color={"gray"}
                    onClick={(e) => taskEditHandler(e)}
                >
                    <span>
                        <FaPen />
                    </span>
                </Button>

                <DueDateBoxButton />
                <Button
                    size="sm"
                    pill={true}
                    color={"gray"}
                    onClick={(e) => taskCommentHandler(e)}
                >
                    <span>
                        <FaComment />
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default TaskBoxButtons;
