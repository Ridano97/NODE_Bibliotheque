// Vient de la dependance
const {Model, Data, DataTypes} = require ('sequelize');
//vient de notre fichier Sequelize.js
const sequelize = require ('../Config/Sequelize');
const Emprunteur = require('./Emprunteur');
const Livre = require('./Livre');

class Emprunts extends Model {

}


Emprunts.init ({

    Emp_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Emp_DateDebut : {
        type : DataTypes.DATE,
        allowNull : false
    },

    Emp_DateFin : {
        type : DataTypes.DATE,
        allowNull : false
    },

    Fk_Emprunteur : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "Emprunteur",
            key : "Em_ID"
        }

    },

    Fk_Livre : {
        type : DataTypes.INTEGER,
        allowNull : false, 
        references : {
            model : "Livre",
            key : "Li_ID"
        }
    }


},{
    sequelize,
    modelName : 'Emprunts',
    tableName : 'Emprunts',
    timestamps : false 



}) 


Emprunts.belongsTo(Livre, {as : "livre", foreignKey :"Fk_Livre" });



module.exports = Emprunts ; 