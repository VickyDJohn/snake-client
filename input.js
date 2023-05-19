exports.setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//similar to using conn.write in 'client.js', use connection.write here to pass keyboard input
const handleUserInput = (key) => {
  if (key === 'w' || key === 'W') {
    if (connection)
      connection.write("Move: up\n");
  }
  if (key === 'a' || key === 'A') {
    if (connection)
      connection.write("Move: left\n");
  }
  if (key === 's' || key === 'S') {
    if (connection)
      connection.write("Move: down\n");
  }
  if (key === 'd' || key === 'D') {
    if (connection)
      connection.write("Move: right\n");
  }
  if (key === '\u0003') {
    console.log("Exiting...");
    process.exit();
  }
};

let connection;