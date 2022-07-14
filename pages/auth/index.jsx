import React from "react";
import { requireNotAuthentication } from "../../HOC/requireNotAuthentication";

const AuthenticationHome = () => {
    return <div>AuthenticationHome</div>;
};

export const getServerSideProps = requireNotAuthentication((context) => {
    return {};
});

export default AuthenticationHome;
