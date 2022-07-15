import React from "react";
import DueDateBoxCreate from "../../DueDate/DueDateBoxCreate";
import LabelsBoxCreate from "../../Labels/LabelsBoxCreate";
import PrioritiesBoxCreate from "../../Priorities/PrioritiesBoxCreate";
import ProjectBoxCreate from "../../Project/ProjectBoxCreate";
import RemindersBoxCreate from "../../Reminders/RemindersBoxCreate";
import { useSelector, useDispatch } from "react-redux";

const TaskBoxCreateBodyButtons = () => {
    const { profile } = useSelector(({ auth }) => auth);
    const { row } = useSelector(({ taskCreate }) => taskCreate);

    return (
        <div className="flex justify-between">
            <div className="flex gap-1">
                <div>
                    <DueDateBoxCreate />
                </div>
                <div>
                    <ProjectBoxCreate row={row} Projects={profile.Projects} />
                </div>
            </div>
            <div className="flex gap-2">
                <div>
                    <LabelsBoxCreate row={row} Labels={profile.Labels} />
                </div>
                <div>
                    <PrioritiesBoxCreate
                        row={row}
                        Priorities={profile.Priorities}
                    />
                </div>
                <div>
                    <RemindersBoxCreate />
                </div>
            </div>
        </div>
    );
};

export default TaskBoxCreateBodyButtons;
