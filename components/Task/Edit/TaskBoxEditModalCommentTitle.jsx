import React from "react";

const TaskBoxEditModalCommentTitle = ({ commentsCount }) => {
    return (
        <div className="flex gap-2">
            <div className="text-lg font-bold flex items-center">Comments</div>
            <div>{commentsCount}</div>
        </div>
    );
};

export default TaskBoxEditModalCommentTitle;
