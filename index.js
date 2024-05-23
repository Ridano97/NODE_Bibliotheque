const express = require('express');
const app = express();
const emprunteurRouter = require ('./Routes/EmprunteurRoute');
const empruntsRouter = require ('./Routes/EmpruntsRoute');
const auteurRouter = require ('./Routes/AuteurRoute')
const livreRouter = require ('./Routes/LivreRoute')



app.use(express.json());

app.use('/emprunteurs' , emprunteurRouter)
app.use('/emprunts' , empruntsRouter)
app.use('/auteurs', auteurRouter)
app.use('/livres' , livreRouter )

module.exports = app ;