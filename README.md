 <h1>alura-inovando-com-javascript-backend</h1>

   Foi iniciado o estudo em node com a finalidade de usar api com padrão rast. Foram usadas algumas ferramentas dentre elas o <a href="https://markojs.com/docs/getting-started/">Marko</a>, <a href="https://nodemon.io/">nodenom</a>,
    <a href="https://www.npmjs.com/package/express">express</a> e outros que vou adicionar.
    <p>
        Os comandos iniciais usados foram:
        <ul>
            <li>npm install express@4.16.4</li>
            <li>npm install nodemon@1.18.4 --save-dev --save-exact</li>
            <li>sudo npm install -g nodemon@1.18.4 --save-exact</li>
            <li>npm install marko@4.13.4-1 --save-exact</li>
            <li>npm install -i sqlite3</li>
     </ul>
    </p>
    <p>
    <strong>Na hora de usar o banco de dados sqlite3 para ler dinamicamente os dados e mostrar para o usuário ocorria erro, aonde não tinha as dependências do sqlite3 no projeto e por algum motivo apresentou erro na hora de startar o servidor, alegando em erro ENOSPC que foi colucionado lendo o artigo do <a href="https://stackoverflow.com/questions/34662574/node-js-getting-error-nodemon-internal-watch-failed-watch-enospc">stackoverflow</a></strong> <br><br> <strong>Abaixo tem os dois comandos usados para resolver os erros</strong>
   </p>
   <ul> 
    <li>npm install -i sqlite3</li>
    <li>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -pgit</li>
   </ul>

</body>

</html>
