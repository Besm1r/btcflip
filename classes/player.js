class Player {
    constructor(username, position, betamount) {
        this.username = username;
        this.position = position; /* head or tails */
        this.betamount = betamount;
    }
}

module.exports = Player;