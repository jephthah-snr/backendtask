const Base = require("../controllers.js/basecontroller");

async function routes(fastify, options) {
  fastify.route({
    url: '/',
    method: 'GET',
    preHandler: [],
    handler: Base.main,
  });
}
module.exports = routes;
