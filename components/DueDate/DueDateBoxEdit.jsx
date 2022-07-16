import { Dropdown } from "flowbite-react";
import React from "react";
import {
    FaCalendar,
    FaCalendarAlt,
    FaCalendarPlus,
    FaChair,
    FaDatabase,
    FaStopCircle,
    FaSun,
} from "react-icons/fa";
import {
    startOfTomorrow,
    startOfToday,
    nextSaturday,
    nextMonday,
    parseISO,
    format,
} from "date-fns";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { taskEditActions } from "../../redux/actions";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const DueDateBoxEdit = () => {
    const dispatch = useDispatch();
    const { row, isEdit } = useSelector(({ taskEdit }) => taskEdit);

    const { taskEditUpdateDueDate } = bindActionCreators(
        taskEditActions,
        dispatch
    );

    let footer = <p>Please pick a day.</p>;
    if (row.dueDate) {
        footer = (
            <p>
                You picked {format(parseISO(row.dueDate, "MM/dd/yyyy"), "PP")}.
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="">Due date</div>

            <Dropdown
                color={"gray"}
                size="xs"
                pill={true}
                label={
                    <div className="flex gap-1">
                        <div className="flex items-center">
                            <FaCalendarAlt />
                        </div>
                        <div>
                            {row.dueDate
                                ? format(
                                      parseISO(row.dueDate, "MM/dd/yyyy"),
                                      "PP"
                                  )
                                : "Due Date"}
                        </div>
                    </div>
                }
            >
                <div className="w-64">
                    <div className="border-t-2">
                        <div className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between ">
                            <div className="flex gap-1">
                                <div className="flex items-center">
                                    <FaCalendar />
                                </div>
                                <div>Today</div>
                            </div>
                            <div>{startOfToday().toString().split(" ")[0]}</div>
                        </div>

                        <div className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between ">
                            <div className="flex gap-1">
                                <div className="flex items-center">
                                    <FaSun />
                                </div>
                                <div>Tomorow</div>
                            </div>
                            <div>
                                {startOfTomorrow().toString().split(" ")[0]}
                            </div>
                        </div>
                        <div className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between ">
                            <div className="flex gap-1">
                                <div className="flex items-center">
                                    <FaChair />
                                </div>
                                <div>This Weekend</div>
                            </div>
                            <div>
                                {
                                    nextSaturday(new Date())
                                        .toString()
                                        .split(" ")[0]
                                }
                            </div>
                        </div>
                        <div className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between ">
                            <div className="flex gap-1">
                                <div className="flex items-center">
                                    <FaCalendarPlus />
                                </div>
                                <div>Next Week</div>
                            </div>
                            <div>
                                {nextMonday(new Date())
                                    .toString()
                                    .split(" ")
                                    .slice(0, 3)
                                    .join(" ")}
                            </div>
                        </div>
                        <div className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between ">
                            <div className="flex gap-1">
                                <div className="flex items-center">
                                    <FaStopCircle />
                                </div>
                                <div>No Date</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t-2">
                        <DayPicker
                            mode="single"
                            selected={row.dueDate}
                            onSelect={(date) =>
                                taskEditUpdateDueDate(date.toISOString())
                            }
                            footer={footer}
                        />
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default DueDateBoxEdit;
