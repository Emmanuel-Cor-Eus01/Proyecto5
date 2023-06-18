const { validToken } = require("../utilities/auth.utilities");

const chkToken = (req, res, next) => {
    try {
        console.log(req.headers);
        const headers = req.headers;
        if (headers.authorization && headers.authorization.split(' ')[0] === 'Bearer') {
            const token = headers.authorization.split(' ')[1];
            if (validToken(token)) {
                next();
            }
            } else {
                res.status(401).json({
                    msg: "No se mando el authorization token"
                });
        }
    } catch (error) {
        res.status(401).json({
            msg: error.message
        });
    }
}
module.exports = chkToken;