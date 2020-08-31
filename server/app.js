require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

// Trying the method chaining for the first time...

app
// first, use needed modules for processing requests
.use(express.urlencoded({ extended: true }))
.use(express.json())
// ...and then import needed routes
.use(routes)
// ...and lastly, listen to specified port
.listen(port, () => {
    // voila! The app is up and running.
    console.log(`The app is up and running. Tune into http://localhost:${port} to proceed.`);
})