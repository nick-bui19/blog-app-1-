const express = require("express");
const router = express.Router;

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/categories", (req, res) => {
    res.send("Hello World");
});

//missing post, get, delete

module.exports = router;