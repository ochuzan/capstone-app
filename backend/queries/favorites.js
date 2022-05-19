const favorites = require("../controllers/favoritesController.js");
const users = require("../controllers/usersController.js");
const db = require("../db/dbConfig.js");

// Examples: http://localhost:3333/users/1/favorites , http://localhost:3333/users/3/favorites
// `users_id` is dynamic
// Only shows the resource if `resources.is_favorite` is "true"
// Renaming the "id" for favorites and resources to indicate which table
const getFavoritesByUserId = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT favorites.id AS favorites_table_id,
              favorites.favorited_date,
              resources.id AS resources_table_id,
              resources.name,
              resources.description,
              resources.type,
              resources.photo,
              resources.url,
              resources.date,
              resources.is_favorite,
              resources.users_id
            FROM favorites
            JOIN resources
              ON favorites.resources_id = 
            resources.id
            WHERE favorites.users_id=${users_id}
              AND resources.is_favorite='true';
            `,
        );
        return allFavorites;
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
const createNewFavorite = async (favorite) => {
    try {
        const newFavorite = await db.one(
            `INSERT INTO favorites (favorited_date, resources_id, users_id) VALUES($1, $2, $3) RETURNING *`,
            [
                favorite.favorited_date,
                favorite.resources_id,
                favorite.users_id,
            ]
        );
        return newFavorite;
    } catch (error) {
        return error;
    }
};

// Get a favorite by its ID
// Get one favorite - Example: http://localhost:3333/users/1/favorites/8
const getOneFavorite = async (id) => {
    try {
        const oneFavorite = await db.one(
            `SELECT * FROM favorites 
            WHERE id=${id}`,
            id
        );
        return oneFavorite;
    } catch (error) {
        return error;
    }
};

// Deleting a favorite by its ID - Example: http://localhost:3333/users/1/favorites/8
// delete by user_id and the resources_id - find the favorite and then delete it
const deleteFavorite = async (id) => {
    try {
        const deletedFavorite = await db.one(
            `DELETE FROM favorites 
            WHERE id=${id} 
            RETURNING *`,
            id
        );
        return deletedFavorite;
    } catch (error) {
        return error;
    }
};

module.exports={
    getFavoritesByUserId,
    createNewFavorite,
    getOneFavorite,
    deleteFavorite
}
