import React from "react";
import { useSelector } from "react-redux";
import DueDateBoxEdit from "../../DueDate/DueDateBoxEdit";
import LabelsBoxEdit from "../../Labels/LabelsBoxEdit";
import PrioritiesBoxEdit from "../../Priorities/PrioritiesBoxEdit";
import ProjectBoxEdit from "../../Project/ProjectBoxEdit";

const TaskBoxEditModalRight = () => {
    const { row } = useSelector(({ taskEdit }) => taskEdit);
    const { profile } = useSelector(({ auth }) => auth);

    return (
        <div className="flex flex-col gap-3">
            <div>
                <ProjectBoxEdit row={row} Projects={profile.Projects} />
            </div>
            <div className="h-0.5 bg-gray-100"></div>
            <div>
                <DueDateBoxEdit row={row} />
            </div>
            <div className="h-0.5 bg-gray-100"></div>
            <div>
                <PrioritiesBoxEdit row={row} Priorities={profile.Priorities} />
            </div>
            <div className="h-0.5 bg-gray-100"></div>
            <div>
                <LabelsBoxEdit row={row} Labels={profile.Labels} />
            </div>
            <div className="h-0.5 bg-gray-100"></div>
        </div>
    );
};

export default TaskBoxEditModalRight;
