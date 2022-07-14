import { Dropdown, TextInput } from "flowbite-react";
import React, { useState } from "react";
import {
    FaCalendar,
    FaCalendarAlt,
    FaCalendarPlus,
    FaChair,
    FaCircleNotch,
    FaDatabase,
    FaMinus,
    FaStopCircle,
    FaSun,
} from "react-icons/fa";
import {
    startOfTomorrow,
    startOfToday,
    nextSaturday,
    nextMonday,
} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { bindActionCreators } from "redux";
import { taskCreateActions } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const DueDateBox = () => {
    const dispatch = useDispatch();
    const { row, isCreate } = useSelector(({ taskCreate }) => taskCreate);

    const { taskCreateUpdateDueDate } = bindActionCreators(
        taskCreateActions,
        dispatch
    );

    return (
        <div>
            <Dropdown
                placement="left"
                color={"gray"}
                size="sm"
                label={
                    <div className="flex gap-1">
                        <div className="flex items-center">
                            <FaDatabase />
                        </div>
                        <div>Due Date</div>
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
                        <DatePicker
                            onChange={(date) =>
                                taskCreateUpdateDueDate(date.toISOString())
                            }
                            inline
                        />
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default DueDateBox;
