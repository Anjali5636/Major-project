const express = require("express");
const router = express.Router();

//Index
router.get("/",(req,res) => {
    res.send("Get for users");
});

//Show
router.get("/:id",(req,res) =>{
    res.send("get for users id");
});

//post
router.post("/", (req,res) => {
    res.send("post for users");
});

//Delete
router.post("/:id",(req,res) => { 
    res.send("post for users id");
});

module.exports = router;