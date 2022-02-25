const asyncHandler = require("express-async-handler");
const AuthService = require("../services/authService");

const AuthServiceInstance = new AuthService();

exports.register = asyncHandler(async (req, res, next) => {
  const user = await AuthServiceInstance.register(req.body);
  res.status(201).json(user);
});
exports.login = asyncHandler(async (req, res) => {
  const user = await AuthServiceInstance.login(req.body);
  res.status(200).json(user);
});
