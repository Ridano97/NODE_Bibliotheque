const Livre = require("../Models/Livre");


class LivreService {

    async getAllLivre() {
        return await Livre.findAll({include : "auteur"});
    }

    async getAllLivreByID(livreID){
        return await Livre.findByPk(livreID)

    }

    async addLivre (livre){
        return await Livre.create(livre);
    }
}


module.exports = new LivreService() ; 