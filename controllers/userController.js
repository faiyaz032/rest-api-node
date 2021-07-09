//internal imports
const { hash, compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const User = require('../models/User');

async function signupController(req, res, next) {
   try {
      const hashedPassword = await hash(req.body.password, 10);
      const newUser = new User({
         name: req.body.name,
         username: req.body.username,
         password: hashedPassword,
      });
      const savedUser = await newUser.save();
      res.status(200).json({ success: 'User Created Successfully', user: savedUser });
   } catch (error) {
      next(error.message);
   }
}
async function loginController(req, res, next) {
   try {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
         const ifValidPassword = compare(req.body.password, user.password);
         if (ifValidPassword) {
            const token = sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, {
               expiresIn: '1h',
            });
            res.status(200).json({ access_token: token, success: 'Login Successfull' });
         } else {
            next('Authentication error');
         }
      } else {
         next('Authentication error');
      }
   } catch (error) {
      next(error.message);
   }
}

module.exports = { signupController, loginController };
