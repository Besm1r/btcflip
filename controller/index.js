const authService = require("../services/authService");
const uploadService = require("../services/uploadService");
const gameService = require("../services/gameService");

const renderMainPage = (req, res) => {
    res.render('main', {
        username: req.session?.username,
        games: gameService.activeGames
    });
}

const renderLogin = (req, res) => {
    res.render('main', {
        login: true
    });
}

const logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");
}

const renderRegister = (req, res) => {
    res.render('main', {
        register: true
    });
}

const renderuploadPic = (req, res) => {
    res.render('main', {
        upload: true
    });
}

const requestLogin = async (req, res) => {
    let result = await authService.login(req);
    if (result == true) {
        res.redirect("/");
    } else {
        res.render('main', {
            login: true, 
            error: result
        });
    }
}

const requestRegister = async (req, res) => {
    let result = await authService.register(req);
    if (result == true) {
        res.redirect("/profile");
    } else {
        res.render('main', {
            register: true, 
            error: result
        });
    }
}

const uploadPic = async (req, res) => {
    let result = await uploadService.uploadpic(req, res);
    if (result == true) res.redirect("/");
    else res.render('main', {
        upload: true, 
        error: result
    })
}

const createGame = async (req, res) => {
    if (!req.session.game) gameService.createGame(req, res);
} 

module.exports = { renderMainPage, renderLogin, logout, renderRegister, renderuploadPic, requestLogin, requestRegister, uploadPic, createGame }