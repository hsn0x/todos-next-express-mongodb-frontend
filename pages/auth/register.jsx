import React from "react";
import { Card, Label, TextInput, Checkbox, Button } from "flowbite-react";
import RegisterScreen from "../../components/Auth/RegisterScreen";
import { requireNotAuthentication } from "../../HOC/requireNotAuthentication";

const Register = () => {
    return (
        <div>
            <div className="max-w-lg mx-auto">
                <div className="my-20">
                    <RegisterScreen />
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = requireNotAuthentication((context) => {
    return {};
});

export default Register;
