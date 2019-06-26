const jwt = require("jsonwebtoken");

const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");
const publicKey = process.env.PUBLIC_KEY.replace(/\\n/g, "\n");

const options = {
  issuer: "Tripsy",
  expiresIn: "24h",
  algorithm: "RS256"
};

const auth = {
  generateToken: (ID) => {
    const payload = {
      id: ID
    };
    const token = jwt.sign(payload, privateKey, options);
    return token;
  },
  verifyToken: cookies => {
    try {
      const token = cookies.authToken;
      return jwt.verify(token, publicKey, options);
    } catch (e) {
      return false;
    }
  }
};

module.exports = auth;
