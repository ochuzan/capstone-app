const express = require("express");
const resources = express.Router({mergeParams: true});
const { getAllResources, 
    getOneResource, 
    createResource, 
    updateResource, 
    deleteResource 
} = require("../queries/resources.js");

// Method GET      `users/{id}/resources/`   Returns the details of all resources with an id of {id}.
// Example: http://localhost:3333/users/2/resources
resources.get('/', async (req, res)=>{
    const { usersId } = req.params;
    try {
        const allResources = await getAllResources(usersId);
<<<<<<< HEAD
        if(allResources[0]){
=======
        if (allResources[0]){
>>>>>>> 87b898b3e5076b3644a139465e2aeacd7eda49d5
            res.status(200).json(allResources);
        } else {
            res.status(500).json({ error: "no resources found." });
        }
    } catch (error){
        console.log(error);
    }
});


// Method GET      `/users/{id}/resources/{id}`  Return details of one `resource` associated with the `users` with an id of {id}
// Example: http://localhost:3333/users/1/resources/3
resources.get("/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const getResource = await getOneResource(id);
        if (getResource.id){
            res.status(200).json(getResource);
        } else {
            res.status(500).json({ error: "resource not found!" });
        }
    } catch (error){
        console.log(error);
    }
})

// This might be a feature later on - for a user to post a resource
// http://localhost:3333/users/2/resources/
resources.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdResource = await createResource(body);
        if(createdResource.id){
            res.status(200).json(createdResource);
        } else {
            res.status(422).json("Error: Resource creation error");
        }
    } catch(err){
        console.log(err);
    }
});

// Update resource
// http://localhost:3333/users/2/resources/3
resources.put("/:id", async (req, res)=>{
    const { id } = req.params;
    const { body } = req;
    try {
        const updateOneResource = await updateResource(id, body);
        if (updateOneResource.id){
            res.status(200).json(updateOneResource);
        } else {
            res.status(404).json({ error: "resource not found" });
        }
    } catch (error){
        console.log(error);
    }
})

// Delete resource
// http://localhost:3333/users/2/resources/3
resources.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    const deletedResource = await deleteResource(id);
    if (deletedResource.id){
        res.status(200).json(deletedResource);
    } else {
        res.status(404).json({ error: "resource to delete not found" }); 
    }
})

module.exports = resources;