const { msgMappings } = require('./constants');

exports.setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//use conditional to check if input matches object element and output if true
const handleUserInput = (key) => {
  if (key in msgMappings) {
    const message = msgMappings[key];
    connection.write(message);
  } else if (key === '\u0003') {
    console.log("Exiting...");
    process.exit();
  }
};

let connection;