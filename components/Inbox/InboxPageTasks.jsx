import React from "react";
import { Button } from "flowbite-react";
import { FaPen, FaChair, FaTextHeight } from "react-icons/fa";

const InboxPageTasks = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-1">
                <div className="flex items-center">
                    <input type="radio" name="" id="" />
                </div>
                <div className="text-lg font-bold">
                    configur autobloggin wordpress sites
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
    );
};

export default InboxPageTasks;
