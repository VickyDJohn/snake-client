const { connect } = require('./client');
const { setupInput } = require('./input');
//get name from command line argument
const name = process.argv[2];

console.log("Connecting...");
//update variable to be used with connect function and use name argument
const connection = connect(name);

//pass variable to setupInput so that keyboard inputs can be sent to the server
setupInput(connection);