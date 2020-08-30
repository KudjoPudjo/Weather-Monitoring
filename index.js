const express = require("express");
const app = express()
const request = require("request");
const weather =require("openweather-apis");
const path = require("path")
const fs = require("fs");
const cors = require("cors");



app.use(express.json())
app.use(cors())
app.use(express.static("./build"))

app.post("/getWeather",(req,res)=>{
    console.log(req.body.city);
    weather.setLang("ru")
    weather.setCity(req.body.city);
    weather.setUnits('metric');
    weather.setAPPID("5479d9515fc1e89817fd9ed49155b9ab");
    weather.getTemperature(function(err, temp){
        console.log(temp);
        res.json({temp:temp})
    });
})
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"build","index.html"))
})

app.listen(4000,()=>{
    console.log("Server start tunning in port 3000");
})

