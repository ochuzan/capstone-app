const express = require("express");
const resources = express.Router({mergeParams: true});
const { getAllResources, getOneResource, updateResource, deleteResource } = "../queries/resources.js"






module.exports= events