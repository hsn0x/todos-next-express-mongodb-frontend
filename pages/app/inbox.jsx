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
            await dispatch(updateAuth(authUser));
            await dispatch(updateIsAuthenticated(!!authUser));
            await dispatch(fetchProfile());
            await dispatch(fetchTasks());
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
