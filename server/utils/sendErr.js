const sendErrToClient = (res, status, message) => {
  res.status(status).end(message)
}

module.exports = sendErrToClient;