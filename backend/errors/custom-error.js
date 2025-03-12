// This class takes in a message to use as the error message and assigns a status code property to the status code
class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Function that takes in message and status code as arguments and makes a new api Error using the class above with those arguments
const createCustomApiError = (message, statusCode) => {
  return new CustomApiError(message, statusCode);
}

module.exports = {createCustomApiError, CustomApiError};