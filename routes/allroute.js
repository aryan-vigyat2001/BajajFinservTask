const express = require('express');
const router=express.Router()
const getController=require("../controllers/getController")
const postController=require("../controllers/postController")
router.get("/",getController.getController);
router.post("/",postController.postController)

module.exports=router