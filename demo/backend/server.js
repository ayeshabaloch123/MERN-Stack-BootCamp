const express = require("express");

const app = express();

app.get("/a", (req, res) => {
    res.send("Hello world from get");
});

app.post("/",(req,res) => {
    res.send("Hello world from post");
})

app.listen(4000, (err) => {
    if (err) console.log("Error :", err);
    else console.log("Server is running on port 4000");
});