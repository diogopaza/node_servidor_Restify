const restify = require('restify');
const server = restify.createServer();

function resposta(req, res, next){
    
    res.send( { mensagem:`Hello World, ${req.params.nome}` }) ; 
  

}

function temNome(req, res, next){
    if(req.params.nome){
        next();
    }else{
        res.send("Requisiçao inválida");
    }
}

server.get('/mensagem/:nome', temNome,resposta);


server.get('/', function(req, res){
    res.send( "Hello World restify"  );
})


server.listen(3000, () =>{
    console.log('Servidor Restify rodando na 3000');
})
