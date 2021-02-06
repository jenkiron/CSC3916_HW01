//Importing module for client server for http
var server = require("http").createServer();

//Run server to open port, request:response
server.on("request", (request, response) => {
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request
        .on("end", () => {
            let bodyString = body.concat().toString();
            console.log(bodyString);
            response.end(bodyString);
        })
        .on("error", () => {
            response.statusCode = 400;
            response.end();
        });
    response.on("error", err => {
        console.error(err);
    });
    //response.write("Hello World!");
});

//Server
//process.env.PORT is for Heroku, localhost is default
server.listen(process.env.PORT || 8008, () => {
    console.log("Server listening at 8008");
});

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
