const express = require("express");
const favorites = express.Router({mergeParams: true});
const { 
    getFavoritesByUserId,

    getAllFavoritesAndAllUsers,
    getAllFavoritesForResources,
    getFavoritesAndUsername,
    getFavoritesResourcesOfVideo
    } = require("../queries/favorites.js");


// For query `getFavoritesByUserId` http://localhost:3333/favorites
favorites.get("/", async (req, res)=>{
    const { usersId } = req.params;
    try {
        const allFavorites = await getFavoritesByUserId(usersId);
        if(allFavorites[0]){
            res.status(200).json(allFavorites);
        }else{
            res.status(404).json({ error: "No favorites found" })
        }
    } catch (error){
        console.log(error);
    }
});


module.exports = favorites;