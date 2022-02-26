const http = require('http');
const fs = require('fs').promises;
const hostname = '127.0.0.1';
const port = 5000;

//******LOADS HTML PAGE EVERY TIME IT RECIEVES AN HTTP REQUEST*********//

// const server = http.createServer((req, res) => {
//     fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(contents);
//     })
//     .catch(err => {
//         res.writeHead(500);
//         res.end(err);
//         return;
//     });
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//******LOADS HTML PAGE ONCE AT BEGINNING*********//

let indexFile; // WHEN PROGRAM IS RUN THIS WILL HOLD HTML FILE'S CONTENTS
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(indexFile); // REQUEST RETURNS DATA LOADED AT STARTUP
});

//WHEN FILE IS READ IT SAVES CONTENTS IN {INDEXFILE} VARIABLE
//THE KEY IS THAT THE FILE IS LOADED BEFORE THE SERVER IS RUN
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, hostname, () => {
            console.log(`Server is running on http://${hostname}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);//EXIT WITHOUT STARTING SERVER
    });



