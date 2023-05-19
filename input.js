exports.setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//use object to define and store messages that need to be sent to the server
const msgMappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  '1': "Say: Too slow, slowpoke!",
  '2': "Say: That was unfortunate :/",
  '3': "Say: Well, well, well. Look who it is.",
  '4': "Say: PogChamp!",
};

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