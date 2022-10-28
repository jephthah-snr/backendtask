// Require the framework and instantiate it
require('dotenv').config();
const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/disbursment'), {
  prefix: '/api/v1',
});
// fastify.register(require('./routes/home'));

// Run the server
const start = async () => {
  try {
    await fastify.listen(
      process.env.PORT || 3000,
      process.env.HOST || '::',
      (err) => {
        if (err) throw err;
        console.log(`server listening on ${fastify.server.address().port}`);
      }
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
