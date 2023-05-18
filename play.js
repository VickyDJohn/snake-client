const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '172.23.86.137',
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log("Connected!");
  });

  conn.on("data", (message) => {
    console.log("Game ended: ", message);
  });

  return conn;
};

console.log('Connecting ...');
connect();