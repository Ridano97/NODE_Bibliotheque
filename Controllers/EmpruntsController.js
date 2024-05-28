const Emprunts = require("../Models/Emprunts");
const EmpruntsService = require("../Services/EmpruntsService");


class EmpruntsController {

        async getAllEmprunts(request, result){
        try {
            const emprunts = await EmpruntsService.getAllEmprunts();
            result.json(emprunts);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la reception des emprunts"})
        }
    }

    async getEmpruntsByID(request, result){
        try {
            const emprunts = await EmpruntsService.getEmpruntsByID(request.params.id);
            result.json(emprunts);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de l'emprunts"});
        }
    }

    async addEmprunts(request, result){
        try {
            const emprunts = await Emprunts.addEmprunts(request.body);
            result.json(emprunts);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout de l'emprunt"})
        }
    }

    async removeEmprunts(request, result){
        try {
            Emprunts.removeEmprunts(request.params.id);
            result.json({message : "L'emprunt a bien été supprimé"})
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la suppression de l'emprunt"})
        }
    }

    async updateEmprunts(request, result){
        try {
            const emprunt = await EmpruntsService.updateEmprunts(request.params.id, request.body);
            result.json(emprunt)
            } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la modification de l'emprunt"})
        }
    }
}


module.exports = new EmpruntsController(); 