const net = require('net');

//using shorthand 'exports', connect to the server
exports.connect = () => {
  const conn = net.createConnection({
    host: '172.17.167.177',
    port: 50541,
  });

  conn.setEncoding('utf8');

  //use console.log to display messages and conn.write to send messages, controls to the server
  const connected = conn.on("connect", () => {
    console.log("Connected!");
    conn.write("Name: VDJ");
    // setTimeout(() => {
    // //   conn.write("Move: up");
    // // }, 1000);
    // // setTimeout(() => {
    // //   conn.write("Move: left");
    // // }, 2000);
    // // setTimeout(() => {
    // //   conn.write("Move: down");
    // // }, 3000);
    // // setTimeout(() => {
    // //   conn.write("Move: right");
    // // }, 4000);
  });

  const endMsg = conn.on("data", (message) => {
    console.log("Game ended: ", message);
  });

  return conn;
};