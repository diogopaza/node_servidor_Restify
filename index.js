const restify = require('restify');
const server = restify.createServer();

server.get('/', function(req, res){
    res.send( {mensagem:"Hello World restify" } );
})

server.get('/mensagem/:nome', (req, res)=> {
    
    res.send({ mensagem:`Hello World, ${req.params.nome}` });
})

server.listen(3000, () =>{
    console.log('Servidor Restify rodando na 3000');
})
