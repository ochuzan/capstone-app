const express = require("express");
const favorites = express.Router({mergeParams: true});
const { 
    getAllFavoritesForUser,
    getOneUsersFavoriteByFavoriteId,
    createNewFavorite,
    deleteFavorite
} = require("../queries/favorites.js");

// Get all favorites for a user - Example: http://localhost:3333/users/1/favorites 
favorites.get("/", async (req, res)=>{
    const { usersId } = req.params;
    try {
        const allFavorites = await getAllFavoritesForUser(usersId);
        if(allFavorites[0]){
            res.status(200).json(allFavorites);
        }else{
            res.status(404).json({ error: "No favorites found" })
        }
    } catch (error){
        console.log(error);
    }
})

// Get one favorite by favorites ID - Example: http://localhost:3333/users/1/favorites/8
favorites.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const getFavorite = await getOneUsersFavoriteByFavoriteId(id);
        if (getFavorite.id){
            res.status(200).json(getFavorite);
        } else {
            res.status(500).json({ error: "favorite not found!" });
        }
    } catch (error){
        console.log(error);
    }
})


// Creating a favorite - http://localhost:3333/users/1/favorites/
favorites.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdResource = await createNewFavorite(body);
        if(createdResource.id){
            console.log(createdResource)
            res.status(200).json(createdResource);
        } else {
            res.status(422).json({ error: "Favorites creation error" });
        }
    } catch(err){
        console.log(err);
    }
});

// Deleting a favorite by its ID - Example: http://localhost:3333/users/1/favorites/8
favorites.delete("/:id", async (req, res) => {
const { id } = req.params;

const deletedFavorite = await deleteFavorite(id);
if (deletedFavorite.id) {
    res.status(200).json(deletedFavorite);
} else {
    res.status(404).json({ error: "Favorite not found" });
}
});

module.exports = favorites;