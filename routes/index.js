const router = require('express').Router();
const controller = require('../controller');
const middleware = require("../middleware");

router.get('/', controller.renderMainPage);
router.get('/login', controller.renderLogin);
router.get('/logout', middleware.isAuthorized, controller.logout);
router.get('/register', controller.renderRegister);
router.get("/profile", middleware.isAuthorized, controller.renderuploadPic)
router.post('/login', controller.requestLogin);
router.post('/register', controller.requestRegister);
router.post("/profile", middleware.isAuthorized, controller.uploadPic)
router.post("/creategame", middleware.isAuthorized, controller.createGame)
router.post("/joingame/:id", middleware.isAuthorized, controller.joinGame);


module.exports = router;    