const net = require('net');

exports.connect = () => {
  const conn = net.createConnection({
    host: '172.23.86.137',
    port: 50541,
  });

  conn.setEncoding('utf8');

  const connected = conn.on("connect", () => {
    console.log("Connected!");
  });

  const endMsg = conn.on("data", (message) => {
    console.log("Game ended: ", message);
  });

  return conn;
};