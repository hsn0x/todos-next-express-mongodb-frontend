import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchProfile, signOut } from "../redux/reducers/auth";
import { navbarNavigations } from "../constants/navbar";
import { handelNavbarNavigations } from "../lib/handelNavbarNavigations";
import Image from "next/image";

const NavbarScreen = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = useSelector(({ auth }) => auth);

    const isHandelNavbarNavigations = handelNavbarNavigations(
        navbarNavigations,
        auth
    );

    const handelSignout = async (e) => {
        e.preventDefault();
        await dispatch(signOut());
        router.push("/auth/login");
    };
    const handelProfile = async (e) => {
        e.preventDefault();
        router.push(`/members/username/${auth.profile?.username}`);
    };

    useEffect(() => {}, []);

    return (
        <Navbar fluid={true} rounded={true}>
            <div>
                <Navbar.Brand href="#">
                    <div className="flex gap-1">
                        <div>
                            <Image
                                src="/hsn_logo.png"
                                objectFit="cover"
                                alt="Todo Logo"
                                height={"80"}
                                width={"80"}
                            />
                        </div>
                        <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Todos
                        </div>
                    </div>
                </Navbar.Brand>
            </div>
            <div className="flex md:order-2 z-10">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                        <Avatar
                            alt="User settings"
                            // img={auth.profile?.avatars[0]?.url}
                            rounded={true}
                            size="md"
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {auth.profile?.firstName} {auth.profile?.lastName}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {auth.profile?.email}
                        </span>
                    </Dropdown.Header>
                    {}

                    {isHandelNavbarNavigations.map(
                        (nav, index) =>
                            nav.place == "right" && (
                                <div key={nav.id}>
                                    {nav.slug == "auth-logout" && (
                                        <Dropdown.Divider />
                                    )}

                                    <Link href={nav.href} passHref>
                                        <span>
                                            <Dropdown.Item
                                                icon={nav.icon}
                                                active={nav.active}
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                                onClick={(e) => [
                                                    nav.slug == "auth-logout" &&
                                                        handelSignout(e),
                                                    nav.slug == "profile" &&
                                                        handelProfile(e),
                                                ]}
                                            >
                                                {nav.label}
                                            </Dropdown.Item>
                                        </span>
                                    </Link>
                                </div>
                            )
                    )}
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <div className="flex gap-1">
                    <div className="flex gap-1">
                        {isHandelNavbarNavigations.map(
                            ({ label, href, place, id }) =>
                                place == "top" && (
                                    <div key={id}>
                                        <Button color={"gray"}>
                                            <Link key={id} href={href}>
                                                {label}
                                            </Link>
                                        </Button>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarScreen;
