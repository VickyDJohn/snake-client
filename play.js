const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting...");
//update variable to be used with connect function
const connection = connect();

//pass variable to setupInput so that keyboard inputs can be sent to the server
setupInput(connection);