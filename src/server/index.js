// Setup empty JS object to act as endpoint for all routes
//projectData = {};

// for using environmental variables and hide api key
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch');

// //Set up the variables to call the API 
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY
const lang = 'en';

// ${baseURL}?key=${apiKey}&lang=${lang}&txt=${input}

const app = express();

app.use(express.static('dist'));
app.use(cors());

/* Middleware*/
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());;

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//add post request 
app.post("/add", async (req, res) => {
    const input = req.body.formText;
    const fetchURL = (`${baseURL}?key=${apiKey}&lang=${lang}&txt=${input}`)
    console.log(fetchURL);
    const apiData = await fetch(fetchURL, {
        method: 'POST'
    });

    try {
        const data = await apiData.json();
        console.log('apiData ++++>', data)
        res.send(data)
        console.log("funktioniert!");
    } catch (err) {
        console.log("error", err);
    }
});