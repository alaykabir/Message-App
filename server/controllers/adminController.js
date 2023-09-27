const User = require("../model/adminModel");
const bcrypt = require("bcrypt");

module.exports.signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        msg: "Incorrect Username or Password",
        status: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        msg: "Incorrect Username or Password",
        status: false,
      });
    }
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};

module.exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.json({
        msg: "Email already used",
        status: false,
      });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: encryptedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};
