const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose')


const Model = require('./models/diemdanhModel')

const cors = require('cors');
const bodyParser = require('body-parser')

const {postData} = require('./controllers/postData')

app.use(cors());
app.use(bodyParser.json());

const connectDb = async () => {
    try{
        const connect = await mongoose.connect("mongodb+srv://hai:123@cluster0.juqb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
connectDb();





let danhsachdiemdanh = [];

app.get('/getData',function(req,res){

    res.send(danhsachdiemdanh)
})

//middleware
app.use((req, res, next) => {
    req.danhsachdiemdanh = danhsachdiemdanh;
    next();
});

app.use('/', require("./routes/diemdanhRoute"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





















