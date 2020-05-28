class LivroDao{
    constructor(db){
        this._db = db;
    }

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
            INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) VALUES (?, ?, ?)
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao
            ], 
        )        
        });
    } 
    
    lista(){
        return new Promise((resolve, reject)=>{
        this._db.all(
            'SELECT * FROM livros',
                (erro, resultado)=> {
                    if (erro) return reject('Não foi possível listar os livros!');
                    return resolve(resultado);
                }
            
        )
        });

    }
}

module.exports = LivroDao;