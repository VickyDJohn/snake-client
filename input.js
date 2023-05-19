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
      connection.write("Move: up");
  } else if (key === 'a' || key === 'A') {
      connection.write("Move: left");
  } else if (key === 's' || key === 'S') {
      connection.write("Move: down");
  } else if (key === 'd' || key === 'D') {
      connection.write("Move: right");
  } else if (key === '1') {
    connection.write("Say: Too slow, slowpoke!");
  } else if (key === '2') {
    connection.write("Say: That was unfortunate :/");
  } else if (key === '3') {
    connection.write("Say: Well, well, well. Look who it is.");
  } else if (key === '4') {
    connection.write("Say: PogChamp!");
  }else if (key === '\u0003') {
    console.log("Exiting...");
    process.exit();
  }
};

let connection;