/* const Sequelize = require("sequelize");
const connection = require("./database");

const comidas = connection.define('comidas',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    proteina:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hidratosdeCarbono:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gordura:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    calorias:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


comidas.sync({force: false}).then(() => {});

module.exports = comidas;  */