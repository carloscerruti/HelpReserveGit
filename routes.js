var cors = require('cors');
var express = require('express');
var morgan = require('morgan');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'helpreserve'
});

var server = app.listen(4545,function(){
    var host = server.address().address;
    var port = server.address().port;
});

con.connect(function(error){
    if(error)
        console.log(error);
    else    
        console.log("conectou");
});

app.post('/user', function(req, res) {
    const {email, password} = req.body;    
    con.query(`select * from usuario where email = '${email}' and senha = '${password}'`, function(error, rows, fields){                
        if(error) {
            console.log(error); 
            return res.status(400).send(error);           
        }            
        else{
            if(rows.length == 0){
                return res.status(400).send(error);
            }
            console.log(rows);
            return res.send(rows);
        } 
    })
})

app.post('/cad_user', function(req, res) {
    const {nome, telefone, cpf, email, password, genero} = req.body;
    con.query(`select * from usuario where email = '${email}' or cpf = '${cpf}'`, function(error, rows, fields){         
        if (rows.length > 0){            
            return res.status(400).json({
                message: 'Usuário já existente',                
            });
        }
        else {                            
            var post  = {nome, telefone, cpf, email, senha:password, genero, data_nasc: new Date()};
            var query = con.query('INSERT INTO usuario SET ?', post, function (error, results, fields){

                if (error)
                    throw error;

                console.log("Registros criados: " + results.affectedRows);   
                console.log(results); 
                return res.status(200).json({
                    message: 'Usuário Registrado com sucesso!',                
                }) 
            });                                                
        }
    })    
})
