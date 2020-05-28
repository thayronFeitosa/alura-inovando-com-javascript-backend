const app = require('./src/config/custom-express');


var porta = 3000;
app.listen(porta, function(){
    console.log(`Servidor rodando na porta: ${porta}`);
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