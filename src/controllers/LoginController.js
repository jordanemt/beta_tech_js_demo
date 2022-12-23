import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const ping = (req, res) => {
    res.send('pong');
}

const login = async (req, res) => {
    //Validate credentials
    //Mockup user
    const user = {
        id: 1,
        user: 'admin',
        password: 'admin'
    };

    jwt.sign({ user }, SECRET_KEY, (err, token) => {
        res.json({
            token,
        });
    });
}

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader === 'undefined') {
        res.sendStatus(403);
        return;
    }

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, SECRET_KEY, (err, authData) => {
        if (err) res.sendStatus(403);
        else next();
    });
}

export default {
    ping,
    login,
    verifyToken,
};
