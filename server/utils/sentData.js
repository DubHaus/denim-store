const sentData = (data, res, status = '') => {
  res.setHeader("Content-Type", "application/json");
  if (status) res.status(status)
  res.json(data);
}

module.exports = sentData;