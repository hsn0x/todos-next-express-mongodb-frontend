import React from "react";
import LoginScreen from "../../components/Auth/LoginScreen";
import { requireNotAuthentication } from "../../HOC/requireNotAuthentication";

const LoginPage = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <div className="my-20">
                    <LoginScreen />
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = requireNotAuthentication((context) => {
    return {};
});

export default LoginPage;
