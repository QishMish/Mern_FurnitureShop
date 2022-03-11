const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { throwCustumError } = require("../errors/CustumError");
const logger = require('../config/Logger')

class AuthService {
  register = async (body) => {
    if (!body.email) {
      throwCustumError("You Must Provide Email", 400);
    }
    if (!body.password) {
      throwCustumError("You Must Provide Password", 400);
    }
    const { email, password } = body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      throwCustumError("User already exists", 400);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hashedPassword,
    });
    if (user) {
      logger.info(`New User ${user.email} Signed Up`)
      return {
        _id: user.id,
        email: user.email,
        token: generateAuthToken(user._id),
      };
    } else {
      throwCustumError("Invalid user data", 400);
    }
  };
  login = async (body) => {
    if (!body.email) {
      throwCustumError("You Must Provide Email", 400);
    }
    if (!body.password) {
      throwCustumError("You Must Provide Password", 400);
    }
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return {
        _id: user.id,
        email: user.email,
        token: generateAuthToken(user._id),
      };
    } else {
      throwCustumError("Invalid User credentials", 400);
    }
  };
}
const generateAuthToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};


module.exports = AuthService;
