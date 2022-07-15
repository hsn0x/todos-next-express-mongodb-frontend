import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InboxPageTasks, InboxPageTitle } from "../../components/Inbox";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import { fetchProfile } from "../../redux/reducers/auth";

const InboxPage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(authUser);
        const fetchData = async () => {
            dispatch(updateAuth(authUser));
            dispatch(updateIsAuthenticated(!!authUser));
            dispatch(fetchProfile());
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
