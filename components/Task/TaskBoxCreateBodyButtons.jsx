import React from "react";
import DueDateBox from "../DueDate/DueDateBox";
import LabelsBox from "../Labels/LabelsBox";
import PrioritiesBox from "../Priorities/PrioritiesBox";
import ProjectBox from "../Project/ProjectBox";
import RemindersBox from "../Reminders/RemindersBox";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const TaskBoxCreateBodyButtons = () => {
    const { profile } = useSelector(({ auth }) => auth);

    return (
        <div className="flex justify-between">
            <div className="flex gap-1">
                <div>
                    <DueDateBox />
                </div>
                <div>
                    <ProjectBox Projects={profile.Projects} />
                </div>
            </div>
            <div className="flex gap-2">
                <div>
                    <LabelsBox Labels={profile.Labels} />
                </div>
                <div>
                    <PrioritiesBox Priorities={profile.Priorities} />
                </div>
                <div>
                    <RemindersBox />
                </div>
            </div>
        </div>
    );
};

export default TaskBoxCreateBodyButtons;
