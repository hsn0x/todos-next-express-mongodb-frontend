import { FaHome } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { sidebarNavigationsAuth } from "./sidebarNavigationsAuth";
import { sidebarNavigationsGuest } from "./sidebarNavigationsGuest";

export const sidebarNavigations = [
    {
        id: uuid(),
        icon: FaHome,
        label: "Home",
        slug: "",
        href: "/",
        hrefMethod: () => router.push("/"),
        active: true,
        show: true,
        children: [],
        method: null,
    },
    ...sidebarNavigationsAuth,
    ...sidebarNavigationsGuest,
    ,
];
