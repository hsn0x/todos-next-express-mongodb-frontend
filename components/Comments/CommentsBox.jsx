import React from "react";
import CommentBox from "../Comment/CommentBox";

const CommentsBox = ({ comments }) => {
    return (
        <div className="flex flex-col gap-5">
            {comments &&
                comments.map((comment) => (
                    <div key={comment.id}>
                        <CommentBox comment={comment} />
                    </div>
                ))}
        </div>
    );
};

export default CommentsBox;
