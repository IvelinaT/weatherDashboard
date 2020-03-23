class NotFoundError extends Error {
  constructor (...params) {
    // Pass remaining arguments
    super(...params)

    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError)
    }
    this.statusCode = 404
  }
}

module.exports = {
  NotFoundError
}
