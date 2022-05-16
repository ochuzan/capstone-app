const db = require("../db/dbConfig.js");

const getAllResources = async (users_id) => {
    try {
        const allResources = await db.any(
            "SELECT * FROM resources WHERE users_id=$1",
            users_id
        );
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

// Should this only update the is_favorite field since they shouldn't update any articles
const updateResource = async (id, resource) => {
    try {
        const updatedResource = await db.one(
            "UPDATE resources SET subject=$1, description=$2, type=$3, url=$4, articles_id=$5, is_favorite=$6 WHERE id=$7 RETURNING *",
            [
                resource.subject,
                resource.description,
                resource.type,
                resource.url,
                resource.articles_id,
                resource.is_favorite,
                id
            ]
        )
        return updatedResource;
    } catch (error) {
        return error;
    }
};

// Do we need delete resource? Will regular users be able to delete or admin only?
const deleteResource = async (id) => {
    try {
        const deletedResource = await db.one(
            "DELETE FROM resources WHERE id=$1 RETURNING *",
            id
        );
        return deletedResource;
    } catch (error) {
        return error;
    }
};

module.exports={
    getAllResources,
    getOneResource,
    updateResource,
    deleteResource
}