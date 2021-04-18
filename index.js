// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true,
});

// Declare a route
fastify.get("/", function (request, reply) {
  const text = request.query.text;
  reply.send({ hello: `prefix_${text}` });
});
// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(address);
  // fastify.log.info(`server listening on ${address}`);
});
