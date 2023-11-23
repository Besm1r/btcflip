const isAuthorized = function (req, res, next) {
    if (req.session.username != null) return next();
    else res.redirect("login");
}

module.exports = { isAuthorized };