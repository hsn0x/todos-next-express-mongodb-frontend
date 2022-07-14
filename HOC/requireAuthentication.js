import { useDispatch } from "react-redux";
import { axiosServer } from "../db/axios";
import { getTokenCookie } from "../lib/auth-cookie";
import { withSessionSsr as wss } from "../lib/withSession";

// export const requireAuthentication = (gssp) => {
//     return async (context) => {
//         const { req, res } = context;
//         const authToken = getTokenCookie(req);

//         return await gssp(context); // Continue on to call `getServerSideProps` logic
//     };
// };

export const requireAuthentication = (gssp) =>
    wss(async (context) => {
        const { req, res } = context;
        const authUser = req.session.user;

        if (!authUser) {
            return {
                redirect: {
                    destination: "/auth/login",
                    permanent: false,
                },
            };
        }

        return {
            props: {
                ...(await gssp(context)),
                authUser,
            },
        };
    });
