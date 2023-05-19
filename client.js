const net = require('net');
const { IP, PORT, } = require('./constants');

//using shorthand 'exports', connect to the server; name parameter allows us to input a name in the command line as argument
exports.connect = (name) => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding('utf8');

  //use console.log to display messages and conn.write to send messages, controls to the server
  const connected = conn.on("connect", () => {
    console.log("Connected!");
    conn.write(`Name: ${name}`);
  });

  const endMsg = conn.on("data", (message) => {
    console.log("Game ended: ", message);
  });

  return conn;
};