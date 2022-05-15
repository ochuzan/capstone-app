const db = require("../db/dbConfig.js");

const createUser = async(user) => {
    try{
        const newUser = await db.one(
            "INSERT INTO users (username, password, contact_email, active) VALUES($1, $2, $3, $4) RETURNING *",
            [
                user.username,
                user.password,
                user.contact_email,
                user.active
            ]
        );
        return newUser;
    } catch(err){
        return err;
    };
};

const getOneUser = async(id) => {
    try{
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
        return oneUser;
    } catch(err){
        return err;
    };
};

module.exports = {
    getOneUser,
    createUser,
    
}