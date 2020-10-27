const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const app = express();
const http = require("http");
const client = require('./client');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
//Create HTTP server and listen on port 3000 for requests

// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('am i working?');
// });


app.get('/', (req, res) =>{
    client
        .query("SELECT * FROM countries")
        .then((data) => res.send(data.rows))
       
        .catch((error)=> res.sendStatus(500));

app.use(cors())
app.use(express.static('assets'));
//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port,  () => {
  console.log(`the server is working http://${hostname}:${port}/`)
})



// Init Country Router
const mockCountryRouter = require('./mockCountry.js')
app.use('/mockCountry',mockCountryRouter)
// Init Recipes Router
const mockRecipesRouter = require('./mockRecipes.js')
app.use('/mockRecipes',mockRecipesRouter)




app.use(cors())
//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port,  () => {
  console.log(`the server is working http://${hostname}:${port}/`)
})
