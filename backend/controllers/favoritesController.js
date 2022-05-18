const express = require("express");
const favorites = express.Router({mergeParams: true});
const { 
    getAllFavoritesForUsers,
    getAllFavoritesForResources,
    getFavoritesAndUsername,
    getFavoritesResourcesOfVideo
    } = require("../queries/favorites.js");


// For query `getAllFavoritesForUsers`
favorites.get("/", async (req, res)=>{
    const { usersId } = req.params;
    try {
        const allFavorites = await getAllFavorites(usersId);
        if(allFavorites[0]){
            res.status(200).json(allFavorites);
        }else{
            res.status(404).json({ error: "No favorites found" })
        }
    } catch (error){
        console.log(error);
    }
});

// For query `getAllFavoritesForResources`
// favorites.get("/", async (req, res)=>{
//     const { usersId } = req.params;
//     try {
//         const favoritesAndUsername = await getFavoritesAndUsername(usersId);
//         if(favoritesAndUsername[0]){
//             res.status(200).json(favoritesAndUsername);
//         }else{
//             res.status(404).json({ error: "No favorites and username found" })
//         }
//     } catch (error){
//         console.log(error);
//     }
// });


// For query `getFavoritesAndUsername`
// For query `getFavoritesResourcesOfVideo`

module.exports = favorites;