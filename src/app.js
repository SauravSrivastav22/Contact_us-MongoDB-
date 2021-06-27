const express = require('express');
const path =require("path");
require("./db/conn");
const User = require("./models/newone");

const app = express();
const port = process.env.PORT || 4000;

//setting the path
const staticpath = path.join(__dirname, "../public");

//middleware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine", "hbs");

//routing
//app.get( path, callback)
app.get("/",(req,res) => {
    res.render("index");
})

app.post("/contact", async(req, res) => {
    try {
        //res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(404).send(error);
        
    }
})

// server console
app.listen(port, () => {
console.log(`Server is running at port no ${port}`);
})
