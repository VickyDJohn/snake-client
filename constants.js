const IP = '172.17.167.177';
const PORT = 50541;
//use object to define and store messages that need to be sent to the server
const msgMappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  '1': "Say: Too slow, slowpoke!",
  '2': "Say: That was unfortunate :/",
  '3': "Say: Well, well, well.",
  '4': "Say: PogChamp!",
};

module.exports = {
  IP,
  PORT,
  msgMappings
};