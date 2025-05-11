const express = require("express")
const app = express();

app.get("/", (req, res) => { res.send("hi there") })

app.get("/home", (req, res) => { console.log(req); return res.send("hot there") })


app.listen("3000", () => console.log("server started"))