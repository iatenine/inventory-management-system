const jwt = require('jsonwebtoken')

const secret = "'.}:=`'<*I]^>B6-cPOK!'qxjan&@'~";
const expiration = '2h';

module.exports = {
    authMiddleware: function ({req}) {
        let token = req.body.token || req.query.token || req.headers.authorization;
    },



  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};