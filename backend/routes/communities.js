var express = require("express");
var router = express.Router();
require("dotenv").config();
// Import mysql for node
router.get("/", async function (req, res) {
    /* Getting all the communites */
    try {
        const milks = await Milk.find({});
        res.send(milks);
    } catch (e) {
        res.status(500).send();
    }
});
router.get("/:name", async function (req, res) {
    // Get specific community name
    try {
        const milk = await Milk.findOne(
            { name: req.params.name },
            async (err, data) => {
                if (!data) return;
                return data;
            }
        );
        res.send(milk);
    } catch (e) {
        res.status(500).send();
    }
});

router.post("/", async function (req, res) {
    // Post a new community onto the sql database
    const milk = new Milk(req.body);
    try {
        await milk.save();
        res.status(201).send({ milk });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
