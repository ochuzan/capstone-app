const favorites = require("../controllers/favoritesController.js");
const users = require("../controllers/usersController.js");
const db = require("../db/dbConfig.js");


// Get all favorites - Example: http://localhost:3333/users/1/favorites
const getAllFavoritesForUser = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT * FROM favorites 
            WHERE users_id=$1`,
            users_id
        );
        return allFavorites;
    } catch (error) {
        return error;
    }
};

// Get a favorite by its ID
// Get one favorite - Example: http://localhost:3333/users/1/favorites/8
const getOneUsersFavoriteByFavoriteId = async (id) => {
    try {
        const oneFavorite = await db.one(
            "SELECT * FROM favorites WHERE id=$1",
            id
        );
        return oneFavorite;
    } catch (error) {
        return error;
    }
};



// Creating a favorite
// POST request
// http://localhost:3333/users/1/favorites/
// {
//     resource_id
//     user_id
// }
// const createNewFavorite = async (favorite) => {
//     try {
//         const newFavorite = await db.one(
//             `INSERT INTO favorites (favorited_date, resources_id, users_id) VALUES($1, $2, $3) RETURNING *`,
//             [
//                 favorite.favorited_date,
//                 favorite.resources_id,
//                 favorite.users_id,
//             ]
//         );
//         return newFavorite;
//     } catch (error) {
//         return error;
//     }
// };



// Deleting a favorite by its ID - Example: http://localhost:3333/users/1/favorites/8
// delete by user_id and the resources_id - find the favorite and then delete it
// const deleteFavorite = async (id) => {
//     try {
//         const deletedFavorite = await db.one(
//             `DELETE FROM favorites 
//             WHERE id=${id} 
//             RETURNING *`,
//             id
//         );
//         return deletedFavorite;
//     } catch (error) {
//         return error;
//     }
// };

module.exports={
    getAllFavoritesForUser,
    getOneUsersFavoriteByFavoriteId,
    // createNewFavorite,
    // deleteFavorite
}
