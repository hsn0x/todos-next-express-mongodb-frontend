// pages/api/user.js

import { withSessionRoute } from "../../../lib/withSession";

export default withSessionRoute(userRoute);

async function userRoute(req, res) {
    const authUser = req.session.user;
    if (!authUser) {
        res.status(401).send({ ok: false, message: "Not logged in" });
        return;
    }
    res.send({ ok: true, user: authUser });
}
