// const http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);


// const fs = require('fs');

// fs.readFile('demofile.txt', 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });

// JavaScript Stack
// MERN Stack
// MEAN Stack
// MEVN Stack
// PERN Stack
// PEAN Stack

// PHP Stack
// LAMP Stack

// JSON Example

// const myJson = {
//     "name": "John",
// }

// console.log(myJson.name);


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json

// REST methods
// app.get()
// app.post()
// app.delete()
// app.patch()
// app.put()

// const myJsonTwo = {
//     firstName: "vivek",
//     middleName: "anand",
//     lastName: "sharma"
// }

app.get('/', function (req, res) {
    res.send('Server is healthy');
})

app.post("/", function (req, res) {
    const body = req.body;
    if (body.username === "vivek" && body.password === "12345") {
        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: {
                id: "123"
            }
        })
    }
    else {
        res.status(401).json({
            success: false,
            message: "Login Failed"
        })
    }
})

app.get("/detail", (req, res) => {
    const query = req.query;
    if (query.id === "123") {
        res.status(200).json({
            success: true,
            message: "This is user's details",
            data: [{
                "name": "vivek",
                "posts": ["hello", "world", "post", "blah", "blah"],
                "age": "25"
            }]
        })
    }
    else {
        res.status(404).json({
            success: false,
            message: "Data not found"
        })
    }
})

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
})