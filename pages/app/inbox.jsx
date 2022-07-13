import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InboxPageTasks, InboxPageTitle } from "../../components/Inbox";
import { fetchTasks } from "../../redux/reducers";

const InboxPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);
    return (
        <div>
            <InboxPageTitle />
            <InboxPageTasks />
        </div>
    );
};

export default InboxPage;
