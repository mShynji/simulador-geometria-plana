// dependências necessárias
const express = require('express');
const app = express();

// rodando o server na porta 8080 ou na porta padrão do sistema
const port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log(`rodando na porta ${port}`);
});

// caminhos
app.use('/public', express.static(__dirname + '/public'));

// root
app.get('/', function(req, resp) {
	resp.sendFile(__dirname + '/views/index.html');
});
