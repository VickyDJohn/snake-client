const net = require('net');

exports.connect = () => {
  const conn = net.createConnection({
    host: '172.17.167.177',
    port: 50541,
  });

  conn.setEncoding('utf8');

  const connected = conn.on("connect", () => {
    console.log("Connected!");
    console.log("Name: VDJ");
  });

  const endMsg = conn.on("data", (message) => {
    console.log("Game ended: ", message);
  });

  return conn;
};