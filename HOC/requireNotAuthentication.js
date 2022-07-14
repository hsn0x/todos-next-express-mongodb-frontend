import { useDispatch } from "react-redux";
import { axiosServer } from "../db/axios";
import { getTokenCookie } from "../lib/auth-cookie";
import { withSessionSsr as wss } from "../lib/withSession";

export const requireNotAuthentication = (gssp) =>
    wss(async (context) => {
        const { req, res } = context;
        const authUser = req.session.user;

        if (authUser) {
            return {
                redirect: {
                    destination: "/",
                    permanent: false,
                },
            };
        }

        return {
            props: {
                ...(await gssp(context)),
                authUser: authUser || null,
            },
        };
    });
