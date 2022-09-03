const express = require("express");
const { signupUser, loginUser } = require('../Controllers/userController')
const routes = new express.Router();


routes.post('/signup', signupUser)

routes.post('/login', loginUser)

module.exports = routes;
