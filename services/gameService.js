const Player = require("../classes/player");
const Game = require("../classes/game");

activeGames = [];
 
const createGame = async (req, res) => {
    let gameid = Math.max(...activeGames.map(o => o.y), 1);
    let player1 = new Player(req.session.username, 0, 1000);
    let game = new Game(gameid, player1);
    req.session.game = game;
    activeGames.push(game);
}

const joinGame = async (req, res) => {
    console.log(req.params.id)
}
module.exports = {createGame, joinGame, activeGames };

