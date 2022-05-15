const express = require("express");
const users = express.Router();
const {
    createUser,
    getOneUser,
} = require("../queries/users.js");

users.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdUser = await createUser(body);
        if(createdUser.id){
            res.status(200).json(createdUser);
        } else {
            res.status(422).json("Error: User creation error");
        }
    } catch(err){
        console.log(err);
    }
});

users.get("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const oneUser = await getOneUser(id);
        if(oneUser.id){
            res.status(200).json(oneUser);
        } else {
            res.status(404).json("Error: User not found");
        }
    } catch(err){
        return err;
    }
});

module.exports = users;