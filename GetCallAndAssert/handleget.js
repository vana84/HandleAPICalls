const https = require("https");
https.get("https://jsonplaceholder.typicode.com/posts/1",function(resp){

console.log(resp.statusCode);
 let data ='';
 resp.on('data', function(chunk){
     data += chunk;
     });
 resp.on('end', function() {
        console.log(JSON.parse(data).userId);
    });

})