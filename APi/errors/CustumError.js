const logger = require("../config/Logger");

class CustumError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
const throwCustumError = (message, statusCode) => {
  logger.error({ message, statusCode, date: new Date(Date.now()).toString() });
  throw new CustumError(message, statusCode);
};

module.exports = {
  CustumError,
  throwCustumError,
};
