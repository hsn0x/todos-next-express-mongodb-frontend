import React from "react";
import { Avatar, Dropdown } from "flowbite-react";
import { format, parseISO } from "date-fns";
import { FaCommentDots, FaPenAlt, FaRegCircle, FaTrash } from "react-icons/fa";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { commentEditActions } from "../../redux/actions";
import CommentBoxEdit from "./Edit/CommentBoxEdit";

const CommentBox = ({ comment }) => {
    const dispatch = useDispatch();
    const { row: taskEditRow } = useSelector(({ taskEdit }) => taskEdit);

    const {
        commentEditUpdateContent,
        commentEditUpdateId,
        commentEditUpdateLoading,
        commentEditUpdateTaskId,
        commentEditUpdateisEdit,
        commentEditUpdateisEditModal,
    } = bindActionCreators(commentEditActions, dispatch);

    const handleCommentEditShow = () => {
        commentEditUpdateLoading(true);
        commentEditUpdateContent(comment.content);
        commentEditUpdateId(comment.id);
        commentEditUpdateTaskId(taskEditRow.id);
        commentEditUpdateisEdit(true);
        commentEditUpdateLoading(false);
    };

    return (
        <div className="flex gap-3">
            <div className="">
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                    bordered={true}
                />
            </div>
            <div className="w-full">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <div className="text-lg font-bold">
                            {comment.User.firstName} {comment.User.lastName}
                        </div>
                        <div className="text-gray-500">
                            {format(
                                parseISO(comment.createdAt),
                                "MMM dd, h:mm a"
                            )}
                        </div>
                    </div>
                    <div>
                        <Dropdown label={<FaRegCircle />} color="gray">
                            <div className="w-80">
                                <Dropdown.Item
                                    onClick={() => handleCommentEditShow()}
                                >
                                    <div className="flex gap-3">
                                        <div className="flex items-center">
                                            <FaCommentDots size="20" />
                                        </div>
                                        <div className="text-base">
                                            Edit Comment
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className="flex gap-3">
                                        <div className="flex items-center">
                                            <FaPenAlt />
                                        </div>
                                        <div className="text-base">
                                            Copy Text
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className="flex gap-3">
                                        <div className="flex items-center">
                                            <FaTrash />
                                        </div>
                                        <div className="text-base">
                                            Delete Comment
                                        </div>
                                    </div>
                                </Dropdown.Item>
                            </div>
                        </Dropdown>
                    </div>
                </div>
                <div className="text-base">{comment.content}</div>
            </div>
        </div>
    );
};

export default CommentBox;
