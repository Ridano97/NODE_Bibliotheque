const LivreService = require("../Services/LivreService");

class LivreController {

    async getAllLivre(request, result) {
        try {
            const livres = await LivreService.getAllLivre();
            result.json(livres)
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des livres"})
        }
    }

    async getAllLivreByID(request, result){
        try {
            const livre =  await LivreService.getAllLivreByID(request.params.id);
            result.json(livre);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération du livre"})
        }
    }

    async addLivre(request, result) {
        try {
            const livre = await LivreService.addLivre(request.body);
            result.json(livre);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenu lors de l'ajout d'un livre"})
        }
    }

    async removeLivre(request, result){
        try {
            LivreService.removeLivre(request.params.id)
            result.json({message : "Le livre a bien été supprimé"})
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression du livre"})
        }
    }

    async updateLivre(request, result){
        try {
            const livre = await LivreService.updateLivre(request.params.id, request.body);
            result.json(livre);
        } catch (error) {
            result.json(500);
            result.json({error : "Une erreur est survenue lors de la modification du livre"})
        }
    }
    
}


module.exports = new LivreController();