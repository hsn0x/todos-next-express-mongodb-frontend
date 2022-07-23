import React, { useEffect } from "react";
import { Avatar, TextInput, Textarea, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { commentEditActions } from "../../../redux/actions";
import { FaFile, FaMicrophone, FaSmile } from "react-icons/fa";
import { axiosServer } from "../../../db/axios";
import { fetchCommentsByTaskId } from "../../../redux/reducers/comments";

const CommentBoxEdit = () => {
    const dispatch = useDispatch();
    const { row: taskEditRow } = useSelector(({ taskEdit }) => taskEdit);
    const { row: commentEditRow, isEdit: commentEditIsEdit } = useSelector(
        ({ commentEdit }) => commentEdit
    );
    const {
        commentEditUpdateContent,
        commentEditUpdateLoading,
        commentEditUpdateTaskId,
        commentEditUpdateisEdit,
    } = bindActionCreators(commentEditActions, dispatch);

    const handleCommentEdit = async () => {
        const commentData = {
            content: commentEditRow.content,
            TaskId: commentEditRow.TaskId,
        };
        try {
            await axiosServer.put(
                `/comments/${commentEditRow._id}`,
                commentData
            );
            dispatch(fetchCommentsByTaskId());
            commentEditUpdateisEdit(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        commentEditUpdateTaskId(taskEditRow._id);
    }, []);
    return (
        <div>
            <div className="border-2 border-gray-100 rounded-xl p-2">
                <form>
                    <Textarea
                        id="comment"
                        type="text"
                        onChange={(e) =>
                            commentEditUpdateContent(e.target.value)
                        }
                        placeholder="Comment ..."
                        required={true}
                        rows={3}
                        value={commentEditRow.content}
                        style={{
                            background: "transparent",
                            border: 0,
                            "--tw-ring-opacity": 0,
                        }}
                    />
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <div className="hover:bg-gray-200 rounded-xl p-2 flex items-center cursor-pointer">
                                <FaFile />
                            </div>
                            <div className="hover:bg-gray-200 rounded-xl p-2 flex items-center cursor-pointer">
                                <FaMicrophone />
                            </div>
                            <div className="hover:bg-gray-200 rounded-xl p-2 flex items-center cursor-pointer">
                                <FaSmile />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <Button
                                    color={"gray"}
                                    size="sm"
                                    onClick={() =>
                                        commentEditUpdateisEdit(false)
                                    }
                                >
                                    Cancel
                                </Button>
                            </div>
                            <div>
                                <Button
                                    color={"gray"}
                                    size="sm"
                                    onClick={() => handleCommentEdit(false)}
                                >
                                    Update
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentBoxEdit;
