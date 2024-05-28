const Emprunteur = require("../Models/Emprunteur");
const jwt = require("jsonwebtoken");
const config = require("../Config/config.json")

class AuthenticateService {
    async register(emprunteurData){
        const emprunteur = await Emprunteur.create(emprunteurData);
        return this.generateToken(emprunteur);
    }

    async login (email, password){
        const emprunteur = await Emprunteur.findOne({ where : { Em_Email : email}})
        if(!emprunteur || !await Emprunteur.validatePassword(password)) {
            throw new Error ("Email ou password n'est pas correct")
        }
        return this.generateToken(emprunteur);
    }

    generateToken(emprunteur){
        const payload = {
            id: emprunteur.Em_ID,
            email: emprunteur.Em_Email
        }
        return jwt.sign(payload,config.SECRET,{expiresIn:"2h"})
    }
}



module.exports = new AuthenticateService() ;