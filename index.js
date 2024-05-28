const express = require('express');
const app = express();
const emprunteurRouter = require ('./Routes/EmprunteurRoute');
const empruntsRouter = require ('./Routes/EmpruntsRoute');
const auteurRouter = require ('./Routes/AuteurRoute')
const livreRouter = require ('./Routes/LivreRoute')
const authenticateRoute = require('./Routes/AuthenticateRoute');
const AuthenticateController = require('./Controllers/AuthenticateController');



app.use(express.json());

app.use('/auth' , authenticateRoute)
app.use('/emprunteurs', AuthenticateController.authenticateToken  , emprunteurRouter)
app.use('/emprunts' , AuthenticateController.authenticateToken   , empruntsRouter)
app.use('/auteurs', AuthenticateController.authenticateToken  , auteurRouter)
app.use('/livres' , AuthenticateController.authenticateToken  , livreRouter )

module.exports = app ;