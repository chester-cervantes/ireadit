import jwt, { decode } from 'jsonwebtoken';

// wants to like post
// click like button => auth middleware (next) => like controller

const auth = async (req, res, next) => {
    try {
        const token = res.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        // if length > 500, then it is google oauth

        let decodedData;

        if (token && isCustomAuth) {
            // gives username and id of token
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            // sub is a specific google id
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;