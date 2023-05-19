const net = require('net');
const { IP, PORT, } = require('./constants');

//using shorthand 'exports', connect to the server, name paramter allows us to input a name in the command line
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
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2000);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 3000);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 4000);
  });

  const endMsg = conn.on("data", (message) => {
    console.log("Game ended: ", message);
  });

  return conn;
};