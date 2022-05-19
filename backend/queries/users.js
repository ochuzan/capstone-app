const db = require("../db/dbConfig.js");

const createUser = async(user) => {
    try{
        const newUser = await db.one(
            "INSERT INTO users (firstname, lastname, username, password, contact_email, active) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                user.firstname,
                user.lastname,
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

const updateUser = async(id, user) => {
    try{
        const updatedUser = await db.one(
            "UPDATE users SET firstname=$1, lastname=$2, username=$3, password=$4, contact_email=$5, active=$6 WHERE id=$7 RETURNING *",
            [
                user.firstname,
                user.lastname,
                user.username,
                user.password,
                user.contact_email,
                user.active,
                id
            ]
        );
        return updatedUser;
    } catch(err){
        return err;
    };
};

const deleteUser = async(id) => {
    try{
        const deletedUser = await db.one(
            "DELETE FROM users WHERE id=$1 RETURNING *",
            id
        );
        return deletedUser;
    } catch(err){
        return err;
    }
};

module.exports = {
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};