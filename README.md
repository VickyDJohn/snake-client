# Snake Client Project

Snake Client is a multiplayer version of the classic snake game. It is a video game concept where players maneuver a dot and grow it by eating pieces of food. As the dot moves and eats, it grows, presenting a challenge to avoid colliding with the walls or its own body. The goal is to grow the dot as big as possible without bumping into obstacles, aiming for the highest score.

![Snake Game](./screenshot.png)

## Features

- Multiplayer functionality
- Customizable player name
- Simple terminal-based interface

## Getting Started

Before you can run this client, you will need to be running the server side which you can download and install from the [Snek Server](https://github.com/lighthouse-labs/snek-multiplayer) repository.

## Dependencies

- Node.js
- net module (built-in)


### Usage

1. Clone this repository to your local machine.
2. Open up a terminal window and navigate to the repository's root directory.
3. Run the development snake client using the following command (Replace "XYZ" with your choice of a name consisting of 3 alphabets):
   ```bash
   node play.js "XYZ"
4. Make sure the snake server is running by following the instructions in the [Snek Server](https://github.com/lighthouse-labs/snek-multiplayer) repository.
5. Play the snake game in the terminal and enjoy!


## How to Play

- Use the "WASD" keys to control the movement of the snake.
- The goal is to eat the food dots to grow the snake without hitting the walls or the snake's own body.
- As the snake grows, it becomes more challenging to navigate.
- The game ends when the snake collides with a wall or itself.
- Use the special keys "1", "2", "3", "4" to send pre-defined messages to other players.

## Credits

This project is developed by [Vicky John](https://github.com/VickyDJohn).