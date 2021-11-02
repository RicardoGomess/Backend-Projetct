import express from 'express';
import bodyParser from 'body-parser';

import loginUsersRoutes from './routes/loginUsers.js';

const app = express(); 
/* const connection = require("./database/database");
const comidas = require("./database/comidas"); */

// Instrução para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(bodyParser.json()); 
/* app.use(express.static('public')); */
app.use('/loginUsers', loginUsersRoutes)


//Routes
app.get("/",function(req,res){
    res.render("index");
});

app.get("/diario",function(req,res){
    res.render("diario");
});

app.get("/addcomida",function(req,res){
    res.render("addcomida");
});

app.post("/login",function(req,res){
    res.render("login");
});


/* app.post("/addcomida",(req, res) => {
    var nome = req.body.nome;
    var proteina = req.body.proteina;
    var hidratosdeCarbono = req.body.hidratosdeCarbono;
    var calorias = req.body.calorias;


    comidas.create({
        nomes:nome,
        proteina:proteina,
        hidratosdeCarbono:hidratosdeCarbono,
        calorias:calorias,
    }).then(() => {
        res.redirect("/");
    });

}); */

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
}) 