const JWT = require("jsonwebtoken");

exports.requiredSignIn = async (req, res, next) => {
    try {
        const token = req.cookies.token
        //console.log(token)
        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Authorization Required"
            })
        }
        const decode = JWT.verify(
            token,
            process.env.JWT_SECRET
        );
        //console.log(decode);
        next();
    } catch (err) {
        console.log(err)
    }
}