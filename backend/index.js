var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
var commRoutes = require("./routes/communities");
// var profileRoutes = require("./routes/profile");
var cors = require("cors");
app.use(cors());
require("./db/mysql");

// Access body request of posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("loaded");
});
app.use("/communities", commRoutes);
// app.use("/profile", profileRoutes);

app.listen(3001, function () {
    console.log("App run");
});
