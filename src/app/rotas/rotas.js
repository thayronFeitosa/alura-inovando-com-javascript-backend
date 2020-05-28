const db = require('../../config/database');


module.exports = (app) =>{
    app.get('/',function(req, resp){
        resp.send(`
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>Casa do código </h1>
                
                </body>
            </html>`);
    });
    
    app.get('/livros',function(req, resp){
            db.all('SELECT * FROM livros',function(erro, resultado){
                resp.marko(
                    require('./../views/livros/lista/lista.marko'),
                    {
                        livros: resultado
                    }
                );
            });
    });
}
