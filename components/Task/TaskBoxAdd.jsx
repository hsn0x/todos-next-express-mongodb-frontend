import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import {
    FaClock,
    FaDatabase,
    FaFlag,
    FaKey,
    FaKeybase,
    FaKeyboard,
} from "react-icons/fa";

const TaskBoxAdd = () => {
    return (
        <div>
            <form>
                <div className="border-2 rounded-lg border-gray-100 p-2">
                    <div>
                        <TextInput
                            id="title"
                            placeholder="e.g., Family lunch on Sunday at 11am #Personal"
                            required={true}
                            style={{
                                background: "transparent",
                                border: 0,
                                outline: "none",
                                "--tw-ring-opacity": 0,
                                fontSize: "1.4rem",
                            }}
                        />
                        <Textarea
                            id="title"
                            placeholder="description"
                            required={true}
                            rows={2}
                            style={{
                                background: "transparent",
                                border: 0,
                                "--tw-ring-opacity": 0,
                            }}
                        />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <Button color={"gray"} size="sm">
                                <span className="mr-2">
                                    <FaDatabase />
                                </span>
                                <span>Due Date</span>
                            </Button>
                            <div>
                                <Button color={"gray"} size="sm">
                                    <span className="mr-2">
                                        <FaDatabase />
                                    </span>
                                    <span>Inbox</span>
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <Button color={"gray"} size="sm" pill={true}>
                                    <FaKey />
                                </Button>
                            </div>
                            <div>
                                <Button color={"gray"} size="sm" pill={true}>
                                    <FaFlag />
                                </Button>
                            </div>
                            <div>
                                <Button color={"gray"} size="sm" pill={true}>
                                    <FaClock />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TaskBoxAdd;
