const sentData = (data, res, status = '') => {
  res.set("Content-Type", "application/json");
  if (status) res.status(status)
  res.json(data);
}

module.exports = sentData;