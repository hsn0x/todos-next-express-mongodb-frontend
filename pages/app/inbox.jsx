import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InboxPageTasks, InboxPageTitle } from "../../components/Inbox";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import { fetchTasks } from "../../redux/reducers";
import { fetchProfile } from "../../redux/reducers/auth";

const InboxPage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            dispatch(updateAuth(authUser));
            dispatch(updateIsAuthenticated(!!authUser));
            dispatch(fetchProfile());
            dispatch(fetchTasks());
        };
        fetchData();
    }, []);
    return (
        <div>
            <InboxPageTitle />
            <InboxPageTasks />
        </div>
    );
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default InboxPage;
