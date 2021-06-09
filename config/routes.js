const express = require('express');
const routes = express.Router();

//como se fosse um db
let db = [
    { "1": { Nome: "Cliente1", Idade: "20" } },
    { "2": { Nome: "Cliente2", Idade: "30" } },
    { "3": { Nome: "Cliente3", Idade: "40" } }
]

//recebe parametros [0] = url que irá receber a rota e [1] = padrão de requisição
routes.get('/', (req, res) => {
    //o express abstrai o preenchimento do "req" e do "res"
    return res.json(db)
});

routes.post('/add', (req, res) => {
    //vai conter todos os dados que precisamos
    const body = req.body;

    if (!body)
        return res.status(400).end();
    
    //adiciona ao array
    db.push(body);
    return res.json(body);
});

routes.delete('/:nome', (req, res) => {
    //pega o id do que será deletado
    const id = req.params.id;

    let newDB = db.filter(item => {
        if (item[id])
            return item;
    });
});

//exporta o proprio modulo do express
module.exports = routes;


