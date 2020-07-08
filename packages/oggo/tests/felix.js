const felix = require('../dist/api/felix').default;
const { URL } = require('url');

module.exports.default = (req, res) => {
  req.query = parseQuery(req);

  felix(req, res);
};

function parseQuery(req) {
  const params = new URL(req.url, 'https://n').searchParams;
  const query = {};
  for (const [key, value] of params) {
    query[key] = value;
  }

  return query;
}
