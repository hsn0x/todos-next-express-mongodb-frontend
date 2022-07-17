import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsByTaskId } from "../../../redux/reducers/comments";
import CommentBoxCreate from "../../Comment/Create/CommentBoxCreate";
import CommentsBox from "../../Comments/CommentsBox";
import TaskBoxEditModalCommentTitle from "./TaskBoxEditModalCommentTitle";

const TaskBoxEditModalComment = () => {
    const dispatch = useDispatch();
    const { rows } = useSelector(({ comments }) => comments);

    useEffect(() => {
        dispatch(fetchCommentsByTaskId());
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <TaskBoxEditModalCommentTitle commentsCount={rows.length} />

            <div className="h-0.5 bg-gray-200 mb-3"></div>

            <CommentsBox comments={rows} />
            <CommentBoxCreate />
        </div>
    );
};

export default TaskBoxEditModalComment;
