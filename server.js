const app = require('./src/config/custom-express');


var porta = 3039;
app.listen(porta, function(){
    console.log(`Servidor rodando na porta: ${porta}`);
});




