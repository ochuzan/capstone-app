// get all users (not using, but can't get a list for the frontend to be able to .map over them)
const db = require("../db/dbConfig.js");

const getAllUsers = async() => {
    try {
        const allUsers = await db.any("SELECT * FROM users");
        return allUsers;
    } catch (error) {
        return error;
    }
}

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

const getOneUserByUsername = async(username) => {
    try{
        const oneUserByUsername = await db.one("SELECT * FROM users WHERE username=$1", username);
        return oneUserByUsername;
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
    getAllUsers,
    getOneUser,
    getOneUserByUsername,
    createUser,
    updateUser,
    deleteUser
};