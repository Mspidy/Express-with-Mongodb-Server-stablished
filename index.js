const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const UserRouter = require('./routes/User')


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/user', UserRouter)
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Database Connected Successfully!!");
}).catch(err=>{
    console.log('Could not connected to the database', err);
    process.exit();
});


app.get('/', (req,res)=>{
    try{
        res.json({"message":"Hello Crud Node Express"});
        //res.send("Hello World");
    } catch(error){
        console.log(error)
    }
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})