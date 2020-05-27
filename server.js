const http = require('http');

const servidor = http.createServer(function(req, respost){
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

