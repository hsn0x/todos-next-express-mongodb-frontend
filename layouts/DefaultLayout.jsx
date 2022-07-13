import React from "react";

import { FooterScreen, NavbarScreen } from "../components";
import SidebarScreen from "../components/SidebarScreen";
import { withSessionSsr } from "../lib/withSession";

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className="container mx-auto">
                <NavbarScreen />
                <div className="flex">
                    <SidebarScreen />
                    <main className="w-full">{children}</main>
                </div>
                <FooterScreen />
            </div>
        </>
    );
};

export default DefaultLayout;
