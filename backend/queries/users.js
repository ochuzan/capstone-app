const db = require("../db/dbConfig.js");

const getOneUser = async(id) => {
    try{
        const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
        return oneUser;
    } catch(err){
        return err;
    }
};

module.exports = {
    getOneUser,
}