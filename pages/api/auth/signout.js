// pages/api/signout.js

import axios from "axios";
import { axiosServer } from "../../../db/axios";
import { withSessionRoute } from "../../../lib/withSession";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res, session) {
    await req.session.destroy();
    return res.send({ ok: true, message: "Logged out" });
}
