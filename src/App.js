
require('dotenv').config();

const cors = require('cors');

const express = require('express');

const usersRouter = require('./routes/users');

const path = require('path');

module.exports = () => {
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    // associate router with our app

    app.use(usersRouter);
  
    app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

    return app;
};
