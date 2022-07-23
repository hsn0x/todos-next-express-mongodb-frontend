import React, { useEffect } from "react";
import { Avatar, TextInput, Textarea, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { commentCreateActions } from "../../../redux/actions";
import { FaFile, FaMicrophone, FaSmile } from "react-icons/fa";
import { axiosServer } from "../../../db/axios";
import { fetchCommentsByTaskId } from "../../../redux/reducers/comments";

const CommentBoxCreate = () => {
    const dispatch = useDispatch();
    const { row: taskEditRow } = useSelector(({ taskEdit }) => taskEdit);
    const { row: commentCreateRow, isCreate: commentCreateIsCreate } =
        useSelector(({ commentCreate }) => commentCreate);
    const {
        commentCreateUpdateContent,
        commentCreateUpdateLoading,
        commentCreateUpdateTaskId,
        commentCreateUpdateisCreate,
    } = bindActionCreators(commentCreateActions, dispatch);

    const handleCommentCreate = async () => {
        const commentData = {
            content: commentCreateRow.content,
            TaskId: commentCreateRow.TaskId,
        };
        try {
            await axiosServer.post(`/comments`, commentData);
            dispatch(fetchCommentsByTaskId());
            commentCreateUpdateisCreate(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        commentCreateUpdateTaskId(taskEditRow._id);
    }, []);
    return (
        <div>
            {!commentCreateIsCreate ? (
                <div className="flex gap-4">
                    <div>
                        <Avatar
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded={true}
                            bordered={true}
                        />
                    </div>
                    <div
                        id="comment"
                        type="text"
                        className="border-2 border-gray-100 rounded-full cursor-pointer w-full"
                        onClick={() => commentCreateUpdateisCreate(true)}
                    >
                        Comment
                    </div>
                </div>
            ) : (
                <div className="border-2 border-gray-100 rounded-xl p-2">
                    <form>
                        <Textarea
                            id="comment"
                            type="text"
                            onChange={(e) =>
                                commentCreateUpdateContent(e.target.value)
                            }
                            placeholder="Comment ..."
                            required={true}
                            rows={3}
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
                                            commentCreateUpdateisCreate(false)
                                        }
                                    >
                                        Cancel
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        color={"gray"}
                                        size="sm"
                                        onClick={() =>
                                            handleCommentCreate(false)
                                        }
                                    >
                                        Comment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CommentBoxCreate;
