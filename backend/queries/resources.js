const db = require("../db/dbConfig.js");

const getAllResources = async() => {
    try {
        const allResources = await db.any(
            "SELECT * FROM resources"
        )
        return allResources;
    } catch (error) {
        return error;
    }
};
const getOneResource = async (id) => {
    try {
        const oneResource = await db.one(
            "SELECT * FROM resources WHERE id=$1",
            id
        );
        return oneResource;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllResources,
    getOneResource
}
// Method GET      `users/{id}/resources/`   Returns the details of all resources with an id of {id}.
// Example: http://localhost:3333/users/2/resources
// const getAllResources = async(users_id) => {
//     try {
//         const allResources = await db.any(
//             "SELECT * FROM resources WHERE users_id=$1",
//             users_id
//         )
//         return allResources;
//     } catch (error) {
//         return error;
//     }
// }

// // Method GET      `/users/{id}/resources/{id}`  Return details of one `resource` associated with the `users` with an id of {id}
// // Example: http://localhost:3333/users/1/resources/3
// const getOneResource = async (id) => {
//     try {
//         const oneResource = await db.one(
//             "SELECT * FROM resources WHERE id=$1",
//             id
//         );
//         return oneResource;
//     } catch (error) {
//         return error;
//     }
// };

// // This might be a feature later on - for a user to create a resource
// // http://localhost:3333/users/2/resources/
// const createResource = async(resource) => {
//     try{
//         const newResource = await db.one(
//             "INSERT INTO resources (name, type, category, url, is_favorite, users_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
//             [
//                 resource.name,
//                 resource.type,
//                 resource.category,
//                 resource.url,
//                 resource.is_favorite,
//                 resource.users_id,
//             ]
//         );
//         return newResource;
//     } catch(err){
//         return err;
//     };
// };

// // Should this only update the is_favorite field since they shouldn't update any articles
// // http://localhost:3333/users/2/resources/3
// const updateResource = async (id, resource) => {
//     try {
//         const updatedResource = await db.one(
//             "UPDATE resources SET name=$1, type=$2, category=$3, url=$4, is_favorite=$5, users_id=$6 WHERE id=$7 RETURNING *",
//             [
//                 resource.name,
//                 resource.type,
//                 resource.category,
//                 resource.url,
//                 resource.is_favorite,
//                 resource.users_id,
//                 id
//             ]
//         )
//         return updatedResource;
//     } catch (error) {
//         return error;
//     }
// };

// // Do we need delete resource? Will regular users be able to delete or admin only?
// // // http://localhost:3333/users/2/resources/3
// const deleteResource = async (id) => {
//     try {
//         const deletedResource = await db.one(
//             "DELETE FROM resources WHERE id=$1 RETURNING *",
//             id
//         );
//         return deletedResource;
//     } catch (error) {
//         return error;
//     }
// };

// module.exports={
//     getAllResources,
//     getOneResource,
//     createResource,
//     updateResource,
//     deleteResource
// }