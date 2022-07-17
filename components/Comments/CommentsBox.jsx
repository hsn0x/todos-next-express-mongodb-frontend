import React from "react";
import CommentBox from "../Comment/CommentBox";
import { useSelector, useDispatch } from "react-redux";
import CommentBoxEdit from "../Comment/Edit/CommentBoxEdit";

const CommentsBox = ({ comments }) => {
    const dispatch = useDispatch();

    const { row: commentEditRow, isEdit: commentEditIsEdit } = useSelector(
        ({ commentEdit }) => commentEdit
    );

    return (
        <div className="flex flex-col gap-5">
            {comments &&
                comments.map((comment) => (
                    <div key={comment.id}>
                        {commentEditIsEdit &&
                        comment.id == commentEditRow.id ? (
                            <CommentBoxEdit comment={comment} />
                        ) : (
                            <CommentBox comment={comment} />
                        )}
                    </div>
                ))}
        </div>
    );
};

export default CommentsBox;
