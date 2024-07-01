// app.js

// Requiring express for routing
const express = require('express')

// Creating app from express
const app = express()

// Requiring in-built file system
const fs = require('fs')

// GET request which HTML video tag sends
app.get('/stream',function(req,res){

    // The path of the video from local file system
    const videoPath = 'funny.mp4'

    // 200 is OK status code and type of file is mp4
    res.writeHead(200, {'Content-Type': 'video/mp4'})

    // Creating readStream for the HTML video tag
    fs.createReadStream(videoPath).pipe(res)
})

// GET request to the root of the app
app.get('/',function(req,res){

    // Sending index.html file for GET request
    // to the root of the app
    res.sendFile(__dirname+'/index.html')
})

// Creating server at port 3000
app.listen(3000,function(req,res){
    console.log('Server started at 3000')
})