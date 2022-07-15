import { Textarea, TextInput } from "flowbite-react";
import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { taskCreateActions } from "../../../redux/actions";

const TaskBoxCreateBodyInfo = () => {
    const dispatch = useDispatch();

    const { taskCreateUpdateDescription, taskCreateUpdateTitle } =
        bindActionCreators(taskCreateActions, dispatch);

    return (
        <div>
            <TextInput
                id="title"
                placeholder="e.g., Family lunch on Sunday at 11am #Personal"
                required={true}
                style={{
                    background: "transparent",
                    border: 0,
                    outline: "none",
                    "--tw-ring-opacity": 0,
                    fontSize: "1.4rem",
                }}
                onChange={(e) => taskCreateUpdateTitle(e.target.value)}
            />
            <Textarea
                id="title"
                placeholder="description"
                required={true}
                rows={2}
                style={{
                    background: "transparent",
                    border: 0,
                    "--tw-ring-opacity": 0,
                }}
                onChange={(e) => taskCreateUpdateDescription(e.target.value)}
            />
        </div>
    );
};

export default TaskBoxCreateBodyInfo;
