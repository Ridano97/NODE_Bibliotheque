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
}


module.exports = new EmpruntsController(); 