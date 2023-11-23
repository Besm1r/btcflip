const db = require("../database/index");
const bcrypt = require("bcrypt");

const login = async (req) => {
    let username = req.body.username;
    let password = req.body.password;
    let res = await db.loginAccount(username);
    if (res) {
        let result = await bcrypt.compare(password, res[0].password)
        if (!result) return "Wrong password!";  
        else { 
            req.session.username = req.body.username;
            return true;
        }   
    } else return "Wrong Email or Username!";
}

const register = async (req) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let hasAcc = await db.getAccount(email, username);    
    if (hasAcc) return "Email or Username already in use!";
    const hash = await bcrypt.hash(password, 10);
    await db.createAccount(email, username, hash);
    req.session.username = req.body.username
    return true;
}


module.exports = { login, register };