import { Textarea, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { taskEditActions } from "../../../redux/actions";

const TaskBoxEditModalMain = () => {
    const dispatch = useDispatch();

    const { row } = useSelector(({ taskEdit }) => taskEdit);

    const { taskEditUpdateDescription, taskEditUpdateTitle } =
        bindActionCreators(taskEditActions, dispatch);

    return (
        <form>
            <TextInput
                id="title"
                type="text"
                value={row.title}
                onChange={(e) => taskEditUpdateTitle(e.target.value)}
                style={{
                    background: "transparent",
                    border: 0,
                    outline: "none",
                    "--tw-ring-opacity": 0,
                    fontSize: "1.5rem",
                }}
            />
            <Textarea
                rows={4}
                id="description"
                type="text"
                value={row.description}
                onChange={(e) => taskEditUpdateDescription(e.target.value)}
                style={{
                    background: "transparent",
                    border: 0,
                    "--tw-ring-opacity": 0,
                }}
            />
        </form>
    );
};

export default TaskBoxEditModalMain;
