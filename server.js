const express = require('express');
const app = express();
app.listen(3030, function(){
    console.log('Servidor rodando na porta');
});

app.get('/',function(req, resp){
    resp.send(`
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Casa do codigo </h1>
            
            </body>
        </html>`)
});

app.get('/livros',function(req, resp){
    resp.send(`
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Listagem de liros</h1>
            
            </body>
        </html>`)
});






/*
const http = require('http');

const servidor = http.createServer(function(req, respost){

    let html = '';
    respost.end(`
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>Ola mundo </h1>
            
            </body>
        </html>
        `);

});

servidor.listen(8080);

*/