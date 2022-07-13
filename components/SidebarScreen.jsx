import { Navbar, Sidebar } from "flowbite-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { signOut } from "../redux/reducers/auth";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
    sidebarNavigationsAuthSlug,
    sidebarNavigationsGuestSlug,
    sidebarNavigations,
} from "../constants/sidebar";

const SidebarScreen = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(({ auth }) => auth);

    const handelSignout = async (e) => {
        e.preventDefault();
        await dispatch(signOut());
        router.push("/auth/login");
    };

    const handelSidebarNavigations = (navss) =>
        navss.map((nav) => {
            if (nav.children.length > 0) {
                return {
                    ...nav,
                    children: [...handelSidebarNavigations(nav.children)],
                };
            } else {
                if (
                    auth.user &&
                    auth.isAuthenticated &&
                    sidebarNavigationsGuestSlug.includes(nav.slug)
                ) {
                    return {
                        ...nav,
                        show: false,
                    };
                } else if (
                    !auth.user &&
                    !auth.isAuthenticated &&
                    sidebarNavigationsAuthSlug.includes(nav.slug)
                ) {
                    return {
                        ...nav,
                        show: false,
                    };
                } else {
                    return {
                        ...nav,
                    };
                }
            }
        });

    const isHandelSidebarNavigations =
        handelSidebarNavigations(sidebarNavigations);

    const ShowSidebarNavigations = ({ navs, navsParent }) => {
        return (
            <div>
                {navs.map((nav, index) => (
                    <div key={nav.id}>
                        {nav.children.length > 0 ? (
                            <Sidebar.Collapse icon={nav.icon} label={nav.label}>
                                <ShowSidebarNavigations
                                    navs={nav.children}
                                    navsParent={nav}
                                />
                            </Sidebar.Collapse>
                        ) : (
                            <div>
                                {nav.show ? (
                                    <div>
                                        <Link href={nav.href} passHref>
                                            <div>
                                                <Sidebar.Item
                                                    icon={nav.icon}
                                                    active={nav.active}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={(e) => [
                                                        nav.slug ==
                                                            "auth-logout" &&
                                                            handelSignout(e),
                                                    ]}
                                                >
                                                    {nav.label}
                                                </Sidebar.Item>
                                            </div>
                                        </Link>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-fit bg-gray-50">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <ShowSidebarNavigations
                            navs={isHandelSidebarNavigations}
                        />
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default SidebarScreen;
