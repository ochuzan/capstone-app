const express = require("express");
const users = express.Router();
const {
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
    getOneUserByUsername,
} = require("../queries/users.js");

// Controllers
const resourcesController = require("./resourcesController.js");
const favoritesController = require("./favoritesController.js");
users.use("/:usersId/resources", resourcesController);
users.use("/:usersId/favorites", favoritesController);

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

// Get user by username
users.get("/login/:username", async(req, res) => {
    const { username } = req.params;
    try{
        const oneUserByUsername = await getOneUserByUsername(username);
        if(oneUserByUsername.id){
            res.status(200).json(oneUserByUsername);
        } else {
            res.status(404).json("Error: Username not found");
        }
    } catch(err){
        return err;
    }
});

users.get("/:id", async(req, res) => {
    const { id } = req.params;
    try{
        const oneUser = await getOneUser(id);
        if(oneUser.id){
            res.status(200).json(oneUser);
        } else {
            res.status(404).json("Error: User ID not found");
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