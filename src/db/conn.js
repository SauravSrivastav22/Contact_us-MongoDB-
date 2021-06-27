const mongoose = require('mongoose');

//creating a database
mongoose.connect("mongodb://localhost:27017/newone", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection sucessfully");
}).catch((error) => {
    console.log(error);
})