const helloWorld = require('@acme/runtime-dependency');

module.exports = async function serve(req, res) {
  const message = helloWorld();
  return res.status(200).json({ message });
};

console.log(helloWorld());