const express = require("express");
const app = express();

let port = 8055;

app.listen(port, () => {
    console.log(`App is listening on Port - ${port}`);
});

app.get("/", (req, res) => {
    res.send("You are on root path");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Welcome to @ ${username}`);
});

app.get("/mango", (req, res) => {
    res.send("You are on mango path");
});

app.get("/{0,}", (req, res) => {
    res.send("This path does not exist");
});

app.post("/", (req, res) => {
    res.send("You sent a Post request");
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`Your search result is : ${q}`);
});

// app.use((req, res) => {
//     console.log("Request Received");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li></ul>";
//     res.send(code);
// });