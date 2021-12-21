const http = require('http');

const server = http.createServer(function(request, response){
    console.log(request.url);

   console.log(request.method === 'POST' && request.url )
});

server.listen(4000, function(){
    (console.log('Server has started to run')

    );
});




