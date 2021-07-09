const { verify } = require('jsonwebtoken');

async function loginCheck(req, res, next) {
   const [, token] = req.headers.authorization.split(' ');
   try {
      const decoded = verify(token, process.env.JWT_SECRET);
      const { userId, username } = decoded;
      req.username = username;
      req.userId = userId;
      next();
   } catch (err) {
      next('Authentication failure');
   }
}
module.exports = loginCheck;
