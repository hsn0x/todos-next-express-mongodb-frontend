import { Avatar, Textarea, TextInput } from "flowbite-react";
import React from "react";

const TaskBoxEditModalComment = () => {
    return (
        <form className="flex gap-4">
            <div>
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                    bordered={true}
                />
            </div>
            <div className="w-full">
                <TextInput
                    id="comment"
                    type="text"
                    // onChange={(e) => taskEditUpdateComment(e.target.value)}
                    placeholder="Comment"
                    style={{
                        backgroundColor: "transparent",
                        borderRadius: "999999px",
                    }}
                />
            </div>
        </form>
    );
};

export default TaskBoxEditModalComment;
