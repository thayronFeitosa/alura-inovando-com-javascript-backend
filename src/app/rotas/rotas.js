module.exports = (app) =>{
    app.get('/',function(req, resp){
        resp.send(`
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>Casa do codigo </h1>
                
                </body>
            </html>`);
    });
    
    app.get('/livros',function(req, resp){
        resp.send(`
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>Listagem de livros</h1>
                
                </body>
            </html>`);
    });
}
