/*
foi setado no "package.json", na tag "scripts", um atributo "start" que referencia a string "nodemon index.js"
para rodar o sistema, usamos o comando 'npm start", 
que por sua vez usara a linha referenciada para rodar como se fosse vue ou angular
*/

//importa dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const routes = require('./config/routes');

//inicia servidor. cria app
const app = express();

//adicionando o projeto para o "morgan" para que tenha o log de execução. como angular ou vuejs
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
//tipo de dado que vamos receber
app.use(express.json())
app.use(cors())
app.use(routes)

let port = 3000;

//liga o servidor
app.listen(port, () => {
    console.log('started at port ' + port);
});