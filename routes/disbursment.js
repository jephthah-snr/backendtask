const Base = require("../controllers.js/basecontroller");
const validator = require("../../validator.js/customValidator"


async function routes(fastify, options) {
  fastify.route({
    url: '/',
    method: 'GET',
    preHandler: [validator()],
    handler: Base.main,
  });
}
module.exports = routes;
