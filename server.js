'use strict'
const express = require('express');
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const path = require('path')
const port = 9001
const root = path.join(__dirname, '/public')
app.use(express.static(root))

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})