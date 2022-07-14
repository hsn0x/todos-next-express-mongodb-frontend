import { useDispatch } from "react-redux";
import { axiosServer } from "../db/axios";
import { getTokenCookie } from "../lib/auth-cookie";
import { withSessionSsr as wss } from "../lib/withSession";

export const notRequireAuthentication = (gssp) =>
    wss(async (context) => {
        const { req, res } = context;
        const authUser = req.session.user;

        return {
            props: {
                ...(await gssp(context)),
                authUser: authUser || null,
            },
        };
    });
