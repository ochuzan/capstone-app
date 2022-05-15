const express = require("express");
const users = express.Router();
const {
    getOneUser,
} = require("../queries/users.js");

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