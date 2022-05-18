const favorites = require("../controllers/favoritesController.js");
const users = require("../controllers/usersController.js");
const db = require("../db/dbConfig.js");

// http://localhost:3333/users/1/favorites
// http://localhost:3333/users/3/favorites
// users_id is dynamic
// Only shows the resource if `resources.is_favorite` is "true"
// Renaming the "id" for favorites and resources to indicate which table
const getFavoritesByUserId = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT favorites.id AS favorites_table_id,
              favorites.favorited_date,
              resources.id AS resources_table_id,
              resources.subject,
              resources.description,
              resources.type,
              resources.url,
              resources.articles_id,
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
// http://localhost:3333/favorites
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

// Deleting a favorite
// delete by user_id and the resources_id - find the favorite and then delete it
const deleteFavorite = async (id) => {
    try {
        const deletedFavorite = await db.one(
            "DELETE FROM favorites WHERE id=$1 RETURNING *",
            id
        );
        return deletedFavorite;
    } catch (error) {
        return error;
    }
};


///////////////////////////////////////////////////////////////////////////
// get all favorites and all users
// const getAllFavoritesAndAllUsers = async (users_id) => {
//     try {
//         const allFavorites = await db.any(
//             `SELECT * 
//             FROM favorites 
//             JOIN users 
//               ON favorites.users_id 
//             = users.id;
//             `,
//             users_id
//         );
//         return allFavorites;
//     } catch (error) {
//         return error;
//     }
// };

/* 
    ^^^
    `getAllFavoritesForUsers`
    Combines `Favorites` table with `Users` table.
    
    Selecting all columns from `favorites` table.
    Joining to combine information from`favorites` with the `users` table.
    On the favorites table, want to match the `favorites.user_id` column with the `user` table's `id` column.

 id |  favorited_date  | resources_id | users_id | id |   username    |   password    |     contact_email      | active 
----+------------------+--------------+----------+----+---------------+---------------+------------------------+--------
  1 | 10/22/2017 10:00 |            1 |        1 |  1 | Christina_234 | 12345         | 123@gmail.org          | t
  2 | 09/24/2019 10:15 |            2 |        2 |  2 | Oliver_123    | mypassword123 | HTMLStudy@meetup.com   | t
  3 | 07/18/2018 12:00 |            3 |        3 |  3 | Deb2468       | 54321         | 1abc@gmail             | t
  4 | 11/21/2021 09:45 |            4 |        4 |  4 | Milton456     | mPassword345  | Flexbox@studygroup.com | t
  5 | 02/13/2021 14:00 |            5 |        5 |  5 | Ruben4321     | yupYup2022    | codepro@mentor.com     | t
  6 | 03/02/2017 09:30 |            6 |        6 |  6 | Olaver_123    | mepass100     | HTMLman@meetup.com     | f
  7 | 04/22/2016 14:00 |            7 |        7 |  7 | Dab2468       | 543a210       | ethereum@gmail.edu     | f
  8 | 05/19/2016 18:00 |            8 |        8 |  8 | Malton456     | drowssaP      | CSSlearner@study.com   | f
  9 | 06/25/2014 20:15 |            9 |        9 |  9 | coffee7Shop   | cupOcoffee1   | beans@coffee.com       | t
 10 | 01/11/2022 09:00 |           10 |       10 | 10 | coderHero     | codecode4     | cody@coding.com        | t
(10 rows)
*/

// get all favorites for all resources
// const getAllFavoritesForResources = async (users_id) => {
//     try {
//         const allFavorites = await db.any(
//             `SELECT *
//             FROM favorites
//             JOIN resources
//               ON favorites.resources_id = 
//             resources.id;
//             `,
//             users_id
//         );
//         return allFavorites;
//     } catch (error) {
//         return error;
//     }
// };

/*
    ^^^
    `getAllFavoritesForResources`
    Combines `Favorites` table with `Resources` table
    (use full screen mode to see all columns better)

 id |  favorited_date  | resources_id | users_id | id |  subject   |       description       |  type   |              url
               | articles_id | is_favorite | users_id 
----+------------------+--------------+----------+----+------------+-------------------------+---------+--------------------------------+-------------+-------------+----------
  1 | 10/22/2017 10:00 |            1 |        1 |  1 | Bitcoin    | Bitcoin 101             | article | www.Bitcoin101.com             | 1223        | t           |        1
  2 | 09/24/2019 10:15 |            2 |        2 |  2 | Ethereum   | ETH for Beginners       | article | www.ETH-for-Beginners.com      | 54321       | t           |        2
  3 | 07/18/2018 12:00 |            3 |        3 |  3 | Blockchain | Blockchain Fundamentals | article | www.Blockchain101.com          | 22454       | t           |        1
  4 | 11/21/2021 09:45 |            4 |        4 |  4 | Solana     | Solana 101              | article | www.Solana101.com              | 1223        | f           |        2
  5 | 02/13/2021 14:00 |            5 |        5 |  5 | Litecoin   | LTE for Intermediate    | article | www.LTE-for-Beginners.com      | 54321       | t           |        3
  6 | 03/02/2017 09:30 |            6 |        6 |  6 | Ethereum   | ETH for Beginners       | article | www.ETH-for-Beginners.com      | 54321       | t           |        2
  7 | 04/22/2016 14:00 |            7 |        7 |  7 | Cardano    | Cardano Fundamentals    | video   | www.Blockchain101.com          | 22454       | f           |        3
  8 | 05/19/2016 18:00 |            8 |        8 |  8 | Bitcoin2   | Bitcoin 101             | article | www.Bitcoin101.com             | 1223        | t           |        2
  9 | 06/25/2014 20:15 |            9 |        9 |  9 | Dogecoin   | Dogecoin for Beginners  | video   | www.Dogecoin-for-Beginners.com | 54321       | t           |        3
 10 | 01/11/2022 09:00 |           10 |       10 | 10 | Uniswap    | Uniswap Fundamentals    | article | www.Blockchain101.com          | 22454       | f           |        1
(10 rows)
*/


// get favorites ID and usernames
// const getFavoritesAndUsername = async (users_id) => {
//     try {
//         const allFavorites = await db.any(
//             `SELECT favorites.id,
//             users.username
//             FROM favorites
//             JOIN users
//               ON favorites.users_id 
//             = users.id;
//             `,
//             users_id
//         );
//         return allFavorites;
//     } catch (error) {
//         return error;
//     }
// };

/*
    ^^^
    `getFavoritesAndUsername`
    Selecting only the `favorites` table `id` column
    And the `users` table `username` column

 id |   username    
----+---------------
  1 | Christina_234
  2 | Oliver_123
  3 | Deb2468
  4 | Milton456
  5 | Ruben4321
  6 | Olaver_123
  7 | Dab2468
  8 | Malton456
  9 | coffee7Shop
 10 | coderHero
(10 rows)
*/

// Select all `favorites` from `resources` table with a type of "video"
// get all favorites for all users
// const getFavoritesResourcesOfVideo = async (users_id) => {
//     try {
//         const allFavorites = await db.any(
//             `SELECT * 
//             FROM favorites 
//             JOIN resources
//               ON favorites.resources_id
//             = resources.id
//             WHERE resources.type = 'video';
//             `,
//             users_id
//         );
//         return allFavorites;
//     } catch (error) {
//         return error;
//     }
// };


/*
    ^^^
    `getFavoritesResourcesOfVideo`
    Combines `Favorites` table with `Resources` table. Where we are getting only the `resources.type` of "video"
    (use full screen mode to see all columns better)

 id |  favorited_date  | resources_id | users_id | id | subject  |      description       | type  |              url               | articles_id | is_favorite | users_id 
----+------------------+--------------+----------+----+----------+------------------------+-------+--------------------------------+-------------+-------------+----------
  7 | 04/22/2016 14:00 |            7 |        7 |  7 | Cardano  | Cardano Fundamentals   | video | www.Blockchain101.com          | 22454       | f           |        3
  9 | 06/25/2014 20:15 |            9 |        9 |  9 | Dogecoin | Dogecoin for Beginners | video | www.Dogecoin-for-Beginners.com | 54321       | t           |        3
(2 rows)
*/


module.exports={
    getFavoritesByUserId,
    createNewFavorite,
    deleteFavorite,


    // getAllFavoritesAndAllUsers,
    // getAllFavoritesForResources,
    // getFavoritesAndUsername,
    // getFavoritesResourcesOfVideo
}


/* 
What we want to do with our app:

See a list of all a `user`s `favorite` `resource`s (GET ALL FAVORITES FOR ONE USER) http://localhost:3333/users/1/favorites

Have `users` be able to `favorite` a `resource` (CREATE FAVORITE FOR ONE USER)
Allow `users` to un-`favorite` a `resource` (DELETE FAVORITE FOR ONE USER)


Be able to show a `user` ALL `favorite` `resources` of the same type (GET ALL *OF SAME TYPE* FOR ONE USER)

-- what we don't need, but could be helpful for understanding our code
See a list of all `favorites` of all `users` (GET ALL `FAVORITES` FOR ALL `USERS`)
*/


// SELECT companies.name AS company_name, companies.id,
// products.id, products.name, products.isbn, 
// products.company_id, products.price
// FROM products
// JOIN companies 
// ON products.company_id =
// companies.id;