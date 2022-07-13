import { useRouter } from "next/router";
import { FaArrowRight, FaTable } from "react-icons/fa";
import { v4 as uuid } from "uuid";

export const sidebarNavigationsGuest = [
    {
        id: uuid(),
        icon: FaArrowRight,
        label: "Sign In",
        slug: "auth-login",
        href: "/auth/login",
        hrefMethod: () => router.push("/auth/login"),
        active: false,
        show: true,
        children: [],
    },
    {
        id: uuid(),
        icon: FaTable,
        label: "Sign Up",
        slug: "auth-register",
        href: "/auth/register",
        hrefMethod: () => router.push("/auth/register"),
        active: false,
        show: true,
        children: [],
        method: null,
    },
];
