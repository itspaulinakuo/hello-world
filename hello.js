//create a new server
var HelloWorld = require('hapi');
var server = new HelloWorld.Server();
server.connection({
  port:3000
});

//add a new route, add object, "JSON CONFIGURATION"
server.route({
  method: 'GET',
  path: '/hello',
  handler: function(request, reply) {
    reply('Hello World!');
  }
});

//add a new route
server.route({
  method: ['GET', 'POST'],
  path: '/firstandlast',
  handler: function(request, reply) {
    const info = (request.payload) ? request.payload : request.query;
    const { first, last } = info;
    var person = {
      firstName: first,
      lastName: last
    }

    reply(person);
  }
});

//start server
server.start(function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Hey! This is running.');
});
