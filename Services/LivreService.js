const Livre = require("../Models/Livre");


class LivreService {

    async getAllLivre() {
        return await Livre.findAll({include : "auteur"});
    }

    async getAllLivreByID(livreID){
        return await Livre.findByPk(livreID);

    }

    async addLivre(livre){
        return await Livre.create(livre);
    }

    async removeLivre(livreID){
        return await Livre.destroy({
            where : {Li_ID : livreID}
        })
    }

    async updateLivre(livreID, livre){
        return await Livre.update(livre , {
            where : {Li_ID : livreID},
            individualHooks : true 
        })
    }
}


module.exports = new LivreService() ; 