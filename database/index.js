const mysql = require('mysql2');

const db = mysql.createConnection({host:'localhost', user: 'root', database: 'btcflip'});


const getAccount = async (email, username) => {
    const [res, rows] = await db.promise().query('SELECT * FROM accounts WHERE email = ? OR username = ?', [email, username]);
    if (res && res.length) return res[0];
    else return null;
}

const createAccount = async (email, username, password) => {
    try {
        const [res, rows] = await db.promise().query('INSERT INTO accounts (email, username, password) VALUES (?, ?, ?)', [email, username, password]);     
    } catch (error) {
        console.log(error);
    }
}

const loginAccount = async (username) => {
    const [res, rows] = await db.promise().query('SELECT * FROM accounts WHERE username = ?', [username]);
    if (res && res.length) return res;
    else return false;
}

module.exports = { getAccount, createAccount, loginAccount }  