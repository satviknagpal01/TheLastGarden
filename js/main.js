import Game from "./game";

const canvasContainer = document.getElementById('game-container');
const game = new Game(canvasContainer);

game.start();