const db = require("../db/dbConfig.js");

// get all favorites for all users
const getAllFavoritesForUsers = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT * 
            FROM favorites 
            JOIN users 
              ON favorites.users_id 
            = users.id
            `,
            users_id
        );
        return allFavorites;
    } catch (error) {
        return error;
    }
};

/* 
    ^^^
    `getAllFavoritesForUsers`
    Combines `Favorites` table with `Users` table.
    
    Selecting all columns from `favorites` table.
    Joining to combine information from`favorites` with the `users` table.
    On the favorites table, want to match the `favorites.user_id` column with the `user` table's `id` column.

 id | favorited_date | resources_id | users_id | id |   username    |   password    |     contact_email      | active 
----+----------------+--------------+----------+----+---------------+---------------+------------------------+--------
  1 | 2017-10-22     |            1 |        1 |  1 | Christina_234 | 12345         | 123@gmail.org          | t
  2 | 2019-09-24     |            2 |        2 |  2 | Oliver_123    | mypassword123 | HTMLStudy@meetup.com   | t
  3 | 2018-07-18     |            3 |        3 |  3 | Deb2468       | 54321         | 1abc@gmail             | t
  4 | 2021-11-21     |            4 |        4 |  4 | Milton456     | mPassword345  | Flexbox@studygroup.com | t
  5 | 2021-02-13     |            5 |        5 |  5 | Ruben4321     | yupYup2022    | codepro@mentor.com     | t
  6 | 2017-03-02     |            6 |        6 |  6 | Olaver_123    | mepass100     | HTMLman@meetup.com     | f
  7 | 2016-04-22     |            7 |        7 |  7 | Dab2468       | 543a210       | ethereum@gmail.edu     | f
  8 | 2016-05-19     |            8 |        8 |  8 | Malton456     | drowssaP      | CSSlearner@study.com   | f
  9 | 2014-06-25     |            9 |        9 |  9 | coffee7Shop   | cupOcoffee1   | beans@coffee.com       | t
 10 | 2022-01-20     |           10 |       10 | 10 | coderHero     | codecode4     | cody@coding.com        | t
(10 rows)
*/

// get all favorites for all resources
const getAllFavoritesForResources = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT *
            FROM favorites
            JOIN resources
              ON favorites.resources_id = 
            resources.id;
            `,
            users_id
        );
        return allFavorites;
    } catch (error) {
        return error;
    }
};

/*
    ^^^
    `getAllFavoritesForResources`
    Combines `Favorites` table with `Resources` table
    (use full screen mode to see all columns better)

 id | favorited_date | resources_id | users_id | id |  subject   |       description       |  type   |              url               | articles_id | is_favorite | users_id 
----+----------------+--------------+----------+----+------------+-------------------------+---------+--------------------------------+-------------+-------------+----------
  1 | 2017-10-22     |            1 |        1 |  1 | Bitcoin    | Bitcoin 101             | article | www.Bitcoin101.com             | 1223        | t           |        1
  2 | 2019-09-24     |            2 |        2 |  2 | Ethereum   | ETH for Beginners       | article | www.ETH-for-Beginners.com      | 54321       | t           |        2
  3 | 2018-07-18     |            3 |        3 |  3 | Blockchain | Blockchain Fundamentals | article | www.Blockchain101.com          | 22454       | t           |        1
  4 | 2021-11-21     |            4 |        4 |  4 | Solana     | Solana 101              | article | www.Solana101.com              | 1223        | f           |        2
  5 | 2021-02-13     |            5 |        5 |  5 | Litecoin   | LTE for Intermediate    | article | www.LTE-for-Beginners.com      | 54321       | t           |        3
  6 | 2017-03-02     |            6 |        6 |  6 | Ethereum   | ETH for Beginners       | article | www.ETH-for-Beginners.com      | 54321       | t           |        2
  7 | 2016-04-22     |            7 |        7 |  7 | Cardano    | Cardano Fundamentals    | video   | www.Blockchain101.com          | 22454       | f           |        3
  8 | 2016-05-19     |            8 |        8 |  8 | Bitcoin2   | Bitcoin 101             | article | www.Bitcoin101.com             | 1223        | t           |        2
  9 | 2014-06-25     |            9 |        9 |  9 | Dogecoin   | Dogecoin for Beginners  | video   | www.Dogecoin-for-Beginners.com | 54321       | t           |        3
 10 | 2022-01-20     |           10 |       10 | 10 | Uniswap    | Uniswap Fundamentals    | article | www.Blockchain101.com          | 22454       | f           |        1
(10 rows)
*/


// get all favorites for all users
const getFavoritesAndUsername = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT favorites.id,
            users.username
            FROM favorites
            JOIN users
              ON favorites.users_id 
            = users.id
            `,
            users_id
        );
        return allFavorites;
    } catch (error) {
        return error;
    }
};

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
const getFavoritesResourcesOfVideo = async (users_id) => {
    try {
        const allFavorites = await db.any(
            `SELECT * 
            FROM favorites 
            JOIN resources
              ON favorites.resources_id
            = resources.id
            WHERE resources.type = 'video'
            `,
            users_id
        );
        return allFavorites;
    } catch (error) {
        return error;
    }
};


/*
    ^^^
    `getFavoritesResourcesOfVideo`
    Combines `Favorites` table with `Resources` table. Where we are getting only the `resources.type` of "video"
    (use full screen mode to see all columns better)

 id | favorited_date | resources_id | users_id | id | subject  |      description       | type  |              url               | articles_id | is_favorite | users_id 
----+----------------+--------------+----------+----+----------+------------------------+-------+--------------------------------+-------------+-------------+----------
  7 | 2016-04-22     |            7 |        7 |  7 | Cardano  | Cardano Fundamentals   | video | www.Blockchain101.com          | 22454       | f           |        3
  9 | 2014-06-25     |            9 |        9 |  9 | Dogecoin | Dogecoin for Beginners | video | www.Dogecoin-for-Beginners.com | 54321       | t           |        3
(2 rows)
*/


module.exports={
    getAllFavoritesForUsers,
    getAllFavoritesForResources,
    getFavoritesAndUsername,
    getFavoritesResourcesOfVideo
}
