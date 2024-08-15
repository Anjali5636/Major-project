const express = require("express");
const router = express.Router();

//Index
router.get("/",(req,res) => {
    res.send("Get for posts");
});

//Show
router.get("/:id",(req,res) =>{
    res.send("get for posts id");
});

//post
router.post("/", (req,res) => {
    res.send("post for posts");
});

//Delete
router.post("/:id",(req,res) => { 
    res.send("post for posts id");
});

module.exports = router;