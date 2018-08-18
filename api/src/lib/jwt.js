import config from "../config/config";
import jwt from "jsonwebtoken";
import crypto from "crypto";

class JwtHelper {
    constructor() {}

    signIn(username, scope) {
        return jwt.sign({
            username,
            scope
        }, config.application.secretKey, {
            algorithm: "HS256",
            expiresIn: "1h"
        });
    }

    checkPassword(password, salt, input) {
        const hashedInput = this.hash(input, salt);

        return hashedInput === password;
    }

    hash(input, salt) {
        const hash = crypto.createHmac("sha256", salt);
        hash.update(`${input}${salt}`);

        return hash.digest("hex");
    }

    generateSalt() {
        const buf = crypto.randomBytes(16);

        return buf.toString("base64");
    }
}

export default new JwtHelper();