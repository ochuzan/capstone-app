const express = require("express");
const users = express.Router();
const {
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
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

users.put("/:id", async(req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedUser = await updateUser(id, body);
    if(updatedUser.id){
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json("Error: Unable to update User");
    }
});

users.delete("/:id", async(req, res) => {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if(deletedUser.id){
        res.status(200).json(deletedUser);
    } else {
        res.status(404).json("Error: User not found");
    }
});

module.exports = users;