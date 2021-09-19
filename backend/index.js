var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
var commRoutes = require("./routes/communities");
// var profileRoutes = require("./routes/profile");
var cors = require("cors");
app.use(cors());
require("./routes/communities");

// Access body request of posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("loaded");
});
app.use("/communities", commRoutes);
app.use("/communities/addcommunity", commRoutes);
app.use("/HealthGroup", commRoutes);
app.use("/SportsGroup", commRoutes);
// app.use("/profile", profileRoutes);

app.listen(3001, function () {
    console.log("App run");
});
// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const port = 3000

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
//   })
//   app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
//   })