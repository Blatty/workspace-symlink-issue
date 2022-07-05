const helloWorld = require('../build/server.js');

module.exports = async function serve(req, res) {
  const message = helloWorld();
  return res.status(200).json({ message });
};
